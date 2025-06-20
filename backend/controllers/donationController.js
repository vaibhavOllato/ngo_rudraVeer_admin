
// controllers/donationController.js
import Donation from "../models/Donation.js";

export const createDonation = async (req, res) => {
  try {
    const { donorName, contact, donationType, amount, item, notes } = req.body;

    if (!donationType || (donationType === "money" && !amount) || (donationType === "goods" && !item)) {
      return res.status(400).json({ error: "Invalid donation details." });
    }

    const donation = new Donation({ donorName, contact, donationType, amount, item, notes });
    const saved = await donation.save();

    res.status(201).json({ message: "Donation recorded successfully.", donation: saved });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.json(donations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getMonthlySummary = async (req, res) => {
  try {
    const currentYear = new Date().getFullYear();
    const donations = await Donation.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(`${currentYear}-01-01`),
            $lt: new Date(`${currentYear + 1}-01-01`),
          },
        },
      },
      {
        $group: {
          _id: { $month: "$createdAt" },
          totalMoney: { $sum: "$amount" },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    res.json(donations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};