import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';

@Module({
  imports: [HttpModule],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}
