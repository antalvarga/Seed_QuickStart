const myServiceEmail = process.env.SERVICE_EMAIL || '';
const myEmailSuporte = process.env.EMAIL_SUPORTE || '';
const myPassWordEmailSuporte = process.env.PASSWORD_EMAIL_SUPORTE || '';

const transporterEmail = () => {
    return {
        service: myServiceEmail,
        auth: {
            user: myEmailSuporte,
            pass: myPassWordEmailSuporte,
        },
    };
};

export { transporterEmail };
