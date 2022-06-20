const fs = require('fs').promises;

const talker = 'talker.json';

const changeTalker = async (req, res) => {
    const { id } = req.params;
    const { name, age, talk } = req.body;
    const data = await fs.readFile(talker, 'utf-8');
    const editTalk = JSON.parse(data);
    const editTalkInfo = editTalk.find((e) => e.id === Number(id));
    editTalkInfo.name = name;
    editTalkInfo.age = age;
    editTalkInfo.talk = talk;
    await fs.writeFile(talker, JSON.stringify(editTalk));
    res.status(200).json(editTalkInfo);
};
  module.exports = { changeTalker };