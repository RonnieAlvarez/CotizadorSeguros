import {CotizadorProvider} from './context/CotizadorProvider.jsx'
import AppSeguro from "./components/AppSeguro"

function App() {

  return (
    <CotizadorProvider>
      <AppSeguro/>
    </CotizadorProvider>
  )
}

export default App
