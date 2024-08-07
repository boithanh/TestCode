import React, { useState } from 'react'

const PowerRandom = () => {
    const [power, setPower] = useState([]);

    const generateRandomNumbersPower = () => {
        const numbersSet = new Set();

        while (numbersSet.size < 6) {
            let randomNumber = Math.floor(Math.random() * 55) + 1;

            if (randomNumber / 10 >= 1) {
                numbersSet.add(randomNumber);
            }
            else {
                randomNumber = '0' + randomNumber;
                numbersSet.add(randomNumber);
            }

        }

        setPower(Array.from(numbersSet));
    };
    return (
        <div className='my-3'>
            <button className='btn btn-outline-light mb-3' onClick={generateRandomNumbersPower}>Ấn để lấy số Power</button>
            <h2 style={{ width: "350px", height: "100px" }}>{power.join(", ").toString()}</h2>
        </div>
    )
}

export default PowerRandom