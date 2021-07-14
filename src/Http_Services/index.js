import {httpResquest} from '../helper'

export async function getPopularMovies(pageNum) {
    return httpResquest('get', 'movie/popular', null, `&page=${pageNum}`)
}
export async function getSearchMovies(search, pageNum) {
    return httpResquest('get', 'search/movie', null, `&language=en-US&query=${search}&page=${pageNum}&include_adult=false`)
}
