import React from 'react'

export default props => (
    <header className='page-header'>{/*classe do bootstrap*/}
        <h2>{props.name} <small>{props.small}</small></h2>
    </header>
)