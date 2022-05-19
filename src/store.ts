import { createContext } from "react";

const initialState = {
  first: "Jamal",
  last: "Abdullah"
}

export type UserState = typeof initialState

const context = createContext<typeof initialState>(initialState)

export default context