const express = require('express');

const app = express();

const fs = require('fs').promises;

app.use(express.json());

const talker = 'talker.json';

const readTalker = async (_req, res) => {
  const data = await fs.readFile(talker, 'utf8');
          const info = JSON.parse(data);
           res.status(200).json(info);
};

module.exports = { readTalker };