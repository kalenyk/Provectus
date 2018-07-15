"use strict";

module.exports = function (app) {
    const tags = require("../controllers/tagsController");

    app.route("/tags")
        .get(tags.getAllTags);

    app.route("/tags/:id")
        .get(tags.getOneTag)

};
