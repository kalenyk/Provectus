"use strict";

const mongoose = require("mongoose"),
    Base64 = require("js-base64").Base64,
    Tag = mongoose.model("Tags");


exports.getAllTags = function (req, res) {
    Tag.find({}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.getOneTag = function (req, res) {
   const id = Base64.decode(req.params.id);//problem: spaces change to "%20"
    Tag.find({id}, function (err, tag) {
        if (err)
            res.send(err);
        res.json(tag[0]);
    });
};

