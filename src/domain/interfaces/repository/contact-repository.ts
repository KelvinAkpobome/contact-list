// domain/interfaces/repositories/contact-repository.ts
import { Contact } from "../../../domain/entities/contact";

export interface ContactRepository {
    createContact(contact: Contact): Promise<boolean>;
    getAll(): Promise<Contact[]>;
}