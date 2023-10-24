import React from 'react'

class Actor extends React.Component {



		submitButton(e){
            e.preventDefault()
      	console.log(e.target.value);
		}

    render() {
        return (<form  onSubmit={this.submitButton}>
							<input type="text" placeholder='firstname'  name='firstname'/>
							<input type="text" placeholder='lastname' className='lastname'/>
							<input type="text"  placeholder='img' className='img'/>
							<button type='submit'>clikle</button>
						</form>)

    }
}

export default Actor