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
router.route('/create').post(verifyAccess("8NZu4ZLDS7e0xqfRvI3K", "qp0v2-tXPyUsDfHLT6pp"), createDocument)
router.route('/update/:id').put(verifyAccess("8NZu4ZLDS7e0xqfRvI3K", "qp0v2-tXPyUsDfHLT6pp"), updateDocument)
router.route('/delete/:id').delete(verifyAccess("8NZu4ZLDS7e0xqfRvI3K", "qp0v2-tXPyUsDfHLT6pp"), deleteDocument)

export default router