const Candidate = require('../models/Candidate');

exports.createCandidate = async (req, res) => {
  try {
    const { name, email, phone, jobTitle } = req.body;
    const resumeUrl = req.file ? req.file.path : null;

    const candidate = new Candidate({ name, email, phone, jobTitle, resumeUrl });
    await candidate.save();

    res.status(201).json(candidate);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.status(200).json(candidates);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const candidate = await Candidate.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json(candidate);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCandidate = async (req, res) => {
  try {
    const { id } = req.params;
    await Candidate.findByIdAndDelete(id);
    res.status(200).json({ message: 'Candidate deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};