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
router.route('/create').post(verifyAccess("8NZu4ZLDS7e0xqfRvI3K", "qp0v2-tXPyUsDfHLT6pp", "U3TrDdZ2xyGJGjE8P9dT"), createReport)
router.route('/update/:id').put(verifyAccess("8NZu4ZLDS7e0xqfRvI3K", "qp0v2-tXPyUsDfHLT6pp", "U3TrDdZ2xyGJGjE8P9dT"), updateReport)
router.route('/delete/:id').delete(verifyAccess("8NZu4ZLDS7e0xqfRvI3K", "qp0v2-tXPyUsDfHLT6pp", "U3TrDdZ2xyGJGjE8P9dT"), deleteReport)

export default router
