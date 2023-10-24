import React from 'react';

class NewFavoriteAnimals extends React.Component {
  // !!!
  constructor(props) {
    super(props);
    //  super props parentden gelir
  }
  //   !!

  render() {
    console.log(this.props.animals);
    return 'inefn';
    /*user.favAnimals.map(animal=>{
			<ul key={user.favAnimals}>
				<li>animal</li>
			</ul>*/
    //	}))
    // !!! props this.props.animals
    // !!! onun uzerinde islemeliyik
  }
}

export default NewFavoriteAnimals;
