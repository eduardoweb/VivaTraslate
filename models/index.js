const models = {
    usersModel: require('./nosql/users'),
    quizzesModel: require('./nosql/quizzes'),
    questionsModel: require('./nosql/questions'),
    answersModel: require('./nosql/answers')
}

module.exports = models
