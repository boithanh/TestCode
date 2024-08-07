import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MegaRandom from './Components/MegaRandom'
import PowerRandom from './Components/PowerRandom'

function App() {
  return (
    <>
      <div className="body_content mx-auto">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h2 className='d-block rounded-pill mw-100'>Demo random Mega | Power</h2>
      </div>
      <div className='container'>
        <div className="row my-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 border border-light mx-auto">
            <MegaRandom />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 border border-light mx-auto">
            <PowerRandom />
          </div>
        </div>
      </div >
    </>
  )
}

export default App
