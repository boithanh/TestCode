import 'bootstrap/dist/css/bootstrap.min.css'
import MegaRandom from './Components/MegaRandom'
import PowerRandom from './Components/PowerRandom'
import DefaultLottery from './Components/DefaultLottery'
import useRouteCustom from './hooks/UseRouteCustom'
function App() {
  const routes = useRouteCustom();
  return routes;
}

export default App
