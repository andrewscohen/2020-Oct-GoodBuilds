//REQUIREMENTS
const express = require('express')
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const { loginUser, logoutUser } = require('../auth')


//SETUP
const db = require('../db/models')
const { csrfProtection, asyncHandler } = require('./utils')

const router = express.Router()
//VALIDATORS
const projectValidators = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Name')
        .isLength({ max: 50 })
        .withMessage('Name must not be more than 50 characters long'),
    check('brand')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Brand')
        .isLength({ max: 50 })
        .withMessage('Brand must not be more than 50 characters long'),
    check('furnitureType')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Furniture Type')
        .isLength({ max: 50 })
        .withMessage('Furniture Type must not be more than 50 characters long'),
    check('serialNumber')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Serial Number')
        .isLength({ max: 100 })
        .withMessage('Serial Number must not be more than 100 characters long'),
];
//ROUTES
router.post('/projects', csrfProtection, projectValidators,
    asyncHandler(async (req, res) => {
        const {
            name,
            brand,
            furnitureType,
            serialNumber,
            description,
        } = req.body;

        const project = db.Project.build({
            name,
            brand,
            furnitureType,
            serialNumber,
            description,
        });

        const validatorErrors = validationResult(req);

        if (validatorErrors.isEmpty()) {
            await project.save();
            res.redirect('/');
        } else {
            const errors = validatorErrors.array().map((error) => error.msg);
            res.render('project-add', {
                title: 'Add a Project',
                project,
                errors,
                csrfToken: req.csrfToken(),
            });
        }
    }));

router.get('/project/edit/:id(\\d+)', csrfProtection,
    asyncHandler(async (req, res) => {
        const projectId = parseInt(req.params.id, 10);
        const project = await db.Project.findByPk(projectId);
        res.render('project-display', {
            title: 'Edit Project',
            project,
            csrfToken: req.csrfToken(),
        });
    }));

router.put('/project/edit/:id(\\d+)', csrfProtection, projectValidators,
    asyncHandler(async (req, res) => {
        const projectId = parseInt(req.params.id, 10);
        const projectToUpdate = await db.Project.findByPk(projectId);

        const {
            name,
            brand,
            furnitureType,
            serialNumber,
            description,
        } = req.body;

        const project = {
            name,
            brand,
            furnitureType,
            serialNumber,
            description,
        };

        const validatorErrors = validationResult(req);

        if (validatorErrors.isEmpty()) {
            await projectToUpdate.update(project);
            res.redirect(`/project/${projectId}`);
        } else {
            const errors = validatorErrors.array().map((error) => error.msg);
            res.render('project-display', {
                title: 'Edit Project',
                project: { ...project, id: projectId },
                errors,
                csrfToken: req.csrfToken(),
            });
        }
    }));

router.get('/project/delete/:id(\\d+)', csrfProtection,
    asyncHandler(async (req, res) => {
        const projectId = parseInt(req.params.id, 10);
        const project = await db.Project.findByPk(projectId);
        res.render('project-delete', {
            title: 'Delete project',
            project,
            csrfToken: req.csrfToken(),
        });
    }));

router.post('/project/delete/:id(\\d+)', csrfProtection,
    asyncHandler(async (req, res) => {
        const projectId = parseInt(req.params.id, 10);
        const project = await db.Project.findByPk(projectId);
        await project.destroy();
        res.redirect('/projects');
    }));

module.exports = router;