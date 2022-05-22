const express = require("express")
const router = express.Router();
const authMiddleware = require("../middleware/session");
const checkRol = require("../middleware/rol");
const { validatorCreateAnswers, validatorGetAnswer, validateObjectDataUpdate, validatorGetAnswerById} = require("../validators/answers");
const { createAnswers, getAnswers, getAnswersByQuestion, updateAnswer, deleteAnswer} = require("../controllers/answers");

/**
 * Answers List
 */
router.get("/", authMiddleware, getAnswers);

/**
 * To add questions
 */
router.post("/",
    authMiddleware,
    checkRol(["admin"]),
    validatorCreateAnswers,
    createAnswers);

/**
* To get Answers List By Question Id
*/
router.get("/:questionId", authMiddleware, validatorGetAnswer, getAnswersByQuestion);

/**
* To Update Answers
*/
router.put("/:id", authMiddleware, validateObjectDataUpdate, updateAnswer);


/**
* To Delete Questions
*/
router.delete("/:id", authMiddleware, validatorGetAnswerById, deleteAnswer);

module.exports = router