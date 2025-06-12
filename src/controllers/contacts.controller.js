import { getContacts, createContact } from '../services/contacts.js';

export const getAllContacts = async (req, res) => {
  const contacts = await getContacts();

  res.status(200).json({
    status: 200,
    message: 'Successfully fetched contacts!',
    data: contacts,
  });
};

export const addContact = async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({
      status: 400,
      message: 'Missing required fields: name, email, phone',
    });
  }

  const newContact = await createContact({ name, email, phone });

  res.status(201).json({
    status: 201,
    message: 'Contact created successfully!',
    data: newContact,
  });
};
