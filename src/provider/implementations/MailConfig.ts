export default {
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_PORT) || 2525,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
}