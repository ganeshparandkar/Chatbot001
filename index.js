const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse application/json
app.use(bodyParser.json());

// Webhook endpoint for receiving messages
app.post('/webhook', (req, res) => {
  // Extract message text from the request body
  const messageText = req.body.message.text;

  // Check if the message is "Hii"
  if (messageText && messageText.toLowerCase() === 'hii') {
    // Respond with "Hii" message
    res.json({
      message: 'Hii'
    });
  } else {
    // Respond with a default message
    res.json({
      message: 'Received message'
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
