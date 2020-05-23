import Tile from "./Tile";
import { slide, getValue } from "./game";
import { useState } from "react";

function Board() {
    const [key, setKey] = useState(0);
    const tiles = [];
    const handleClick = (index) => {
        slide(index);
        setKey(~key); // Force update.
    };
    for (let i = 0; i < 9; i++) {
        const value = getValue(i);
        tiles[i] = <Tile index={i} value={value} onClick={handleClick} key={i} />;
    }
    return (
        <main>
            <div className="grid-container">
                {tiles}
            </div>
        </main>
    );
}

export default Board;