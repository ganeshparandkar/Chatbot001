const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse application/json
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/webhook',(req,res)=>{
    res.send('Hello this is get request to my webhook')
})

app.post('/webhook',(req,res)=>{
    
    if (req.body.payload.payload.text) {
        const text = req.body.payload.payload.text;

        if (text == 'hi') {
            res.send('hi successful!!')
        } else {
            res.send('payload is working!')
        }
        
    }
    res.send('Not working but fine')
    
    // console.log('Request Method:', req.method);
    // console.log('Request URL:', req.url);
    // console.log('Query Parameters:', req.query);
    // console.log('Request Headers:', req.headers);
    // console.log('Request Body:', req.body);

    // const ReqData = {
    //     method: req.method,
    //     url: req.url,
    //     queryParameters: req.query,
    //     headers: req.headers,
    //     body: req.body
    // };
    const messageText = req.body.payload.payload.text;

    // Check if the incoming message is "Hii"
    if (messageText && messageText.toLowerCase() === 'hii') {
        // Respond with "Hello World" to the chatbot
        res.send('Finally Worked');
    }
    else{
    res.send(`Hello, this is a POST request to my webhook. data: ${ReqData}`);
    }
});
// Webhook endpoint for receiving messages


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
