import express from 'express'
import { signup } from '../controllers/auth.controller.js'


const router = express.Router()

router.get('/singup',signup)


export default router