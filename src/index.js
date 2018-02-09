import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { compose, withHandlers, withProps } from 'recompose'

import DrawerLayout from './component/drawer_layout'

class RefsStore {
  store(name, value) {
    this[name] = value
  }
}

const App = ({ toggleVisible, setRef }) => (
  <View style={{ flex: 1 }}>
    <DrawerLayout ref={setRef}>
      <View>
        <TouchableOpacity onPress={toggleVisible}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>Hello</Text>
            <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>Hello</Text>
            <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>Hello</Text>
            <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>Hello</Text>
            <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>Hello</Text>
          </View>
        </TouchableOpacity>
      </View>
    </DrawerLayout>
  </View>
)

const withToggleVisible = withHandlers({
  toggleVisible: ({ refs }) => () => refs.Drawer.toggleVisible()
})

const withRefsStore = withProps({
  refs: new RefsStore()
})

const setRef = withProps(props => ({
  setRef: ref => props.refs.store('Drawer', ref)
}))

export default compose(
  withRefsStore,
  setRef,
  withToggleVisible
)(App)
