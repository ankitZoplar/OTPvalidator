class OTPModel {
    constructor() {
      this.activeOTPs = {};
    }
  
    createOTP(phoneNumber, otp, email) {
      const expiresAt = Date.now() + 600000; // OTP expires in 10 minutes
      this.activeOTPs[phoneNumber] = { otp, email, expiresAt };
    }
  
    verifyOTP(phoneNumber, enteredOTP) {
      const activeOTP = this.activeOTPs[phoneNumber];
      console.log(enteredOTP);
      console.log(activeOTP.otp);

      if (!activeOTP || activeOTP.otp != enteredOTP || activeOTP.expiresAt < Date.now()) {
        return false;
      }
      delete this.activeOTPs[phoneNumber];
      return true;
    }
  }
  
  module.exports = new OTPModel();
  

// class OTPModel {
//     constructor() {
//       this.activeOTPs = {};
//     }
  
//     generateOTP() {
//       return Math.floor(100000 + Math.random() * 900000).toString();
//     }
  
//     createOTP(phoneNumber, email) {
//       const otp = this.generateOTP();
//       const otpExpiration = Date.now() + 5 * 60 * 1000; // 5 minutes
//       this.activeOTPs[phoneNumber] = { otp, email, expiresAt: otpExpiration };
//       return otp;
//     }
  
//     verifyOTP(phoneNumber, enteredOTP, email) {
//       const activeOTP = this.activeOTPs[phoneNumber];
//       if (!activeOTP || activeOTP.otp !== enteredOTP || activeOTP.expiresAt < Date.now()) {
//         return false;
//       }
//       if (activeOTP.email !== email) {
//         return false;
//       }
//       delete this.activeOTPs[phoneNumber];
//       return true;
//     }
//   }
  
//   module.exports = new OTPModel();
  