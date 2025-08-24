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
router.route('/create').post(verifyAccess("IhXLXLamheCcY76QX0OL", "pbTeX6vDMxZlVCyZPCUw"), createProject)
router.route('/update/:id').put(verifyAccess("IhXLXLamheCcY76QX0OL", "pbTeX6vDMxZlVCyZPCUw"), updateProject)
router.route('/delete/:id').delete(verifyAccess("IhXLXLamheCcY76QX0OL", "pbTeX6vDMxZlVCyZPCUw"), deleteProject)

export default router