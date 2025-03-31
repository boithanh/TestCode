import React, { useState } from 'react'
import { generateRandomNumbers } from '../utils/utils';

const PowerRandom = ({ animate, runningAnimate }) => {
    const [power, setPower] = useState([]);

    return (
        <div className="card mx-auto" style={{ width: '18rem' }}>
            <img src="./../../lottery_3.png" className="card-img-top" alt="err" />
            <div className="card-body">
                <h5 className="card-title">Random Power 6/55 👇</h5>
                <p className="card-text p-4 border border-1 border-dark bold fw-bold">{power.join(", ").toString()}</p>
                <button className='btn btn-primary mb-3' onClick={() => {
                    setPower(generateRandomNumbers(55));
                    runningAnimate(animate, 2);
                }}>Ấn để lấy số Power</button>
            </div>
        </div>
    )
}

export default PowerRandom