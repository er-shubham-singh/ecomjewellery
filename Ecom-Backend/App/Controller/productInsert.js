const ProductModel = require('../Model/prodectModel.js')

const insertDummyProducts = async () => {
  try {
    const categories = [
      //       // All Jewellery - All Jewellery
      {
        name: 'Elegant Gold Necklace',
        category: 'All Jewellery',
        categoryType: 'All Jewellery',
        price: 75000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw994edc2d/images/hi-res/51D3D1DMNABA00_1.jpg?sw=640&sh=640',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw36a3e793/images/hi-res/51D3D1DMNABA00_2.jpg?sw=640&sh=640',
      },
      {
        name: 'Classic Diamond Pendant',
        category: 'All Jewellery',
        categoryType: 'All Jewellery',
        price: 95000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5bd97ba2/images/hi-res/50D3FFNKLAA02_1.jpg?sw=640&sh=640',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw29957958/images/hi-res/50D3FFNKLAA02_2.jpg?sw=640&sh=640',
      },
      {
        name: 'Royal Ruby Ring',
        category: 'All Jewellery',
        categoryType: 'All Jewellery',
        price: 50000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dweccfa199/images/hi-res/50D2PTFYXAA09_1.jpg?sw=640&sh=640',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3ff0830f/images/hi-res/50D2PTFYXAA09_2.jpg?sw=640&sh=640.jpg',
      },
      {
        name: 'Pearl Embedded Bangle',
        category: 'All Jewellery',
        categoryType: 'All Jewellery',
        price: 65000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe24d327d/images/hi-res/501097VBL1B32_1.jpg?sw=640&sh=640.jpg',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw588731bf/images/hi-res/501097VBL1B32_2.jpg?sw=640&sh=640.jpg',
      },
      {
        name: 'Nose Pin ',
        category: 'All Jewellery',
        categoryType: 'All Jewellery',
        price: 20000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0253a212/images/hi-res/502990OADAAA02_1.jpg?sw=640&sh=640',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc3001d92/images/hi-res/502990OADAAA02_2.jpg?sw=640&sh=640',
      },
      {
        name: 'Glorious 22 Karat Yellow Gold Floral Ring',
        category: 'All Jewellery',
        categoryType: 'All Jewellery',
        price: 19000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5f2c5c45/images/hi-res/510122FAAAA00.jpg?sw=640&sh=640',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe4bf267c/images/hi-res/510122FAAAA00_1.jpg?sw=640&sh=640',
      },
      {
        name: 'Golden Hoop Earrings',
        category: 'All Jewellery',
        categoryType: 'Earings',
        price: 22000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd8d0b69f/images/hi-res/504025HMQAAA00.jpg?sw=640&sh=640',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd8d0b69f/images/hi-res/504025HMQAAA00_1.jpg?sw=640&sh=640',
      },
      {
        name: 'Diamond Stud Earrings',
        category: 'All Jewellery',
        categoryType: 'Earings',
        price: 48000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0fd34656/images/hi-res/500760SMAAGA09_2.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0fd34656/images/hi-res/500760SMAAGA09_1.jpg?sw=480&sh=480',
      },
      // All Jewellery - Pandants
      {
        name: 'Emerald Pendant Set',
        category: 'All Jewellery',
        categoryType: 'Pandants',
        price: 67000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5fd8a7cf/images/hi-res/513515PBHAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5fd8a7cf/images/hi-res/513515PBHAAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Gold Heart Pendant',
        category: 'All Jewellery',
        categoryType: 'Pandants',
        price: 42000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6bb7d730/images/hi-res/50D4I1PYGAAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6bb7d730/images/hi-res/50D4I1PYGAAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Diamond Star Pendant',
        category: 'All Jewellery',
        categoryType: 'Pandants',
        price: 80000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8cdb2ed7/images/hi-res/50D4I1PBVAAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8cdb2ed7/images/hi-res/50D4I1PBVAAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Ruby Flower Pendant',
        category: 'All Jewellery',
        categoryType: 'Pandants',
        price: 56000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwae262009/images/hi-res/50D2FFPRIAAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwae262009/images/hi-res/50D2FFPRIAAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Silver Cross Pendant',
        category: 'All Jewellery',
        categoryType: 'Pandants',
        price: 32000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw80fcd9ee/images/hi-res/501206PDKAABP5_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw80fcd9ee/images/hi-res/501206PDKAABP5_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Gold Pendant',
        category: 'All Jewellery',
        categoryType: 'Pendants',
        price: 45000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw31fee6f9/images/hi-res/50K4I1PJOAAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw31fee6f9/images/hi-res/50K4I1PJOAAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Silver Heart Pendant',
        category: 'All Jewellery',
        categoryType: 'Pendants',
        price: 28000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd49bf0d3/images/hi-res/51DXPLPIDAA600_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd49bf0d3/images/hi-res/51DXPLPIDAA600_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Diamond Star Pendant',
        category: 'All Jewellery',
        categoryType: 'Pendants',
        price: 62000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw23652135/images/hi-res/50K4B1PCDAAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw23652135/images/hi-res/50K4B1PCDAAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Rose Gold Leaf Pendant',
        category: 'All Jewellery',
        categoryType: 'Pendants',
        price: 39000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3b66cb1e/images/hi-res/50F4I1PALAAA32_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3b66cb1e/images/hi-res/50F4I1PALAAA32_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Pearl Drop Pendant',
        category: 'All Jewellery',
        categoryType: 'Pendants',
        price: 50000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwda0fe760/images/hi-res/511170PHOAA1P5_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwda0fe760/images/hi-res/511170PHOAA1P5_2.jpg?sw=480&sh=480',
      },
      // All Jewellery - Finger Rings
      {
        name: 'Gold Engagement Ring',
        category: 'All Jewellery',
        categoryType: 'Finger Rings',
        price: 75000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe4bf267c/images/hi-res/510122FAAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe4bf267c/images/hi-res/510122FAAAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Diamond Wedding Band',
        category: 'All Jewellery',
        categoryType: 'Finger Rings',
        price: 89000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dweccfa199/images/hi-res/50D2PTFYXAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dweccfa199/images/hi-res/50D2PTFYXAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Silver Infinity Ring',
        category: 'All Jewellery',
        categoryType: 'Finger Rings',
        price: 35000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwaaf044ac/images/hi-res/50DFY1FAFAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwaaf044ac/images/hi-res/50DFY1FAFAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Ruby Halo Ring',
        category: 'All Jewellery',
        categoryType: 'Finger Rings',
        price: 62000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwee9d82db/images/hi-res/50E4SRFAPA637_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwee9d82db/images/hi-res/50E4SRFAPA637_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Platinum Solitaire Ring',
        category: 'All Jewellery',
        categoryType: 'Finger Rings',
        price: 99000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw516a3095/images/hi-res/50E2SRFALAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw516a3095/images/hi-res/50E2SRFALAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Gold Ring',
        category: 'All Jewellery',
        categoryType: 'Finger Rings',
        price: 55000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwdaf64126/images/hi-res/50E4SRFADA237_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwdaf64126/images/hi-res/50E4SRFADA237_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Diamond Studded Ring',
        category: 'All Jewellery',
        categoryType: 'Finger Rings',
        price: 78000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7657c52b/images/hi-res/50E4SRFAHA437_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7657c52b/images/hi-res/50E4SRFAHA437_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Sapphire Halo Ring',
        category: 'All Jewellery',
        categoryType: 'Finger Rings',
        price: 68000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9aac0999/images/hi-res/50E4SRFBB2137_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9aac0999/images/hi-res/50E4SRFBB2137_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Rose Gold Eternity Ring',
        category: 'All Jewellery',
        categoryType: 'Finger Rings',
        price: 62000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb9931d9a/images/hi-res/50E4SRFAQA937_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb9931d9a/images/hi-res/50E4SRFAQA937_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Platinum Solitaire Ring',
        category: 'All Jewellery',
        categoryType: 'Finger Rings',
        price: 89000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw330d185d/images/hi-res/50E4SRFANA737_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw330d185d/images/hi-res/50E4SRFANA737_2.jpg?sw=480&sh=480',
      },
      // All Jewellery - Mangalsutras
      {
        name: 'Traditional Gold Mangalsutra',
        category: 'All Jewellery',
        categoryType: 'Mangaksutras',
        price: 78000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3ea3d2c5/images/hi-res/50D3B3YPCAA32_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3ea3d2c5/images/hi-res/50D3B3YPCAA32_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Diamond Beaded Mangalsutra',
        category: 'All Jewellery',
        categoryType: 'Mangaksutras',
        price: 105000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcb9ed3e6/images/hi-res/50D4I2YHUAA32_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcb9ed3e6/images/hi-res/50D4I2YHUAA32_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Black Bead Gold Mangalsutra',
        category: 'All Jewellery',
        categoryType: 'Mangaksutras',
        price: 64000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw217430f1/images/hi-res/50D4I2YIDAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw217430f1/images/hi-res/50D4I2YIDAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Simple Chain Mangalsutra',
        category: 'All Jewellery',
        categoryType: 'Mangaksutras',
        price: 52000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw217430f1/images/hi-res/50D4I2YIDAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw217430f1/images/hi-res/50D4I2YIDAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Grand Wedding Mangalsutra',
        category: 'All Jewellery',
        categoryType: 'Mangaksutras',
        price: 120000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw03c43d63/images/hi-res/50D4I2YHQAA32_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw03c43d63/images/hi-res/50D4I2YHQAA32_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Traditional Gold Mangalsutra',
        category: 'All Jewellery',
        categoryType: 'Mangalsutras',
        price: 75000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw79b87e16/images/hi-res/51D4B2YVBAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw79b87e16/images/hi-res/51D4B2YVBAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Black Bead Diamond Mangalsutra',
        category: 'All Jewellery',
        categoryType: 'Mangalsutras',
        price: 86000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0ac18792/images/hi-res/50D4I2YINAA32_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0ac18792/images/hi-res/50D4I2YINAA32_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Short Mangalsutra',
        category: 'All Jewellery',
        categoryType: 'Mangalsutras',
        price: 67000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe4a207b0/images/hi-res/50D4I2YHRAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe4a207b0/images/hi-res/50D4I2YHRAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Kundan Gold Mangalsutra',
        category: 'All Jewellery',
        categoryType: 'Mangalsutras',
        price: 92000,
        metel: 'Gold',
        purity: '22K',
        mainCategory: 'All-jewellery',
        brand: 'Mia',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8b324838/images/hi-res/50D4I2YKAAA32_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8b324838/images/hi-res/50D4I2YKAAA32_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Antique Temple Mangalsutra',
        category: 'All Jewellery',
        categoryType: 'Mangalsutras',
        price: 99000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1a0a1191/images/hi-res/51D4B2YMMAAP1_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1a0a1191/images/hi-res/51D4B2YMMAAP1_2.jpg?sw=480&sh=480',
      },
      // Gold - Gold Chains
      {
        name: 'Elegant Gold Chain',
        category: 'Gold',
        categoryType: 'Gold Chains',
        price: 60000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb703545a/images/hi-res/500990CBAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb703545a/images/hi-res/500990CBAAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Stylish Gold Chain',
        category: 'Gold',
        categoryType: 'Gold Chains',
        price: 55000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfac76ca6/images/hi-res/511072CSGAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfac76ca6/images/hi-res/511072CSGAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Royal Gold Chain',
        category: 'Gold',
        categoryType: 'Gold Chains',
        price: 62000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc63bb859/images/hi-res/511016COAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc63bb859/images/hi-res/511016COAAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Gold Chain',
        category: 'Gold',
        categoryType: 'Gold Chains',
        price: 58000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw17567cf6/images/hi-res/511107CUCAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw17567cf6/images/hi-res/511107CUCAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Gold Chain',
        category: 'Gold',
        categoryType: 'Gold Chains',
        price: 75000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8a4eaf65/images/hi-res/511107CVBAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8a4eaf65/images/hi-res/511107CVBAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Gold Chain',
        category: 'Gold',
        categoryType: 'Gold Chains',
        price: 60000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc4c4d48b/images/hi-res/510954CAPCA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc4c4d48b/images/hi-res/510954CAPCA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Royal Gold Chain',
        category: 'Gold',
        categoryType: 'Gold Chains',
        price: 75000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf3c7df0c/images/hi-res/511156CTHAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf3c7df0c/images/hi-res/511156CTHAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Gold Chain',
        category: 'Gold',
        categoryType: 'Gold Chains',
        price: 82000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcbaf9303/images/hi-res/511107CTDAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcbaf9303/images/hi-res/511107CTDAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Twisted Rope Gold Chain',
        category: 'Gold',
        categoryType: 'Gold Chains',
        price: 69000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbafcb2bc/images/hi-res/51D2A2CJQAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbafcb2bc/images/hi-res/51D2A2CJQAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Minimalist Gold Chain',
        category: 'Gold',
        categoryType: 'Gold Chains',
        price: 55000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe7ab415c/images/hi-res/51D4C1CBNAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe7ab415c/images/hi-res/51D4C1CBNAA00_2.jpg?sw=480&sh=480',
      },
      // Gold - Pendants
      {
        name: 'Classic Gold Pendant',
        category: 'Gold',
        categoryType: 'Pendants',
        price: 32000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5fd8a7cf/images/hi-res/513515PBHAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5fd8a7cf/images/hi-res/513515PBHAAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Gold Pendant',
        category: 'Gold',
        categoryType: 'Pendants',
        price: 37000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6bb7d730/images/hi-res/50D4I1PYGAAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6bb7d730/images/hi-res/50D4I1PYGAAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heart Gold Pendant',
        category: 'Gold',
        categoryType: 'Pendants',
        price: 34000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8cdb2ed7/images/hi-res/50D4I1PBVAAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8cdb2ed7/images/hi-res/50D4I1PBVAAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Oval Gold Pendant',
        category: 'Gold',
        categoryType: 'Pendants',
        price: 36000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw80fcd9ee/images/hi-res/501206PDKAABP5_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw80fcd9ee/images/hi-res/501206PDKAABP5_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Traditional Gold Pendant',
        category: 'Gold',
        categoryType: 'Pendants',
        price: 39000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa9ee7925/images/hi-res/50K4I1PKDAAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa9ee7925/images/hi-res/50K4I1PKDAAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heart-Shaped Gold Pendant',
        category: 'Gold',
        categoryType: 'Pendants',
        price: 28000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb8f9f8e2/images/hi-res/51PJ42POWAA100_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb8f9f8e2/images/hi-res/51PJ42POWAA100_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Diamond Embedded Gold Pendant',
        category: 'Gold',
        categoryType: 'Pendants',
        price: 65000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5ad4b54f/images/hi-res/51F4GCPCLAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5ad4b54f/images/hi-res/51F4GCPCLAAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Floral Design Gold Pendant',
        category: 'Gold',
        categoryType: 'Pendants',
        price: 42000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9a4c57f4/images/hi-res/51DXPLPNPAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9a4c57f4/images/hi-res/51DXPLPNPAAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Engraved Gold Pendant',
        category: 'Gold',
        categoryType: 'Pendants',
        price: 36000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw556b95b4/images/hi-res/51DXPLPHTAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw556b95b4/images/hi-res/51DXPLPHTAAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Gold Pendant',
        category: 'Gold',
        categoryType: 'Pendants',
        price: 40000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf3e16782/images/hi-res/513220PPUAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf3e16782/images/hi-res/513220PPUAAA00_2.jpg?sw=480&sh=480',
      },
      //Gold - Bangles
      {
        name: 'Royal Gold Bangle',
        category: 'Gold',
        categoryType: 'Bangles',
        price: 45000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw72975016/images/hi-res/512313VEW1A00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw72975016/images/hi-res/512313VEW1A00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Gold Bangle',
        category: 'Gold',
        categoryType: 'Bangles',
        price: 48000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc740a030/images/hi-res/510092VEA2A00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc740a030/images/hi-res/510092VEA2A00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Traditional Gold Bangle',
        category: 'Gold',
        categoryType: 'Bangles',
        price: 50000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf3be64cd/images/hi-res/51K4B1VDU1A00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf3be64cd/images/hi-res/51K4B1VDU1A00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Gold Bangle',
        category: 'Gold',
        categoryType: 'Bangles',
        price: 47000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe0c48a69/images/hi-res/51K4B1VDO1A00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe0c48a69/images/hi-res/51K4B1VDO1A00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Gold Bangle',
        category: 'Gold',
        categoryType: 'Bangles',
        price: 52000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbee01fd3/images/hi-res/51K4B1VDR1A00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbee01fd3/images/hi-res/51K4B1VDR1A00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Temple Gold Bangle',
        category: 'Gold',
        categoryType: 'Bangles',
        price: 62000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0283f76b/images/hi-res/51K4B1VDT1A00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0283f76b/images/hi-res/51K4B1VDT1A00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Gold Bangle',
        category: 'Gold',
        categoryType: 'Bangles',
        price: 48000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0283f76b/images/hi-res/51K4B1VDT1A00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0283f76b/images/hi-res/51K4B1VDT1A00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Textured Gold Bangle',
        category: 'Gold',
        categoryType: 'Bangles',
        price: 50000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw323f92e6/images/hi-res/51K4B1VDQ1A00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw323f92e6/images/hi-res/51K4B1VDQ1A00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Antique Gold Bangle',
        category: 'Gold',
        categoryType: 'Bangles',
        price: 54000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw08cdd57d/images/hi-res/512016VLX4B00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw08cdd57d/images/hi-res/512016VLX4B00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Minimalist Gold Bangle',
        category: 'Gold',
        categoryType: 'Bangles',
        price: 46000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw82d5bbea/images/hi-res/513220VKS2B00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw82d5bbea/images/hi-res/513220VKS2B00_2.jpg?sw=480&sh=480',
      },
      // Gold - Bracelets
      {
        name: 'Classic Gold Bracelet',
        category: 'Gold',
        categoryType: 'Bracelets',
        price: 25000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd501ad89/images/hi-res/51D4MPBEKAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd501ad89/images/hi-res/51D4MPBEKAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Gold Bracelet',
        category: 'Gold',
        categoryType: 'Bracelets',
        price: 27000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf9c71505/images/hi-res/51D1SCBCOAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf9c71505/images/hi-res/51D1SCBCOAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Gold Bracelet',
        category: 'Gold',
        categoryType: 'Bracelets',
        price: 29000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbe1c08ef/images/hi-res/51D3B1BGDAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbe1c08ef/images/hi-res/51D3B1BGDAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Gold Bracelet',
        category: 'Gold',
        categoryType: 'Bracelets',
        price: 26000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwea28b4f1/images/hi-res/51G4C1BBOAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwea28b4f1/images/hi-res/51G4C1BBOAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Gold Bracelet',
        category: 'Gold',
        categoryType: 'Bracelets',
        price: 30000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6551a486/images/hi-res/51D4C1BBTAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6551a486/images/hi-res/51D4C1BBTAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Charm Gold Bracelet',
        category: 'Gold',
        categoryType: 'Bracelets',
        price: 32000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw059d3926/images/hi-res/51G3PTBGQAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw059d3926/images/hi-res/51G3PTBGQAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Infinity Gold Bracelet',
        category: 'Gold',
        categoryType: 'Bracelets',
        price: 41000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw325ebd67/images/hi-res/51D1SCBCHAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw325ebd67/images/hi-res/51D1SCBCHAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Cuff Style Gold Bracelet',
        category: 'Gold',
        categoryType: 'Bracelets',
        price: 39000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3b2f4121/images/hi-res/51D1SCBCIAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3b2f4121/images/hi-res/51D1SCBCIAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Bold Gold Bracelet',
        category: 'Gold',
        categoryType: 'Bracelets',
        price: 45000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6b91faa8/images/hi-res/51D3C3BBBAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6b91faa8/images/hi-res/51D3C3BBBAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'stylish Gold Bracelet',
        category: 'Gold',
        categoryType: 'Bracelets',
        price: 45000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7dc543fa/images/hi-res/513219BUCAB00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7dc543fa/images/hi-res/513219BUCAB00_2.jpg?sw=480&sh=480',
      },
      //Gold - Earrings
      {
        name: 'Classic Gold Ring',
        category: 'Gold',
        categoryType: 'Rings',
        price: 35000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw516a3095/images/hi-res/50E2SRFALAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw516a3095/images/hi-res/50E2SRFALAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Gold Ring',
        category: 'Gold',
        categoryType: 'Rings',
        price: 37000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbe3356fd/images/hi-res/512760FGMAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbe3356fd/images/hi-res/512760FGMAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Gold Ring',
        category: 'Gold',
        categoryType: 'Rings',
        price: 39000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw78db8d04/images/hi-res/51G4B1FCSAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw78db8d04/images/hi-res/51G4B1FCSAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Gold Ring',
        category: 'Gold',
        categoryType: 'Rings',
        price: 36000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6c32c556/images/hi-res/50M4FFFCVAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6c32c556/images/hi-res/50M4FFFCVAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Gold Ring',
        category: 'Gold',
        categoryType: 'Rings',
        price: 41000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw853da909/images/hi-res/512619FBBAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw853da909/images/hi-res/512619FBBAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Diamond Gold Ring',
        category: 'Gold',
        categoryType: 'Rings',
        price: 47000,
        metel: 'Gold',
        price: 25000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3661af57/images/hi-res/502015FBJAA01_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3661af57/images/hi-res/502015FBJAA01_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Sleek Gold Band',
        category: 'Gold',
        categoryType: 'Rings',
        price: 32000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4d4c3ac2/images/hi-res/500494FWAAA02_2.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4d4c3ac2/images/hi-res/500494FWAAA02_1.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Dual-tone Rings',
        category: 'Gold',
        categoryType: 'Rings',
        price: 56000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw57ed153a/images/hi-res/51E2J1FAZAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw57ed153a/images/hi-res/51E2J1FAZAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Platinum Rings',
        category: 'Gold',
        categoryType: 'Rings',
        price: 61000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb598444c/images/hi-res/51E2J1FAMAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb598444c/images/hi-res/51E2J1FAMAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Rings',
        category: 'Gold',
        categoryType: 'Rings',
        price: 55000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfee56764/images/hi-res/51E2J1FATAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfee56764/images/hi-res/51E2J1FATAA00_2.jpg?sw=480&sh=480',
      },
      // Gold - Necklaces
      {
        name: 'Classic Gold Necklace',
        category: 'Gold',
        categoryType: 'Necklaces',
        price: 60000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8cb3dd2f/images/hi-res/513319NHCAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8cb3dd2f/images/hi-res/513319NHCAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Gold Necklace',
        category: 'Gold',
        categoryType: 'Necklaces',
        price: 62000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwed81a680/images/hi-res/512113NZIAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwed81a680/images/hi-res/512113NZIAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Gold Necklace',
        category: 'Gold',
        categoryType: 'Necklaces',
        price: 64000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf1b8f402/images/hi-res/511195NIGAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf1b8f402/images/hi-res/511195NIGAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Gold Necklace',
        category: 'Gold',
        categoryType: 'Necklaces',
        price: 61000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7ae4aba5/images/hi-res/511618NWKAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7ae4aba5/images/hi-res/511618NWKAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Gold Necklace',
        category: 'Gold',
        categoryType: 'Necklaces',
        price: 66000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3d3e2a62/images/hi-res/51D4C1NEYLA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3d3e2a62/images/hi-res/51D4C1NEYLA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Antique Gold Necklace',
        category: 'Gold',
        categoryType: 'Necklaces',
        price: 68000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2d607cff/images/hi-res/51D2FFNDUAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2d607cff/images/hi-res/51D2FFNDUAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Studded Gold Necklace',
        category: 'Gold',
        categoryType: 'Necklaces',
        price: 70000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb5fe97b8/images/hi-res/512313NCBAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb5fe97b8/images/hi-res/512313NCBAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Floral Gold Necklace',
        category: 'Gold',
        categoryType: 'Necklaces',
        price: 72000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcdcdc67a/images/hi-res/511209NAWAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcdcdc67a/images/hi-res/511209NAWAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Royal Gold Necklace',
        category: 'Gold',
        categoryType: 'Necklaces',
        price: 75000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4e56755e/images/hi-res/513218NNRAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4e56755e/images/hi-res/513218NNRAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Engraved Gold Necklace',
        category: 'Gold',
        categoryType: 'Necklaces',
        price: 73000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw16cc168d/images/hi-res/512814NKOAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw16cc168d/images/hi-res/512814NKOAA00_2.jpg?sw=480&sh=480',
      },
      // Gold - Kadas
      {
        name: 'Classic Gold Kada',
        category: 'Gold',
        categoryType: 'Kadas',
        price: 55000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1c25c506/images/hi-res/51G4B1VFK1A00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1c25c506/images/hi-res/51G4B1VFK1A00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Gold Kada',
        category: 'Gold',
        categoryType: 'Kadas',
        price: 57000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4a6b8f4d/images/hi-res/511819VSW1A00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4a6b8f4d/images/hi-res/511819VSW1A00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Gold Kada',
        category: 'Gold',
        categoryType: 'Kadas',
        price: 59000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4ded6b9a/images/hi-res/512621VFV1A00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4ded6b9a/images/hi-res/512621VFV1A00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Gold Kada',
        category: 'Gold',
        categoryType: 'Kadas',
        price: 56000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw18c989be/images/hi-res/512621VFX1A00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw18c989be/images/hi-res/512621VFX1A00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Gold Kada',
        category: 'Gold',
        categoryType: 'Kadas',
        price: 61000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbbfe5055/images/hi-res/512621VJF1A00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbbfe5055/images/hi-res/512621VJF1A00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Gold Kada',
        category: 'Gold',
        categoryType: 'Kadas',
        price: 55000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6eb85737/images/hi-res/512621VJD1A00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6eb85737/images/hi-res/512621VJD1A00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Gold Kada',
        category: 'Gold',
        categoryType: 'Kadas',
        price: 72000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe1cf6c89/images/hi-res/511178VGD1A00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe1cf6c89/images/hi-res/511178VGD1A00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Gold Kada',
        category: 'Gold',
        categoryType: 'Kadas',
        price: 64000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf2955902/images/hi-res/50G2I2VAG1A00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf2955902/images/hi-res/50G2I2VAG1A00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Temple Gold Kada',
        category: 'Gold',
        categoryType: 'Kadas',
        price: 78000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe1cf6c89/images/hi-res/511178VGD1A00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe1cf6c89/images/hi-res/511178VGD1A00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Royal Gold Kada',
        category: 'Gold',
        categoryType: 'Kadas',
        price: 68000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw225c4423/images/hi-res/512621VIZ1A00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw225c4423/images/hi-res/512621VIZ1A00_2.jpg?sw=480&sh=480',
      },
      // Gold - Jhumkas
      {
        name: 'Classic Gold Jhumkas',
        category: 'Gold',
        categoryType: 'Jhumkas',
        price: 25000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9b2cb1c1/images/hi-res/512218JPBABA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9b2cb1c1/images/hi-res/512218JPBABA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Gold Jhumkas',
        category: 'Gold',
        categoryType: 'Jhumkas',
        price: 27000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0aa57511/images/hi-res/51D3D2JBJABA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0aa57511/images/hi-res/51D3D2JBJABA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Gold Jhumkas',
        category: 'Gold',
        categoryType: 'Jhumkas',
        price: 29000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw870b2490/images/hi-res/51D3C3JKLABA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw870b2490/images/hi-res/51D3C3JKLABA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Gold Jhumkas',
        category: 'Gold',
        categoryType: 'Jhumkas',
        price: 26000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7cd5935d/images/hi-res/51D3C2JIYABA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7cd5935d/images/hi-res/51D3C2JIYABA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Gold Jhumkas',
        category: 'Gold',
        categoryType: 'Jhumkas',
        price: 31000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5f2db102/images/hi-res/51D3C2JIWABA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5f2db102/images/hi-res/51D3C2JIWABA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Antique Gold Jhumkas',
        category: 'Gold',
        categoryType: 'Jhumkas',
        price: 33000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7f87589f/images/hi-res/51D3D2JUIABA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7f87589f/images/hi-res/51D3D2JUIABA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Temple Gold Jhumkas',
        category: 'Gold',
        categoryType: 'Jhumkas',
        price: 35000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw83cc7b21/images/hi-res/515091JBMABA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw83cc7b21/images/hi-res/515091JBMABA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Royal Gold Jhumkas',
        category: 'Gold',
        categoryType: 'Jhumkas',
        price: 37000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw99dd29cf/images/hi-res/51D3C3JEQABA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw99dd29cf/images/hi-res/51D3C3JEQABA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Minimalist Gold Jhumkas',
        category: 'Gold',
        categoryType: 'Jhumkas',
        price: 28000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3e9550c5/images/hi-res/51D3D2JOGABA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3e9550c5/images/hi-res/51D3D2JOGABA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Diamond-Studded Gold Jhumkas',
        category: 'Gold',
        categoryType: 'Jhumkas',
        price: 45000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0e8c777e/images/hi-res/51D3C3JKPABA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0e8c777e/images/hi-res/51D3C3JKPABA00_2.jpg?sw=480&sh=480',
      },
      // Gold - Nose Pins
      {
        name: 'Classic Gold Nose Pin',
        category: 'Gold',
        categoryType: 'Nose Pins',
        price: 12000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf0f3bde3/images/hi-res/51D4A1OEEAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf0f3bde3/images/hi-res/51D4A1OEEAAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Gold Nose Pin',
        category: 'Gold',
        categoryType: 'Nose Pins',
        price: 14000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe75087d9/images/hi-res/51D4A1OEQAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe75087d9/images/hi-res/51D4A1OEQAAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Gold Nose Pin',
        category: 'Gold',
        categoryType: 'Nose Pins',
        price: 16000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6107f8e4/images/hi-res/51D4A1OEDAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6107f8e4/images/hi-res/51D4A1OEDAAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Gold Nose Pin',
        category: 'Gold',
        categoryType: 'Nose Pins',
        price: 13000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfe04e850/images/hi-res/51D4PLOLOAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfe04e850/images/hi-res/51D4PLOLOAAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Gold Nose Pin',
        category: 'Gold',
        categoryType: 'Nose Pins',
        price: 18000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw797b52ac/images/hi-res/51D4I1OGDAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw797b52ac/images/hi-res/51D4I1OGDAAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Antique Gold Nose Pin',
        category: 'Gold',
        categoryType: 'Nose Pins',
        price: 20000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw29e7c7fd/images/hi-res/51D4B1OJZAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw29e7c7fd/images/hi-res/51D4B1OJZAAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Temple Gold Nose Pin',
        category: 'Gold',
        categoryType: 'Nose Pins',
        price: 22000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw61d47cc0/images/hi-res/51D4A1OEGAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw61d47cc0/images/hi-res/51D4A1OEGAAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Royal Gold Nose Pin',
        category: 'Gold',
        categoryType: 'Nose Pins',
        price: 24000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe37990af/images/hi-res/51D4A1OKHAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe37990af/images/hi-res/51D4A1OKHAAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Minimalist Gold Nose Pin',
        category: 'Gold',
        categoryType: 'Nose Pins',
        price: 15000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7e656a6c/images/hi-res/51D4A1OEOAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7e656a6c/images/hi-res/51D4A1OEOAAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Diamond-Studded Gold Nose Pin',
        category: 'Gold',
        categoryType: 'Nose Pins',
        price: 30000,
        metel: 'Gold',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa979ba65/images/hi-res/51D4B1OJSAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa979ba65/images/hi-res/51D4B1OJSAAA00_2.jpg?sw=480&sh=480',
      },
      // Diamond - Bangles
      {
        name: 'Classic Diamond Bangle',
        category: 'Diamond',
        categoryType: 'Bangles',
        price: 75000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0f83224f/images/hi-res/50D4PLVJD1A02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0f83224f/images/hi-res/50D4PLVJD1A02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Diamond Bangle',
        category: 'Diamond',
        categoryType: 'Bangles',
        price: 77000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0fc0cc0c/images/hi-res/50D4C2VAF1A32_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0fc0cc0c/images/hi-res/50D4C2VAF1A32_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Diamond Bangle',
        category: 'Diamond',
        categoryType: 'Bangles',
        price: 79000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw97ae25ac/images/hi-res/50O4M1VGTAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw97ae25ac/images/hi-res/50O4M1VGTAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Diamond Bangle',
        category: 'Diamond',
        categoryType: 'Bangles',
        price: 76000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwefb54f47/images/hi-res/50M4FFVCY1A02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwefb54f47/images/hi-res/50M4FFVCY1A02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Diamond Bangle',
        category: 'Diamond',
        categoryType: 'Bangles',
        price: 81000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw65686f49/images/hi-res/50D4C1VYA1A02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw65686f49/images/hi-res/50D4C1VYA1A02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Diamond Bangle',
        category: 'Diamond',
        categoryType: 'Bangles',
        price: 75000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe31e44e9/images/hi-res/50D4C1VMQ1A02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe31e44e9/images/hi-res/50D4C1VMQ1A02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Diamond Bangle',
        category: 'Diamond',
        categoryType: 'Bangles',
        price: 78000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw743710e0/images/hi-res/50D4FFVCR1A32_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw743710e0/images/hi-res/50D4FFVCR1A32_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Diamond Bangle',
        category: 'Diamond',
        categoryType: 'Bangles',
        price: 82000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb53e6f72/images/hi-res/50D4I2VOT1A02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb53e6f72/images/hi-res/50D4I2VOT1A02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Royal Diamond Bangle',
        category: 'Diamond',
        categoryType: 'Bangles',
        price: 86000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf736d190/images/hi-res/50D4I2VAX1A02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf736d190/images/hi-res/50D4I2VAX1A02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Antique Diamond Bangle',
        category: 'Diamond',
        categoryType: 'Bangles',
        price: 90000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4eb318ec/images/hi-res/50D4B3VOR1A09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4eb318ec/images/hi-res/50D4B3VOR1A09_2.jpg?sw=480&sh=480',
      },
      // Diamond - Bracelets
      {
        name: 'Classic Diamond Bracelet',
        category: 'Diamond',
        categoryType: 'Bracelets',
        price: 65000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwabbf8d88/images/hi-res/50D2PTBOZAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwabbf8d88/images/hi-res/50D2PTBOZAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Diamond Bracelet',
        category: 'Diamond',
        categoryType: 'Bracelets',
        price: 67000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '22K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa3841e6a/images/hi-res/50D3FFBKMAA32_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa3841e6a/images/hi-res/50D3FFBKMAA32_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Diamond Bracelet',
        category: 'Diamond',
        categoryType: 'Bracelets',
        price: 69000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb1222b37/images/hi-res/50D4C1BMXAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb1222b37/images/hi-res/50D4C1BMXAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Diamond Bracelet',
        category: 'Diamond',
        categoryType: 'Bracelets',
        price: 66000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw001c9f67/images/hi-res/50D4C1BNFAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw001c9f67/images/hi-res/50D4C1BNFAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Diamond Bracelet',
        category: 'Diamond',
        categoryType: 'Bracelets',
        price: 71000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa0e0ffd7/images/hi-res/50D4FFBCKAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa0e0ffd7/images/hi-res/50D4FFBCKAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Diamond Bracelet',
        category: 'Diamond',
        categoryType: 'Bracelets',
        price: 65000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc86a64e9/images/hi-res/50D3FFBBCAA10_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc86a64e9/images/hi-res/50D3FFBBCAA10_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Diamond Bracelet',
        category: 'Diamond',
        categoryType: 'Bracelets',
        price: 70000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe0a6a752/images/Mia/hi-res/3824BFT_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe0a6a752/images/Mia/hi-res/3824BFT_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Studded Diamond Bracelet',
        category: 'Diamond',
        categoryType: 'Bracelets',
        price: 74000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw47a37b3b/images/Mia/hi-res/3822BPA_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw47a37b3b/images/Mia/hi-res/3822BPA_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Chic Diamond Bracelet',
        category: 'Diamond',
        categoryType: 'Bracelets',
        price: 72000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwad04762b/images/hi-res/4922BFV_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwad04762b/images/hi-res/4922BFV_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Royal Diamond Bracelet',
        category: 'Diamond',
        categoryType: 'Bracelets',
        price: 77000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1a7ec921/images/hi-res/50D4I2BKGAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1a7ec921/images/hi-res/50D4I2BKGAA02_2.jpg?sw=480&sh=480',
      },
      // Diamond - Earrings
      {
        name: 'Classic Diamond Earrings',
        category: 'Diamond',
        categoryType: 'Earings',
        price: 50000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd49ea5b8/images/hi-res/50D1D2SJZAGA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd49ea5b8/images/hi-res/50D1D2SJZAGA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Diamond Earrings',
        category: 'Diamond',
        categoryType: 'Earings',
        price: 52000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa03d445a/images/hi-res/501770SAUAGA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa03d445a/images/hi-res/501770SAUAGA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Diamond Earrings',
        category: 'Diamond',
        categoryType: 'Earings',
        price: 54000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7068e6c5/images/hi-res/503117SCUAGB02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7068e6c5/images/hi-res/503117SCUAGB02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Diamond Earrings',
        category: 'Diamond',
        categoryType: 'Earings',
        price: 51000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe2f4b97b/images/hi-res/50D4B3DOKAAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe2f4b97b/images/hi-res/50D4B3DOKAAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Diamond Earrings',
        category: 'Diamond',
        categoryType: 'Earings',
        price: 56000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2ddbf419/images/hi-res/50D4I1HFQAAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2ddbf419/images/hi-res/50D4I1HFQAAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Diamond Earrings',
        category: 'Diamond',
        categoryType: 'Earings',
        price: 50000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd5a755c9/images/hi-res/50D4PLSSNABA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd5a755c9/images/hi-res/50D4PLSSNABA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Diamond Earrings',
        category: 'Diamond',
        categoryType: 'Earings',
        price: 54000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw815f7dcf/images/hi-res/50D4B3HPIAAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw815f7dcf/images/hi-res/50D4B3HPIAAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Diamond Earrings',
        category: 'Diamond',
        categoryType: 'Earings',
        price: 58000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw987a0bfe/images/hi-res/50K4I1SIJAGA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw987a0bfe/images/hi-res/50K4I1SIJAGA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Royal Diamond Earrings',
        category: 'Diamond',
        categoryType: 'Earings',
        price: 60000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfe6268bf/images/hi-res/50K4I1SIOAGA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfe6268bf/images/hi-res/50K4I1SIOAGA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Antique Diamond Earrings',
        category: 'Diamond',
        categoryType: 'Earings',
        price: 62000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcec6b27b/images/hi-res/50D4A1SLRADA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcec6b27b/images/hi-res/50D4A1SLRADA02_2.jpg?sw=480&sh=480',
      },
      // Diamond - Rings
      {
        name: 'Classic Diamond Ring',
        category: 'Diamond',
        categoryType: 'Rings',
        price: 85000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb5993a41/images/hi-res/50D4B3FOSAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb5993a41/images/hi-res/50D4B3FOSAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Diamond Ring',
        category: 'Diamond',
        categoryType: 'Rings',
        price: 87000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwffe02e64/images/hi-res/50D4FFFCAAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwffe02e64/images/hi-res/50D4FFFCAAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Diamond Ring',
        category: 'Diamond',
        categoryType: 'Rings',
        price: 89000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3ff0830f/images/hi-res/50D2PTFYXAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3ff0830f/images/hi-res/50D2PTFYXAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Diamond Ring',
        category: 'Diamond',
        categoryType: 'Rings',
        price: 86000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfd996d94/images/hi-res/501145FAAAC02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfd996d94/images/hi-res/501145FAAAC02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Diamond Ring',
        category: 'Diamond',
        categoryType: 'Rings',
        price: 91000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfc9a7a72/images/hi-res/50D3FFFKSAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfc9a7a72/images/hi-res/50D3FFFKSAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Diamond Ring',
        category: 'Diamond',
        categoryType: 'Rings',
        price: 85000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw42391ecf/images/hi-res/500816FOAAB02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw42391ecf/images/hi-res/500816FOAAB02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Diamond Ring',
        category: 'Diamond',
        categoryType: 'Rings',
        price: 90000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwec436583/images/hi-res/502015FDHAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwec436583/images/hi-res/502015FDHAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Diamond Ring',
        category: 'Diamond',
        categoryType: 'Rings',
        price: 95000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw696d5e3f/images/hi-res/50D4A1FIFAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw696d5e3f/images/hi-res/50D4A1FIFAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Royal Diamond Ring',
        category: 'Diamond',
        categoryType: 'Rings',
        price: 98000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd1cf1ed0/images/hi-res/50D4C1FPVAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd1cf1ed0/images/hi-res/50D4C1FPVAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Antique Diamond Ring',
        category: 'Diamond',
        categoryType: 'Rings',
        price: 100000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6c32c556/images/hi-res/50M4FFFCVAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6c32c556/images/hi-res/50M4FFFCVAA02_2.jpg?sw=480&sh=480',
      },
      // Diamond - Mangalsutras
      {
        name: 'Classic Diamond Mangalsutra',
        category: 'Diamond',
        categoryType: 'Mangalsutras',
        price: 98000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc6dd1be3/images/hi-res/50D4H2YAEAA02_2.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc6dd1be3/images/hi-res/50D4H2YAEAA02_1.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Diamond Mangalsutra',
        category: 'Diamond',
        categoryType: 'Mangalsutras',
        price: 100000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw817a5e73/images/hi-res/50M4MSYBGAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw817a5e73/images/hi-res/50M4MSYBGAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Diamond Mangalsutra',
        category: 'Diamond',
        categoryType: 'Mangalsutras',
        price: 102000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw35f7349c/images/hi-res/50M4MSYBDAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw35f7349c/images/hi-res/50M4MSYBDAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Diamond Mangalsutra',
        category: 'Diamond',
        categoryType: 'Mangalsutras',
        price: 99000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw97d88c79/images/hi-res/50M4MSYAHAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw97d88c79/images/hi-res/50M4MSYAHAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Diamond Mangalsutra',
        category: 'Diamond',
        categoryType: 'Mangalsutras',
        price: 105000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw16fdb992/images/hi-res/50M4MSYBOAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw16fdb992/images/hi-res/50M4MSYBOAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Diamond Mangalsutra',
        category: 'Diamond',
        categoryType: 'Mangalsutras',
        price: 98000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7340799e/images/hi-res/50M4MSYBFAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7340799e/images/hi-res/50M4MSYBFAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Diamond Mangalsutra',
        category: 'Diamond',
        categoryType: 'Mangalsutras',
        price: 102000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3f1d2f0d/images/hi-res/50M4MSYBBAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3f1d2f0d/images/hi-res/50M4MSYBBAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Diamond Mangalsutra',
        category: 'Diamond',
        categoryType: 'Mangalsutras',
        price: 110000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6136a7a1/images/hi-res/50M4MSYBNAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6136a7a1/images/hi-res/50M4MSYBNAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Royal Diamond Mangalsutra',
        category: 'Diamond',
        categoryType: 'Mangalsutras',
        price: 115000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwdc678c75/images/hi-res/50M4MSYBQAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwdc678c75/images/hi-res/50M4MSYBQAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Antique Diamond Mangalsutra',
        category: 'Diamond',
        categoryType: 'Mangalsutras',
        price: 118000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw217430f1/images/hi-res/50D4I2YIDAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw217430f1/images/hi-res/50D4I2YIDAA02_2.jpg?sw=480&sh=480',
      },
      // Diamond - Necklace Set
      {
        name: 'Classic Diamond Necklace Set',
        category: 'Diamond',
        categoryType: 'Necklace Set',
        price: 120000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw24637c6e/images/hi-res/50D4B32NXABA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw24637c6e/images/hi-res/50D4B32NXABA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Diamond Necklace Set',
        category: 'Diamond',
        categoryType: 'Necklace Set',
        price: 122000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe5424904/images/hi-res/50D4B32NRABA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe5424904/images/hi-res/50D4B32NRABA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Diamond Necklace Set',
        category: 'Diamond',
        categoryType: 'Necklace Set',
        price: 124000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw76facf7e/images/hi-res/50O4MP2BBDBA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw76facf7e/images/hi-res/50O4MP2BBDBA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Diamond Necklace Set',
        category: 'Diamond',
        categoryType: 'Necklace Set',
        price: 121000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe81edcfb/images/hi-res/50O4MP2BCDBA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe81edcfb/images/hi-res/50O4MP2BCDBA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Diamond Necklace Set',
        category: 'Diamond',
        categoryType: 'Necklace Set',
        price: 126000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw888fd1b7/images/hi-res/50O4MP2BADBA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw888fd1b7/images/hi-res/50O4MP2BADBA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Diamond Necklace Set',
        category: 'Diamond',
        categoryType: 'Necklace Set',
        price: 120000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd5f2fdb4/images/hi-res/50O4MP2BEDBA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd5f2fdb4/images/hi-res/50O4MP2BEDBA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Diamond Necklace Set',
        category: 'Diamond',
        categoryType: 'Necklace Set',
        price: 125000,
        metel: 'Diamond',
        brand: 'Mia',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9fd2d8ec/images/hi-res/50O4MP2ACDBA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9fd2d8ec/images/hi-res/50O4MP2ACDBA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Diamond Necklace Set',
        category: 'Diamond',
        categoryType: 'Necklace Set',
        price: 130000,
        metel: 'Diamond',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7f524414/images/hi-res/50O4MP2AKDGA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7f524414/images/hi-res/50O4MP2AKDGA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Royal Diamond Necklace Set',
        category: 'Diamond',
        categoryType: 'Necklace Set',
        price: 135000,
        metel: 'Diamond',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa00aa6bd/images/hi-res/50O4DW2BEDBA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa00aa6bd/images/hi-res/50O4DW2BEDBA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Antique Diamond Necklace Set',
        category: 'Diamond',
        categoryType: 'Necklace Set',
        price: 140000,
        metel: 'Diamond',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwece49c25/images/hi-res/50O4SP2AUDBA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwece49c25/images/hi-res/50O4SP2AUDBA09_2.jpg?sw=480&sh=480',
      },
      // Diamond - Nose Pins
      {
        name: 'Classic Diamond Nose Pin',
        category: 'Diamond',
        categoryType: 'Nose Pins',
        price: 20000,
        metel: 'Diamond',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw595af550/images/hi-res/502990OABAAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw595af550/images/hi-res/502990OABAAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Diamond Nose Pin',
        category: 'Diamond',
        categoryType: 'Nose Pins',
        price: 22000,
        metel: 'Diamond',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw339f583f/images/hi-res/501191OAEAAB02_2.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw339f583f/images/hi-res/501191OAEAAB02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Diamond Nose Pin',
        category: 'Diamond',
        categoryType: 'Nose Pins',
        price: 24000,
        metel: 'Diamond',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw87414f47/images/hi-res/501770OAVABA01_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw87414f47/images/hi-res/501770OAVABA01_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Diamond Nose Pin',
        category: 'Diamond',
        categoryType: 'Nose Pins',
        price: 21000,
        metel: 'Diamond',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9662c094/images/hi-res/501191OABABB02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9662c094/images/hi-res/501191OABABB02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Diamond Nose Pin',
        category: 'Diamond',
        categoryType: 'Nose Pins',
        price: 26000,
        metel: 'Diamond',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw22110272/images/hi-res/502990OADAAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw22110272/images/hi-res/502990OADAAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Diamond Nose Pin',
        category: 'Diamond',
        categoryType: 'Nose Pins',
        price: 20000,
        metel: 'Diamond',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfa12b846/images/hi-res/500063OLAAAC01_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfa12b846/images/hi-res/500063OLAAAC01_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Diamond Nose Pin',
        category: 'Diamond',
        categoryType: 'Nose Pins',
        price: 22000,
        metel: 'Diamond',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7276bed0/images/hi-res/501191OAHAAB02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7276bed0/images/hi-res/501191OAHAAB02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Diamond Nose Pin',
        category: 'Diamond',
        categoryType: 'Nose Pins',
        price: 25000,
        metel: 'Diamond',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe9b1b248/images/hi-res/502117OEXAAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe9b1b248/images/hi-res/502117OEXAAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Royal Diamond Nose Pin',
        category: 'Diamond',
        categoryType: 'Nose Pins',
        price: 27000,
        metel: 'Diamond',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfea5d68b/images/hi-res/500063OLAAAC02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfea5d68b/images/hi-res/500063OLAAAC02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Antique Diamond Nose Pin',
        category: 'Diamond',
        categoryType: 'Nose Pins',
        price: 30000,
        metel: 'Diamond',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb7059f8c/images/hi-res/500063OJAAAB09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb7059f8c/images/hi-res/500063OJAAAB09_2.jpg?sw=480&sh=480',
      },
      // Diamond - Pendants
      {
        name: 'Classic Diamond Pendant',
        category: 'Diamond',
        categoryType: 'Pendants',
        price: 35000,
        metel: 'Diamond',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6bb7d730/images/hi-res/50D4I1PYGAAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6bb7d730/images/hi-res/50D4I1PYGAAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Diamond Pendant',
        category: 'Diamond',
        categoryType: 'Pendants',
        price: 37000,
        metel: 'Diamond',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd3bda2ec/images/hi-res/50D4I2PLQAAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd3bda2ec/images/hi-res/50D4I2PLQAAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Diamond Pendant',
        category: 'Diamond',
        categoryType: 'Pendants',
        price: 39000,
        metel: 'Diamond',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8cdb2ed7/images/hi-res/50D4I1PBVAAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8cdb2ed7/images/hi-res/50D4I1PBVAAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Diamond Pendant',
        category: 'Diamond',
        categoryType: 'Pendants',
        price: 36000,
        metel: 'Diamond',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw31fee6f9/images/hi-res/50K4I1PJOAAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw31fee6f9/images/hi-res/50K4I1PJOAAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Diamond Pendant',
        category: 'Diamond',
        categoryType: 'Pendants',
        price: 41000,
        metel: 'Diamond',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa9ee7925/images/hi-res/50K4I1PKDAAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa9ee7925/images/hi-res/50K4I1PKDAAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Diamond Pendant',
        category: 'Diamond',
        categoryType: 'Pendants',
        price: 35000,
        metel: 'Diamond',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc71c4e30/images/hi-res/50K4I1PKEAAA09_2.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc71c4e30/images/hi-res/50K4I1PKEAAA09_1.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Diamond Pendant',
        category: 'Diamond',
        categoryType: 'Pendants',
        price: 38000,
        metel: 'Diamond',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6c97c695/images/hi-res/50K4I1PKAAAA09_2.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6c97c695/images/hi-res/50K4I1PKAAAA09_1.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Diamond Pendant',
        category: 'Diamond',
        categoryType: 'Pendants',
        price: 42000,
        metel: 'Diamond',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3b66cb1e/images/hi-res/50F4I1PALAAA32_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3b66cb1e/images/hi-res/50F4I1PALAAA32_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Royal Diamond Pendant',
        category: 'Diamond',
        categoryType: 'Pendants',
        price: 45000,
        metel: 'Diamond',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1d57c52b/images/hi-res/50D4I2PMCAAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1d57c52b/images/hi-res/50D4I2PMCAAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Antique Diamond Pendant',
        category: 'Diamond',
        categoryType: 'Pendants',
        price: 48000,
        metel: 'Diamond',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa565e927/images/hi-res/50K4B11FGAGA32_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa565e927/images/hi-res/50K4B11FGAGA32_2.jpg?sw=480&sh=480',
      },
      // Earrings - All Earrings
      {
        name: 'Classic Diamond Earrings',
        category: 'Earrings',
        categoryType: 'All Earings',
        price: 50000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwca6cb885/images/hi-res/504022SGGAGA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwca6cb885/images/hi-res/504022SGGAGA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Gold Earrings',
        category: 'Earrings',
        categoryType: 'All Earings',
        price: 52000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3f336c39/images/hi-res/50K4I1SIRAGA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3f336c39/images/hi-res/50K4I1SIRAGA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Pearl Earrings',
        category: 'Earrings',
        categoryType: 'All Earings',
        price: 54000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd5b8f1d6/images/hi-res/504022SGFAGA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd5b8f1d6/images/hi-res/504022SGFAGA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Platinum Earrings',
        category: 'Earrings',
        categoryType: 'All Earings',
        price: 51000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0fd34656/images/hi-res/500760SMAAGA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0fd34656/images/hi-res/500760SMAAGA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Kundan Earrings',
        category: 'Earrings',
        categoryType: 'All Earings',
        price: 56000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe2f4b97b/images/hi-res/50D4B3DOKAAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe2f4b97b/images/hi-res/50D4B3DOKAAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Diamond Earrings',
        category: 'Earrings',
        categoryType: 'All Earrings',
        price: 50000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw94dedc9c/images/hi-res/50K4I1SHMAGA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw94dedc9c/images/hi-res/50K4I1SHMAGA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Gold Earrings',
        category: 'Earrings',
        categoryType: 'All Earrings',
        price: 52000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfe83b185/images/hi-res/50DFB1DASADA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfe83b185/images/hi-res/50DFB1DASADA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Pearl Earrings',
        category: 'Earrings',
        categoryType: 'All Earrings',
        price: 54000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5fef7a96/images/hi-res/50DFF1DACADA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5fef7a96/images/hi-res/50DFF1DACADA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Royal Emerald Earrings',
        category: 'Earrings',
        categoryType: 'All Earrings',
        price: 56000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb042ec61/images/hi-res/50K4I1HLIAAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb042ec61/images/hi-res/50K4I1HLIAAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Antique Silver Earrings',
        category: 'Earrings',
        categoryType: 'All Earrings',
        price: 58000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw61161d53/images/hi-res/50K4I1SDVAGA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw61161d53/images/hi-res/50K4I1SDVAGA09_2.jpg?sw=480&sh=480',
      },
      // Earrings - Drop & Danglers
      {
        name: 'Classic Drop Earrings',
        category: 'Earrings',
        categoryType: 'Drop & Danglers',
        price: 60000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw315dce27/images/hi-res/50DFB1DAMADB32_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw315dce27/images/hi-res/50DFB1DAMADB32_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Royal Emerald Earrings',
        category: 'Earrings',
        categoryType: 'Drop & Danglers',
        price: 56000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb042ec61/images/hi-res/50K4I1HLIAAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb042ec61/images/hi-res/50K4I1HLIAAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Diamond Drop Earrings',
        category: 'Earrings',
        categoryType: 'Drop & Danglers',
        price: 64000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw56175126/images/hi-res/51D4MPDCZADA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw56175126/images/hi-res/51D4MPDCZADA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Pearl Earrings',
        category: 'Earrings',
        categoryType: 'Drop & Danglers',
        price: 54000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5fef7a96/images/hi-res/50DFF1DACADA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5fef7a96/images/hi-res/50DFF1DACADA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Gold Drop Earrings',
        category: 'Earrings',
        categoryType: 'Drop & Danglers',
        price: 66000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5a42ca2c/images/hi-res/51O4C1DBGABAP3_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5a42ca2c/images/hi-res/51O4C1DBGABAP3_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Drop Earrings',
        category: 'Earrings',
        categoryType: 'Drop & Danglers',
        price: 60000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5d7aad9f/images/hi-res/511721DQNABA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5d7aad9f/images/hi-res/511721DQNABA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Diamond Drop Earrings',
        category: 'Earrings',
        categoryType: 'Drop & Danglers',
        price: 62000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf4afba2d/images/hi-res/51W4GKDBQABAP3_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf4afba2d/images/hi-res/51W4GKDBQABAP3_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Pearl Drop Earrings',
        category: 'Earrings',
        categoryType: 'Drop & Danglers',
        price: 64000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf15e2441/images/hi-res/51W4GKDBGABAP3_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf15e2441/images/hi-res/51W4GKDBGABAP3_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Royal Gold Drop Earrings',
        category: 'Earrings',
        categoryType: 'Drop & Danglers',
        price: 66000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc5506b1f/images/hi-res/51M3PTDEUAAAP1_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc5506b1f/images/hi-res/51M3PTDEUAAAP1_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Antique Silver Drop Earrings',
        category: 'Earrings',
        categoryType: 'Drop & Danglers',
        price: 68000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf246b3c2/images/hi-res/51D4B1DIFABACZ_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf246b3c2/images/hi-res/51D4B1DIFABACZ_2.jpg?sw=480&sh=480',
      },
      // Earrings - Hoop & Huggies
      {
        name: 'Classic Gold Hoops',
        category: 'Earrings',
        categoryType: 'Hoop & Huggies',
        price: 45000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw00b30440/images/hi-res/502118HARABB09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw00b30440/images/hi-res/502118HARABB09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Diamond Hoops',
        category: 'Earrings',
        categoryType: 'Hoop & Huggies',
        price: 47000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6346254c/images/hi-res/50D4B3HJVAAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6346254c/images/hi-res/50D4B3HJVAAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Pearl Huggies',
        category: 'Earrings',
        categoryType: 'Hoop & Huggies',
        price: 49000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf347563d/images/hi-res/50D4C1HLKAAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf347563d/images/hi-res/50D4C1HLKAAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Diamond Huggies',
        category: 'Earrings',
        categoryType: 'Hoop & Huggies',
        price: 46000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw522ed60b/images/hi-res/50D4I1HFQAAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw522ed60b/images/hi-res/50D4I1HFQAAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Kundan Hoops',
        category: 'Earrings',
        categoryType: 'Hoop & Huggies',
        price: 51000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7c18819d/images/hi-res/50K4I1HLCAAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7c18819d/images/hi-res/50K4I1HLCAAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Gold Hoops',
        category: 'Earrings',
        categoryType: 'Hoop & Huggies',
        price: 45000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbfa6be54/images/hi-res/50K4I1HLXAAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbfa6be54/images/hi-res/50K4I1HLXAAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Diamond Hoops',
        category: 'Earrings',
        categoryType: 'Hoop & Huggies',
        price: 47000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwca483507/images/hi-res/50K4I1HLKAAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwca483507/images/hi-res/50K4I1HLKAAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Pearl Hoops',
        category: 'Earrings',
        categoryType: 'Hoop & Huggies',
        price: 49000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw39aacbac/images/hi-res/503220HQTAAAP5_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw39aacbac/images/hi-res/503220HQTAAAP5_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Royal Gold Huggies',
        category: 'Earrings',
        categoryType: 'Hoop & Huggies',
        price: 51000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb042ec61/images/hi-res/50K4I1HLIAAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb042ec61/images/hi-res/50K4I1HLIAAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Antique Silver Hoops',
        category: 'Earrings',
        categoryType: 'Hoop & Huggies',
        price: 53000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6b4f4e20/images/hi-res/50K4I1HLMAAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6b4f4e20/images/hi-res/50K4I1HLMAAA02_2.jpg?sw=480&sh=480',
      },
      // Earrings - Jhumkas
      {
        name: 'Classic Gold Jhumkas',
        category: 'Earrings',
        categoryType: 'Jhumkas',
        price: 25000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9b2cb1c1/images/hi-res/512218JPBABA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9b2cb1c1/images/hi-res/512218JPBABA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Gold Jhumkas',
        category: 'Earrings',
        categoryType: 'Jhumkas',
        price: 27000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0aa57511/images/hi-res/51D3D2JBJABA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0aa57511/images/hi-res/51D3D2JBJABA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer  Jhumkas',
        category: 'Earrings',
        categoryType: 'Jhumkas',
        price: 29000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw870b2490/images/hi-res/51D3C3JKLABA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw870b2490/images/hi-res/51D3C3JKLABA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Gold Jhumkas',
        category: 'Earrings',
        categoryType: 'Jhumkas',
        price: 26000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7cd5935d/images/hi-res/51D3C2JIYABA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7cd5935d/images/hi-res/51D3C2JIYABA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Gold Jhumkas',
        category: 'Earrings',
        categoryType: 'Jhumkas',
        price: 31000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5f2db102/images/hi-res/51D3C2JIWABA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5f2db102/images/hi-res/51D3C2JIWABA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Antique Gold Jhumkas',
        category: 'Earrings',
        categoryType: 'Jhumkas',
        price: 33000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7f87589f/images/hi-res/51D3D2JUIABA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7f87589f/images/hi-res/51D3D2JUIABA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Temple Gold Jhumkas',
        category: 'Earrings',
        categoryType: 'Jhumkas',
        price: 35000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw83cc7b21/images/hi-res/515091JBMABA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw83cc7b21/images/hi-res/515091JBMABA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Royal Gold Jhumkas',
        category: 'Earrings',
        categoryType: 'Jhumkas',
        price: 37000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw99dd29cf/images/hi-res/51D3C3JEQABA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw99dd29cf/images/hi-res/51D3C3JEQABA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Minimalist Gold Jhumkas',
        category: 'Earrings',
        categoryType: 'Jhumkas',
        price: 28000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3e9550c5/images/hi-res/51D3D2JOGABA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3e9550c5/images/hi-res/51D3D2JOGABA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Diamond-Studded Gold Jhumkas',
        category: 'Earrings',
        categoryType: 'Jhumkas',
        price: 45000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0e8c777e/images/hi-res/51D3C3JKPABA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0e8c777e/images/hi-res/51D3C3JKPABA00_2.jpg?sw=480&sh=480',
      },
      // Earrings - Studs & Top
      {
        name: 'Classic Diamond Studs',
        category: 'Earrings',
        categoryType: 'Studs & Top',
        price: 55000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw24277eea/images/hi-res/50K4I1SDRAGA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw24277eea/images/hi-res/50K4I1SDRAGA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Gold Studs',
        category: 'Earrings',
        categoryType: 'Studs & Top',
        price: 57000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2ca80241/images/hi-res/50K4I1SHTAGA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2ca80241/images/hi-res/50K4I1SHTAGA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Pearl Tops',
        category: 'Earrings',
        categoryType: 'Studs & Top',
        price: 59000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw61161d53/images/hi-res/50K4I1SDVAGA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw61161d53/images/hi-res/50K4I1SDVAGA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Platinum Studs',
        category: 'Earrings',
        categoryType: 'Studs & Top',
        price: 56000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw934f0a95/images/hi-res/50K4I1SHZAGA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw934f0a95/images/hi-res/50K4I1SHZAGA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Kundan Tops',
        category: 'Earrings',
        categoryType: 'Studs & Top',
        price: 61000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe95ae31a/images/hi-res/50K4I1SIHAGA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe95ae31a/images/hi-res/50K4I1SIHAGA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Diamond Studs',
        category: 'Earrings',
        categoryType: 'Studs & Top',
        price: 55000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw76f9bead/images/hi-res/50K4B1SCAAGA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw76f9bead/images/hi-res/50K4B1SCAAGA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Gold Studs',
        category: 'Earrings',
        categoryType: 'Studs & Top',
        price: 57000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw895ee9f0/images/hi-res/50K4I1SHVAGA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw895ee9f0/images/hi-res/50K4I1SHVAGA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Pearl Studs',
        category: 'Earrings',
        categoryType: 'Studs & Top',
        price: 59000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw23699882/images/hi-res/50K4I1SIPAGA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw23699882/images/hi-res/50K4I1SIPAGA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Royal Ruby Studs',
        category: 'Earrings',
        categoryType: 'Studs & Top',
        price: 61000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2e1c286a/images/hi-res/50K4I1SEBAGA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2e1c286a/images/hi-res/50K4I1SEBAGA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Antique Silver Studs',
        category: 'Earrings',
        categoryType: 'Studs & Top',
        price: 63000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw207af024/images/hi-res/51D4C2SESABA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw207af024/images/hi-res/51D4C2SESABA00_2.jpg?sw=480&sh=480',
      },
      // Rings - All Rings
      {
        name: 'Classic Gold Ring',
        category: 'Rings',
        categoryType: 'All Rings',
        price: 35000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe4bf267c/images/hi-res/510122FAAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe4bf267c/images/hi-res/510122FAAAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Diamond Ring',
        category: 'Rings',
        categoryType: 'All Rings',
        price: 37000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw696d5e3f/images/hi-res/50D4A1FIFAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw696d5e3f/images/hi-res/50D4A1FIFAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Platinum Ring',
        category: 'Rings',
        categoryType: 'All Rings',
        price: 39000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb8d2e148/images/hi-res/50D3FFFKQAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb8d2e148/images/hi-res/50D3FFFKQAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Silver Ring',
        category: 'Rings',
        categoryType: 'All Rings',
        price: 36000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwaaf044ac/images/hi-res/50DFY1FAFAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwaaf044ac/images/hi-res/50DFY1FAFAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Kundan Ring',
        category: 'Rings',
        categoryType: 'All Rings',
        price: 41000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw330d185d/images/hi-res/50E4SRFANA737_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw330d185d/images/hi-res/50E4SRFANA737_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Gold Ring',
        category: 'Rings',
        categoryType: 'All Rings',
        price: 35000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbacc99b1/images/hi-res/50E4SRFAKA137_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbacc99b1/images/hi-res/50E4SRFAKA137_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Diamond Ring',
        category: 'Rings',
        categoryType: 'All Rings',
        price: 37000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7af8c909/images/hi-res/50E4SRFAMA437_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7af8c909/images/hi-res/50E4SRFAMA437_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Platinum Ring',
        category: 'Rings',
        categoryType: 'All Rings',
        price: 39000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb9931d9a/images/hi-res/50E4SRFAQA937_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb9931d9a/images/hi-res/50E4SRFAQA937_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Royal Ruby Ring',
        category: 'Rings',
        categoryType: 'All Rings',
        price: 41000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw40c286ff/images/hi-res/50E4SRFBA2137_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw40c286ff/images/hi-res/50E4SRFBA2137_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Antique Silver Ring',
        category: 'Rings',
        categoryType: 'All Rings',
        price: 43000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw810d8c46/images/hi-res/50E4SRFBC2137_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw810d8c46/images/hi-res/50E4SRFBC2137_2.jpg?sw=480&sh=480',
      },
      // Rings - Casual Rings
      {
        name: 'Classic Casual Ring',
        category: 'Rings',
        categoryType: 'Casual Rings',
        price: 25000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw516a3095/images/hi-res/50E2SRFALAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw516a3095/images/hi-res/50E2SRFALAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Everyday Ring',
        category: 'Rings',
        categoryType: 'Casual Rings',
        price: 27000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbe3356fd/images/hi-res/512760FGMAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbe3356fd/images/hi-res/512760FGMAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Fashion Ring',
        category: 'Rings',
        categoryType: 'Casual Rings',
        price: 29000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw88a54f66/images/hi-res/50G4I1FBBAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw88a54f66/images/hi-res/50G4I1FBBAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Trendy Ring',
        category: 'Rings',
        categoryType: 'Casual Rings',
        price: 26000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7d975970/images/hi-res/513117FKYAA01_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7d975970/images/hi-res/513117FKYAA01_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Statement Ring',
        category: 'Rings',
        categoryType: 'Casual Rings',
        price: 31000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw853da909/images/hi-res/512619FBBAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw853da909/images/hi-res/512619FBBAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Casual Ring',
        category: 'Rings',
        categoryType: 'Casual Rings',
        price: 25000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3661af57/images/hi-res/502015FBJAA01_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3661af57/images/hi-res/502015FBJAA01_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Trendy Gold Casual Ring',
        category: 'Rings',
        categoryType: 'Casual Rings',
        price: 26000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwec915557/images/hi-res/501145FAWAB04_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwec915557/images/hi-res/501145FAWAB04_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Minimalist Diamond Casual Ring',
        category: 'Rings',
        categoryType: 'Casual Rings',
        price: 27000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4b60dd11/images/hi-res/502117FECAB09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4b60dd11/images/hi-res/502117FECAB09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Stylish Silver Casual Ring',
        category: 'Rings',
        categoryType: 'Casual Rings',
        price: 28000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8067ee13/images/hi-res/51E4G2FCBAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8067ee13/images/hi-res/51E4G2FCBAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Platinum Casual Ring',
        category: 'Rings',
        categoryType: 'Casual Rings',
        price: 29000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwabfcf99c/images/hi-res/HLS3I1FIYAS56_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwabfcf99c/images/hi-res/HLS3I1FIYAS56_2.jpg?sw=480&sh=480',
      },
      // Rings - Couple Rings
      {
        name: 'Classic Couple Rings',
        category: 'Rings',
        categoryType: 'Couple Rings',
        price: 55000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3f378193/images/hi-res/51E2J1FAGAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3f378193/images/hi-res/51E2J1FAGAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Matching Rings',
        category: 'Rings',
        categoryType: 'Couple Rings',
        price: 57000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2755b98b/images/hi-res/51E2J1FAXAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2755b98b/images/hi-res/51E2J1FAXAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Love Bands',
        category: 'Rings',
        categoryType: 'Couple Rings',
        price: 59000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw196804e1/images/hi-res/51E2J1FAIAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw196804e1/images/hi-res/51E2J1FAIAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Dual-tone Rings',
        category: 'Rings',
        categoryType: 'Couple Rings',
        price: 56000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw57ed153a/images/hi-res/51E2J1FAZAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw57ed153a/images/hi-res/51E2J1FAZAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Platinum Couple Rings',
        category: 'Rings',
        categoryType: 'Couple Rings',
        price: 61000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '18K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb598444c/images/hi-res/51E2J1FAMAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb598444c/images/hi-res/51E2J1FAMAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Couple Rings',
        category: 'Rings',
        categoryType: 'Couple Rings',
        price: 55000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfee56764/images/hi-res/51E2J1FATAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwfee56764/images/hi-res/51E2J1FATAA00_2.jpg?sw=480&sh=480',
      },
      // Rings - Diamond Engagement Rings
      {
        name: 'Classic Diamond Engagement Ring',
        category: 'Rings',
        categoryType: 'Diamond Engagement Rings',
        price: 75000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw305b533d/images/hi-res/503117FGWAA04_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw305b533d/images/hi-res/503117FGWAA04_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Solitaire Ring',
        category: 'Rings',
        categoryType: 'Diamond Engagement Rings',
        price: 77000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwebcd89c2/images/hi-res/513117FKWAA01_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwebcd89c2/images/hi-res/513117FKWAA01_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Halo Ring',
        category: 'Rings',
        categoryType: 'Diamond Engagement Rings',
        price: 79000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw58dd9ed0/images/hi-res/50G4I1FAJAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw58dd9ed0/images/hi-res/50G4I1FAJAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Princess Cut Ring',
        category: 'Rings',
        categoryType: 'Diamond Engagement Rings',
        price: 76000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf120e0d4/images/hi-res/74G3PTFGCAA04_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf120e0d4/images/hi-res/74G3PTFGCAA04_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Multi-Stone Ring',
        category: 'Rings',
        categoryType: 'Diamond Engagement Rings',
        price: 81000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw67abf249/images/hi-res/50E4SRFAEA437_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw67abf249/images/hi-res/50E4SRFAEA437_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Diamond Engagement Ring',
        category: 'Rings',
        categoryType: 'Diamond Engagement Rings',
        price: 75000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwdaf64126/images/hi-res/50E4SRFADA237_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwdaf64126/images/hi-res/50E4SRFADA237_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Brilliant Cut Diamond Ring',
        category: 'Rings',
        categoryType: 'Diamond Engagement Rings',
        price: 77000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcb58a23e/images/hi-res/50E4SRFALA237_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcb58a23e/images/hi-res/50E4SRFALA237_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Platinum Solitaire Diamond Ring',
        category: 'Rings',
        categoryType: 'Diamond Engagement Rings',
        price: 79000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7f5cbcc8/images/hi-res/50E4SRFABA337_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7f5cbcc8/images/hi-res/50E4SRFABA337_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Gold Diamond Halo Ring',
        category: 'Rings',
        categoryType: 'Diamond Engagement Rings',
        price: 81000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7657c52b/images/hi-res/50E4SRFAHA437_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7657c52b/images/hi-res/50E4SRFAHA437_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Vintage Diamond Engagement Ring',
        category: 'Rings',
        categoryType: 'Diamond Engagement Rings',
        price: 83000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwee9d82db/images/hi-res/50E4SRFAPA637_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwee9d82db/images/hi-res/50E4SRFAPA637_2.jpg?sw=480&sh=480',
      },
      // Rings - Engagement Rings
      {
        name: 'Classic Engagement Ring',
        category: 'Rings',
        categoryType: 'Engagement Rings',
        price: 45000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2d77b120/images/hi-res/742013FBZAA04_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2d77b120/images/hi-res/742013FBZAA04_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Engagement Ring',
        category: 'Rings',
        categoryType: 'Engagement Rings',
        price: 47000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw37e63525/images/hi-res/50M4FFFCXAA32_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw37e63525/images/hi-res/50M4FFFCXAA32_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Engagement Ring',
        category: 'Rings',
        categoryType: 'Engagement Rings',
        price: 49000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6c32c556/images/hi-res/50M4FFFCVAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6c32c556/images/hi-res/50M4FFFCVAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Engagement Ring',
        category: 'Rings',
        categoryType: 'Engagement Rings',
        price: 46000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8eab2054/images/hi-res/50D4C1FRYAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8eab2054/images/hi-res/50D4C1FRYAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Engagement Ring',
        category: 'Rings',
        categoryType: 'Engagement Rings',
        price: 51000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0ddec4c3/images/hi-res/50E4I2FCAAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0ddec4c3/images/hi-res/50E4I2FCAAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Engagement Ring',
        category: 'Rings',
        categoryType: 'Engagement Rings',
        price: 45000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw092bc58b/images/hi-res/513113FHAAA00_2.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw092bc58b/images/hi-res/513113FHAAA00_1.jpg?sw=480&sh=480',
      },
      {
        name: 'Simple Gold Engagement Ring',
        category: 'Rings',
        categoryType: 'Engagement Rings',
        price: 47000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4d4c3ac2/images/hi-res/500494FWAAA02_2.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4d4c3ac2/images/hi-res/500494FWAAA02_1.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Platinum Engagement Ring',
        category: 'Rings',
        categoryType: 'Engagement Rings',
        price: 49000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9e6534a7/images/hi-res/502015FBJAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9e6534a7/images/hi-res/502015FBJAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Solitaire Engagement Ring',
        category: 'Rings',
        categoryType: 'Engagement Rings',
        price: 51000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw04287ae1/images/hi-res/510630FAAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw04287ae1/images/hi-res/510630FAAAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Halo Diamond Engagement Ring',
        category: 'Rings',
        categoryType: 'Engagement Rings',
        price: 53000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3ee6d8d7/images/hi-res/510120FLAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3ee6d8d7/images/hi-res/510120FLAAA00_2.jpg?sw=480&sh=480',
      },
      // Rings - Men's Rings
      {
        name: "Classic Men's Gold Ring",
        category: 'Rings',
        categoryType: "Men's Rings",
        price: 35000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf2ed1cf0/images/hi-res/74G3PTFGEAA04_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf2ed1cf0/images/hi-res/74G3PTFGEAA04_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Platinum Ring',
        category: 'Rings',
        categoryType: "Men's Rings",
        price: 37000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw86933c33/images/hi-res/50G4B1FFVAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw86933c33/images/hi-res/50G4B1FFVAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Silver Band',
        category: 'Rings',
        categoryType: "Men's Rings",
        price: 39000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw78db8d04/images/hi-res/51G4B1FCSAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw78db8d04/images/hi-res/51G4B1FCSAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Titanium Ring',
        category: 'Rings',
        categoryType: "Men's Rings",
        price: 36000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcf6f984e/images/hi-res/50G4PLFCVAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcf6f984e/images/hi-res/50G4PLFCVAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: "Heavy Diamond Men's Ring",
        category: 'Rings',
        categoryType: "Men's Rings",
        price: 41000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw88a54f66/images/hi-res/50G4I1FBBAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw88a54f66/images/hi-res/50G4I1FBBAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: "Classic Men's Gold Ring",
        category: 'Rings',
        categoryType: "Men's Rings",
        price: 35000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9d51c30d/images/hi-res/74G3PTFHQAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9d51c30d/images/hi-res/74G3PTFHQAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: "Bold Platinum Men's Ring",
        category: 'Rings',
        categoryType: "Men's Rings",
        price: 37000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwaa8d3b55/images/hi-res/51E4G2FBMAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwaa8d3b55/images/hi-res/51E4G2FBMAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: "Stylish Silver Men's Ring",
        category: 'Rings',
        categoryType: "Men's Rings",
        price: 39000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw58dd9ed0/images/hi-res/50G4I1FAJAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw58dd9ed0/images/hi-res/50G4I1FAJAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: "Diamond Embedded Men's Ring",
        category: 'Rings',
        categoryType: "Men's Rings",
        price: 41000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4b60dd11/images/hi-res/502117FECAB09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw4b60dd11/images/hi-res/502117FECAB09_2.jpg?sw=480&sh=480',
      },
      {
        name: "Antique Gold Men's Ring",
        category: 'Rings',
        categoryType: "Men's Rings",
        price: 43000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8067ee13/images/hi-res/51E4G2FCBAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8067ee13/images/hi-res/51E4G2FCBAA00_2.jpg?sw=480&sh=480',
      },
      //Rings - Platinum Engagement Rings
      {
        name: 'Classic Platinum Engagement Ring',
        category: 'Rings',
        categoryType: 'Platinum Engagement Rings',
        price: 71000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf120e0d4/images/hi-res/74G3PTFGCAA04_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf120e0d4/images/hi-res/74G3PTFGCAA04_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Solitaire Platinum Ring',
        category: 'Rings',
        categoryType: 'Platinum Engagement Rings',
        price: 73000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa4268d69/images/hi-res/741188FVCAA04_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa4268d69/images/hi-res/741188FVCAA04_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Halo Platinum Ring',
        category: 'Rings',
        categoryType: 'Platinum Engagement Rings',
        price: 75000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa5ebfd4f/images/hi-res/743115FBXAA04_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa5ebfd4f/images/hi-res/743115FBXAA04_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Princess Cut Platinum Ring',
        category: 'Rings',
        categoryType: 'Platinum Engagement Rings',
        price: 72000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6044c8cb/images/hi-res/741188FCPAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6044c8cb/images/hi-res/741188FCPAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Multi-Stone Platinum Ring',
        category: 'Rings',
        categoryType: 'Platinum Engagement Rings',
        price: 77000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd37cd449/images/hi-res/741188FEPAA04_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd37cd449/images/hi-res/741188FEPAA04_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Platinum Engagement Ring',
        category: 'Rings',
        categoryType: 'Platinum Engagement Rings',
        price: 71000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw587c9b5a/images/hi-res/743115FAWAA04_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw587c9b5a/images/hi-res/743115FAWAA04_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Brilliant Cut Platinum Ring',
        category: 'Rings',
        categoryType: 'Platinum Engagement Rings',
        price: 73000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8da50d21/images/hi-res/741188FOKAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8da50d21/images/hi-res/741188FOKAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Platinum Solitaire Diamond Ring',
        category: 'Rings',
        categoryType: 'Platinum Engagement Rings',
        price: 75000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1da5b876/images/hi-res/741188FVHAA04_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1da5b876/images/hi-res/741188FVHAA04_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Gold and Platinum Halo Ring',
        category: 'Rings',
        categoryType: 'Platinum Engagement Rings',
        price: 77000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2d77b120/images/hi-res/742013FBZAA04_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2d77b120/images/hi-res/742013FBZAA04_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Vintage Platinum Engagement Ring',
        category: 'Rings',
        categoryType: 'Platinum Engagement Rings',
        price: 79000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe7e78422/images/hi-res/741188FRGAA04_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe7e78422/images/hi-res/741188FRGAA04_2.jpg?sw=480&sh=480',
      },
      // Daily Wear - Dailywear Jewellery
      {
        name: 'Classic Gold Set',
        category: 'Daily Wear',
        categoryType: 'Dailywear Jewellery',
        price: 45000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw73839c40/images/hi-res/501163PWJAAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw73839c40/images/hi-res/501163PWJAAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Diamond Set',
        category: 'Daily Wear',
        categoryType: 'Dailywear Jewellery',
        price: 47000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw79fdb891/images/hi-res/501169PAEAAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw79fdb891/images/hi-res/501169PAEAAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Silver Set',
        category: 'Daily Wear',
        categoryType: 'Dailywear Jewellery',
        price: 49000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb9f099db/images/hi-res/50D1D2SJOABA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb9f099db/images/hi-res/50D1D2SJOABA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Platinum Set',
        category: 'Daily Wear',
        categoryType: 'Dailywear Jewellery',
        price: 46000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5c741fa9/images/hi-res/500109DAAABAPL_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5c741fa9/images/hi-res/500109DAAABAPL_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Kundan Set',
        category: 'Daily Wear',
        categoryType: 'Dailywear Jewellery',
        price: 51000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa03d445a/images/hi-res/501770SAUAGA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa03d445a/images/hi-res/501770SAUAGA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Gold Set',
        category: 'Daily Wear',
        categoryType: 'Dailywear Jewellery',
        price: 45000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd49ea5b8/images/hi-res/50D1D2SJZAGA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd49ea5b8/images/hi-res/50D1D2SJZAGA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Diamond Set',
        category: 'Daily Wear',
        categoryType: 'Dailywear Jewellery',
        price: 47000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7ce95268/images/hi-res/50D4FFFCWAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7ce95268/images/hi-res/50D4FFFCWAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Platinum Set',
        category: 'Daily Wear',
        categoryType: 'Dailywear Jewellery',
        price: 49000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw263d08d5/images/hi-res/50D4C1VYC1A02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw263d08d5/images/hi-res/50D4C1VYC1A02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Royal Ruby Set',
        category: 'Daily Wear',
        categoryType: 'Dailywear Jewellery',
        price: 51000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw809e20c5/images/hi-res/51M4D1VAK2A00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw809e20c5/images/hi-res/51M4D1VAK2A00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Antique Silver Set',
        category: 'Daily Wear',
        categoryType: '`Dailywear Jewellery`',
        price: 53000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwdc7fd4b0/images/hi-res/51D3D2SEOABA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwdc7fd4b0/images/hi-res/51D3D2SEOABA00_2.jpg?sw=480&sh=480',
      },
      // Daily wear - chains
      {
        name: 'Classic Gold Chain',
        category: 'Daily Wear',
        categoryType: 'Chains',
        price: 25000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw17129436/images/hi-res/501519CMLLA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw17129436/images/hi-res/501519CMLLA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Platinum Chain',
        category: 'Daily Wear',
        categoryType: 'Chains',
        price: 27000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb703545a/images/hi-res/500990CBAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb703545a/images/hi-res/500990CBAAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Diamond Chain',
        category: 'Daily Wear',
        categoryType: 'Chains',
        price: 29000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw98c1c791/images/hi-res/504025CIAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw98c1c791/images/hi-res/504025CIAAA00_3.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Silver Chain',
        category: 'Daily Wear',
        categoryType: 'Chains',
        price: 26000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw17129436/images/hi-res/501519CMLLA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw17129436/images/hi-res/501519CMLLA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Kundan Chain',
        category: 'Daily Wear',
        categoryType: 'Chains',
        price: 31000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8a4eaf65/images/hi-res/511107CVBAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8a4eaf65/images/hi-res/511107CVBAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Gold Chain',
        category: 'Daily Wear',
        categoryType: 'Chains',
        price: 25000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwca443cfe/images/hi-res/504025CZFAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwca443cfe/images/hi-res/504025CZFAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Trendy Platinum Chain',
        category: 'Daily Wear',
        categoryType: 'Chains',
        price: 26000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7d80b8a3/images/hi-res/500990CAAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7d80b8a3/images/hi-res/500990CAAAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Minimalist Diamond Chain',
        category: 'Daily Wear',
        categoryType: 'Chains',
        price: 27000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw29d2dbf7/images/hi-res/51F2I1CAFAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw29d2dbf7/images/hi-res/51F2I1CAFAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Stylish Silver Chain',
        category: 'Daily Wear',
        categoryType: 'Chains',
        price: 28000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw356eaf78/images/hi-res/511107CTWAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw356eaf78/images/hi-res/511107CTWAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Pearl Chain',
        category: 'Daily Wear',
        categoryType: 'Chains',
        price: 29000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwac4e1d97/images/hi-res/511920CMXAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwac4e1d97/images/hi-res/511920CMXAA00_2.jpg?sw=480&sh=480',
      },
      // Daily Wear - Earrings
      {
        name: 'Classic Gold Earrings',
        category: 'Daily Wear',
        categoryType: 'Earrings',
        price: 15000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa8456afe/images/hi-res/515090SCDAGACZ_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa8456afe/images/hi-res/515090SCDAGACZ_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Diamond Earrings',
        category: 'Daily Wear',
        categoryType: 'Earrings',
        price: 17000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3da66f5c/images/hi-res/500109SDAABAPL_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3da66f5c/images/hi-res/500109SDAABAPL_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Silver Earrings',
        category: 'Daily Wear',
        categoryType: 'Earrings',
        price: 19000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe3800f87/images/hi-res/51F1D1SESAGACZ_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe3800f87/images/hi-res/51F1D1SESAGACZ_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Platinum Earrings',
        category: 'Daily Wear',
        categoryType: 'Earrings',
        price: 16000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd3160b9f/images/hi-res/501095SALABA13_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd3160b9f/images/hi-res/501095SALABA13_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Kundan Earrings',
        category: 'Daily Wear',
        categoryType: 'Earrings',
        price: 21000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd27dc183/images/hi-res/512018SJRAGA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd27dc183/images/hi-res/512018SJRAGA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Gold Earrings',
        category: 'Daily Wear',
        categoryType: 'Earrings',
        price: 15000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3c85ee64/images/hi-res/516061SCYABA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3c85ee64/images/hi-res/516061SCYABA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Diamond Earrings',
        category: 'Daily Wear',
        categoryType: 'Earrings',
        price: 16000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw50c92335/images/hi-res/50D5PTHRZAAA10_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw50c92335/images/hi-res/50D5PTHRZAAA10_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Platinum Earrings',
        category: 'Daily Wear',
        categoryType: 'Earrings',
        price: 17000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd1b5e9bb/images/hi-res/74D3PISDAAGA04_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwd1b5e9bb/images/hi-res/74D3PISDAAGA04_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Royal Ruby Earrings',
        category: 'Daily Wear',
        categoryType: 'Earrings',
        price: 18000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9b3d6fdb/images/hi-res/511920DDOABA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9b3d6fdb/images/hi-res/511920DDOABA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Antique Silver Earrings',
        category: 'Daily Wear',
        categoryType: 'Earrings',
        price: 19000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf9f77af7/images/hi-res/50D1D2SDQABA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf9f77af7/images/hi-res/50D1D2SDQABA09_2.jpg?sw=480&sh=480',
      },
      // Daily wear -  Mangalsutras
      {
        name: 'Classic Gold Mangalsutra',
        category: 'Daily Wear',
        categoryType: 'Mangalsutras',
        price: 55000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6136a7a1/images/hi-res/50M4MSYBNAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6136a7a1/images/hi-res/50M4MSYBNAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Diamond Mangalsutra',
        category: 'Daily Wear',
        categoryType: 'Mangalsutras',
        price: 57000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5ab15e2f/images/hi-res/51D4A1YIYAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw5ab15e2f/images/hi-res/51D4A1YIYAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Silver Mangalsutra',
        category: 'Daily Wear',
        categoryType: 'Mangalsutras',
        price: 59000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe4a207b0/images/hi-res/50D4I2YHRAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe4a207b0/images/hi-res/50D4I2YHRAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Platinum Mangalsutra',
        category: 'Daily Wear',
        categoryType: 'Mangalsutras',
        price: 56000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcb9ed3e6/images/hi-res/50D4I2YHUAA32_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcb9ed3e6/images/hi-res/50D4I2YHUAA32_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Kundan Mangalsutra',
        category: 'Daily Wear',
        categoryType: 'Mangalsutras',
        price: 61000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1a0a1191/images/hi-res/51D4B2YMMAAP1_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1a0a1191/images/hi-res/51D4B2YMMAAP1_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Royal Ruby Mangalsutra',
        category: 'Daily Wear',
        categoryType: 'Mangalsutras',
        price: 63000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw79b87e16/images/hi-res/51D4B2YVBAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw79b87e16/images/hi-res/51D4B2YVBAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Platinum Mangalsutra',
        category: 'Daily Wear',
        categoryType: 'Mangalsutras',
        price: 59000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw217430f1/images/hi-res/50D4I2YIDAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw217430f1/images/hi-res/50D4I2YIDAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Stylish Kundan Mangalsutra',
        category: 'Daily Wear',
        categoryType: 'Mangalsutras',
        price: 62000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1a81a168/images/hi-res/512018YXUAB00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1a81a168/images/hi-res/512018YXUAB00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Traditional Gold Mangalsutra',
        category: 'Daily Wear',
        categoryType: 'Mangalsutras',
        price: 61000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw670dae6f/images/hi-res/50M4MSYBKAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw670dae6f/images/hi-res/50M4MSYBKAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Minimalist Silver Mangalsutra',
        category: 'Daily Wear',
        categoryType: 'Mangalsutras',
        price: 60000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwea7314e3/images/hi-res/512018YWNAB00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwea7314e3/images/hi-res/512018YWNAB00_2.jpg?sw=480&sh=480',
      },
      // Daily Wear - Pendants
      {
        name: 'Designer Diamond Pendant',
        category: 'Daily Wear',
        categoryType: 'Pendants',
        price: 42000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3b66cb1e/images/hi-res/50F4I1PALAAA32_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3b66cb1e/images/hi-res/50F4I1PALAAA32_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Royal Diamond Pendant',
        category: 'Daily Wear',
        categoryType: 'Pendants',
        price: 45000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1d57c52b/images/hi-res/50D4I2PMCAAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1d57c52b/images/hi-res/50D4I2PMCAAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Modern Diamond Pendant',
        category: 'Daily Wear',
        categoryType: 'Pendants',
        price: 36000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw31fee6f9/images/hi-res/50K4I1PJOAAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw31fee6f9/images/hi-res/50K4I1PJOAAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Heavy Diamond Pendant',
        category: 'Daily Wear',
        categoryType: 'Pendants',
        price: 41000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa9ee7925/images/hi-res/50K4I1PKDAAA09_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa9ee7925/images/hi-res/50K4I1PKDAAA09_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Classic Diamond Pendant',
        category: 'Daily Wear',
        categoryType: 'Pendants',
        price: 35000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc71c4e30/images/hi-res/50K4I1PKEAAA09_2.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc71c4e30/images/hi-res/50K4I1PKEAAA09_1.jpg?sw=480&sh=480',
      },
      {
        name: 'Stylish Diamond Pendant',
        category: 'Daily Wear',
        categoryType: 'Pendants',
        price: 22000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1d57c52b/images/hi-res/50D4I2PMCAAA02_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw1d57c52b/images/hi-res/50D4I2PMCAAA02_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Elegant Platinum Pendant',
        category: 'Daily Wear',
        categoryType: 'Pendants',
        price: 24000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb8f9f8e2/images/hi-res/51PJ42POWAA100_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb8f9f8e2/images/hi-res/51PJ42POWAA100_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Designer Ruby Pendant',
        category: 'Daily Wear',
        categoryType: 'Pendants',
        price: 26000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbf44ecc4/images/hi-res/512218PANAAA00_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbf44ecc4/images/hi-res/512218PANAAA00_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Antique Silver Pendant',
        category: 'Daily Wear',
        categoryType: 'Pendants',
        price: 28000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw66d07114/images/hi-res/516061PGZAAACZ_1.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw66d07114/images/hi-res/516061PGZAAACZ_2.jpg?sw=480&sh=480',
      },
      {
        name: 'Minimalist Pearl Pendant',
        category: 'Daily Wear',
        categoryType: 'Pendants',
        price: 23000,
        metel: 'Gold',
        brand: 'tanishq',
        purity: '14K',
        mainCategory: 'All-jewellery',
        imageFile1:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0d6fd611/images/hi-res/50K4B1PCEAAA02_2.jpg?sw=480&sh=480',
        imageFile2:
          'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw0d6fd611/images/hi-res/50K4B1PCEAAA02_1.jpg?sw=480&sh=480',
      },
    ]

    await ProductModel.insertMany(categories)
    console.log('✅ Dummy products inserted successfully!')
  } catch (error) {
    console.error('❌ Error inserting dummy products:', error)
  }
}
module.exports = { insertDummyProducts }
