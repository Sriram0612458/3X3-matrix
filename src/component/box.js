import React, { useState } from 'react';
import './box.css';

const Matrix = () => {
    const [clickedBoxes, setClickedBoxes] = useState(Array(9).fill(null));
    const [clickOrder, setClickOrder] = useState([]);

    const handleClick = (index) => {
        if (clickOrder[clickOrder.length - 1] === index) {
            const newClickedBoxes = [...clickedBoxes];
            clickOrder.forEach((i) => {
                newClickedBoxes[i] = 'orange';
            });
            setClickedBoxes(newClickedBoxes);
            setClickOrder([]);
        } else {
            const newClickedBoxes = [...clickedBoxes];
            newClickedBoxes[index] = 'green';
            setClickedBoxes(newClickedBoxes);
            setClickOrder([...clickOrder, index]);
        }
    };

    return (
        <div className='main'>
            <div className="matrix">
                {clickedBoxes.map((color, index) => (
                    <div
                        key={index}
                        className="box"
                        style={{ backgroundColor: color || 'lightgray' }}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Matrix;