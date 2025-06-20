// controllers/problemController.js

import Problem from '../models/problemModel.js';

// Submit a problem
export const submitProblem = async (req, res) => {
  try {
    const { fullname, email, contactNo, message } = req.body;

    if (!fullname || !email || !message) {
      return res.status(400).json({ error: 'Fullname, Email, and Message are required.' });
    }

    const newProblem = new Problem({ fullname, email, contactNo, message });
    await newProblem.save();

    res.status(201).json({ success: true, problem: newProblem });
  } catch (err) {
    console.error('Error submitting problem:', err);
    res.status(500).json({ error: 'Server error.' });
  }
};

// Get all problems
export const getAllProblems = async (req, res) => {
  try {
    const problems = await Problem.find().sort({ createdAt: -1 });
    res.status(200).json({ problems });
  } catch (err) {
    console.error('Error fetching problems:', err);
    res.status(500).json({ error: 'Failed to fetch problems.' });
  }
};

// Admin replies to a problem
export const replyToProblem = async (req, res) => {
  try {
    const { id } = req.params;
    const { reply } = req.body;

    if (!reply) return res.status(400).json({ error: 'Reply cannot be empty.' });

    const updated = await Problem.findByIdAndUpdate(
      id,
      { reply },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: 'Problem not found.' });
    }

    res.status(200).json({ message: 'Reply sent successfully.', problem: updated });
  } catch (err) {
    console.error('Error replying to problem:', err);
    res.status(500).json({ error: 'Server error.' });
  }
};
