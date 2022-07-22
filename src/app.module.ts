import { CacheModule, Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [CacheModule.register(), PokemonModule],
})
export class AppModule {}
