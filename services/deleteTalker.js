const fs = require('fs').promises;

const talker = 'talker.json';

const deleteTalker = async (req, res) => {
    const { id } = req.params;
    const data = await fs.readFile(talker, 'utf-8');
    const deleteTalk = JSON.parse(data);
    const deleteTalkInfo = deleteTalk.find((e) => e.id === Number(id));
    deleteTalk.splice(deleteTalk.indexOf(deleteTalkInfo), 1);
    await fs.writeFile(talker, JSON.stringify(deleteTalk));
    res.status(204).json(deleteTalkInfo);
};

module.exports = { deleteTalker };