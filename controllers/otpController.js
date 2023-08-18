const otpModel = require('../models/otpModel');

class OTPController {
  async sendOTP(req, res) {
    const { phoneNumber, email } = req.body;

    if (!phoneNumber || !email) {
      return res.status(400).json({ error: 'Phone number and email are required' });
    }

    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Simulate OTP delivery by logging it
    console.log(`Generated OTP for ${phoneNumber}: ${otp}`);

    otpModel.createOTP(phoneNumber, otp, email);

    res.json({ message: 'OTP sent successfully', otp });
  }

  async verifyOTP(req, res) {
    const { phoneNumber, otp } = req.body;

    if (!phoneNumber || !otp) {
      return res.status(400).json({ error: 'Phone number and OTP are required' });
    }

    const isOTPValid = otpModel.verifyOTP(phoneNumber, otp);

    if (isOTPValid) {
      res.json({ message: 'OTP verified successfully' });
    } else {
      res.status(400).json({ error: 'Invalid OTP' });
    }
  }
}

module.exports = new OTPController();


// const otpModel = require('../models/otpModel');

// class OTPController {
//   async sendOTP(req, res) {
//     const { phoneNumber, email } = req.body;

//     if (!phoneNumber || !email) {
//       return res.status(400).json({ error: 'Phone number and email are required' });
//     }

//     // Generate a random 6-digit OTP
//     const otp = Math.floor(100000 + Math.random() * 900000);

//     // Simulate OTP delivery by logging it
//     console.log(`Generated OTP for ${phoneNumber}: ${otp}`);

//     // For practice, we'll just return the OTP in the response, but in a real scenario, you'd send it via SMS
//     res.json({ message: 'OTP sent successfully', otp });
//   }

//   async verifyOTP(req, res) {
//     const { phoneNumber, otp } = req.body;

//     if (!phoneNumber || !otp) {
//       return res.status(400).json({ error: 'Phone number and OTP are required' });
//     }

//     const isOTPValid = otpModel.verifyOTP(phoneNumber, otp);

//     if (isOTPValid) {
//       res.json({ message: 'OTP verified successfully' });
//     } else {
//       res.status(400).json({ error: 'Invalid OTP' });
//     }
//   }
// }

// module.exports = new OTPController();



// const otpModel = require('../models/otpModel');

// class OTPController {
//   async sendOTP(req, res) {
//     const { phoneNumber, email } = req.body;

//     if (!phoneNumber || !email) {
//       return res.status(400).json({ error: 'Phone number and email are required' });
//     }

//     const otp = otpModel.createOTP(phoneNumber, email);

//     // Simulate OTP delivery by logging it
//     console.log(`Generated OTP for ${phoneNumber}: ${otp}`);

//     res.json({ message: 'OTP sent successfully' });
//   }

//   async verifyOTP(req, res) {
//     const { phoneNumber, otp } = req.body;

//     if (!phoneNumber || !otp) {
//       return res.status(400).json({ error: 'Phone number and OTP are required' });
//     }

//     const isOTPValid = otpModel.verifyOTP(phoneNumber, otp);

//     if (isOTPValid) {
//       res.json({ message: 'OTP verified successfully' });
//     } else {
//       res.status(400).json({ error: 'Invalid OTP' });
//     }
//   }
// }

// module.exports = new OTPController();


// const otpModel = require('../models/otpModel');

// class OTPController {
//   async sendOTP(req, res) {
//     const { phoneNumber, email } = req.body;

//     if (!phoneNumber || !email) {
//       return res.status(400).json({ error: 'Phone number and email are required' });
//     }

//     const otp = otpModel.createOTP(phoneNumber, email);

//     // Simulate OTP delivery by logging it (replace with your SMS API calls)
//     console.log(`OTP for ${phoneNumber}: ${otp}`);

//     res.json({ message: 'OTP sent successfully' });
//   }

//   async verifyOTP(req, res) {
//     const { phoneNumber, otp, email } = req.body;

//     if (!phoneNumber || !otp || !email) {
//       return res.status(400).json({ error: 'Phone number, OTP, and email are required' });
//     }

//     const isOTPValid = otpModel.verifyOTP(phoneNumber, otp, email);

//     if (isOTPValid) {
//       res.json({ message: 'OTP verified successfully' });
//     } else {
//       res.status(400).json({ error: 'Invalid OTP or email' });
//     }
//   }
// }

// module.exports = new OTPController();
