import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  constructor(props) {
    super(props)
  }

  // render() {
  //   return <div className="ui cards"><Pet onAdoptPet={this.props.onAdoptPet}/></div>
  // }
  render() {
    let petListings = this.props.pets.map(pet => (
      <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} key={pet.id}/>
    ));

    return <div className="ui cards">{petListings}</div>;
  }
}

export default PetBrowser
