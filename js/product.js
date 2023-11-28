const products = [
  {
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 87,
    },
    priceCents: 1090,
  },
  {
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    ratings: {
      stars: "images/ratings/rating-40.png",
      count: 127,
    },
    priceCents: 2095,
  },
  {
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 56,
    },
    priceCents: 799,
  },
  {
    image: "images/products/black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    ratings: {
      stars: "images/ratings/rating-50.png",
      count: 2197,
    },
    priceCents: 1899,
  },
  {
    image: "images/products/6-piece-white-dinner-plate-set.jpg",
    name: "6 Piece White Dinner Plate Set",
    ratings: {
      stars: "images/ratings/rating-40.png",
      count: 37,
    },
    priceCents: 2067,
  },
  {
    image: "images/products/6-piece-non-stick-baking-set.webp",
    name: "6-Piece Nonstick, Carbon Steel Oven Bake ware Baking Set",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 175,
    },
    priceCents: 3499,
  },
  {
    image: "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: "Plain Hooded Fleece Sweatshirt",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 317,
    },
    priceCents: 2400,
  },
  {
    image: "images/products/luxury-tower-set-6-piece.jpg",
    name: "Luxury Towel Set - Graphite Gray",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 144,
    },
    priceCents: 3599,
  },
  {
    image: "images/products/liquid-laundry-detergent-plain.jpg",
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Ozy",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 305,
    },
    priceCents: 2899,
  },
  {
    image: "images/products/knit-athletic-sneakers-gray.jpg",
    name: "Waterproof Knit Athletic Sneakers - Gray",
    ratings: {
      stars: "images/ratings/rating-40.png",
      count: 89,
    },
    priceCents: 3390,
  },
  {
    image: "images/products/women-chiffon-beachwear-coverup-black.jpg",
    name: "Women's Chiffon Beachwear Cover Up - Black",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 235,
    },
    priceCents: 2070,
  },
  {
    image: "images/products/round-sunglasses-black.jpg",
    name: "Round Sunglasses",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 30,
    },
    priceCents: 1560,
  },
  {
    image: "images/products/women-beach-sandals.jpg",
    name: "Women's Two Strap Buckle Sandals - Tan",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 562,
    },
    priceCents: 2499,
  },
  {
    image: "images/products/blackout-curtain-set-beige.webp",
    name: "Blackout Curtains Set 4-Pack - Beige",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 232,
    },
    priceCents: 4599,
  },
  {
    image: "images/products/men-slim-fit-summer-shorts-gray.jpg",
    name: "Men's Slim-Fit Summer Shorts",
    ratings: {
      stars: "images/ratings/rating-40.png",
      count: 160,
    },
    priceCents: 1699,
  },
  {
    image: "images/products/electric-glass-and-steel-hot-water-kettle.webp",
    name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 846,
    },
    priceCents: 3074,
  },
  {
    image: "images/products/facial-tissue-2-ply-18-boxes.jpg",
    name: "Ultra Soft Tissue 2-Ply - 18 Box",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 99,
    },
    priceCents: 2374,
  },
  {
    image: "images/products/straw-sunhat.webp",
    name: "Straw Lifeguard Sun Hat",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 215,
    },
    priceCents: 2200,
  },
  {
    image: "images/products/sky-flower-stud-earrings.webp",
    name: "Sterling Silver Sky Flower Stud Earrings",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 52,
    },
    priceCents: 1799,
  },
  {
    image: "images/products/women-stretch-popover-hoodie-black.jpg",
    name: "Women's Stretch Popover Hoodie",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 2465,
    },
    priceCents: 1374,
  },
  {
    image: "images/products/bathroom-rug.jpg",
    name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 119,
    },
    priceCents: 1250,
  },
  {
    image: "images/products/women-knit-ballet-flat-black.jpg",
    name: "Women's Knit Ballet Flat",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 326,
    },
    priceCents: 2640,
  },
  {
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 2556,
    },
    priceCents: 1599,
  },
  {
    image: "images/products/trash-can-with-foot-pedal-50-liter.jpg",
    name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 2286,
    },
    priceCents: 8300,
  },
  {
    image: "images/products/duvet-cover-set-blue-twin.jpg",
    name: "Duvet Cover Set with Zipper Closure",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 456,
    },
    priceCents: 2399,
  },
  {
    image: "images/products/women-chunky-beanie-gray.webp",
    name: "Women's Chunky Cable Beanie - Gray",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 83,
    },
    priceCents: 1250,
  },
  {
    image: "images/products/men-chino-pants-beige.jpg",
    name: "Men's Classic-fit Pleated Chino Pants",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 9017,
    },
    priceCents: 2290,
  },
  {
    image: "images/products/men-athletic-shoes-green.jpg",
    name: "Men's Athletic Sneaker",
    ratings: {
      stars: "images/ratings/rating-40.png",
      count: 229,
    },
    priceCents: 3890,
  },
  {
    image: "images/products/men-navigator-sunglasses-brown.jpg",
    name: "Men's Navigator Sunglasses Pilot",
    ratings: {
      stars: "images/ratings/rating-35.png",
      count: 42,
    },
    priceCents: 1690,
  },
  {
    image: "images/products/non-stick-cooking-set-15-pieces.webp",
    name: "Non-Stick Cookware Set, Pots, Pans and Utensils",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 511,
    },
    priceCents: 6797,
  },
  {
    image: "images/products/vanity-mirror-silver.jpg",
    name: "Vanity Mirror with Heavy Base - Chrome",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 130,
    },
    priceCents: 1649,
  },
  {
    image: "images/products/women-french-terry-fleece-jogger-camo.jpg",
    name: "Women's Fleece Jogger Sweatpants",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 248,
    },
    priceCents: 2400,
  },
  {
    image: "images/products/double-elongated-twist-french-wire-earrings.webp",
    name: "Double Oval Twist French Wire Earrings - Gold",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 117,
    },
    priceCents: 2400,
  },
  {
    image: "images/products/round-airtight-food-storage-containers.jpg",
    name: "Round Airtight Food Storage Containers - 5 Piece",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 126,
    },
    priceCents: 2899,
  },
  {
    image: "images/products/coffeemaker-with-glass-carafe-black.jpg",
    name: "Coffeemaker with Glass Carafe and Reusable Filter 25 Oz, Black",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 1211,
    },
    priceCents: 2250,
  },
  {
    image: "images/products/blackout-curtains-black.jpg",
    name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 363,
    },
    priceCents: 3099,
  },
  {
    image: "images/products/cotton-bath-towels-teal.webp",
    name: "100% Cotton Bath Towels 2 Pack, Light Teal",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 93,
    },
    priceCents: 2110,
  },
  {
    image: "images/products/knit-athletic-sneakers-pink.webp",
    name: "Waterproof Knit Athletic Sneakers - Pink",
    ratings: {
      stars: "images/ratings/rating-40.png",
      count: 89,
    },
    priceCents: 3390,
  },
  {
    image: "images/products/countertop-blender-64-oz.jpg",
    name: "Counter Blender - 64oz, 1400 Watts",
    ratings: {
      stars: "images/ratings/rating-40.png",
      count: 3,
    },
    priceCents: 10747,
  },
  {
    image: "images/products/floral-mixing-bowl-set.jpg",
    name: "10-Piece Mixing Bowl Set with Lids - Floral",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 9017,
    },
    priceCents: 3899,
  },
  {
    image: "images/products/kitchen-paper-towels-30-pack.jpg",
    name: "2-Ply Kitchen Paper Towels - 30 Pack",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 1045,
    },
    priceCents: 5799,
  },
  {
    image: "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
    name: "Men's Full-Zip Hooded Fleece Sweatshirt",
    ratings: {
      stars: "images/ratings/rating-45.png",
      count: 3157,
    },
    priceCents: 2400,
  },
];
