import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
    const [color, setColor] = useState("btn-outline-success");
	const [color1, setColor1] = useState("btn-outline-danger");
	const [color2, setColor2] = useState("btn-outline-warning");
	
    
    
    return (
        <div className="text-center">
            <h1 className="text-center mt-5">semaforo</h1>
			<div className="container flex-column bd-highlight mb-3">
				<div className="row"></div>
					<div className="col-lg-5"></div>
					<button type="button" class={`col-10 col-lg-1 rounded-pill btn ${color}`}onClick={()=>{
					color == "btn-outline-success" ? setColor("btn-success") : "btn-outline-success"
					color == "btn-success" ? setColor("btn-outline-success") : setColor("btn-success")
					}}><i className="fa-solid fa-lightbulb"></i></button>
					<div className="col-lg-5"></div>
				<div className="row"></div>	
					<button type="button" class={`col-10 col-lg-1 rounded-pill btn ${color1}`}onClick={()=>{
					color1 == "btn-outline-danger" ? setColor1("btn-danger") : "btn-outline-danger"
					color1 == "btn-danger" ? setColor1("btn-outline-danger") : setColor1("btn-danger")
					}}><i className="fa-solid fa-lightbulb"></i></button>
				<div className="row"></div>		
					<button type="button" class={`col-10 col-lg-1 rounded-pill btn ${color2}`}onClick={()=>{
					color2 == "btn-outline-warning" ? setColor2("btn-warning") : "btn-outline-warning"
					color2 == "btn-warning" ? setColor2("btn-outline-warning") : setColor2("btn-warning")
					}}><i className="fa-solid fa-lightbulb"></i></button>
				
			</div>
        </div>
    ); 
};

export default Home;