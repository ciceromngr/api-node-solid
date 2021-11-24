import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {

    constructor(
        private createUserUseCase: CreateUserUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body

        try {

            await this.createUserUseCase.execute({
                name,
                email,
                password
            })

            return res.status(201).json({ msg: 'User Created.' })

        } catch (error) {

            return res.status(400).json({ msg: error.message || 'Unexpected Error.' })

        }

    }
}