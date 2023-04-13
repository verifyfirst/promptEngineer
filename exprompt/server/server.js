const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const openai = require('./openai');
app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Welcome to the ChatGPT Web App API');
  });
  const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.post('/chat', async (req, res) => {
    // ChatGPT API interaction code will go here
    const userInput = req.body.userInput;
    try {
        const chatResponse = await openai.Completion.create({
          engine: 'text-davinci-002',
          prompt: userInput,
          max_tokens: 100,
          n: 1,
          stop: null,
          temperature: 1,
        });
      
        res.send(chatResponse.choices[0].text);
      } catch (error) {
        res.status(500).send('Error processing request: ' + error.message);
      }
  });
  