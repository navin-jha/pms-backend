import { verifyJWT, verifyAccess } from "../middlewares/index.js"
import { Router } from "express";
import {
    getAllMeetingMinutes, 
    getMeetingMinutesById, 
    createMeetingMinutes, 
    updateMeetingMinutes, 
    deleteMeetingMinutes
} from "../controllers/meetingMinutesController.js"

const router = Router()
router.use(verifyJWT)

router.route('/select').get(getAllMeetingMinutes)
router.route('/select/:id').get(getMeetingMinutesById)
router.route('/create').post(verifyAccess("8NZu4ZLDS7e0xqfRvI3K", "qp0v2-tXPyUsDfHLT6pp"), createMeetingMinutes)
router.route('/update/:id').put(verifyAccess("8NZu4ZLDS7e0xqfRvI3K", "qp0v2-tXPyUsDfHLT6pp"), updateMeetingMinutes)
router.route('/delete/:id').delete(verifyAccess("8NZu4ZLDS7e0xqfRvI3K", "qp0v2-tXPyUsDfHLT6pp"), deleteMeetingMinutes)

export default router