import { verifyJWT, verifyAccess } from "../middlewares/index.js"
import { Router } from "express";
import {
    getAllUserProjects, 
    getUserProjectById, 
    createUserProject, 
    updateUserProject, 
    deleteUserProject
} from "../controllers/userProjectsController.js"

const router = Router()
router.use(verifyJWT)

router.route('/select').get(getAllUserProjects)
router.route('/select/:id').get(getUserProjectById)
router.route('/create').post(verifyAccess("IhXLXLamheCcY76QX0OL"), createUserProject)
router.route('/update:id').put(verifyAccess("IhXLXLamheCcY76QX0OL"), updateUserProject)
router.route('/delete/:id').delete(verifyAccess("IhXLXLamheCcY76QX0OL"), deleteUserProject)

export default router