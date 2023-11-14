import z from 'zod';
import { ProductModel } from '../models/Product';

export interface GetProductsInputDTO {
    q: string;
}

// ProductModel é a estrutura de Product que será devolvida para o Front (createdAt camelCase)
export type GetProductsOutputDTO = ProductModel[];

// PORQUE DESSA FORMA NÃO FUNCIONA?
// export interface GetProductsOutputDTO {
//     id: string;
//     name: string;
//     price: number;
//     createdAt: string;
// }
// [];

export const GetProductsSchema = z
    .object({
        q: z.string().min(1).optional(),
    })
    .transform((data) => data as GetProductsInputDTO);
