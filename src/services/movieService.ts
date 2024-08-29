import { IMovie, IMovieExt } from "../models/IMovie";
import { IOmdbResponse } from "../models/IOmdbResponse";
import { get } from "./serviceBase";

const BASE_URL = "https://omdbapi.com/?apikey=416ed51a&";

export const getMovies = async (searchText: string): Promise<IMovie[]> => {
    const response = await get<IOmdbResponse>(`${BASE_URL}s=${searchText}`);

    return response.data.Search;
};

export const getMovie = async (id: string) => {
    const response = await get<IMovieExt>(`${BASE_URL}i=${id}`);

    return response.data;
}