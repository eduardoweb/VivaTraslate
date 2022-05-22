const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const QuestionsScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        quizId: {
            type: mongoose.Types.ObjectId,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
QuestionsScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("questions", QuestionsScheme);
