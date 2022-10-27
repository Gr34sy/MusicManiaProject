import React from "react";

export function Logotype({additionalClass}){
    const classes = `logotype ${additionalClass}`;
   
    return(
        <p className={classes}>
            <span>M</span>usic<span>M</span>ania
        </p>
    )
}