import React from 'react';

function SendForm (props) {
    return (
        <div>
            <button
                type="submit"
                onClick={props.submitHandle}>sand
            </button>
        </div>
    )
}
export default SendForm