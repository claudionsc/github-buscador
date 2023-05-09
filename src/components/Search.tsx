import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { useState, KeyboardEvent } from 'react'
import classes from './Search.module.css'
import { keyboardKey } from '@testing-library/user-event'

type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}


const Search = ({ loadUser }: SearchProps) => {
    const [userName, setUsername] = useState("");

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter"){

        }
    }

    return (
        <div className={classes.search}>
            <h2>Busque por um usuário:</h2>
            <p>Conheça seus melhroes repositórios</p>
            <div className={classes.search_container}>
                <input
                    type="text"
                    placeholder='Digite o nome do usuário'
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={() => loadUser(userName)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    )
}

export default Search