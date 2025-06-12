import { getContacts } from '../services/contacts.js';

export const getAllContacts = async (req, res) => {
  const contacts = await getContacts();

  res.status(200).json({
    status: 200,
    message: 'Successfully fetched contacts!',
    data: contacts,
  });
};
