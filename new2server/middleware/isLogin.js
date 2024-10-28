
import jwt from 'jsonwebtoken'
export const isLogin = async (req, res, next) => {

    const token = req?.cookies?.token;
    if (!token) {
        return res.status(401).json({
            message: 'Unauthorized',
        });
    }



    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Invalid token',
        });
    }
}