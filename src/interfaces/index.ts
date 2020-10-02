interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonListModel {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<Pokemon>;
}
