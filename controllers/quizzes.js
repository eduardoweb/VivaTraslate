const { quizzesModel } = require("../models");
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");


/**
 * To get Quizzes List
 * @param {*} req 
 * @param {*} res 
 */
const getQuizzes = async (req, res) => {
    try {
        const user = req.user;

        const data = await quizzesModel.find({});

        res.send({ data, user });
    } catch (e) {
        handleHttpError(res, "ERROR_GET_QUIZZES");
    }
};

/**
 * To add Quiz
 * @param {*} req 
 * @param {*} res 
 */
const createQuiz = async (req, res) => {
    try {
        const body = matchedData(req);
        const data = await quizzesModel.create(body);
        res.send({ data });
    } catch (e) {
        handleHttpError(res, "ERROR_CREATE_QUIZ");
    }
};

/**
 * To Update Quiz
 * @param {*} req 
 * @param {*} res 
 */
const updateQuiz = async (req, res) => {
    try {
        req = matchedData(req);
        const { id, ...body } = req;

        const data = await quizzesModel.findByIdAndUpdate(id, body, {
            new: true,
        });
        res.send({ data });
    } catch (e) {
        handleHttpError(res, e);
    }
};

/**
* To Delete Quiz
* @param {*} req 
* @param {*} res 
*/
const deleteQuiz = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await quizzesModel.delete({ _id: id });
        res.send({ data });
    } catch (e) {
        handleHttpError(res, "ERROR_DELETE_QUIZ")
    }
};

module.exports = { getQuizzes, createQuiz, updateQuiz, deleteQuiz };
