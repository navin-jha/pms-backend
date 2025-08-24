import { verifyJWT, verifyAccess } from "../middlewares/index.js"
import { Router } from "express";
import {
    getAllpriorities, 
    getPriorityById, 
    createPriority, 
    updatePriority, 
    deletePriority
} from "../controllers/prioritiesController.js"

const router = Router()
router.use(verifyJWT)

router.route('/select').get(getAllpriorities)
router.route('/select/:id').get(getPriorityById)
router.route('/create').post(verifyAccess("IhXLXLamheCcY76QX0OL"), createPriority)
router.route('/update/:id').put(verifyAccess("IhXLXLamheCcY76QX0OL"), updatePriority)
router.route('/delete/:id').delete(verifyAccess("IhXLXLamheCcY76QX0OL"), deletePriority)

export default router