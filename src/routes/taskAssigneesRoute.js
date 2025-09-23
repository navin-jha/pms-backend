import { verifyJWT, verifyAccess } from "../middlewares/index.js"
import { Router } from "express";
import { 
    getAllTaskAssignees, 
    getTaskAssigneeById, 
    createTaskAssignee, 
    updateTaskAssignee, 
    deleteTaskAssignee
} from "../controllers/taskAssigneesController.js"

const router = Router()
router.use(verifyJWT)

router.route('/select').get(getAllTaskAssignees)
router.route('/select/:id').get(getTaskAssigneeById)
router.route('/create').post(verifyAccess("8NZu4ZLDS7e0xqfRvI3K", "qp0v2-tXPyUsDfHLT6pp"), createTaskAssignee)
router.route('/update/:id').put(verifyAccess("8NZu4ZLDS7e0xqfRvI3K", "qp0v2-tXPyUsDfHLT6pp"), updateTaskAssignee)
router.route('/delete/:id').delete(verifyAccess("8NZu4ZLDS7e0xqfRvI3K", "qp0v2-tXPyUsDfHLT6pp"), deleteTaskAssignee)

export default router