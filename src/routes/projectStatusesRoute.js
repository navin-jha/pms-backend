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
router.route('/create').post(verifyAccess("8NZu4ZLDS7e0xqfRvI3K"), createProjectStatus)
router.route('/update/:id').put(verifyAccess("8NZu4ZLDS7e0xqfRvI3K"), updateProjectStatus)
router.route('/delete/:id').delete(verifyAccess("8NZu4ZLDS7e0xqfRvI3K"), deleteProjectStatus)

export default router