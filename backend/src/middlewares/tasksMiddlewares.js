const validateBody = (req, res, next) => {
    const { status, title } = req.body;
    if (status === undefined) {
        console.log(req.body);
        console.log(status);
        return res.status(400).json({ mensagem: 'Field status is required' });
    }
    if (title === '') {
        return res.status(400).json({ mensagem: 'Field title couldn\'t be empty' });
    }
    return next();
};

module.exports = {
    validateBody
};
