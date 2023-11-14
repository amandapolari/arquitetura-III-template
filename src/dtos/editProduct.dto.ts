import z from 'zod';

// Me baseei por ProductBusiness.ts e ProductController.ts para criar os DTOs
// para saber o que colocar no input -> Controllers
// para saber o que colocar no output -> Business

export interface EditProductInputDTO {
    idToEdit: string;
    id: string;
    name: string;
    price: number;
}

export interface EditProductOutputDTO {
    message: string;
    product: {
        id: string;
        name: string;
        price: number;
        createdAt: string;
    };
}

export const EditProductSchema = z
    .object({
        idToEdit: z
            .string({
                required_error: "'idToEdit' é obrigatória",
                invalid_type_error: "'idToEdit' deve ser do tipo string",
            })
            .min(1, "'id' deve possuir no mínimo 1 caractere"),
        id: z
            .string({
                invalid_type_error: "'id' deve ser do tipo string",
            })
            .min(1, "'id' deve possuir no mínimo 1 caractere")
            .optional(),
        name: z
            .string({
                invalid_type_error: "'name' deve ser do tipo string",
            })
            .min(2, "'name' deve possuir no mínimo 2 caracteres")
            .optional(),
        price: z
            .number({
                invalid_type_error: "'price' deve ser do tipo number",
            })
            .optional(),
    })
    .transform((data) => data as EditProductInputDTO);
