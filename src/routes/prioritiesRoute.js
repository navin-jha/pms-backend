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
router.route('/create').post(verifyAccess("8NZu4ZLDS7e0xqfRvI3K"), createPriority)
router.route('/update/:id').put(verifyAccess("8NZu4ZLDS7e0xqfRvI3K"), updatePriority)
router.route('/delete/:id').delete(verifyAccess("8NZu4ZLDS7e0xqfRvI3K"), deletePriority)

export default router