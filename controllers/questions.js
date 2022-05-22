const { questionsModel } = require("../models");
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");


/**
 * To get Questions List all
 * @param {*} req 
 * @param {*} res 
 */
const getQuestions = async (req, res) => {
    try {
        const user = req.user;

        const data = await questionsModel.find({});

        res.send({ data, user });
    } catch (e) {
        handleHttpError(res, "ERROR_GET_QUESTIONS");
    }
};

/**
 * To add Question
 * @param {*} req 
 * @param {*} res 
 */
const createQuestion = async (req, res) => {
    try {
        const body = matchedData(req);
        const data = await questionsModel.create(body);
        res.send({ data });
    } catch (e) {
        handleHttpError(res, "ERROR_CREATE_QUESTION");
    }
};

/**
 * To get Questions List by Quiz Id
 * @param {*} req 
 * @param {*} res 
 */
const getQuestionsByQuiz = async (req, res) => {
    try {
        req = matchedData(req);
        const { quizId } = req;
        const data = await questionsModel.find({ quizId: quizId })
        res.send({ data });
    } catch (e) {
        handleHttpError(res, "ERROR_GET_QUESTIONS_BY_QUIZID")
    }
};

/**
 * To Update Question
 * @param {*} req 
 * @param {*} res 
 */
const updateQuestion = async (req, res) => {
    try {
        req = matchedData(req);
        const { id, ...body } = req;

        const data = await questionsModel.findByIdAndUpdate(id, body, {
            new: true,
        });
        res.send({ data });
    } catch (e) {
        handleHttpError(res, e);
    }
};

/**
* To Delete Question
* @param {*} req 
* @param {*} res 
*/
const deleteQuestion = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await questionsModel.delete({ _id: id });
        res.send({ data });
    } catch (e) {
        handleHttpError(res, "ERROR_DELETE_QUESTION")
    }
};

module.exports = { createQuestion, getQuestions, getQuestionsByQuiz, updateQuestion, deleteQuestion };
