const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {//objeto que contém toda a configuração necessária para o projeto

    entry: './src/index.jsx', //ponto de entrada
    output: { //ponto de saída
        path: __dirname + '/public', //dirname: variável de ambiente
        filename: './app.js'
    },
    devServer: { //configurações do webserver
        port: 8080,
        contentBase: './public', //pasta que contém o arquivo app.js e index.html
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],//extensão que o webpack precisará reconhecer
        alias: { //criando um apelido para a pasta node_modules
            modules: __dirname + '/node_modules'//modules aponta para a pasta dirname node_modules
        }
    },
    plugins: [ 
        new ExtractTextPlugin('app.css')//instância do arquivo que o plugin extract vai gerar
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,//faz o parser de .js e .jsx
            loader: 'babel-loader',
            exclude: /node_modules/,//ignora
            query: { 
                presets: ['es2015', 'react'],//quais presets vai aplicar a partir do loader
                plugins: ['transform-object-rest-spread']
            }
        }, {
            //config do loader para css
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            //config para as fontes
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,//tipos de extensões
            loader: 'file'
        }]
    }
}
