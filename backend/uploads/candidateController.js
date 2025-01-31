const Candidate = require('../models/Candidate');
const multer = require('multer');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'), false);
    }
  }
}).single('resume');

exports.createCandidate = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    try {
      const { name, email, phone, jobTitle } = req.body;
      const resumeUrl = req.file ? req.file.path : null;

      const candidate = new Candidate({ name, email, phone, jobTitle, resumeUrl });
      await candidate.save();

      res.status(201).json(candidate);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
};