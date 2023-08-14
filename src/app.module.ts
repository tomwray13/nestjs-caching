import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.register({ isGlobal: true }),
    PokemonModule,
  ],
})
export class AppModule {}
