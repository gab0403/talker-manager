function generateToken() {
    let randomToken = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 16; i += 1) {
        randomToken += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomToken;
  }

  const loginTalkers = (_req, res) => {
    const tokenNumber = generateToken();
    res.status(200).json({ token: tokenNumber });
  };

  module.exports = { loginTalkers };
