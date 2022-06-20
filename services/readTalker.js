const fs = require('fs').promises;

const talker = 'talker.json';

const readTalker = async (_req, res) => {
  const data = await fs.readFile(talker, 'utf8');
          const info = JSON.parse(data);
           res.status(200).json(info);
};

module.exports = { readTalker };