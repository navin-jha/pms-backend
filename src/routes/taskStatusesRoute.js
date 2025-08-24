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
router.route('/create').post(verifyAccess("IhXLXLamheCcY76QX0OL"), createTaskStatus)
router.route('/update/:id').put(verifyAccess("IhXLXLamheCcY76QX0OL"), updateTaskStatus)
router.route('/delete/:id').delete(verifyAccess("IhXLXLamheCcY76QX0OL"), deleteTaskStatus)

export default router