import { Router } from 'express';
const{ baseRouter} = require('./base')
const router = Router();

router.use('/test/', baseRouter);

module.exports = { router }