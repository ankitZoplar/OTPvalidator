const otpModel = require("../models/otpModel");

const phoneNumberArray = ["9504993205", "1234567890","1425364758", "0987654321"];



class OTPController {
  async sendOTP(req, res) {
    const { phoneNumber, email } = req.body;

    if (!phoneNumber || !email) {
      return res
        .status(400)
        .json({ error: "Phone number and email are required" });
    }

    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Simulate OTP delivery by logging it
    console.log(`Generated OTP for ${phoneNumber}: ${otp}`);

    otpModel.createOTP(phoneNumber, otp, email);

    // return(<div>Hello World</div>)

    res.json({ message: "OTP sent successfully", otp });

  }

  async verifyOTP(req, res) {
    const { phoneNumber, otp } = req.body;

    if (!phoneNumber || !otp) {
      return res
        .status(400)
        .json({ error: "Phone number and OTP are required" });
    }

    const isOTPValid = otpModel.verifyOTP(phoneNumber, otp);

    if (isOTPValid) {
      const isPhoneNumberRegistered = phoneNumberArray.includes(phoneNumber);

      if (isPhoneNumberRegistered) {
        // res.render('index', {error: "Phone number is already exists"})
        res.json({message: "Phone number is already exists"})

      }

      else{
        res.json({message: "Create New One"})
      }

    } else {
      res.status(400).json({ error: "Invalid OTP" });
    }
  }
}

module.exports = new OTPController();
