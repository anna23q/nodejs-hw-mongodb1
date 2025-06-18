import { getContacts, getContactById } from '../services/contacts.js';

export const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await getContacts();
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched contacts!',
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
};

export const getContactByIdController = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);

    if (!contact) {
      return res.status(404).json({
        status: 404,
        message: 'Contact not found',
      });
    }

    res.status(200).json({
      status: 200,
      message: 'Successfully fetched contact!',
      data: contact,
    });
  } catch (error) {
    next(error);
  }
};

