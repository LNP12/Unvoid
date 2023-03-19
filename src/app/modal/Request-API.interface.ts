
export interface Requests{
    request: RequestAPI[]
}

export interface RequestAPI{
    id: number;
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: LocationAndOrigin,
    location: LocationAndOrigin,
      image: string,
      episode: string[],
      url: string,
      created: string;
}
export interface LocationAndOrigin{
    name: string,
    url: string
}

