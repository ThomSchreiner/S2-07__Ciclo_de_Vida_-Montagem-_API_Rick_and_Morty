/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react"
import { useState } from "react"
import "./App.css"
import { CharList } from "./components/Char/CharList"

export function App() {
    const [characters, setCharacters] = useState([])
    const [currentPage, setCurrentPage] = useState("https://rickandmortyapi.com/api/character/")
    const [page, setPage] = useState({})

    useEffect(() => {
        fetch(currentPage)
            .then((resp) => resp.json())
            .then((resp) => {
                setCharacters(resp.results)
                setPage({ next: resp.info.next, prev: resp.info.prev })
            })
            .catch((erro) => console.log(erro))
    }, [currentPage])

    function pageNumber() {
        return page.next && page.next.split("?page=")[1] - 1
    }

    return (
        <div className="App">
            <CharList characters={characters} />
            <div className="pagination">
                <a href={page.prev && "#"}>
                    <button onClick={() => page.prev && setCurrentPage(page.prev)}>Anterior</button>
                </a>
                <span>{pageNumber()}</span>
                <a href={page.next && "#"}>
                    <button onClick={() => page.next && setCurrentPage(page.next)}>Próxima</button>
                </a>
            </div>
        </div>
    )
}
