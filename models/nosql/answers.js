const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const AnswersScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        isCorrect:{
            type: Boolean
        },        
        questionId: {
            type: mongoose.Types.ObjectId,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
AnswersScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("answers", AnswersScheme);
