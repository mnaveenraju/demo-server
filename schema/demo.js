const joi = require('joi');

const demo = {
    id: joi.string().required(),
    name: joi.string().required(),
    type: joi.string().valid("MOVIE", "FOOD").required(),
    list: joi.array()
}

let validateDemo = {

    demoList: joi.array().items(demo),

    create: {
        body: joi.object().keys({
            name: joi.string().required(),
            type: joi.string().valid("MOVIE", "FOOD").required(),
            list: joi.array()
        })
    },

    update: {
        body: joi.object().keys({
            name: joi.string().required(),
            type: joi.string().valid("MOVIE", "FOOD").required(),
            list: joi.array()
        })
    },

    delete: {
        params: joi.object().keys({
            demoId: joi.string().required()
        })
    }
}

module.exports = validateDemo;