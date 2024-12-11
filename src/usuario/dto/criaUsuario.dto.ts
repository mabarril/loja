import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CriaUsuarioDTO {

    @IsNotEmpty({ message: 'O campo nome é obrigatório' })
    nome: string;

    @IsEmail({}, { message: 'O campo email é inválido' })
    email: string;

    @MinLength(6, { message: 'O campo senha deve ter no mínimo 6 caracteres' })
    senha: string;
}