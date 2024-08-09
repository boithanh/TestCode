import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MegaRandom from './Components/MegaRandom'
import PowerRandom from './Components/PowerRandom'
import DefaultLottery from './Components/DefaultLottery'
import { useState } from 'react'

function App() {
  const [animate, setAnimate] = useState("xuatHien1");
  function runningAnimate(animate, compo = 1) {
    setAnimate(`xuatHien${compo}`);
  }

  return (
    <>
      <div className="body_content min-vw-100 d-flex flex-column mb-5">
        <div className='w-50 mx-auto'>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div className='w-50 mx-auto'><h3 className='d-block rounded-pill text-white'>Demo random Mega | Power</h3></div>
      </div>
      <div className='container'>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 border border-light">
            <MegaRandom animate={animate} runningAnimate={runningAnimate} />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 border border-light">
            <PowerRandom animate={animate} runningAnimate={runningAnimate} />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 border border-light">
            <DefaultLottery animate={animate} runningAnimate={runningAnimate} />
          </div>
        </div>
      </div >
    </>
  )
}

export default App
