import { Contact } from "../../entities/contact";
import { ContactRepository } from "../../interfaces/repository/contact-repository";
import { CreateContactUseCase } from "../../interfaces/use-cases/CreateContact";

export class CreateContact implements CreateContactUseCase {
    constructor(private contactRepository: ContactRepository) {}

  async execute(contact: Contact): Promise<boolean> {
    return await this.contactRepository.createContact(contact);
  }
}
