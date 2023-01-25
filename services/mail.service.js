const nodemailer = require('nodemailer')

class mailService{

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth:{
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async sendActivationMail(to, link){
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: "Activation letter",
            text: "",
            html:
                `
                <div>
                    <h1>Activation letter</h1>
                    <a>To activate, go to the following link:</a> 
                    <a href="${link}">${link}</a> 
                </div>
                `

        })
    }
}
module.exports = new mailService()