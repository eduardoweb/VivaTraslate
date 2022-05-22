const { check, validationResult } = require("express-validator");
const validationResults = require("../utils/handleValidator");

const validatorCreateAnswers = [
    check("name")
        .exists()
        .notEmpty(),
    check("isCorrect")
        .exists()
        .notEmpty(),
    check("questionId")
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
    check("isCorrect").exists().notEmpty(),
    (req, res, next) => {
        validationResults(req, res, next);
    },
];

const validatorGetAnswer = [
    check("questionId")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        return validationResults(req, res, next)
    }
];

const validatorGetAnswerById = [
    check("id")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        return validationResults(req, res, next)
    }
];

module.exports = { validatorCreateAnswers, validatorGetAnswer, validateObjectDataUpdate, validatorGetAnswerById};