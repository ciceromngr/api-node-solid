import { Users } from "../entities/Users";

export interface IUsersRepository {
    findByEmail(email: string): Promise<Users>;
    save(users: Users): Promise<void>;
}