import crypto from 'crypto';

const generateSecret = () => {
  return crypto.randomBytes(32).toString('hex');
};

export { generateSecret };
