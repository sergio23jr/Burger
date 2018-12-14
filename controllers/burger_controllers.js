const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.selectAll(function (err, res) {
        if (err) { throw err }
        res.render("index", {})
    })
});

// Adding and Update burger section
router.post("/", function (req, res) {
    const burgerName = req.body.burger_name;
    const isDevoured = req.body.devoured;

    burger.insertOne(burgerName, function (err, burger) {
        if (err) {
            return res.status(401).json({
                message: 'Not able to add the burger'
            });
        }

        return res.json({
            burger_name: burgerName,
            isDevoured: 0
        });
    });
});

module.exports = router;