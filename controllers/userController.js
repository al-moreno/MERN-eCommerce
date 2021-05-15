const db = require('../models');
const bcrypt = require("bcrypt");

//Define methods for itemsController
module.exports = {
    // findAll: function (req, res) {
    //     db.Item
    //         .find(req.query)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err =>res.status(422).json(err));
    // },
    // findById: function(req, res) {
    //     db.Item
    //         .findById(req.params.id)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    //     }
    createUser: function (req, res) {
        db.User.findOne({ email: req.body.email })
            .then(foundUser => {
                if (foundUser && foundUser.email) {
                    res.status(406).send('Email address already exists, please choose another...');
                    return;
                }
                db.User.create(req.body)
                    .then(newUser => {
                        res.status(200).send({ token: Math.random().toString(36).substring(7), user: newUser });
                    })
            })
            .catch(err => res.status(400).send(err));
    },
    loginUser: function (req, res) {
        db.User.findOne({ email: req.body.email })
            .then(async (user) => {

                const passwordIsValid = bcrypt.compareSync(
                    req.body.password,
                    user.password
                );

                if (!passwordIsValid) {
                    res.status(401).send('Invalid password, please try again...');
                    return;
                }
                res.status(200).send({ token: Math.random().toString(36).substring(7), user: user });
            })
            .catch(err => res.status(422).send(err));
    }
    // update: function (req, res) {
    //     db.User
    //         .findOneAndUpdate({ _id: req.params.id }, req.body)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    // remove: function (req, res) {
    //     db.User
    //         .findById({ _id: req.params.id })
    //         .then(dbModel => dbModel.remove())
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // }
};