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
router.route('/create').post(verifyAccess("8NZu4ZLDS7e0xqfRvI3K"), createTask)
router.route('/update/:id').put(verifyAccess("8NZu4ZLDS7e0xqfRvI3K"), updateTask)
router.route('/delete/:id').delete(verifyAccess("8NZu4ZLDS7e0xqfRvI3K"), deleteTask)

export default router