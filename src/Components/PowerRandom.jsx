import React, { useState } from 'react'
import { generateRandomNumbers } from '../utils/utils';

const PowerRandom = ({ animate, runningAnimate }) => {
    const [power, setPower] = useState([]);

    return (
        <div className='my-3'>
            <button className='btn btn-outline-light mb-3' onClick={() => {
                setPower(generateRandomNumbers(55));
                runningAnimate(animate, 2);
            }}>Ấn để lấy số Power</button>
            <h2 className={`mt-3 mb-5 text-warning ${(animate == "xuatHien1" || animate == "xuatHien3" ? "" : "xuatHien2")}`}>{power.join(", ").toString()}</h2>
        </div>
    )
}

export default PowerRandom