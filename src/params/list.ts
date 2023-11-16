
import {views} from '$lib/views';

export function match(params){
    return params in views;

}