const { check, validationResult } = require("express-validator");
const validationResults = require("../utils/handleValidator");

const validatorCreateQuestion = [
    check("name")
        .exists()
        .notEmpty(),
    check("quizId")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        return validationResults(req, res, next)
    }
];

const validateObjectDataUpdate = [
    check("id").exists().notEmpty(),
    check("name").exists().notEmpty(),
    (req, res, next) => {
        validationResults(req, res, next);
    },
];

const validatorGetQuestion = [
    check("quizId")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        return validationResults(req, res, next)
    }
];

const validatorGetQuestionById = [
    check("id")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        return validationResults(req, res, next)
    }
];

module.exports = { validatorCreateQuestion, validateObjectDataUpdate, validatorGetQuestion, validatorGetQuestionById };