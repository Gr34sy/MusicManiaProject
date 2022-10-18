import React from "react";

export function Add({additionalClass}){
    const classes = `add ${additionalClass}`;
    return(
        <aside className={classes}>
            <h3>
                Place here your cool <span>add!</span>
            </h3>
        </aside>
    )
}