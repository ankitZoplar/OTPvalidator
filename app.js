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


// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const otpRoutes = require('./routes/otpRoutes');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });

// app.use('/', otpRoutes);

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
