routeMiddleware = (req, res, next) => {
    console.log('Request made!');
    next();
}

authMiddleware = (req, res, next) => {
    if (req.body.role === 'admin') {
        next();
    } else {
        res.status(401).send('Unauthorized - YOU SHALL NOT PASS!');
    }
}

module.exports = {
    routeMiddleware,
    authMiddleware
}