import React, { useRef } from 'react';
import { fetchHeroes } from '../Utilities/utils';

export default function SearchBar({ setter }) {
    let input = useRef('');

    const handleClick = async (e) => {
        e.preventDefault();
        let value = input.current.value;
        if (value === "") return;

        try{
            let heroes = await fetchHeroes(value);
            setter(heroes);
        } catch(err) {
            console.error(err);
        }
    }
    return (
        <>
            <form>
                <input type="text" placeholder='Search for a Hero...' ref={input}/>
                <button onClick={handleClick}>Search</button>
            </form>
        </>
    )
}
