import React from "react";
import { connect } from 'react-redux';
import { backward, forward } from "../redux/action";

const Day = (props) => {

    const handleSubmit = event => {
        event.preventDefault();
        const button = event.target.dataset.button
        const day = event.target.parentElement.firstElementChild.dataset.day //Monday

        if (button==="next") {
           return props.next(day)
        }else{
            return console.log("wrong button");
        }

    }
    const handleSubmitBack = event => {
        event.preventDefault();
        const button = event.target.dataset.button
        const day = event.target.parentElement.firstElementChild.dataset.day //Monday

        if (button==="back") {
           return props.back(day)
        }else{
            return console.log("wrong button");
        }

    }


    return (
        <>
            <h1 data-day={props.weekday}>Today is <span>{props.weekday}</span></h1>
            <h4><span>{props.joke}</span></h4>
            <h4><span>{props.err}</span></h4>
            <button type="submit" onClick={handleSubmitBack} data-button="back">Go back in the week & get a joke</button>
            <button type="submit" onClick={handleSubmit} data-button="next">Go forward in the week & get a joke</button>
        </>
    );
};

const mapStateToProps = (state) => {
    return { weekday: state.weekday, joke: state.joke, err: state.err };
};

const mapDispatchToProps = dispatch => {
    return {
        next: (day) => {
            //call the action creator
            dispatch(forward(day))
        },
        back:(day)=>{
            dispatch(backward(day))
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Day);