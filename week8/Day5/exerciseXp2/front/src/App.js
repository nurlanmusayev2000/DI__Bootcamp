import {useState} from 'react';
import './App.css';

// !!! bir file da bir component olmalidir
//  !!
/* 1. todo item
2. todolist
3. app */

function App() {
  return (
    <div className="App">
        <Container/>
    </div>
  );
}

function Container() {
  const [listValue , setListValue] = useState("")


async function handleEnter(e){
  e.preventDefault();
  const postList = await fetch('http://localhost:5004/mylist', {
       method: "POST",
      body: JSON.stringify({"list":e.target.todoInp.value }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }})

// !!! post methodu hem de get edir menimsedildiyi variable dan goturnmek mnumkundur update etdikden sonraki datalari

  const postListResult = await postList.text();
  const getList = await fetch('http://localhost:5004/mylist');
  const getListResult = await getList.json();
  setListValue(getListResult)
  console.log(getListResult);
  e.target.todoInp.value='';

}



return(
  <div className="container">
    <h1>Todo's</h1>
    <ul><InnerList list = {listValue} setListValue = {setListValue}/></ul>
    <form name='todoForm' onSubmit={handleEnter}>
      <label htmlFor="todoInp">Add a new todo</label><br />
      <input type="text" id='todoInp' name='todoInp' />
    </form>
  </div>
)
}

const InnerList = (props)=>{

  async function handleDelete(e){
// functionun parametrine id oturmek daha uygundur
// bu zaman on click icerisinde arrow function nun icerisinde parametri oturmnek lazimdir

    const id = e.target.firstChild.innerText;
    const deleteList = await fetch(`http://localhost:5004/mylist/${id}` ,{
      method: 'DELETE',
  });
    const deleteListResult = await deleteList.text();
    console.log(deleteListResult);
    const getList = await fetch('http://localhost:5004/mylist');
    const getListResult = await getList.json();
    props.setListValue(getListResult)
  }

  if (props.list == "") {
    return <li onClick={handleDelete}>You have no todo's left, yay!   </li>
  }else{
  return(props.list.map((item)=>{
    return <li key={item.id} onClick={handleDelete}><span>{item.id}</span>{item.list}</li>
  }))
  }
}

export default App;
