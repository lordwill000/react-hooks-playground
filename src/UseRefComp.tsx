import { useRef } from 'react'

function UseRefComp () {
  const inputRef = useRef<HTMLInputElement | null>(null)

  return (
    <input ref={inputRef} />
  )
}

export default UseRefComp