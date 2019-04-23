import React from 'react';

function InputField (props) {
        return(
            <div>
                <p>{props.name} is {props.value}</p>
                <input
                    type={props.type}
                    value={props.value}
                    onChange={props.onChange}
                />
            </div>
        )
}

export default InputField