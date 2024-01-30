import axios from "axios";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";


const MailForm=({product})=>{
	const navigate=useNavigate()

	const handleSubmit=(e)=>{
		e.preventDefault();
		const form=document.forms.mailForm;
		const formdata=new FormData(form);
		const formValue=Object.fromEntries(formdata);
		console.log(formValue);
		axios.post('http://localhost:3005/api/send/email',formValue).then(res=>{
			alert(res.data.message)
		})
		navigate('/')
	}



	return(
		<form name="mailForm" onSubmit={handleSubmit} className="mt-4 p-3 mail-form">
		 <div className="mb-3">
        <label htmlFor="from" className="form-label">
          From:
        </label>
        <input
          type="email"
          name="from"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="to" className="form-label">
          To:
        </label>
        <input
					value={product.product[0].email}
					readOnly
          type="email"
          name="to"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="subject" className="form-label">
          Subject:
        </label>
        <input
          type="text"
          name="subject"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message:
        </label>
        <textarea
          name="message"
          className="form-control"
          rows="4"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Send Email
      </button>
    </form>

	)
}
const mapStateToProps=(state)=>{
	return{
		product:state.chosenProduct,
	}
}
export default connect(mapStateToProps)(MailForm)