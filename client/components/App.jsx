import React from 'react'
import ChatRoom from './ChatRoom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import GetHelpButton from './GetHelpButton'
import ToHelpButton from './ToHelpButton'

class App extends React.Component {
  render () {
    return (
      <Router>
        <>
          <h1>Chat Well</h1>
          <Route path='/' component={GetHelpButton} />
          <Route path='/' component={ToHelpButton} />
          <ChatRoom />
        </>
      </Router>
    )
  }
}

export default App
