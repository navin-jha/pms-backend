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
router.route('/create').post(verifyAccess("IhXLXLamheCcY76QX0OL", "pbTeX6vDMxZlVCyZPCUw"), createMeetingMinutes)
router.route('/update/:id').put(verifyAccess("IhXLXLamheCcY76QX0OL", "pbTeX6vDMxZlVCyZPCUw"), updateMeetingMinutes)
router.route('/delete/:id').delete(verifyAccess("IhXLXLamheCcY76QX0OL", "pbTeX6vDMxZlVCyZPCUw"), deleteMeetingMinutes)

export default router