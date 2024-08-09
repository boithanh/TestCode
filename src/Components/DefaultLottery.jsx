import React, { useState } from 'react'
import { defaultLottery, generateRandomNumbers } from '../utils/utils';

const DefaultLottery = ({ animate, runningAnimate }) => {
    const [numberDefault, setNumberDefault] = useState([]);


    return (
        <div className='my-3'>
            <button className='btn btn-outline-light mb-3' onClick={() => {
                setNumberDefault(defaultLottery());
                runningAnimate(animate, 3);
            }}>Ấn để lấy số kiến thiết</button>
            <h2 className={` mt-3 mb-5 text-info ${(animate == "xuatHien1" || animate == "xuatHien2" ? "" : "xuatHien3")}`}>{numberDefault.join("").toString()}</h2>
        </div >
    )
}

export default DefaultLottery