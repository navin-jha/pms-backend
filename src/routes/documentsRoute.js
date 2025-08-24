import { verifyJWT, verifyAccess } from "../middlewares/index.js"
import { Router } from "express"
import { 
    getAllDocuments,
    getDocumentById,
    createDocument,
    updateDocument,
    deleteDocument
} from "../controllers/documentsController.js"

const router = Router()
router.use(verifyJWT)

router.route('/select').get(getAllDocuments)
router.route('/select/:id').get(getDocumentById)
router.route('/create').post(verifyAccess("IhXLXLamheCcY76QX0OL", "pbTeX6vDMxZlVCyZPCUw"), createDocument)
router.route('/update/:id').put(verifyAccess("IhXLXLamheCcY76QX0OL", "pbTeX6vDMxZlVCyZPCUw"), updateDocument)
router.route('/delete/:id').delete(verifyAccess("IhXLXLamheCcY76QX0OL", "pbTeX6vDMxZlVCyZPCUw"), deleteDocument)

export default router