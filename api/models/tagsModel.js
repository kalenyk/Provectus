"use strict";

const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

let TagsSchema = new Schema({
    id: {
        type: String,
        Required: true
    },
    label: {
        type: String,
        required: true
    },
    volume: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    sentiment: {
        type:Object,
        required:true
    },
    sentimentScore: {
        type:Number,
        required:true
    },
    burst: {
        type:Number,
        required:true
    },
    days: {
        type:Array,
        required:true
    },
    pageType: {
        type:Object,
        required:true
    },
    queries:{
        type:Array,
        required:true
    }
});


module.exports = mongoose.model("Tags", TagsSchema);