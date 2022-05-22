const express = require("express")
const router = express.Router();
const authMiddleware = require("../middleware/session");
const checkRol = require("../middleware/rol");
const { validatorCreateQuiz, validateObjectDataUpdate, validatorGetQuiz } = require("../validators/quizzes");
const { getQuizzes, createQuiz, updateQuiz, deleteQuiz } = require("../controllers/quizzes");

/**
 * To get Quizzes List
 */
router.get("/", authMiddleware, getQuizzes);

/**
 * To Add Quiz
 */
router.post("/",
    authMiddleware,
    checkRol(["admin"]),
    validatorCreateQuiz,
    createQuiz);

/**
* To update Quiz
*/
router.put("/:id", authMiddleware, validateObjectDataUpdate, updateQuiz);


/**
* To delete Quiz
*/
router.delete("/:id", authMiddleware, validatorGetQuiz, deleteQuiz);

module.exports = router