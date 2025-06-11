import { getContactsService } from '../services/contacts.js';

export const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await getContactsService();
    res.status(200).json({
      status: 200,
      message: "Successfully found contacts!",
      data: contacts
    });
  } catch (error) {
    next(error);
  }
};
