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
router.route('/create').post(verifyAccess("IhXLXLamheCcY76QX0OL", "pbTeX6vDMxZlVCyZPCUw"), createTaskAssignee)
router.route('/update/:id').put(verifyAccess("IhXLXLamheCcY76QX0OL", "pbTeX6vDMxZlVCyZPCUw"), updateTaskAssignee)
router.route('/delete/:id').delete(verifyAccess("IhXLXLamheCcY76QX0OL", "pbTeX6vDMxZlVCyZPCUw"), deleteTaskAssignee)

export default router