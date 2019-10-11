import React from "react";

export default function Smurfs({serverProperties}) {
    return (
        <div>
            {serverProperties.smurfs.map(smurf=> 
                <p key={smurf.id}>Hi, my name is {smurf.name}. I am {smurf.age} years old and I stand {smurf.height} tall</p>
            )}
        </div>
    )
}