import { verifyJWT, verifyAccess } from "../middlewares/index.js"
import { Router } from "express";
import { 
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
} from "../controllers/tasksController.js"

const router = Router()
router.use(verifyJWT)

router.route('/select').get(getAllTasks)
router.route('/select/:id').get(getTaskById)
router.route('/create').post(verifyAccess("IhXLXLamheCcY76QX0OL"), createTask)
router.route('/update/:id').put(verifyAccess("IhXLXLamheCcY76QX0OL"), updateTask)
router.route('/delete/:id').delete(verifyAccess("IhXLXLamheCcY76QX0OL"), deleteTask)

export default router