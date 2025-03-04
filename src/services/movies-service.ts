
import { Movie } from "../interfaces/Movie.interface";
import { Gender } from "../interfaces/Gender.interface";

const API_URL = 'https://api.themoviedb.org/3/';
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGNlY2U2YjNiNDQ5N2FmNjI1ZGZhNDNlZGE5YjQ1YSIsIm5iZiI6MTYyOTg1NjU4MS4wNDYwMDAyLCJzdWIiOiI2MTI1YTM0NThkMjJmYzAwOGVmZjZhOTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LNqkTLrTQOZpEm2pw_My4bYWiOJy3Hx3JYOYb9cWoTs';

export async function getGenders(): Promise<Gender[]>{
    try{
        const response = await fetch(`${API_URL}genre/movie/list?language=pt-BR`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_TOKEN}`
            }
        })
        
        if(!response.ok){
            throw new Error('Erro ao buscar gêneros');
        }
        const data = await response.json()
        return data.genres;
    }
    catch(error){
        throw new Error('Erro ao buscar gêneros');
    }
}

export async function getMoviesByGender(gender: number): Promise<Movie[]>{
    try{
        const response = await fetch(`${API_URL}discover/movie?language=pt-BR&with_genres=${gender}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_TOKEN}`
            }
        })
        
        if(!response.ok){
            throw new Error('Erro ao buscar filmes populares');
        }
        const data = await response.json()
        return data.results;
    }
    catch(error){
        throw new Error('Erro ao buscar filmes populares');
    }
}