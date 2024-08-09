import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { generateRandomNumbers } from '../utils/utils';

const MegaRandom = ({ animate, runningAnimate }) => {
    const [numbers, setNumbers] = useState([]);
    // console.log(runningAnimate);


    return (
        <div className='my-3'>
            <button className='btn btn-outline-light mb-3' onClick={() => {
                setNumbers(generateRandomNumbers(45));
                runningAnimate(animate, 1);
            }}>Ấn để lấy số Mega</button>
            <h2 className={` mt-3 mb-5 text-danger ${(animate == "xuatHien2" || animate == "xuatHien3" ? "" : "xuatHien1")}`}>{numbers.join(", ").toString()}</h2>
        </div>
    )
}

export default MegaRandom