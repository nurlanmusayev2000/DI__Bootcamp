import {Component} from 'react'


class MemeGenerator extends Component{

	constructor(props){
		super(props);
		this.state={
			topText:'',
			bottomText:'',
			randomImg:'http://i.imgflip.com/1bij.jpg',
			allMemeImgs:[]
		}
	}

	componentDidMount(){
		fetch('https://api.imgflip.com/get_memes').then(res=>{
			return res.json();
		}).then(result=>{
			console.log(result);
			this.setState({allMemeImgs:result.data.memes})
		})
	}

	onChangeHandler(e){
		e.preventDefault();
		console.log(document.form.topInput);
		console.log(e.target);
		if (e.target===document.form.topInput) {
			const topInpVal=e.target.value;
			this.setState({topText:topInpVal})
			console.log(topInpVal);
		}else if (e.target===document.form.botInput) {
			const botInpVal = e.target.value;
			this.setState({bottomText:botInpVal})

			console.log(botInpVal);
		}

	}

	getRandomImg(e){
		e.preventDefault()
		const random= Math.floor(Math.random() * Number(this.state.allMemeImgs.length))
		this.setState({randomImg:this.state.allMemeImgs[random].url})
		document.form.botInput.value='';
		document.form.topInput.value=''
	}



	render(){
		console.log(this.state);
		return(
			<>
				<form name='form' className='meme-form' onChange={this.onChangeHandler.bind(this)}>
					<input name='topInput'  type="text" placeholder='Top Text' />
					<input name='botInput' type="text" placeholder='Bottom Text' />
					<button onClick={this.getRandomImg.bind(this)}>Gen</button>
				</form>
				<div className="meme">
					<h2 className='top'>{this.state.topText}</h2>
					<img src={this.state.randomImg} alt="" />
					<h2 className='bottom'>{this.state.bottomText}</h2>
				</div>
			</>
		)
	}
}


export default MemeGenerator