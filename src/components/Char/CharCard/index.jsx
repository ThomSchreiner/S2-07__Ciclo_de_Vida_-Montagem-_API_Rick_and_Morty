import { StyledCard } from "./styledCard"

export function CharCard({ character }) {
    function limitCaractere(name) {
        if (name.length > 15) {
            return name.split("", 15).join("").concat("...")
        }
        return name
    }

    return (
        <StyledCard status={character.status}>
            <p>{limitCaractere(character.name)}</p>
            <img src={character.image} alt={character.name} />
        </StyledCard>
    )
}
