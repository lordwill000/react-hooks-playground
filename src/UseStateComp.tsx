import { useState } from 'react'

function UseStateComp () {
  const [array, setArray] = useState<number[]>([])
  const [name, setName] = useState<string | null>(null)

  return (
    <div>
      <div>
        <button onClick={() => setArray([...array, array.length + 1])}>
          Add to array
        </button>

        {JSON.stringify(array)}
      </div>
      <div>
        <button onClick={() => setName("lord")}>
          Set name
        </button>

        {JSON.stringify(name)}
      </div>


    </div>
  )
}


export default UseStateComp