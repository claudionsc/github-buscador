import React from 'react'
import { BsSearch } from 'react-icons/bs'

const Search = () => {
  return (
    <div>
        <h2>Busque por um usuário:</h2>
        <p>Conheça seus melhroes repositórios</p>
        <div>
            <input type="text" placeholder='Digite o nome do usuário' />
            <button>
                <BsSearch />
            </button>
        </div>
    </div>
  )
}

export default Search