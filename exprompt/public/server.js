const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  const db = client.db('my-db');
  const promptCollection = db.collection('prompts');

  app.get('/api/prompt', async (req, res) => {
    const prompts = await promptCollection.find().toArray();
    res.json(prompts);
  });

  app.post('/api/prompt', async (req, res) => {
    const newPrompt = req.body;
    const result = await promptCollection.insertOne(newPrompt);
    res.json(result.ops[0]);
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});