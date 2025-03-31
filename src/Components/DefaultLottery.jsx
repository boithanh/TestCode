import React, { useState } from 'react'
import { defaultLottery, generateRandomNumbers } from '../utils/utils';

const DefaultLottery = ({ animate, runningAnimate }) => {
    const [numberDefault, setNumberDefault] = useState([]);


    return (
        // <div className='my-3 bg-danger'>
        //     <button className='btn btn-outline-light mb-3' onClick={() => {
        //         setNumberDefault(defaultLottery());
        //         runningAnimate(animate, 3);
        //     }}>Ấn để lấy số kiến thiết</button>
        //     <h2 className={` mt-3 mb-5 text-info ${(animate == "xuatHien1" || animate == "xuatHien2" ? "" : "xuatHien3")}`}>{numberDefault.join("").toString()}</h2>
        // </div >
        <div className="card mx-auto" style={{ width: '18rem' }}>
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