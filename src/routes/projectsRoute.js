import { verifyJWT, verifyAccess } from "../middlewares/index.js"
import { Router } from "express";
import { 
    getAllProjects, 
    getProjectById, 
    createProject, 
    updateProject, 
    deleteProject, 
    projectSummary
} from "../controllers/projectsController.js"

const router = Router()
router.use(verifyJWT)

router.route('/select').get(getAllProjects)
router.route('/summary').get(projectSummary)
router.route('/select/:id').get(getProjectById)
router.route('/create').post(verifyAccess("8NZu4ZLDS7e0xqfRvI3K", "qp0v2-tXPyUsDfHLT6pp"), createProject)
router.route('/update/:id').put(verifyAccess("8NZu4ZLDS7e0xqfRvI3K", "qp0v2-tXPyUsDfHLT6pp"), updateProject)
router.route('/delete/:id').delete(verifyAccess("8NZu4ZLDS7e0xqfRvI3K", "qp0v2-tXPyUsDfHLT6pp"), deleteProject)

export default router