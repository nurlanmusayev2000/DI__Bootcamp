import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: [
        { name: 'Php', votes: 0 },
        { name: 'Python', votes: 0 },
        { name: 'JavaSript', votes: 0 },
        { name: 'Java', votes: 0 },
      ],
    };
  }

  vote(lang) {
    lang.votes++;
    console.log(this.state.language);
    this.setState(this.state.language);

    // !!! set state overwrite edir
    // !  yeni bir objecte copyleyib uzerinde deyisiklik edib state e menimsetmek lazimdir
    // ! ya da arrow func istifade edib prev state uzerinde deyisiklik etmek
  }

  render() {
    return (
      <div>
        <h1>Vote Your Language</h1>,
        {this.state.language.map((item, i) => {
          return (
            <div key={i} className="cont">
              <span>{item.votes}</span>
              <span>{item.name}</span>
              <button onClick={() => this.vote(item)}>Click Here</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

// ! language comnponenti ayrica olmalidir daha sonra app e import olmali
