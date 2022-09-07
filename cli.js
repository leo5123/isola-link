#!/usr/bin/env node
const chalk = require('chalk');
const pegaArquivo = require('./index');
const validarLinks = require('./https-validar')


const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {

  const resultado = await pegaArquivo(caminhoDeArquivo[2]);
  if(caminho[3] == 'validar'){
    console.log(chalk.yellow('lista de validados'), await validarLinks(resultado));
  }else{
    console.log(chalk.yellow('lista de links'), resultado);
    
  }
  
}

processaTexto(caminho);