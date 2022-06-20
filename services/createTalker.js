const express = require('express');

const app = express();

const fs = require('fs').promises;

app.use(express.json());

const talker = 'talker.json';

const createTalker = async (req, res) => {
    const { name, age, talk } = req.body;

    const data = await fs.readFile(talker, 'utf-8');
    const newTalk = JSON.parse(data);
    const newTalkId = newTalk.length + 1;
    const newTalkInfo = {
        id: newTalkId,
        name,
        age,
        talk,
    };
    newTalk.push(newTalkInfo);
    await fs.writeFile(talker, JSON.stringify(newTalk));
    res.status(201).json(newTalkInfo);
};

module.exports = { createTalker };