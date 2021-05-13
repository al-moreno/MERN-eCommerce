const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/inventory"
);

const itemSeed = [

    {

        name: "Black Casual Pants",
        category: "Men's Pants",
        image: "/images/Men-Pant-Black.jpg",
        price: 50.00,
        rating: 4,
        reviews: 6,
        description: "Great comfort casual pants",
        stock: 34

    },
    {

        name: "Brown Casual Pants",
        category: "Men's Pants",
        image: "/images/Men-Pant-Brown.jpg",
        price: 67.00,
        rating: 5,
        reviews: 12,
        description: "High quality, great comfort pants",
        stock: 23

    },
    {

        name: "Grey Casual Pants",
        category: "Men's Pants",
        image: "/images/Men-Pant-Grey.jpg",
        price: 24.00,
        rating: 2,
        reviews: 3,
        description: "Casual pants",
        stock: 12

    },
    {

        name: "Black Casual Pants",
        category: "Men's Pants",
        image: "/images/Men-Pant-Black.jpg",
        price: 75.00,
        rating: 4,
        reviews: 10,
        description: "High quality, great comfort casual pants",
        stock: 9

    },
    {

        name: "Black Casual Pants",
        category: "Men's Pants",
        image: "/images/Men-Pant-Brown.jpg",
        price: 50.00,
        rating: 4,
        reviews: 6,
        description: "High quality, great comfort casual pants",
        stock: 0

    },
    {

        name: "Black Casual Pants",
        category: "Men's Pants",
        image: "/images/Men-Pant-Grey.jpg",
        price: 50.00,
        rating: 4,
        reviews: 6,
        description: "High quality, great comfort casual pants",
        stock: 9

    }
];

db.Item
    .remove({})
    .then(() => db.Item.collection.insertMany(itemSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });