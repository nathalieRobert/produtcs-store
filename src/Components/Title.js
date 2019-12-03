import React from 'react';


export default function Title({name, title}) {
    return (
        
        <div className='row'>
            <div className="col-10 mx-auto mb-3">
                <h1 className="text-capitalize text-title ">
                    {name} {title}
                </h1>
            </div>
            
        </div>
    )
}

