import { IsNotEmpty } from "class-validator";

export class CaracteristicaProdutoDTO {
    @IsNotEmpty({ message: 'O campo nome é obrigatório' })
    nome: string;
    @IsNotEmpty({ message: 'O campo descrição é obrigatório' })
    descricao: string;
}