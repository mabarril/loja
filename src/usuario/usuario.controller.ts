import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDto } from "./dto/criaUsuario.dto";

@Controller('/usuarios') 
    export class UsuarioController {
        constructor(private usuarioRepository: UsuarioRepository) {}
        
        @Post()
        async criaUsuario(@Body() dadosDoUsuario : CriaUsuarioDto) {  
            this.usuarioRepository.salvar(dadosDoUsuario); 
            return dadosDoUsuario;
        }

        @Get()
        async listaUsuarios() {
            return this.usuarioRepository.listar(); 
        }


    }

