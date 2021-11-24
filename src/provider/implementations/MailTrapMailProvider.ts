import 'dotenv/config'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer';
import { IMailProvider, IMessage } from "../IMailProvider";
import MailConfig from './MailConfig';

export class MailTrapMailProvider implements IMailProvider {

    private trasnporter: Mail

    constructor() {
        this.trasnporter = nodemailer.createTransport(MailConfig)
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.trasnporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }
}