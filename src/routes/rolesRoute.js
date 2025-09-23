import { verifyJWT, verifyAccess } from "../middlewares/index.js"
import { Router } from "express";
import {
    getAllRoles, 
    getRoleById, 
    createRole, 
    updateRole, 
    deleteRole
} from "../controllers/rolesController.js"

const router = Router()
router.use(verifyJWT)

router.route('/select').get(getAllRoles)
router.route('/select/:id').get(getRoleById)
router.route('/create').post(verifyAccess("8NZu4ZLDS7e0xqfRvI3K"), createRole)
router.route('/update/:id').put(verifyAccess("8NZu4ZLDS7e0xqfRvI3K"), updateRole)
router.route('/delete/:id').delete(verifyAccess("8NZu4ZLDS7e0xqfRvI3K"), deleteRole)

export default router