const { check, validationResult } = require("express-validator");
const validationResults = require("../utils/handleValidator");

const validatorCreateQuiz = [
    check("name")
        .exists()
        .notEmpty(),
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

const validatorGetQuiz = [
    check("id")
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        return validationResults(req, res, next)
    }
];

module.exports = { validatorCreateQuiz, validateObjectDataUpdate, validatorGetQuiz };