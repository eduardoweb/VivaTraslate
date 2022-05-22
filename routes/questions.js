const express = require("express")
const router = express.Router();
const authMiddleware = require("../middleware/session");
const checkRol = require("../middleware/rol");
const { validatorCreateQuestion, validateObjectDataUpdate, validatorGetQuestion, validatorGetQuestionById } = require("../validators/questions");
const { createQuestion, getQuestions, getQuestionsByQuiz, updateQuestion, deleteQuestion } = require("../controllers/questions");

/**
 * Questions List
 */
router.get("/", authMiddleware, getQuestions);

/**
 * To add questions
 */
router.post("/",
    authMiddleware,
    checkRol(["admin"]),
    validatorCreateQuestion,
    createQuestion);

/**
* To get Questions List By Quiz Id
*/
router.get("/:quizId", authMiddleware, validatorGetQuestion, getQuestionsByQuiz);

/**
* To Update Question
*/
router.put("/:id", authMiddleware, validateObjectDataUpdate, updateQuestion);


/**
* To Delete Questions
*/
router.delete("/:id", authMiddleware, validatorGetQuestionById, deleteQuestion);

module.exports = router