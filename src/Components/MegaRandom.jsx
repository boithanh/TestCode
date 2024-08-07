import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const MegaRandom = () => {
    const [numbers, setNumbers] = useState([]);

    const generateRandomNumbers = () => {
        const numbersSet = new Set();

        while (numbersSet.size < 6) {
            let randomNumber = Math.floor(Math.random() * 45) + 1;
            if (randomNumber / 10 >= 1) {
                numbersSet.add(randomNumber);
            }
            else {
                randomNumber = '0' + randomNumber;
                numbersSet.add(randomNumber);
            }
        }

        setNumbers(Array.from(numbersSet));
    };
    return (
        <div className='my-3'>
            <button className='btn btn-outline-light mb-3' onClick={generateRandomNumbers}>Ấn để lấy số Mega</button>
            <h2 style={{ width: "350px", height: "100px" }}>{numbers.join(", ").toString()}</h2>
        </div>
    )
}

export default MegaRandom