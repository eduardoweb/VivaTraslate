const { answersModel } = require("../models");
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");


/**
 * To get Answers List all
 * @param {*} req 
 * @param {*} res 
 */
const getAnswers = async (req, res) => {
    try {
        const user = req.user;

        const data = await answersModel.find({});

        res.send({ data, user });
    } catch (e) {
        handleHttpError(res, "ERROR_GET_ANSWERS");
    }
};

/**
 * To add Answers
 * @param {*} req 
 * @param {*} res 
 */
const createAnswers = async (req, res) => {
    try {
        const body = matchedData(req);
        const data = await answersModel.create(body);
        res.send({ data });
    } catch (e) {
        handleHttpError(res, "ERROR_CREATE_ANSWERS");
    }
};

/**
 * To get Answers List by Question Id
 * @param {*} req 
 * @param {*} res 
 */
const getAnswersByQuestion = async (req, res) => {
    try {
        req = matchedData(req);
        const { questionId } = req;
        const data = await answersModel.find({ questionId: questionId })
        res.send({ data });
    } catch (e) {
        handleHttpError(res, "ERROR_GET_ANSWERS_BY_QUESTION")
    }
};

/**
 * To Update Answer
 * @param {*} req 
 * @param {*} res 
 */
const updateAnswer = async (req, res) => {
    try {
        req = matchedData(req);
        const { id, ...body } = req;

        const data = await answersModel.findByIdAndUpdate(id, body, {
            new: true,
        });
        res.send({ data });
    } catch (e) {
        handleHttpError(res, e);
    }
};

/**
* To Delete Answers
* @param {*} req 
* @param {*} res 
*/
const deleteAnswer = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await answersModel.delete({ _id: id });
        res.send({ data });
    } catch (e) {
        handleHttpError(res, "ERROR_DELETE_ANSWER")
    }
};

module.exports = { createAnswers, getAnswers, getAnswersByQuestion, updateAnswer, deleteAnswer};
