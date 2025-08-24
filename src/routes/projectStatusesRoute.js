import { verifyJWT, verifyAccess } from "../middlewares/index.js"
import { Router } from "express";
import {
    getAllProjectStatuses, 
    getProjectStatusById, 
    createProjectStatus, 
    updateProjectStatus, 
    deleteProjectStatus
} from "../controllers/projectStatusesController.js"

const router = Router()
router.use(verifyJWT)

router.route('/select').get(getAllProjectStatuses)
router.route('/select/:id').get(getProjectStatusById)
router.route('/create').post(verifyAccess("IhXLXLamheCcY76QX0OL"), createProjectStatus)
router.route('/update/:id').put(verifyAccess("IhXLXLamheCcY76QX0OL"), updateProjectStatus)
router.route('/delete/:id').delete(verifyAccess("IhXLXLamheCcY76QX0OL"), deleteProjectStatus)

export default router