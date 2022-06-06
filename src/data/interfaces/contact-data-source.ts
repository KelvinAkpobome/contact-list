import { Contact } from "../../domain/interfaces/entities/contact";
export interface ContactDataSource {
    create(contact: Contact): Promise<boolean>;
    getAll(): Promise<Contact[]>;
}