import express from 'express';
import { getAllContacts, getContact } from '../controllers/contacts.controller.js';

const router = express.Router();

router.get('/', getAllContacts);
router.get('/:contactId', getContact);

export default router;