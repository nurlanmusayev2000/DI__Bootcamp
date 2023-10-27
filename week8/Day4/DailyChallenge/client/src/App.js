import {Component} from 'react';
import './App.css';



let messageFromBack="";

class App extends Component{
  constructor(){
    super();
    this.state= {message:null,response:null}
  }

async  componentDidMount(){


  try {
    const api = await  fetch("http://localhost:5002/api/hello");
    const res = await api.text()
    console.log(res);
    this.setState({message:res})
  } catch (error) {
    console.log(error);
  }
      }
  async postInput(e){
      e.preventDefault()
      const insideOfForm=document.forms.firstForm.firstInp.value
      const postData = await fetch('http://localhost:5002/api/world',{
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({message:insideOfForm})
      })
      const res = await postData.json();
     return  messageFromBack = res
      console.log(this.state);

  }

      render(){
        return(
        <div className='container'>
          <div>{this.state.message}</div>
          <form onSubmit={this.postInput.bind(this)} name='firstForm'>
            <label htmlFor="inp"><b>Post to Server:</b></label><br />
            <input type="text" id='inp' name='firstInp'/>
            <button type='submit'>Submit</button>
          </form>
          <h3>Hello{messageFromBack}</h3>
        </div>
        )
      }

    }

export default App;
