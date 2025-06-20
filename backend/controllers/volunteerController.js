import Volunteer from "../models/Volunteer.js";
import PendingVolunteer from "../models/PendingVolunteer.js";


export const createVolunteer = async (req, res) => {
  try {
    const { fullName, email, phone, dob, address, aadhaarNumber } = req.body;

    const newApplication = new PendingVolunteer({
      fullName,
      email,
      phone,
      dob,
      address,
      aadhaarNumber,
      profilePicture: req.file?.filename,
    });

    const saved = await newApplication.save();

    res.status(201).json({
      message: "Application received. Pending admin approval.",
      data: saved,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllPendingApplications = async (req, res) => {
  try {
    const pending = await PendingVolunteer.find();
    res.json(pending);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const approveVolunteer = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = [
      "committee member",
      "member",
      "secretary",
      "active member",
      "associate member",
    ];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: "Invalid status value." });
    }

    const application = await PendingVolunteer.findById(id);
    if (!application) {
      return res.status(404).json({ error: "Pending application not found." });
    }

    const newVolunteer = new Volunteer({
      fullName: application.fullName,
      email: application.email,
      phone: application.phone,
      dob: application.dob,
      address: application.address,
      aadhaarNumber: application.aadhaarNumber,
      profilePicture: application.profilePicture,
      status,
    });

    const saved = await newVolunteer.save();
    await PendingVolunteer.findByIdAndDelete(id);

    res.json({ message: "Volunteer approved and saved.", data: saved });
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
