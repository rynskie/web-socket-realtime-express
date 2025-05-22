const { validationResult } = require("express-validator")
const { post, user, comment } = require("../models")
const self = {}

self.list = async (_, res) => {
    let data = await post.findAll({
        include: [
            {
                model: user,
                attributes: ['username']
            },
            {
                model: comment,
            },
        ]
    })

    res.status(200).json({
        message: 'posts is found',
        data: data
    })
}

self.save = async (req, res) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json(errors)
    }

    const {
        content_text
    } = req.body

    await post.create({
        content_text: content_text,
        private: "FALSE",
        user_id: req?.user?.data?.id
    })

    res.status(201).send({ message: 'Posting Success!' })
}

module.exports = self