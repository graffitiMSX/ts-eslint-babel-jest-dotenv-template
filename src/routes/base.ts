import { Router } from 'express';
const baseRouter = Router();
const APP_NAME = process.env.APP_NAME

baseRouter.get('/heartbeat', function (req, res, next) {
    res.json({ message: APP_NAME, dateTime: new Date() });
})

module.exports = { baseRouter };