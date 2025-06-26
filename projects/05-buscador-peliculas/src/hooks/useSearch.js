import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const firstSearch = useRef(true)

  useEffect(() => {
    // ✅ Si es la primera vez Y el campo está vacío, no validar
    if (firstSearch.current && search === '') {
      return
    }

    // ✅ Si el usuario ya escribió algo, marcar que ya no es la primera vez
    if (firstSearch.current) {
      firstSearch.current = false
    }

    // ✅ Validaciones normales
    if (search === '') {
      setError('No puede estar vacio')
      return
    }

    if (search.length < 3) {
      setError('Es necesario almenos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { error, setSearch, search }
}
