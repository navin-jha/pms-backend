import { verifyJWT, verifyAccess } from "../middlewares/index.js"
import { Router } from "express"

import {
    getAllTaskAssignments, 
    createTaskAssignment, 
    deleteTaskAssignment
} from "../controllers/taskAssignmentsController.js"

const router = Router()
router.use(verifyJWT)

router.route('/select').get(verifyAccess("IhXLXLamheCcY76QX0OL", "pbTeX6vDMxZlVCyZPCUw"), getAllTaskAssignments)
router.route('/create').post(verifyAccess("IhXLXLamheCcY76QX0OL", "pbTeX6vDMxZlVCyZPCUw"), createTaskAssignment)
router.route('/delete/:id').delete(verifyAccess("IhXLXLamheCcY76QX0OL", "pbTeX6vDMxZlVCyZPCUw"), deleteTaskAssignment)

export default router