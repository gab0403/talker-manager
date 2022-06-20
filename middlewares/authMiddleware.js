const validateEmailPass = async (req, res, next) => {
    const { email, password } = req.body;
    const validateEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const minCarac = 6;
    if (!password) {
       return res.status(400).json({ message: 'O campo "password" é obrigatório' });
    }
    if (password.length < minCarac) { 
        return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' }); 
    }
    if (!email) {
       return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    if (!validateEmail) { 
       return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
   next();
};

module.exports = { validateEmailPass };