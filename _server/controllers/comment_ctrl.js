const { validationResult } = require("express-validator")
const { comment } = require("../models")
const self = {}

self.save = async (req, res) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json(errors)
    }

    const {
        content_comment_text,
        post_id
    } = req.body

    await comment.create({
        content_comment_text: content_comment_text,
        post_id: post_id,
        user_id: req?.user?.data?.id,
    })

    res.status(201).send({ message: 'commenting Success!' })
}

module.exports = self