import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { generateRandomNumbers } from '../utils/utils';

const MegaRandom = ({ animate, runningAnimate }) => {
    const [numbers, setNumbers] = useState([]);
    // console.log(runningAnimate);


    return (
        <div className="card mx-auto my-5" style={{ width: '18rem' }}>
            <img src="./../../lottery_2.png" className="card-img-top" alt="err" />
            <div className="card-body">
                <h5 className="card-title">Random Mega 6/45 👇</h5>
                <p className="card-text p-4 border border-1 border-dark bold fw-bold">{numbers.join(", ").toString()}</p>
                <button className='btn btn-danger mb-3' onClick={() => {
                    setNumbers(generateRandomNumbers(45));
                    runningAnimate(animate, 1);
                }}>Ấn để lấy số Mega</button>
            </div>
        </div>
    )
}

export default MegaRandom