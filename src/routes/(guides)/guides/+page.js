import { error } from '@sveltejs/kit'

export async function load({fetch}){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const guides = await res.json();

    if(res.ok) {
        return { guides }
    }
    throw error(res.status, {
        message: 'Could not fetch the guides'
    })
}