const myUserSuporte = process.env.USER_SUPORTE || '';
const myEmailSuporte = process.env.EMAIL_SUPORTE || '';
const myEmailTo = process.env.EMAIL_TO || '';

const optionsEmail = (pSubject: string) => {
    const mySubject = pSubject || process.env.SUBJECT_SUPORTE;
    const messageHTML = `<h1> ${mySubject} </h1>`;

    return {
        from: `${myUserSuporte} <${myEmailSuporte}>`,
        to: `${myEmailTo}`,
        subject: mySubject,
        html: messageHTML,
    };
};

export { optionsEmail };
