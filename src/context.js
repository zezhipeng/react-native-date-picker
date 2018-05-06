
import React, { createContext, Component } from 'react'

const Context = createContext()

class Provider extends Component {
  state = {}
  render() {
    return (
      <Context.Provider
        value={{
          onSelect: this.props.onSelect
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Provider
export const { Consumer } = Context
