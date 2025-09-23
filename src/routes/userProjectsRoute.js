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
router.route('/create').post(verifyAccess("8NZu4ZLDS7e0xqfRvI3K"), createUserProject)
router.route('/update:id').put(verifyAccess("8NZu4ZLDS7e0xqfRvI3K"), updateUserProject)
router.route('/delete/:id').delete(verifyAccess("8NZu4ZLDS7e0xqfRvI3K"), deleteUserProject)

export default router