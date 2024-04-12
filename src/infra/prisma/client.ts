import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export { client };

/*
// Importa o PrismaClient
import { PrismaClient } from '@prisma/client';

// Declara o cliente fora da função (opcional)
let client: PrismaClient;

// Exporta a função de inicialização
export const initializePrismaClient = async () => {
    // Cria uma nova instância do PrismaClient
    client = new PrismaClient();
    console.log('PrismaClient initialized:', client);
};

// Exporta o cliente (opcional, necessário se usar a Solução 2)
export { client };
*/
