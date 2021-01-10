module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects', [
      { name: 'Balkarp Sleeper Sofa', brand: 'Ikea', furnitureType: 'sofa', serialNumber: '003.769.32', description: `Sleeper sofa, Knisa black`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://www.ikea.com/us/en/images/products/balkarp-sleeper-sofa-knisa-black__0530584_PE646760_S5.JPG?f=sg`, productLink: `https://www.ikea.com/us/en/p/balkarp-sleeper-sofa-knisa-black-00376932/` },

      { name: 'Pello Armchair', brand: 'Ikea', furnitureType: 'loungeChair', serialNumber: '700.784.63', description: `Comfy seating throughout the home gives a relaxed feel – and with airy PELLO armChair you can easily create your comfort zones everywhere. The secrets are good back support and a slightly resilient frame!`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://www.ikea.com/us/en/images/products/pello-armchair-holmby-natural__38296_PE130209_S5.JPG?f=sg`, productLink: `https://www.ikea.com/us/en/p/pello-armchair-holmby-natural-70078463/` },

      { name: 'Markus Office Chair', brand: 'Ikea', furnitureType: 'officeChair', serialNumber: '902.891.72', description: `Adjust the height and angle of this chair so your work day feels comfortable. The mesh backrest lets air through so you keep cool even when the workload rises. Built to outlast years of ups and downs.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://www.ikea.com/us/en/images/products/markus-office-chair-vissle-dark-gray__0724714_PE734597_S5.JPG?f=sg`, productLink: `https://www.ikea.com/us/en/p/markus-office-chair-vissle-dark-gray-90289172/` },

      { name: 'Ingo Table', brand: 'Ikea', furnitureType: 'table', serialNumber: '146.300.09', description: `Recommended for indoor use only seats 6, solid wood`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://www.ikea.com/us/en/images/products/ingo-table-pine__0737092_PE740877_S5.JPG?f=xs`, productLink: `https://www.ikea.com/us/en/p/ingo-table-pine-14630009/` },


      { name: 'Stefan Chair', brand: 'Ikea', furnitureType: 'diningChair', serialNumber: '002.110.88', description: `Solid wood is a durable natural material.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://www.ikea.com/us/en/images/products/stefan-chair-brown-black__0727320_PE735593_S5.JPG?f=sg`, productLink: `https://www.ikea.com/us/en/p/stefan-chair-brown-black-00211088/` },


      { name: 'Neiden Full Bedframe', brand: 'Ikea', furnitureType: 'bed', serialNumber: '803.952.48', description: `The natural solid wood is beautiful as it is or you can make it more personal by staining, painting or waxing it. Also, the bed frame is high enough so you can place storage boxes underneath.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://www.ikea.com/us/en/images/products/neiden-bed-frame-pine__0749131_PE745500_S5.JPG?f=sg`, productLink: `https://www.ikea.com/us/en/p/neiden-bed-frame-pine-80395248/` },


      { name: 'Pax Wardrobe', brand: 'Ikea', furnitureType: 'wardrobeCloset', serialNumber: '691.285.67', description: `Keep it simple. Here's a basic solution to get you started, and space for more interiors if you want to upgrade.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://www.ikea.com/us/en/images/products/pax-wardrobe-white__0383291_PE557275_S5.JPG?f=sg`, productLink: `https://www.ikea.com/us/en/p/pax-wardrobe-white-s69128567/` },


      { name: 'Malm Dresser', brand: 'Ikea', furnitureType: 'dresser', serialNumber: '103.604.74', description: `A clean expression that fits right in, in the bedroom or wherever you place it. Smooth-running drawers and in a choice of finishes – pick your favorite. Psst! Please attach to the wall.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://www.ikea.com/us/en/images/products/malm-6-drawer-chest-black-brown__0626820_PE693005_S5.JPG?f=sg`, productLink: `https://www.ikea.com/us/en/p/malm-6-drawer-chest-black-brown-10360474/` },


      { name: 'Billy Bookshelf', brand: 'Ikea', furnitureType: 'mediaFurniture', serialNumber: '002.638.50', description: `It is estimated that every five seconds, one BILLY bookcase is sold somewhere in the world. Pretty impressive considering we launched BILLY in 1979. It’s the booklovers choice that never goes out of style.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://www.ikea.com/us/en/images/products/billy-bookcase-white__0625599_PE692385_S5.JPG?f=sg`, productLink: `https://www.ikea.com/us/en/p/billy-bookcase-white-00263850/` },


      { name: 'Tornviken Kitchen Island', brand: 'Ikea', furnitureType: 'kitchenSurface', serialNumber: '403.916.57', description: `The TORNVIKEN series is ideal when you need more workspace, more storage ‒ more kitchen. Combine a kitchen island with shelves to create a rustic kitchen where you can cook together. Everyone can fit!`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://www.ikea.com/us/en/images/products/tornviken-kitchen-island-off-white-oak__0736817_PE740760_S5.JPG?f=sg`, productLink: `https://www.ikea.com/us/en/p/tornviken-kitchen-island-off-white-oak-40391657/` },


      { name: 'Askholmen Table and Chairs', brand: 'Ikea', furnitureType: 'outdoorFurniture', serialNumber: '299.300.59', description: `Made from durable, sustainably sourced acacia, ASKHOLMEN dining set lets you enjoy meals in small outdoor spaces. With options like a plant stand and a flower box, you can create your own green oasis.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://www.ikea.com/us/en/images/products/askholmen-table-2-chairs-outdoor-gray-brown-stained__0735576_PE740060_S5.JPG?f=sg`, productLink: `https://www.ikea.com/us/en/p/askholmen-table-2-chairs-outdoor-gray-brown-stained-s29930059/` },


      { name: 'Sniglar Crib', brand: 'Ikea', furnitureType: 'nursery', serialNumber: '502.485.41', description: `Your baby sleeps safely and comfortably in this crib. Made from solid beech – a durable and renewable natural material that is both good for your wallet and the planet.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://www.ikea.com/us/en/images/products/sniglar-crib-beech__0637930_PE698615_S5.JPG?f=sg`, productLink: `https://www.ikea.com/us/en/p/sniglar-crib-beech-50248541/` },


      { name: 'Morabo Sectional', brand: 'Ikea', furnitureType: 'sofa', serialNumber: '993.183.25', description: `Warm and welcoming, neat and stylish. The supporting seat cushions, the cover’s soft finish and the tight fit gives this sofa a perfect balance between its comfort, functions and look.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://www.ikea.com/us/en/images/products/morabo-sofa-gunnared-dark-gray-metal__0602115_PE680184_S5.JPG?f=sg`, productLink: `https://www.ikea.com/us/en/p/morabo-sofa-gunnared-dark-gray-metal-s09318320/` },


      { name: 'Delaktig Chaise', brand: 'Ikea', furnitureType: 'loungeChair', serialNumber: '292.893.31', description: `A chaise is perfect for a nice nap or a relaxing movie night. The armrest can be attached to the side that suits you best.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://www.ikea.com/us/en/images/products/delaktig-chaise-with-armrest-gunnared-light-brown-pink__0668933_PE714762_S5.JPG?f=sg`, productLink: `https://www.ikea.com/us/en/p/delaktig-chaise-with-armrest-gunnared-light-brown-pink-s29289331/` },


      { name: 'Bleckberget Office Chair', brand: 'Ikea', furnitureType: 'officeChair', serialNumber: '303.586.39', description: `BLECKBERGET is inspired by traditional chairs from the 50’s and 60’s, but with a modern twist to suit today’s way of life and work. Nice to look at, comfortable to sit on and easy to use everywhere at home.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://www.ikea.com/us/en/images/products/bleckberget-swivel-chair-idekulla-beige__0724713_PE734596_S5.JPG?f=sg`, productLink: `https://www.ikea.com/us/en/p/bleckberget-swivel-chair-idekulla-beige-30358639/` },


      { name: 'Micke Desk', brand: 'Ikea', furnitureType: 'desk', serialNumber: '102.447.43', description: `A clean and simple look that fits just about anywhere. You can combine it with other desks or drawer units in the MICKE series to extend your work space. The clever design at the back hides messy cables.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://www.ikea.com/us/en/images/products/micke-desk-black-brown__0735981_PE740299_S5.JPG?f=sg`, productLink: `https://www.ikea.com/us/en/p/micke-desk-black-brown-10244743/` },


      { name: 'Ingolf Bar Stool', brand: 'Ikea', furnitureType: 'diningChair', serialNumber: '504.787.68', description: `INGOLF chairs look just as nice in the kitchen and dining room as in the bedroom or hallway. This one is softly cushioned for comfort and has a solid wood construction that stands up to bumps and bangs.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://www.ikea.com/us/en/images/products/ingolf-bar-stool-with-backrest-brown-black-nolhaga-gray-beige__0976574_PE813281_S5.JPG?f=sg`, productLink: `https://www.ikea.com/us/en/p/ingolf-bar-stool-with-backrest-brown-black-nolhaga-gray-beige-50478768/` },


      { name: 'Nordli Headboard with storage', brand: 'Ikea', furnitureType: 'bed', serialNumber: '692.414.22', description: `There’s plenty of space in the drawers for clothes, extra duvets and sweet dreams – and you can position the headboard’s box and shelf so your favorite book is easy to reach. A perfect combination!`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://www.ikea.com/us/en/images/products/nordli-bed-with-headboard-and-storage-white__0749134_PE745503_S5.JPG?f=sg`, productLink: `https://www.ikea.com/us/en/p/nordli-bed-with-headboard-and-storage-white-s69241422/` },


      { name: 'Kleppstad Wardrobe Closet', brand: 'Ikea', furnitureType: 'wardrobeCloset', serialNumber: '304.372.36', description: `Simple and smart! When all you need is a wardrobe with all the basic functions. If storage space is still not enough, why not add another wardrobe from the KLEPPSTAD series?`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://www.ikea.com/us/en/images/products/kleppstad-wardrobe-with-2-doors-white__0733324_PE748781_S5.JPG?f=s`, productLink: `https://www.ikea.com/us/en/p/kleppstad-wardrobe-with-2-doors-white-30437236/` },


      { name: 'Nordmela Chest Of Drawers', brand: 'Ikea', furnitureType: 'dresser', serialNumber: '404.216.59', description: `This clever piece with roomy drawers and a clothes rail accommodates both folded and hanging clothes. It takes up little space and is easy to place, whether in your bedroom or in the hallway.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://www.ikea.com/us/en/images/products/nordmela-chest-of-drawers-with-clothes-rail-black-blue__0656826_PE711620_S5.JPG?f=s`, productLink: `https://www.ikea.com/us/en/p/nordmela-chest-of-drawers-with-clothes-rail-black-blue-40421659/` },


      { name: 'Brimnes Media Center', brand: 'Ikea', furnitureType: 'mediaFurniture', serialNumber: '592.782.32', description: `When it’s organized by the TV it’s easier to indulge in your favorite TV series. Keep your games, controls and accessories in the large drawers and feed the cords through the outlets in the back.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://www.ikea.com/us/en/images/products/brimnes-tv-storage-combination-glass-doors-white__0619452_PE689095_S5.JPG?f=g`, productLink: `https://www.ikea.com/us/en/p/brimnes-tv-storage-combination-glass-doors-white-s59278232/` },


      { name: 'Bror Cart', brand: 'Ikea', furnitureType: 'kitchenSurface', serialNumber: '603.338.50', description: `Heavy-duty, our way – a sturdy storage system that withstands moisture, dirt and heavy loads. Also easy to assemble, complete as needed and fits everywhere thanks to its clean design.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://www.ikea.com/us/en/images/products/bror-utility-cart-black-pine-plywood__0636685_PE697973_S5.JPG?f=s`, productLink: `https://www.ikea.com/us/en/p/bror-utility-cart-black-pine-plywood-60333850/` },


      { name: 'Hyllis Shelf Unit', brand: 'Ikea', furnitureType: 'outdoorFurniture', serialNumber: '304.283.26', description: `Practical storage solution in galvanized steel for small spaces indoors or outdoors. Just as suitable on the balcony as in the hallway, kitchen or bathroom. Sturdy, lightweight and approved for wet areas.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://www.ikea.com/us/en/images/products/hyllis-shelf-unit-indoor-outdoor__0626021_PE692562_S5.JPG?f=xxxl`, productLink: `https://www.ikea.com/us/en/p/hyllis-shelf-unit-indoor-outdoor-00278578/` },


      { name: 'Gulliver Changing Table', brand: 'Ikea', furnitureType: 'nursery', serialNumber: '803.070.39', description: `A secure place where you and your baby can get to know one another in peace and quiet. Comfortable height and storage close at hand so you can reach what you need and always keep one hand on the baby.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://www.ikea.com/us/en/images/products/gulliver-changing-table-white__0627306_PE693289_S5.JPG?f=g`, productLink: `https://www.ikea.com/us/en/p/gulliver-changing-table-white-80307039/` },


      { name: 'Calais Sofa with Channel Tufting Green', brand: 'Target', furnitureType: 'sofa', serialNumber: '249-08-9293', description: `Crafted from sturdy rubberwood and covered in sleek upholstery, this two-seat sofa adds a touch of elegance to your space. The simple design and square profile add timeless appeal, while the four slightly-tapered feet provide a stylish foundation. Channel tufting on the back adds subtle flair, and the raised armrests offer comfortable support for lounging, reading and more.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://target.scene7.com/is/image/Target/GUEST_bb9aa0bb-f57a-4dd5-be7c-b9d766138b1f?fmt=webp&wid=1400&qlt=80`, productLink: `https://www.target.com/p/71-calais-sofa-with-channel-tufting-green-project-62-8482/-/A-53510952` },



      { name: 'Medway Sofa with Metal Legs Light Gray', brand: 'Target', furnitureType: 'sofa', serialNumber: '249-08-9291', description: `This cushioned two-seat sofa sits on tapered metal legs, offering sleek support that provides a contemporary update to any space. Featuring a solid-color beige design, this sofa's square frame and high armrests offer reliable comfort for sitting, reading and watching TV. Whether you layer it with accent pillows or leave it bare for a minimalist look, this modern two-seat sofa adds a versatile seating option to your living space.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://target.scene7.com/is/image/Target/GUEST_23b31bda-b3c0-4a21-ad22-2d1a80906b5c?fmt=webp&wid=1400&qlt=80`, productLink: `https://www.target.com/p/71-medway-sofa-with-metal-legs-light-gray-project-62-8482/-/A-53511219` },


      { name: 'Harwell Modern Arm Barrel Chair with Metal Legs', brand: 'Target', furnitureType: 'loungeChair', serialNumber: ' 249-08-8975', description: `Dressed in chic textured upholstery, this barrel-style accent chair looks at home in an array of styles, while the seat cushion elevates the sitting experience with padded comfort. It stands on sleek and slanting wooden legs for sturdy support and enhanced visual appeal. Whether you use it in your vanity area or as guest seating in the living room or home office, this upholstered chair helps create a comfy seating spot with a dash of statement style.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://target.scene7.com/is/image/Target/GUEST_14b42083-13da-4898-894e-056d880553da?fmt=webp&wid=1400&qlt=80`, productLink: `https://www.target.com/p/harwell-modern-arm-barrel-chair-with-metal-legs-project-62/-/A-79768995?preselect=79553035#lnk=sametab` },


      { name: 'Minuta Pleated Back Armless Accent Chair', brand: 'Target', furnitureType: 'loungeChair', serialNumber: '249-08-3639', description: `Upholstered in plush velvet upholstery, complete with cushioned seat and back on a sturdy hardwood frame for a comfy and reliable seating arrangement, this upholstered accent chair comes with tapered angled legs to add some elegance and style to your home. The plush velvet upholstery will surely catch everyone's attention, and a curved backrest adds to the unique overall design. Perfect to complete your home's living room decor, or as a stylish accent to your modern workspace, this armless accent chair creates a customized feel for your home.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://target.scene7.com/is/image/Target/GUEST_d3548692-797f-46bf-b203-1167fa55d29b?fmt=webp&wid=1400&qlt=80`, productLink: `https://www.target.com/p/minuta-pleated-back-armless-accent-chair-opalhouse/-/A-79777961?preselect=79553117#lnk=sametab` },


      { name: 'Veer Drafting Stool', brand: 'Target', furnitureType: 'officeChair', serialNumber: '249-14-2355', description: `Veer features a form-fitted breathable mesh back and padded waterfall mesh seat to keep your back and thighs posture perfect. Easily adjust the height of Veer's arms to match your seating position and height. Adjust the seat height with a one-touch pneumatic lift with hooded dual-wheel casters to ensure effortless gliding over carpeted offices. Complete with a foot ring and extra tall gas cylinder, Veer is a drafting stool built for the progressive minded.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://target.scene7.com/is/image/Target/GUEST_6b0a30df-6eb7-4b1b-9923-f5494765f24c?fmt=webp&wid=1400&qlt=80`, productLink: `https://www.target.com/p/drafting-stool-modway-furniture/-/A-50865156?preselect=49171291#lnk=sametab` },


      { name: 'Mesh Office Chair', brand: 'Target', furnitureType: 'officeChair', serialNumber: '249-05-0498', description: `With a supportive backrest and durable mesh on the seat and back, this wheeled office chair provides a comfortable sitting experience in addition to having an easy seat adjustment, 360-degree swivel and durable dual-wheel casters. It has an armless design for comfortable movement and has five wheels so you can wheel around your workspace easily. This armless mesh office chair can adjust to a variety of heights for compatibility with different desks and tables.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://target.scene7.com/is/image/Target/GUEST_330880a1-016b-49be-abb4-87e7d94c6936?fmt=webp&wid=1400&qlt=80`, productLink: `https://www.target.com/p/mesh-office-chair-black-room-essentials-8482/-/A-51121198#lnk=sametab` },


      { name: 'Linden Round Wood Dining Table', brand: 'Target', furnitureType: 'table', serialNumber: '249-04-0149', description: `Made from solid wood for long-lasting use, this dining table showcases a simple round tabletop with a trestle base to create a stylish spot for your family or friends to enjoy a great dining experience. The four flared legs offer stability while contributing to a more modern look, and the simple design in a neutral hue blends in well with the rest of your decor for an effortless aesthetic. Sized to seat four, this round dining table is the perfect pick for cozy eat-in kitchens and smaller dining spaces.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://target.scene7.com/is/image/Target/GUEST_4263c8c1-8763-4a70-a902-808a2efc1689?fmt=webp&wid=1400&qlt=80`, productLink: `https://www.target.com/p/42-linden-round-wood-dining-table-threshold-designed-with-studio-mcgee/-/A-79720523?preselect=79553001#lnk=sametab` },


      { name: 'Astrid Mid-Century Round Dining Table with Extension Leaf', brand: 'Target', furnitureType: 'table', serialNumber: '249-04-5772', description: ` A wood finish gives this piece natural warmth and texture, while the tapered legs add a distinct mid-century modern appeal. Just as functional as it is stylish, this dining table also has an extension leaf that transforms the shape from circular to oval, giving you the extra space you need for family dinners or entertaining friends.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://target.scene7.com/is/image/Target/GUEST_1eeb1a9f-467b-44cb-99a8-af971bef71cc?fmt=webp&wid=1400&qlt=80`, productLink: `https://www.target.com/p/astrid-mid-century-round-dining-table-with-extension-leaf-project-62/-/A-79691467?preselect=54218189#lnk=sametab` },


      { name: 'Rumford Saddle Counter Height Barstool with Wood Leg', brand: 'Target', furnitureType: 'diningChair', serialNumber: '249-01-0011', description: `Made from durable hardwood, this upholstered counter stool with nail head trim will bring desired comfort and timeless style when lined up along your kitchen counter. Thanks to the padded seat, foot levers and stretcher-foot rest bar, this counter stool will make a practical addition to any home. Easy to maintain, this counter stool supports up to 250 pounds.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://target.scene7.com/is/image/Target/GUEST_bf9db1c9-12a8-476a-8ff6-2c1825a4bc5b?fmt=webp&wid=1400&qlt=80`, productLink: `https://www.target.com/p/24-rumford-saddle-counter-height-barstool-with-wood-leg-threshold/-/A-15804485?preselect=15102635#lnk=sametab` },


      { name: 'Copley Dining Chair', brand: 'Target', furnitureType: 'diningChair', serialNumber: '249-02-3796', description: `Designed in clean simple lines that allude to the Mid Century décor, this chair is versatile and perfect for any style. This molded chair has sturdy metal legs with a wood-look finish, assembles in seconds and it is lightweight and durable. The Copley Plastic Dining Chair is ideal to compliment your dining table or to accentuate one of the rooms in your home.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://target.scene7.com/is/image/Target/GUEST_9ce461d9-1025-4fa8-9bdf-da373a61b6af?fmt=webp&wid=1400&qlt=80`, productLink: `https://www.target.com/p/2pk-copley-dining-chair-project-62-153/-/A-52962300?preselect=52900408#lnk=sametab` },


      { name: 'Queen Minsmere Caned Headboard Natural Brown', brand: 'Target', furnitureType: 'bed', serialNumber: '249-15-0389', description: `The cane details on the front give this natural brown, queen-sized headboard stunning artistry, adding interest and appeal to your room. Whether you keep it simple with a white comforter or brighten things up with a vibrant duvet, you'll feel right at home in your relaxing oasis with the tropical vibes it brings to your space`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://target.scene7.com/is/image/Target/GUEST_4c0e744c-89a8-4fd2-bb50-fe4c5276c0e1?fmt=webp&wid=1400&qlt=80`, productLink: `https://www.target.com/p/queen-minsmere-caned-headboard-natural-brown-opalhouse-8482/-/A-53015693#lnk=sametab` },


      { name: 'Zinnia Arched Headboard', brand: 'Target', furnitureType: 'bed', serialNumber: '249-15-0711', description: `Upholstered in a soft cotton-linen fabric, the adjustable headboard can be customized to fit a variety of bed frames. With the many choices of colors and patterns, you're sure to find one you'll love.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://target.scene7.com/is/image/Target/GUEST_938d2489-9753-442f-ba01-c29b704dc3ae?fmt=webp&wid=1400&qlt=80`, productLink: `https://www.target.com/p/zinnia-arched-headboard-opalhouse-153/-/A-53472235?preselect=53104641#lnk=sametab` },


      { name: 'Pelham Vertical Dresser White', brand: 'Target', furnitureType: 'wardrobeCloset', serialNumber: '249-09-1916', description: `This contemporary dresser has five pull-out drawers with simple shiny metal hardware that can hold your essentials ranging from clothes, linens to other daily life accessories. Whether you decide to place this five-drawer dresser this in your living room or beside your bed, it will add a touch of simple style along with a big dose of functionality. Built with a strong wood frame for durability and long-lasting use, the top of this dresser also works perfectly for placing a lamp or any small decor.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://target.scene7.com/is/image/Target/GUEST_387d02f9-742d-45a9-91df-e4719165a225?fmt=webp&wid=1400&qlt=80`, productLink: `https://www.target.com/p/pelham-vertical-dresser-white-threshold-8482/-/A-52806293#lnk=sametab` },


      { name: 'Cambridge 2 Door and 2 Drawer Wardrobe White', brand: 'Target', furnitureType: 'wardrobeCloset', serialNumber: '249-09-8870', description: `The compact design is the perfect solution for anyone looking for extra storage with limited space. Available is a white finish with a durable melamine coating that is stain and scratch resistant. The 2 door cabinet and 2 drawers offer multiple storage options to help keep all your belongings neat and organized. `, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://target.scene7.com/is/image/Target/GUEST_a32f5cc4-e417-49c2-bdee-848e4f54946c?fmt=webp&wid=1400&qlt=80`, productLink: `https://www.target.com/p/cambridge-2-door-and-2-drawer-wardrobe-white-chique/-/A-81399623#lnk=sametab` },


      { name: 'Litchfield Farmhouse Wood 6 Drawer Chest Wheat', brand: 'Target', furnitureType: 'dresser', serialNumber: '249-09-4172', description: `Crafted from solid wood and artfully designed with a light wood-grain finish, this farmhouse-style dresser features a vertical profile with six spacious drawers where you can easily stow clothes and other personal belongings. Place it at the foot of your bed or in the corner to maximize your use of space.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://target.scene7.com/is/image/Target/GUEST_cc89a3b1-1dd5-47d4-ac0b-ea1c48b8b02f?fmt=webp&wid=1400&qlt=80`, productLink: `https://www.target.com/p/litchfield-farmhouse-wood-6-drawer-chest-wheat-threshold-8482/-/A-54212000#lnk=sametab` },


      { name: 'Wrentham Beadboard Farmhouse 3 Drawer Dresser White', brand: 'Target', furnitureType: 'dresser', serialNumber: '249-09-4264', description: `Featuring a sturdy wood frame, this white dresser chest features beadboard-style paneling on the front crisscross details on the sides to bring striking but charming farmhouse flair to your space. The three spacious drawers let you keep a multitude of items out of sight but close at hand, while the smooth top allows you to display various decor pieces. `, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://target.scene7.com/is/image/Target/GUEST_55e40367-c4ca-4ed7-ba6e-63ee4ceae47e?fmt=webp&wid=1400&qlt=80`, productLink: `https://www.target.com/p/wrentham-beadboard-farmhouse-3-drawer-dresser-white-threshold-8482/-/A-54229276#lnk=sametab` },


      { name: 'Juliet Book Shelf Natural', brand: 'Target', furnitureType: 'mediaFurniture', serialNumber: '249-14-3953', description: `Sporting a sleek frame with a natural finish, this bookshelf features angled, slatted shelves and an open-back design adding breezy charm to your space. This freestanding bookcase is the perfect place to showcase all your favorite books and reading material, while the flat top allows a fine spot to display decor or a bowl of vibrant vase filler for a splash of color.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://target.scene7.com/is/image/Target/GUEST_ee85c5a2-af44-42a2-912f-155b362370ee?fmt=webp&wid=1400&qlt=80`, productLink: `https://www.target.com/p/30-10-juliet-book-shelf-natural-winsome/-/A-52368279#lnk=sametab` },


      { name: 'Windham Large TV Stand', brand: 'Target', furnitureType: 'mediaFurniture', serialNumber: ' 249-10-0470', description: `Showcasing a simple, streamlined silhouette, this charming piece features open and closed storage for cleaning up household clutter. The attractive cabin design with glass doors gives you a peek at your devices without having to leave the doors wide open for use. Middle shelving is open to allow for decorating or storing more of your electronics. For ease of use, keep your DVD player on the middle shelf so you don't have to open the door to put in your next disc.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://target.scene7.com/is/image/Target/GUEST_443a8b49-4ec6-4b5c-8b0f-48d5f8117c14?fmt=webp&wid=1400&qlt=80`, productLink: `https://www.target.com/p/windham-large-tv-stand-threshold/-/A-79691532?preselect=16639424#lnk=sametab` },


      { name: 'Derry Stone Top Mixed Material Kitchen Island Brown', brand: 'Target', furnitureType: 'kitchenSurface', serialNumber: '249-04-4790', description: `Boasting a solid hardwood construction, metallic frame and stone tabletop, this brown kitchen island offers versatile, long-lasting use. It can be used for prepping and cooking, or as a table perfect for serving guests snacks. It even comes with additional storage space for your essentials, along with being on wheels for easy mobility around the kitchen.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://target.scene7.com/is/image/Target/GUEST_500bb7b8-bb80-4f68-b126-cba00a3a48c4?fmt=webp&wid=1400&qlt=80`, productLink: `https://www.target.com/p/derry-stone-top-mixed-material-kitchen-island-brown-threshold-8482/-/A-53454063#lnk=sametab` },


      { name: 'Franklin Microwave Kitchen Cart', brand: 'Target', furnitureType: 'kitchenSurface', serialNumber: '249-04-3135', description: `This stylish and functional moveable kitchen storage cart features an open design with two fixed metal shelves and a natural pine top. Four hooks are attached sturdily to one side so you can hang utensils, oven mitts or other kitchen accessories. The flat top is perfect for a microwave, while the shelves can be used to store cutting boards, mixing bowls or other kitchen appliances that you need to store. `, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://target.scene7.com/is/image/Target/GUEST_21b8b897-7a91-409e-9b54-64c379dbd115?fmt=webp&wid=1400&qlt=80`, productLink: `https://www.target.com/p/franklin-microwave-kitchen-cart-threshold-8482/-/A-51804077` },


      { name: 'Lunding Sectional Fire Conversation Set ', brand: 'Target', furnitureType: 'outdoorFurniture', serialNumber: '009-00-0439', description: `his set has all the chic, polished style you could ask for, and it comes with a full-size sectional couch with upholstered seat-back cushions, plus a side table and a fire table. The chairs and loveseat feature gray metal frames accented with woven ivory embellishments on the arms, and the fire table and side table have a crisp, concrete-like construction for a touch of on-trend flair.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://target.scene7.com/is/image/Target/GUEST_3e770b7e-6363-43d4-b475-a9949b254a8d?fmt=webp&wid=1400&qlt=80`, productLink: `https://www.target.com/p/lunding-sectional-fire-conversation-set-project-62-8482/-/A-78096113#lnk=sametab` },


      { name: 'Monroe Sectional Patio Seating Set', brand: 'Target', furnitureType: 'outdoorFurniture', serialNumber: '009-00-2502', description: `his set is crafted with a steel frame and wrapped in all-weather wicker for a breezy look, and includes a large sectional with a coordinating coffee table to maximize your space. The chairs feature dark brown wicker with beige cushions so you can sit back in absolute comfort, while the tabletop and lower shelf of the coffee table offer the perfect perch for dinner or drinks. Create a stylish and cohesive aesthetic in your backyard with this sectional patio seating set.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://target.scene7.com/is/image/Target/GUEST_eb8223d3-5753-4a45-a713-bade3eafd75d?fmt=webp&wid=1400&qlt=80`, productLink: `https://www.target.com/p/monroe-sectional-patio-seating-set-threshold-8482/-/A-78365075#lnk=sametab` },



      { name: 'Delta Children Farmhouse 3 Drawer Dresser with Changing Top', brand: 'Target', furnitureType: 'nursery', serialNumber: '030-08-1790', description: `A great option for your baby's nursery or kid's bedroom, it features three large drawers that provide ample storage space, and it comes with an included changing top that converts the dresser into a convenient changing table. When your child no longer needs a changing table, just remove the topper to reveal a more adult storage piece.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://target.scene7.com/is/image/Target/GUEST_c2aaf42c-829b-476c-b0eb-4e90daddc5d9?fmt=webp&wid=1400&qlt=80`, productLink: `https://www.target.com/p/delta-children-farmhouse-3-drawer-dresser-with-changing-top/-/A-54209765?preselect=75573990#lnk=sametab` },



      { name: "Simmons Kids' Slumbertime Monterey 4-in-1 Convertible Crib", brand: 'Target', furnitureType: 'nursery', serialNumber: '030-08-3743', description: `A warm and welcoming sleep space your child will use for years to come, this versatile crib features a three-position mattress support that can be lowered as your baby grows. Plus, the crib converts into a toddler bed, daybed and a full size bed for additional value.`, createdAt: new Date(), updatedAt: new Date(), imgLink: `https://target.scene7.com/is/image/Target/GUEST_e1d478a0-0b2b-43df-b1f9-21d44b38786e?fmt=webp&wid=1400&qlt=80`, productLink: `https://www.target.com/p/simmons-kids-slumbertime-monterey-4-in-1-convertible-crib/-/A-76611897?preselect=51485154#lnk=sametab` },

    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});
  }
};
