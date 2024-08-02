import jwt from 'jsonwebtoken';
const secret = process.env.JWT_SECRET || 'your_jwt_secret';
export const authenticateToken = (req, res, next) => {
    var _a;
    const token = (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        return res.sendStatus(401);
    }
    jwt.verify(token, secret, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    });
};
//# sourceMappingURL=authMiddleware.js.map