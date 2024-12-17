import { ArrayMinSize, arrayMinSize, IsArray, IsDecimal, IsNotEmpty, IsNumber, IsPositive, MaxLength, Min, ValidateNested } from "class-validator";
import { CaracteristicaProdutoDTO } from "./caracteristicaProduto.dto";
import { ImagemProdutoDTO } from "./imagemProduto.dto";
import { Type } from "class-transformer";

export class CriaProdutoDTO {
    @IsNotEmpty({ message: 'O campo nome é obrigatório' })
    nome: string;

    @IsPositive( { message: 'O campo valor deve ser um número positivo' })
    @Min(0.01, { message: 'O campo valor deve ser maior que R$ 0,00' })
    @IsNumber( {maxDecimalPlaces: 2}, { message: 'O campo valor deve ter no máximo 2 casas decimais' })
    valor: number;

    @Min(0, { message: 'O campo quantidade deve ser maior ou igual a zero' })
    quantidadeDisponivel: number;

    @IsNotEmpty({ message: 'O campo descrição é obrigatório' })
    @MaxLength(1000, { message: 'O campo descrição deve ter no máximo 1000 caracteres' })
    descricao: string;

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(3, { message: 'O produto deve ter no mínimo 3 características' })
    @Type(() => CaracteristicaProdutoDTO)
    caracteristicas: CaracteristicaProdutoDTO[];

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1, { message: 'O produto deve ter no mínimo 1 imagem' })
    @Type(() => ImagemProdutoDTO)   
    imagens: ImagemProdutoDTO[];

    @IsNotEmpty({ message: 'O campo categoria é obrigatório' })
    categoria: string;
}