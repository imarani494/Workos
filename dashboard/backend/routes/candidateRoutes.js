const express = require('express');
const router = express.Router();
const CandidateController = require('../controllers/candidateController');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.post('/candidates', upload.single('resume'), CandidateController.createCandidate);
router.get('/candidates', CandidateController.getCandidates);
router.put('/candidates/:id/status', CandidateController.updateStatus);
router.delete('/candidates/:id', CandidateController.deleteCandidate);

module.exports = router;