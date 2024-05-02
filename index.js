const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse application/json
app.use(bodyParser.json());
app.get('/webhook',(req,res)=>{
    res.send('Hello this is get request to my webhook')
})

app.post('/webhook',(req,res)=>{
    const queryParams = req;
    console.log(queryParams)
    res.send(`Hello, this is a POST request to my webhook. Query parameters: ${queryParams}`);
});
// Webhook endpoint for receiving messages


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
