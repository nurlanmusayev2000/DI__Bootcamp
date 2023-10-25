import Cars from "./Components/Car";
import Size from "./Components/Garage";
import Click from "./Components/Events";
import './App.css'
import Phones from "./Components/Phone";
const carinfo = { name: "Ford", model: "Mustang" };


const App = ()=>{

	return (
	<>
	<Cars carModel = {carinfo.name} />,
	<Size size="small" />
		{/* !!! garage componentinin icerisine props kimi size small oturmek lazimdir */}
	<Click/>
	<Phones/>
	</>
	)
}

export default App