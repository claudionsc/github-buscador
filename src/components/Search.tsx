import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { useState, KeyboardEvent } from 'react'
import classes from './Search.module.css'

type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}


const Search = ({ loadUser }: SearchProps) => {
    const [userName, setUsername] = useState("");

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter"){
            loadUser(userName)
        }
    }

    return (
        <div className={classes.search}>
            <h2>Busque por um usuário:</h2>
            <p>Conheça suas informações e seus repositórios</p>
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
            <p className={classes.by}>By: Claudio Nascimento</p>
        </div>
    )
}

export default Search