'use strict';
const resMsgs = require('../config/response-messages');
const mongo = require('mongoose');

let demoCtrl = {
    getDemoList: async (req, cb) => {
        try {
            let demos = await mongo.models.demo.find().sort({createdAt: 'asc'});
            return cb.json({ status: 200, demoList: demos, message: resMsgs.SUCCESS });
        } catch (err) {
            return cb.json({ status: 500, message: err.stack });
        }
    },

    createDemo: async (req, cb) => {
        try {
            let demo = {
                name: req.body.name,
                type: req.body.type,
                list: req.body.list,
                createdAt: new Date().toISOString()
            };
            let result = await mongo.models.demo.create(demo);
            return cb.json({ status: 201, result: result, message: resMsgs.SUCCESS });
        } catch (err) {
            return cb.json({ status: 500, message: err.stack });
        }
    },

    updateDemo: async (req, cb) => {
        try {
            console.log('req.body', req.body);

            let demo = {
                name: req.body.name,
                type: req.body.type,
                list: req.body.list,
                updatedAt: new Date().toISOString()
            };
            console.log('req.body', demo);

            let result = await mongo.models.demo.findByIdAndUpdate({_id: req.body._id}, demo);
            return cb.json({ status: 201, result: result, message: resMsgs.SUCCESS });
        } catch (err) {
            return cb.json({ status: 500, message: err.stack });
        }
    },

    deleteDemo: async (req, cb) => {
        try {
            const demoId = req.params.demoId
            let result = await mongo.models.demo.deleteOne({_id: demoId});
            return cb.json({ status: 201, result: result, message: resMsgs.SUCCESS });
        } catch (err) {
            return cb.json({ status: 500, message: err.stack });
        }
    }
};

module.exports = demoCtrl;