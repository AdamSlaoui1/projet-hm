import React, {useState} from "react";



function Dashboard() {
    
    const ArroserPlante = () => {}

    const TempAmb = () => {}

    const HumiditeAmb = () => {}

    const HumiditeSol = () => {}
    

    return (
        <div className="navbar">
            
            <div className="card-container">

                <div className="card1">
                    <img src=""/>
                    {/* Affichage temp */}
                </div>
                <div className="card2">
                    <img src=""/>
                    {/* Affichage humAmb */}
                </div>
                <div className="card3">
                    <img src=""/>
                    {/* Affichage humSol */}
                </div>

                <button onClick={""}>Arroser la plante</button>

            </div>

        </div>
    );
}

export default Dashboard;