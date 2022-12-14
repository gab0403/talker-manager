const validateWatchedAt = (req, res, next) => {
    const { watchedAt } = req.body.talk;
    const regexDate = /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/i;
    const date = regexDate.test(watchedAt);
    if (!watchedAt) {
       return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
    }
 
    if (!date) {
       return res.status(400).json(
          { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' },
          );
    }
    next();
 };
 module.exports = { validateWatchedAt };