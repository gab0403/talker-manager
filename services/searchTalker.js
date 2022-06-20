const express = require('express');

const app = express();

// const fs = require('fs').promises;

app.use(express.json());

// const talker = 'talker.json';

const searchTalker = async (_req, _res) => {
    // função aqui
};

module.exports = { searchTalker };