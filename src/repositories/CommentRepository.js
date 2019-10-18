const Comment = require('../models/CommentModel')

exports.getAll = () => {
    return Comment.find({}).lean().exec()    
}

exports.save = (payload) => {
    return new Comment(payload).save()
}