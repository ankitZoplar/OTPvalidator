const express = require('express');
const app = express();
const otpRoutes = require('./routes/otpRoutes');

app.use(express.json());
app.use(express.static('views'));

app.use('/', otpRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

