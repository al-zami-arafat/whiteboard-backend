const mongoose = require('mongoose');

const elementSchema = new mongoose.Schema({
    elementType: String,
    position: {
        x: Number,
        y: Number,
    },
    line: {
        points: [{ x: Number, y: Number }],
        strokeColor: String,
        strokeWidth: Number,
    },
    shape: {
        shapeType: String,
        dimensions: {
            width: Number,
            height: Number,
        },
        radius: Number,
        fillColor: String,
        strokeColor: String,
        strokeWidth: Number,
    },
    text: {
        content: String,
        fontSize: Number,
        fontFamily: String,
        color: String,
    },
});

const drawingSchema = new mongoose.Schema({
    boardName: String,
    createdBy: String,
    createdAt: { type: Date, default: Date.now },
    elements: [elementSchema],
});

const Drawing = mongoose.model('Drawing', drawingSchema);

module.exports = Drawing;