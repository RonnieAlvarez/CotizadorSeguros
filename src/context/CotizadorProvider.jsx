/* eslint-disable react/prop-types */
import {useState, createContext } from "react";
import {
  obtenerDiferenciaYear,
  calcularMarca, calcularPlan, formatearDinero
} from '../helpers';

const CotizadorContext = createContext()
const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan:''
  })
  const [error, setError] = useState('');
  const [resultado, setResultado] = useState(0)
  const [cargando,setCargando]=useState(false)

  const handleChangeDatos = e => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const cotizarSeguro = () => {
    //base
    let resultado = 2000

    //diferencia años
    const diferencia = obtenerDiferenciaYear(datos.year)
    //restar 3% por cada año
    resultado -= ((diferencia*3)*resultado)/100
    //Americado 15% seguro
    //Europeo 30% seguro
    //Asiatico 5% seguro
    resultado *= calcularMarca(datos.marca)
    //Basico 20%
    //completo 50%
    resultado *= calcularPlan(datos.plan)
    //redondear
    resultado = resultado.toFixed(2)
    //formatear moneda
    resultado = formatearDinero(resultado)
    console.log(resultado)
    setCargando(true)
    setTimeout(() => {
      setResultado(resultado)
      setCargando(false)
    },2000)
  }

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro,
        resultado,
        cargando
    }}>
      {children}
    </CotizadorContext.Provider>
  )
}

export { CotizadorProvider } 

export default CotizadorContext