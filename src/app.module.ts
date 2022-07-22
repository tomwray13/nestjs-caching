import { CacheModule, Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [CacheModule.register({ isGlobal: true }), PokemonModule],
})
export class AppModule {}
