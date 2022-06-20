const express = require('express');

const app = express();

const fs = require('fs').promises;

app.use(express.json());

const talker = 'talker.json';

const getTalkerById = async (req, res) => {
        const { id } = req.params;
        const data = await fs.readFile(talker, 'utf-8');
        const talkerId = JSON.parse(data);
        const infoId = talkerId.find((e) => Number(e.id) === Number(id));
        if (!infoId) {
            res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
        }
       res.status(200).json(infoId);
};

module.exports = { getTalkerById };