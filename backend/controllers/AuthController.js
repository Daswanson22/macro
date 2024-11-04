const jwt = require('jsonwebtoken');
const userModel = require('../models/UserModel');

const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findUserByEmail(email);

        if(!user) {
            const error = new Error("User not found");
            error.status = 404;
            throw error;
        }

        if(user.password != password) {
            const error = new Error("Invalid password");
            error.status = 401;
            throw error;
        }

        const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
        if(!token) {
            const error = new Error('Could not be created');
            error.status = 500;
            throw error;
        }
        
        res.json({token: token, user: user});
    } catch (error) {
        next(error);
    }
};

const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userId = await userModel.addUser(name, email, password);
        if(!userId) {
            const error = new Error('User could not be created');
            error.status = 409;
            throw error;
        }

        const user = await userModel.findUserByEmail(email);
        if(!user) {
            const error = new Error('User not found');
            error.status = 404;
            throw error;
        }

        const token = jwt.sign({ userId: user.uid }, 'your_jwt_secret', { expiresIn: '1h' });
        if(!token) {
            const error = new Error('Could not be created');
            error.status = 500;
            throw error;
        }

        res.setHeader('Authorization', `Bearer ${token}`);
        delete user.password;

        res.status(201).json(user);
    } catch(error) {
        if (error.message === 'A user with this email already exists.') {
            res.status(409).send(error.message);
        } else {
            res.status(500).send('Server error');
        }
    }
}

const adminLogin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findAdminByEmail(email);

        if(!user) {
            const error = new Error("User not found");
            error.status = 404;
            throw error;
        }

        if(user.password != password) {
            const error = new Error("Invalid password");
            error.status = 401;
            throw error;
        }

        const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
        if(!token) {
            const error = new Error('Could not be created');
            error.status = 500;
            throw error;
        }
        
        res.json({token: token, user: user});
    } catch (error) {
        next(error);
    }
}

const adminRegister = async (req, res, next) => {
    const { name, email, password } = req.body;
    try {
        const userId = await userModel.addAdmin(name, email, password);
        if(!userId) {
            const error = new Error('User could not be created');
            error.status = 409;
            throw error;
        }
        const user = await userModel.findAdminByEmail(email);
        if(!user) {
            const error = new Error('User not found');
            error.status = 404;
            throw error;
        }

        console.log('Admin user found');

        const token = jwt.sign({ userId: user.uid }, 'your_jwt_secret', { expiresIn: '1h' });

        if(!token) {
            const error = new Error('Could not be created');
            error.status = 500;
            throw error;
        }

        res.setHeader('Authorization', `Bearer ${token}`);
        delete user.password;
        res.status(201).json(user);
    } catch(error) {
        next(error);
    }
}

module.exports = {
    login,
    register,
    adminLogin,
    adminRegister
};
