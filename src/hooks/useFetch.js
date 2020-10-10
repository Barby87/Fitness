// useEffect sirve para indicar lo que debe hacer el componente después de renderizarse. Se ejecuta después de cada renderizado y después de cada actualización del componente
import { useState, useEffect } from 'react'

const useFetch = url => {
    // Definir variables de estado [ estado, función que actualiza el estado ]
    const [ data, setData ] = useState([]) // Dentro de useState va el valor que queremos que inicie la variable de estado
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        const fetchResource = async () => {
            try {
                let res = await fetch(url)
                let data = await res.json()
                setData(data)
                setLoading(false)
                console.log(data)
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }
        fetchResource()
    }, [url])

    return {data, loading, error}
}

export default useFetch