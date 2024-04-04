import { z } from 'zod';

const UserAuthenticationZodSchema = z.object({
    password: z
        .string()
        .min(6, 'O campo senha deve ter no mínimo 6 caracteres'),
    username: z
        .string()
        .min(6, 'O campo :: username :: deve ter no mínimo 6 caracteres'),
});

type TypeUserAuthenticationZodSchema = z.infer<
    typeof UserAuthenticationZodSchema
>;

export { TypeUserAuthenticationZodSchema, UserAuthenticationZodSchema };
