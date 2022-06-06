import { ContactDataSource } from "../../data/interfaces/contact-data-source";
import { Contact } from "../interfaces/entities/contact";
import { ContactRepository } from "../interfaces/repository/contact-repository";

export class ContactRepositoryImpl implements ContactRepository {
    contactDataSource: ContactDataSource
    constructor(contactDataSource: ContactDataSource) {
        this.contactDataSource = contactDataSource
    }

    async createContact(contact: Contact): Promise<boolean> {
        const result = await this.contactDataSource.create(contact)
        return result;
    }
    async getAll(): Promise<Contact[]> {
        const result = await this.contactDataSource.getAll()
        return result;
    }
}