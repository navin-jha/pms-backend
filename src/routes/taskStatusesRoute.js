import { verifyJWT, verifyAccess } from "../middlewares/index.js"
import { Router } from "express";
import {
    getAllTaskStatuses, 
    getTaskStatusById, 
    createTaskStatus, 
    updateTaskStatus, 
    deleteTaskStatus
} from "../controllers/taskStatusesController.js"

const router = Router()
router.use(verifyJWT)

router.route('/select').get(getAllTaskStatuses)
router.route('/select/:id').get(getTaskStatusById)
router.route('/create').post(verifyAccess("8NZu4ZLDS7e0xqfRvI3K"), createTaskStatus)
router.route('/update/:id').put(verifyAccess("8NZu4ZLDS7e0xqfRvI3K"), updateTaskStatus)
router.route('/delete/:id').delete(verifyAccess("8NZu4ZLDS7e0xqfRvI3K"), deleteTaskStatus)

export default router