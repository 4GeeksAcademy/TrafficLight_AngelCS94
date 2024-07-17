import React, { useState } from "react";

//create your first component
const Home = () => {
    const [activeColor, setActiveColor] = useState("");

    return (
        <div className="text-center">
            <h1 className="text-center mt-5">Semáforo</h1>
            <div className="container d-flex flex-column align-items-center mt-5">
                <div className="bg-dark p-3" style={{ width: '100px', borderRadius: '10px' }}>
                    <div className="row mb-3">
                        <div className="col d-flex justify-content-center">
                            <button
                                type="button"
                                className={`btn btn-success ${activeColor === "green" ? "rounded-circle" : ""}`}
                                onClick={() => setActiveColor("green")}
                            >
                                <i className="fa-solid fa-lightbulb"></i>
                            </button>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col d-flex justify-content-center">
                            <button
                                type="button"
                                className={`btn btn-danger ${activeColor === "red" ? "rounded-circle" : ""}`}
                                onClick={() => setActiveColor("red")}
                            >
                                <i className="fa-solid fa-lightbulb"></i>
                            </button>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col d-flex justify-content-center">
                            <button
                                type="button"
                                className={`btn btn-warning ${activeColor === "yellow" ? "rounded-circle" : ""}`}
                                onClick={() => setActiveColor("yellow")}
                            >
                                <i className="fa-solid fa-lightbulb"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;