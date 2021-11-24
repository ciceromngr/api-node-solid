import { Users } from "../../entities/Users";
import { IUsersRepository } from "../IUsersRepository";

export class PostgresUsersRepository implements IUsersRepository {

    private user: Users[] = []

    async findByEmail(email: string): Promise<Users> {
        const user = this.user.find(user => user.email === email)
        return user
    }

    async save(user: Users): Promise<void> {
        this.user.push(user)
    }
}