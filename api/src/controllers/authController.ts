import bcrypt from 'bcrypt';
import { getUserByEmail, createUser } from '../db/user';
import { Request, Response } from 'express';
import { generateJWt } from '../service/generateJwt';

const AuthController = {
  signUp: async (req: Request, res: Response) => {
    const { userName, userLastName, email, password } = req.body;
    const existingUser = await getUserByEmail(email);
    if (existingUser) return res.status(400).json({ message: `User with email: ${email} is created` });
    const hashPassword = await bcrypt.hash(password, 7);
    const user = await createUser({
      userName,
      userLastName,
      email,
      password: hashPassword,
    });
    const token = generateJWt(user.id, user.userName, user.userLastName);
    res.json({ token });
  },
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const existingUser = await getUserByEmail(email);
    if (!existingUser) return res.status(400).json({ message: `User with email: ${email} not found` });
    const comparePassword = await bcrypt.compare(password, existingUser.password);
    if (!comparePassword) return res.status(400).json({ message: 'Password error' });
    const token = generateJWt(existingUser.id, existingUser.userName, existingUser.role);
    res.json({ token });
  },
  authUser: async (req: any, res: Response) => {
    res.json(req.user);
  },
};

export default AuthController;