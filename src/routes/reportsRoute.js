import { verifyJWT, verifyAccess } from "../middlewares/index.js"
import { Router } from "express";
import {
    getAllReports, 
    getReportById, 
    createReport, 
    updateReport, 
    deleteReport,
    getAggregatedReport
} from "../controllers/reportsController.js"

const router = Router()
router.use(verifyJWT)

router.route('/select').get(getAllReports)
router.route('/aggregate').get(getAggregatedReport)
router.route('/select/:id').get(getReportById)
router.route('/create').post(verifyAccess("IhXLXLamheCcY76QX0OL", "pbTeX6vDMxZlVCyZPCUw", "b2k-wwZKe4pFIfbsa-4X"), createReport)
router.route('/update/:id').put(verifyAccess("IhXLXLamheCcY76QX0OL", "pbTeX6vDMxZlVCyZPCUw", "b2k-wwZKe4pFIfbsa-4X"), updateReport)
router.route('/delete/:id').delete(verifyAccess("IhXLXLamheCcY76QX0OL", "pbTeX6vDMxZlVCyZPCUw", "b2k-wwZKe4pFIfbsa-4X"), deleteReport)

export default router
