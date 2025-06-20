// controllers/eventController.js
import Event from "../models/Event.js";
import Volunteer from "../models/Volunteer.js";

export const createEvent = async (req, res) => {
  try {
    const { title, date, venue, description } = req.body;
    const banner = req.file?.filename;

    const event = new Event({ title, date, venue, description, banner });
    const savedEvent = await event.save();

    res.status(201).json({ message: "Event created successfully.", event: savedEvent });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, date, venue, description } = req.body;
    const banner = req.file?.filename;

    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      { title, date, venue, description, ...(banner && { banner }) },
      { new: true }
    );

    if (!updatedEvent) return res.status(404).json({ error: "Event not found." });

    res.json({ message: "Event updated successfully.", event: updatedEvent });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().populate("volunteers", "fullName email").sort({ date: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const assignVolunteers = async (req, res) => {
  try {
    const { id } = req.params;
    const { volunteerIds } = req.body; // Array of volunteer ObjectIds

    const event = await Event.findById(id);
    if (!event) return res.status(404).json({ error: "Event not found." });

    event.volunteers = volunteerIds;
    const updated = await event.save();

    res.json({ message: "Volunteers assigned successfully.", event: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const handleRSVP = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, isVolunteer } = req.body;

    const event = await Event.findById(id);
    if (!event) return res.status(404).json({ error: "Event not found." });

    event.rsvps.push({ name, email, isVolunteer });
    await event.save();

    res.status(200).json({ message: "RSVP recorded successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
