const express = require("express");
const User = require("../Model/User.js");
const personalInfoRoute = express.Router();

personalInfoRoute.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const personalInfo = await User.findById(id);

        if (!personalInfo) {
            return res.status(404).json({ message: "User details not found" });
        }

        res.status(200).json(personalInfo);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

// personalInfoRoute.post("/demo",(req,res)=>{
//     res.send("helo")
// })
module.exports = personalInfoRoute;

