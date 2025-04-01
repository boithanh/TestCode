import React, { useState } from 'react'
import { defaultLottery, generateRandomNumbers } from '../utils/utils';

const DefaultLottery = ({ animate, runningAnimate }) => {
    const [numberDefault, setNumberDefault] = useState([]);


    return (
        <div className="card mx-auto my-5" style={{ width: '18rem' }}>
            <img src="./../../92e37fa0-4b5a-49c0-9649-4420b7130386.png" className="card-img-top" alt="err" />
            <div className="card-body mx-auto">
                <h5 className="card-title">Random Default Lottery 👇</h5>
                <p className="card-text p-4 border border-1 border-dark bold fw-bold">{numberDefault.join("").toString()}</p>
                <button className='btn btn-dark mb-3' onClick={() => {
                    setNumberDefault(defaultLottery());
                    runningAnimate(animate, 3);
                }}>Ấn để lấy số kiến thiết</button>
            </div>
        </div>

    )
}

export default DefaultLottery