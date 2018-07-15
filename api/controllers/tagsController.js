"use strict";

const mongoose = require("mongoose"),
    Tag = mongoose.model("Tags");


exports.getAllTags = function (req, res) {
    Tag.find({}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.getOneTag = function (req, res) {
    console.log(req.params);

    const id = req.params.id.replace(/%/g," ");
    console.log(id);
    Tag.find({id:id}, function (err, tag) {
        if (err)
            res.send(err);
        res.json(tag[0]);
    });
};

