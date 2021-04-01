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

    const reviewValidators = [
        check('difficultyLevel')
            .exists({ checkFalsy: true })
            .withMessage('Please provide a level of difficulty to submit'),
        check('rating')
            .exists({ checkFalsy: true })
            .withMessage('Please provide a level of enjoyment to submit'),
        check('completionTime')
            .exists({ checkFalsy: true })
            .withMessage('How long did it take you to build your beautiful new furniture? (Required to submit)')
            .isLength({ max: 50 })
            .withMessage('Completion time must not be more than 50 characters long'),
      ];

      //create a review route
    router.post(
       "/project/reviews",
       reviewValidators,
       asyncHandler(async (req, res) => {
          let { difficultyLevel, content, rating, completionTime, projectId } = req.body;
          difficultyLevel = parseInt(difficultyLevel);
          const review = db.Review.build(
              { difficultyLevel, content, rating, completionTime, userId: req.session.auth.userId, projectId }
            );

            const validatorErrors = validationResult(req);
            console.log('inside post review route')
            if (validatorErrors.isEmpty()) {
                console.log('validated')
              await review.save();
              res.redirect(`/projects/${projectId}`);
            } else {
                const errors = validatorErrors.array().map((error) => error.msg);
                console.log('request errors before')
                res.redirect(`/projects/${projectId}`);
                console.log('request errors after')
                // next(errors)
            }
       })
     );

     router.put(
         '/project/reviews/',
         asyncHandler(async (req, res) => {
             let { difficultyLevel, content, rating, completionTime, projectId } = req.body;
         })
     )


    const furnitureTypeRename = (furnitureObj) => {
        let renamedFurniture;
        switch (furnitureObj) {
            case 'sofa':
                renamedFurniture = 'Sofa';
                break;
            case 'officeChair':
                renamedFurniture = 'Office Chair';
                break;
            case 'loungeChair':
                renamedFurniture = 'Lounge Chair';
                break;
            case 'table':
                renamedFurniture = 'Table';
                break;
            case 'diningChair':
                renamedFurniture = 'Dining Chair';
                break;
            case 'bed':
                renamedFurniture = 'Bed';
                break;
            case 'wardrobeCloset':
                renamedFurniture = 'Wardrobe or Closet';
                break;
            case 'mediaFurniture':
                renamedFurniture = 'Media Furniture';
                break;
            case 'kitchenSurface':
                renamedFurniture = 'Kitchen Island';
                break;
            case 'outdoorFurniture':
                renamedFurniture = 'Outdoor Furniture';
                break;
            case 'nursery':
                renamedFurniture = 'Nursery';
                break;
            case 'desk':
                renamedFurniture = 'Desk';
                break;
            case 'dresser':
                renamedFurniture = 'Dresser';
                break;
        }

        return renamedFurniture;
    }

router.get('/projects/:id(\\d+)', csrfProtection,
    asyncHandler(async (req, res) => {
        if (req.locals && req.locals.errors) {
            const { errors } = req.locals.errors;
            console.log('errors', errors)
        }
        const projectId = parseInt(req.params.id, 10);
        const project = await db.Project.findByPk(projectId);
        const reviews = await db.Review.findAll({ where: { projectId: projectId }, include: { model: db.User } })
        let furnitureTypeText = furnitureTypeRename(project.furnitureType);
        res.render('project-display', {
            title: 'Edit Project',
            project, reviews, projectId, furnitureTypeText,
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

router.post('/projects/reviews/update', reviewValidators,
    asyncHandler(async (req, res) => {
        let { difficultyLevel, content, rating, completionTime, projectId, reviewId } = req.body;
        difficultyLevel = parseInt(difficultyLevel);
        reviewId = parseInt(reviewId);
        console.log(difficultyLevel, content, rating, completionTime, projectId, reviewId)
        const reviewToUpdate = await db.Review.findByPk(reviewId);
        reviewToUpdate.content = content;
        reviewToUpdate.difficultyLevel = difficultyLevel;
        reviewToUpdate.rating = rating;
        reviewToUpdate.completionTime = completionTime;

        const validatorErrors = validationResult(req);
        if (validatorErrors.isEmpty()) {
            await reviewToUpdate.save()
            return res.redirect(`/projects/${projectId}`);
        } else {
            return res.redirect(`/projects/${projectId}`);
        }
    })
)


//    router.post(
//     "/project/reviews",
//     asyncHandler(async (req, res) => {
//       let { difficultyLevel, content, rating, completionTime, projectId } = req.body;
//       difficultyLevel = parseInt(difficultyLevel);
//       console.log(req.body);
//       rating = parseInt(rating);
//       const review = await db.Review.create({ difficultyLevel, content, rating, completionTime, userId: req.session.auth.userId, projectId });
//       console.log('Saved Review!')
//       res.redirect(`/projects/${projectId}`);
//     })
//   );

module.exports = router;
