import { uuid } from "uuidv4";

export class Users {

    public readonly id: string;
    public name: string;
    public email: string;
    public password: string;

    constructor(props: Omit<Users, 'id'>, id?: string) {
        Object.assign(this, props);

        if(!id) {
            this.id = uuid()
        }
    }

}