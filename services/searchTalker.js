const fs = require('fs').promises;

const talker = 'talker.json';

const searchTalker = async (req, res) => {
    const data = await fs.readFile(talker, 'utf-8');
    const talk = JSON.parse(data);
    if (!req.query.q) return res.status(200).json(talk);
    const talkInfo = talk.filter(
        (e) => e.name.toLowerCase().includes(req.query.q.toLowerCase()),
        );
        res.status(200).json(talkInfo);
};

module.exports = { searchTalker };