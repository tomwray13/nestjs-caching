import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PokemonService {
  constructor(private readonly httpService: HttpService) {}

  async getPokemon(id: number): Promise<string> {
    const { data } = await this.httpService.axiosRef.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    return await `${data.name}`;
  }
}
