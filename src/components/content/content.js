import React from 'react'
export default function content(props){
    let id = props.match.params.productId
    return(
        <div>
           prop_id: {id}
        </div>
    )
}