import { verifyJWT, verifyAccess } from '../middlewares/index.js'
import { Router } from "express";
import {
    getAllNotifications, 
    getNotificationById, 
    createNotification, 
    updateNotification, 
    deleteNotification,
    markNotificationAsRead
} from "../controllers/notificationsController.js"

const router = Router()
router.use(verifyJWT)

router.route('/select').get(getAllNotifications)
router.route('/select/:id').get(getNotificationById)
router.route('/create').post(verifyAccess("8NZu4ZLDS7e0xqfRvI3K"), createNotification)
router.route('/update/:id').put(verifyAccess("8NZu4ZLDS7e0xqfRvI3K"), updateNotification)
router.route('/mark-read/:id').put(markNotificationAsRead)
router.route('/delete/:id').delete(verifyAccess("8NZu4ZLDS7e0xqfRvI3K"), deleteNotification)

export default router