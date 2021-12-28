import React from 'react'

export default props => {
    if(props.test) {
        return props.children //retorna o objeto que está dentro da tag if
    } else {
        return false
    }
}