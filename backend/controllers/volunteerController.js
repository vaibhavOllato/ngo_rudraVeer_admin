// controllers/volunteerController.js
import Volunteer from "../models/Volunteer.js";

export const createVolunteer = async (req, res) => {
  try {
    const { fullName, email, phone, dob, address, aadhaarNumber } = req.body;

    const newVolunteer = new Volunteer({
      fullName,
      email,
      phone,
      dob,
      address,
      aadhaarNumber,
      profilePicture: req.file?.filename,
      status: "pending", // 🟡 Add this
    });

    const saved = await newVolunteer.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.json(volunteers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// controllers/volunteerController.js
export const updateVolunteerStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["volunteer", "member"].includes(status)) {
      return res.status(400).json({ error: "Invalid status value." });
    }

    const updatedVolunteer = await Volunteer.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedVolunteer) {
      return res.status(404).json({ error: "Volunteer not found." });
    }

    res.json(updatedVolunteer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
