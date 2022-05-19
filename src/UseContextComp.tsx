import { useContext, useState } from "react";

import UserContext, { UserState } from './store'

function ConsumerComponent () {
  const user = useContext<UserState>(UserContext)

  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  )
}

function UseContextComp () {
  const [user, setUser] = useState<UserState>({
    first: "Lord",
    last: "M"
  })

  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button onClick={() => setUser({
        first: "Cinderella",
        last: 'Cuya'
      })}>Change context</button>
    </UserContext.Provider>
  )
}

export default UseContextComp