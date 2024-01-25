import express from 'express'
import * as authController from "../controllers/authController.js"

const router=express.Router()

router.route("/login").post(authController.login)
router.route("/individual/register").post(authController.individualRegister)
router.route("/corporate/register").post(authController.corporateRegister)

export default router   