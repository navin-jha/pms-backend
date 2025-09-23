import { verifyJWT, verifyAccess } from "../middlewares/index.js"
import { Router } from "express"

import {
    getAllTaskAssignments, 
    createTaskAssignment, 
    deleteTaskAssignment
} from "../controllers/taskAssignmentsController.js"

const router = Router()
router.use(verifyJWT)

router.route('/select').get(verifyAccess("8NZu4ZLDS7e0xqfRvI3K", "qp0v2-tXPyUsDfHLT6pp"), getAllTaskAssignments)
router.route('/create').post(verifyAccess("8NZu4ZLDS7e0xqfRvI3K", "qp0v2-tXPyUsDfHLT6pp"), createTaskAssignment)
router.route('/delete/:id').delete(verifyAccess("8NZu4ZLDS7e0xqfRvI3K", "qp0v2-tXPyUsDfHLT6pp"), deleteTaskAssignment)

export default router