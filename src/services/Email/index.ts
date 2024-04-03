import * as nodemailer from 'nodemailer';
import { optionsEmail } from './optionsEmail';
import { transporterEmail } from './transporterEmail';

const VERDE = '\x1b[32m';
const VERMELHA = '\x1b[31m';
const RESET_COR = '\x1b[0m';

const Email = (pSubject: string) => {
    const options = optionsEmail(pSubject);
    const transporteEmail = transporterEmail();
    const transporter = nodemailer.createTransport(transporteEmail);

    console.log(VERDE, `Enviando e-mail...`);

    transporter.sendMail(options, (error, info) => {
        const myCor = error ? VERMELHA : VERDE;
        const myMessage = error
            ? `:: Erro ao enviar email :: \n ${error} `
            : `E-mail enviado com sucesso ${info}`;

        console.log(myCor, myMessage);

        process.exit();
    });

    console.log(RESET_COR, '');
};

export { Email };
