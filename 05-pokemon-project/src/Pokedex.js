import React, { Component } from 'react'
import Pokecard from './Pokecard'

class Pokedex extends Component {
  render() {
    return (
      <div className='Pokedex'>
        <h1>Pokedex</h1>
        <Pokecard />
      </div>
    )
  }
}

export default Pokedex
