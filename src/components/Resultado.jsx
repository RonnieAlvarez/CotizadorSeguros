/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback,useMemo,useRef } from "react"
import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES } from "../constants"

const Resultado = () => {
  const { resultado, datos } = useCotizador()
  const { marca, plan, year } = datos
  const yearRef = useRef(year)
  
  const [nombreMarca] = useCallback(
    MARCAS.filter(m => m.id === Number(marca)
    ), [resultado])

    // TODO: el useMemo esta siendo usado igual que el useCallback, para evitar el re-render
    // en la sintaxis se diferenciam por el arrow function
  const [nombrePlan] = useMemo(() => 
    PLANES.filter((p) => p.id === Number(plan)
    ), [resultado])
  

  if(resultado === 0 ) return null
  return (
		<div className='bg-gray-200 text-center mt-5 p-5 shadow'>
			<h2 className='text-gray-600 font-black text-3xl'>Resumen</h2>
			<p className='my-2'>
				<span className='font-bold'>Marca:</span> {nombreMarca.nombre}
			</p>
			<p className='my-2'>
				<span className='font-bold'>Plan:</span> {nombrePlan.nombre}
      </p>
    
			<p className='my-2'>
				<span className='font-bold'>Año del Automóvil: </span> {yearRef.current}
			</p>
    

			<p className='my-2 text-2xl'>
				<span className='font-bold'>Total Cotización: </span> {resultado}
      </p>
      
		</div>
	);
}

export default Resultado
