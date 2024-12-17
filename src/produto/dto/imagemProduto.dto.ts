import { IsNotEmpty, IsUrl } from "class-validator";

export class ImagemProdutoDTO {
    @IsNotEmpty({ message: 'O campo url é obrigatório' })
    @IsUrl({}, { message: 'O campo url deve ser uma URL válida' })
    url: string;
    @IsNotEmpty({ message: 'O campo descrição é obrigatório' })
    descricao: string;
}