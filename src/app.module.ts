import { CacheModule, Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
    PokemonModule,
  ],
})
export class AppModule {}
