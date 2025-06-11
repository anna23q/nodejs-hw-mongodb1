import { Contact } from '../models/contactModel.js';

export const getContactsService = async () => {
  const contacts = await Contact.find();
  return contacts;
};
