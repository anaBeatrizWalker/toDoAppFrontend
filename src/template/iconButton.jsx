import React from 'react'

export default props => {
    if(props.hide){ //se a propriedade hide for verdadeira
        return null
    
    }else{
        return (
            <button className={'btn btn-'+ props.style}//concatenação de parte da classe css com uma propriedade recebida como parâmetro
                onClick={props.onClick}>

                    <i className={'fa fa-'+ props.icon}></i>
            
            </button>
        )
    }
}