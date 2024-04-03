import { z } from 'zod';

const UserZodSchema = z.object({
    username: z
        .string()
        .min(6, 'O campo Nome do usuario deve ter no mínimo 6 caracteres'),
    name: z.string().min(6, 'O campo Nome deve ter no mínimo 6 caracteres'),
    email: z.string().email('O campo e-mail não foi preenchido corretamente.'),
    whatsapp: z.string(),
    password: z
        .string()
        .min(6, 'O campo Senha deve ter no mínimo 6 caracteres'),
    secret: z.string(),
    birth: z.string(),
});

type TypeUserZodSchema = z.infer<typeof UserZodSchema>;

export { TypeUserZodSchema, UserZodSchema };
