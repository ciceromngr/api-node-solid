import { Users } from "../../entities/Users";
import { IMailProvider } from "../../provider/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {

    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider
    ) { }

    async execute(data: ICreateUserRequestDTO) {

        const userAlreadyExist = await this.usersRepository.findByEmail(data.email)

        if (userAlreadyExist) {
            throw new Error('User already exist.')
        }

        const user = new Users(data)

        await this.usersRepository.save(user)

        await this.mailProvider.sendMail({
            to: {
                name: user.name,
                email: user.email
            },
            from: {
                name: 'Equipe do meu App',
                email: 'myApp@gmail.com'
            },
            subject: 'Seja Bem vindo ao App SOLID',
            body: `<p>Olá ${user.name}, Você já pode fazer loguim em nossa plataforma.</p>`
        })
    }
}