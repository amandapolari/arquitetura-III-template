import z from 'zod';

export interface DeleteProductInputDTO {
    idToDelete: string;
}

export interface DeleteProductOutputDTO {
    message: string;
    product: {
        id: string;
        name: string;
        price: number;
        createdAt: string;
    };
}

export const DeleteProductSchema = z
    .object({
        idToDelete: z
            .string({
                required_error: "'idToDelete' é obrigatória",
                invalid_type_error: "'idToDelete' deve ser do tipo string",
            })
            .min(1, "'idToDelete' deve possuir no mínimo 1 caractere"),
    })
    .transform((data) => data as DeleteProductInputDTO);
