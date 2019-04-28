import React from 'react';

function SendForm (props) {
    return (
        <div>
            <button
                type="submit"
                onClick={props.submitHandle}>send
            </button>
        </div>
    )
}
export default SendForm