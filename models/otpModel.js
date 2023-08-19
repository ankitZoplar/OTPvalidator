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
  

