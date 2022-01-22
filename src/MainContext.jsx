import React, { useState, createContext } from 'react'

const MainContext = createContext()

const MainProvider = ({ children }) => {
  const [state, setState] = useState({
    accordions: []
  })

  const _setState = newState => {
    setState(state => ({
      ...state,
      ...newState
    }))
  }

  const value = {
    state,
    setState: _setState
  }

  return (
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  )
}

export {
  MainContext,
  MainProvider
}
