const express = require('express');
const controller = require('../controller/controller');
const userController = require('../controller/userController')
const noteController = require('../controller/noteController')
const sessionController = require('../controller/sessionController')
const materialController = require('../controller/materialController')

const {verifyToken, verifyAdmin, verifyStudent, verifyTutor} = require('../middleware/middleware')
const router = express.Router();

//Get All Study Session route
router.get('/sessions', sessionController.getAllSession)
router.get('/pending-sessions', sessionController.getAllPendingSession)
router.get('/apporve-sessions', sessionController.getAllApproveSession)



//get single session by _id
router.get('/session/:id',verifyToken, sessionController.getSingleSession)
router.delete('/session/:id',verifyToken,verifyAdmin, sessionController.delteSession)

//update Status on Session By Id
router.patch('/session/update/:id', verifyToken,sessionController.updateStatusOnSession)


//get session data by tutor
router.get('/session-list/:email',verifyToken, sessionController.getAllSessionForTutorForPagination)
router.get('/session-all-list/:email',verifyToken, sessionController.getAllSessionForTutor)

router.get('/rejected-session-list/:email',verifyToken, sessionController.getAllRejectedSessionByEmail)

//create Single Session 
router.post('/session',verifyToken,verifyTutor, sessionController.createSingleSession)


//Upload Material on Database
router.put('/material/update',verifyToken,verifyTutor, materialController.uploadMaterialForSession)
//router.post('/material', materialController.uploadSingleMaterial)


//Delete Material From Database
router.delete('/material/:id', materialController.deleteMaterialByID)

// Get All Material By Tutor
router.get('/material-list/:email',verifyToken,verifyTutor, materialController.getAllMaterialsForTutor)
router.get('/materials',verifyToken,verifyAdmin, materialController.getAllMaterialFromDB)

/* admin route */
//user creation route
router.put('/user',verifyToken,verifyAdmin, userController.uploadUserOnDB)

router.patch('/user/update/:id',verifyToken,verifyAdmin, userController.updateUserRole)

router.get('/users',verifyToken,verifyAdmin, userController.getAllUsers)

router.get('/user/:email', userController.getUserByEmailforRole)


//student route

router.post('/add-note', verifyToken,verifyStudent, noteController.uploadNote)
router.post('/add-review', controller.uploadReviewSession)

router.get('/notes/:email', verifyToken,verifyStudent, noteController.getNotesByEmail)
router.patch('/note/update/:id',verifyToken,verifyStudent, noteController.updateNotesByID)
router.delete('/note/:id',verifyToken,verifyStudent, noteController.deleteNoteByID)

//booked post routes 

router.post('/add-booked',verifyToken,verifyStudent, controller.uploadBookedSession)

router.get('/booked-sessions/:email',verifyToken,verifyStudent, controller.getBookedSessionByEmail)

router.get('/material/:id', materialController.getMaterialById)


/* Jwt token creation */
router.post('/jwt', controller.LoggedInUser);


//payment
router.post('/create-payment-intent',verifyToken, controller.generateSecretKey)

//get tutors info
router.get('/tutor', controller.getAllTutor)



module.exports = router;