import { verifyJWT, verifyAccess } from "../middlewares/index.js"
import { Router } from "express";
import {
    getAllUsers, 
    getUserById, 
    createUser, 
    updateUser, 
    deleteUser, 
    login,
    logout, 
    profile,
    requestOtp,
    resetPassword
} from "../controllers/usersController.js"

const router = Router()

router.route('/select').get(verifyJWT, getAllUsers)
router.route('/select/:id').get(getUserById)
router.route('/create').post(verifyJWT, verifyAccess("8NZu4ZLDS7e0xqfRvI3K"), createUser)
router.route('/update/:id').put(verifyJWT, verifyAccess("8NZu4ZLDS7e0xqfRvI3K"), updateUser)
router.route('/delete/:id').delete(verifyJWT, verifyAccess("8NZu4ZLDS7e0xqfRvI3K"), deleteUser)
router.route('/login').post(login)
router.route('/logout').post(verifyJWT, logout)
router.route('/profile').get(verifyJWT, profile)
router.route('/request-otp').post(requestOtp)
router.route('/reset-password').post(resetPassword)

export default router