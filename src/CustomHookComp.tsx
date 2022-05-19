import { useState, useEffect, useMemo } from 'react'

export interface Beverage {
	name: string;
	producerName: string;
	beverageName: string;
	beverageColor: string;
	beverageStyle: string;
	producerLocation: string;
	abv: number;
	ibu: number;
	logo: string;
	level: number;
}

function useFetchData<Payload>(
  url: string
): {
  data: Payload | null
  done: boolean
} { 
  const [data, setData] = useState<Payload | null>(null)
  const [done, setDone] = useState<boolean>(false)

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then((d: Payload) => {
        setData(d)
        setDone(true)
      })
  }, [url])

  return { data, done }
}

function CustomHookComp () {
  const { data } = useFetchData<Beverage[]>('/hv-taplist.json')
  
  const portlandTaps = useMemo(
    () => 
      (data || []).filter(bev => bev.producerLocation.includes('Portland')),
    [data]
  )

  return (
    <div>
      { portlandTaps.length > 0 && (
        <img src={portlandTaps![0].logo} alt={portlandTaps![0].name} />
      ) }
    </div>
  )
}

export default CustomHookComp