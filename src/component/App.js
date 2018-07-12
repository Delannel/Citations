import React from 'react'
import citations from '../citations'
import Citation from './citation'

class App extends React.Component {
  state = {

  }

  ComponentWillMount() {
    this.genererCitation()
  }

  genererCitation = event => {  
    const keyArray = Object.keys(citations)
   //Une citation au hasard
    const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)]
    if (this.state.citation === citations[randomKey].citation) {
      this.genererCitation()
      return
   }
   this.setState(citations[randomKey])
}

  render() {
    return (
      <div>
      <Citation details={this.state}/>
        <button onClick={e => this.genererCitation(e)}>Une autre citation!</button>
      </div>
      )
  }
}

export default App