import Contact from '../models/contact.model.js';

export const getContacts = async () => {
  return await Contact.find();
};

export const createContact = async (data) => {
  return await Contact.create(data);
};
