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
router.route('/create').post(verifyAccess("IhXLXLamheCcY76QX0OL"), createRole)
router.route('/update/:id').put(verifyAccess("IhXLXLamheCcY76QX0OL"), updateRole)
router.route('/delete/:id').delete(verifyAccess("IhXLXLamheCcY76QX0OL"), deleteRole)

export default router