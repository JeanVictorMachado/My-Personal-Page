import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction
} from 'react'

type GlobalContextData = {
  menuIsOpen: boolean
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>
}

type GlobalProviderProps = {
  children: ReactNode
}

export const GlobalContext = createContext({} as GlobalContextData)

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <GlobalContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
      {children}
    </GlobalContext.Provider>
  )
}
