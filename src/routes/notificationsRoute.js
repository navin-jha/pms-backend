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
router.route('/create').post(verifyAccess("IhXLXLamheCcY76QX0OL"), createNotification)
router.route('/update/:id').put(verifyAccess("IhXLXLamheCcY76QX0OL"), updateNotification)
router.route('/mark-read/:id').put(markNotificationAsRead)
router.route('/delete/:id').delete(verifyAccess("IhXLXLamheCcY76QX0OL"), deleteNotification)

export default router