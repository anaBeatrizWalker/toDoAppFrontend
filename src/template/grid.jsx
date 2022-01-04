//Componente de classe para encapsular as class que definiam as colunas responsivas do formulário

import React, { Component } from 'react'

export default class Grid extends Component {
    
    //Recebe uma lista de até 4 números e converte no padrão de 12 colunas do bootstrap, sendo o 1º numero formato celular, o 2º tablets, o 3º dispositivos médios e o 4º telas maiores
    toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : [] //separa os números
        
        let classes = '' //criando classes

        //se existe a coluna 0, concatena com string classe adicionando o número no padrão
        if(cols[0]) classes += `col-xs-${cols[0]}` 
        if(cols[1]) classes += ` col-sm-${cols[1]}`
        if(cols[2]) classes += ` col-md-${cols[2]}`
        if(cols[3]) classes += ` col-lg-${cols[3]}`

        return classes 
    }
    /*No console:
    > toCssClasses('12')
    < col-xs-12

    > toCssClasses('12 6')
    < col-xs-12 col-sm-6

    > toCssClasses('12 6 3 1')
    < col-xs-12 col-sm-6 col-md-3 col-lg-1
    */

    render() {
        const gridClasses = this.toCssClasses(this.props.cols || 12) //se cols não foi setado, o valor é 12 e o componente ocupa a tela interia
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}