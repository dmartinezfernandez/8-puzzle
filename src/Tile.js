import { canSlide } from "./game";
import { getImage } from "./images";

function Tile({ index, value, onClick }) {
    const
        row = Math.floor(index / 3) + 1,
        column = index % 3 + 1;
    const opacity = value === 8 ? .5 : 1;
    const enabled = canSlide(value);
    return (
        <img className="tile"
            src={getImage(value)}
            style={
                {
                    gridRow: row,
                    gridColumn: column,
                    cursor: enabled ? 'pointer' : 'default',
                    opacity: opacity,
                }}
            onClick={(e) => {
                if (!enabled)
                    e.preventDefault();
                else
                    onClick(index);
            }}
            alt={value}>
        </img>
    )
}

export default Tile;