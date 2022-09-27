import { CharCard } from "../CharCard"
import style from "./style.module.css"

export function CharList({ characters }) {
    return (
        <>
            <h1>Meus Personagens</h1>
            <ul className={style.charList}>
                {characters.map((character) => (
                    <CharCard key={character.id} character={character} />
                ))}
            </ul>
        </>
    )
}
