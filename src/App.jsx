import { useEffect } from "react"
import { useState } from "react"
import "./App.css"
import { CharList } from "./components/Char/CharList"

export function App() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/")
            .then((resp) => resp.json())
            .then((resp) => setCharacters(resp.results))
            .catch((erro) => console.log(erro))
    }, [])

    return (
        <div className="App">
            <CharList characters={characters} />
        </div>
    )
}
