const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const QuizzesScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
QuizzesScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("quizzes", QuizzesScheme);
