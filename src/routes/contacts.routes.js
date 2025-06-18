import express from 'express';
import { getAllContacts, addContact } from '../controllers/contacts.controller.js';

const router = express.Router();

router.get('/', getAllContacts);

export default router;
