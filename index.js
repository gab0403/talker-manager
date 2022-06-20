const express = require('express');
const bodyParser = require('body-parser');
const { readTalker } = require('./services/readTalker');
const { getTalkerById } = require('./services/getTalkerById');
const { loginTalkers } = require('./services/loginTalkers');
const { createTalker } = require('./services/createTalker');
const { validateEmailPass } = require('./middlewares/authMiddleware');
const { validateAge } = require('./middlewares/validateAge');
const { validateTalk } = require('./middlewares/validateTalk');
const { validateRate } = require('./middlewares/validateRate');
const { validateToken } = require('./middlewares/validateToken');
const { validateWatchedAt } = require('./middlewares/validateWatchedAt');
const { validateName } = require('./middlewares/validateName');
const { changeTalker } = require('./services/changeTalker');
const { deleteTalker } = require('./services/deleteTalker');
const { searchTalker } = require('./services/searchTalker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.post('/login', validateEmailPass, loginTalkers);

app.get('/talker', readTalker);

app.get('/talker/search', validateToken, searchTalker);

app.post('/talker', 
validateToken,
validateName,
validateAge,
validateTalk,
validateWatchedAt,
validateRate, 
createTalker);

app.put('/talker/:id', validateToken,
validateName,
validateAge,
validateTalk,
validateWatchedAt,
validateRate, changeTalker);

app.get('/talker/:id', getTalkerById);

app.delete('/talker/:id', validateToken, deleteTalker);

app.listen(PORT, () => {
  console.log('Online');
});
