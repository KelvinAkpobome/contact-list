// domain/use-cases/contact/-get-all-contacts.ts
import { Contact } from "../../interfaces/entities/contact";
import { ContactRepository } from "../../interfaces/repository/contact-repository";
import { GetAllContactsUseCase } from "../../interfaces/use-cases/GetAllContacts";

export class GetAllContacts implements GetAllContactsUseCase {
    constructor(private contactRepository: ContactRepository) {}

    async execute(): Promise<Contact[]> {
        return await this.contactRepository.getAll()
    }
}