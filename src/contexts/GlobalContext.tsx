import { link } from 'node:fs';
import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  Dispatch,
  SetStateAction
} from 'react'

import dark from '../styles/themeDark';
import light from '../styles/themeLight';

type GlobalContextData = {
  menuIsOpen: boolean
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>
  stateTheme: any
  setStateTheme: Dispatch<SetStateAction<ReactNode>>
}

type GlobalProviderProps = {
  children: ReactNode
}

export const GlobalContext = createContext({} as GlobalContextData)

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [stateTheme, setStateTheme] = useState(dark)

  // const themeLocalStorage = localStorage.getItem('@themePortifolio')
  // console.log(themeLocalStorage)

  // useEffect(() => {
  //   if (themeLocalStorage) {
  //     setStateTheme(dark)
  //   } else {
  //     setStateTheme(light)
  //   }
  // }, [])

  const context = {
    menuIsOpen,
    setMenuIsOpen,
    stateTheme,
    setStateTheme
  }

  return (
    <GlobalContext.Provider value={ context }>
      {children}
    </GlobalContext.Provider>
  )
}
