import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { createCard, getAllCards } from '../db/userCard';

const UserCardController = {
  createCard: async (req: Request | any, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ message: `Validation error` });
    const { cardNumber, expireDateCard, cvvCard } = req.body;
    const { id } = req.user;
    const cards = await getAllCards({ userId: id });
    if (cards.count >= 2) return res.status(500).json('You have limit to create card');
    const response = await createCard({ cardNumber, expireDateCard, cvvCard, userId: id });
    res.json(response);
  },
  getCards: async (req: Request | any, res: Response) => {
    const { id } = req.user;
    const cards = await getAllCards({ userId: id });
    res.json(cards);
  },
};

export default UserCardController;