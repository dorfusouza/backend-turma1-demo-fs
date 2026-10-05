/**
 * DEMO 1/5 — Ler e escrever um arquivo de texto com o módulo `fs`.
 * Rode:  node 01-texto.js
 */
const fs = require('fs');
const path = require('path');

const ARQUIVO = path.join(__dirname, 'anotacao.txt');

// 1) Escrever: cria o arquivo (ou SOBRESCREVE se já existir).con
fs.writeFileSync(ARQUIVO, 'Olá, arquivo!\nSegunda linha.\n');
console.log('Escrevi o arquivo em:', ARQUIVO);

// 2) Ler SEM dizer a codificação: volta um Buffer (bytes), não texto.
console.log('\nSem utf-8 →', fs.readFileSync(ARQUIVO));

// 3) Ler dizendo 'utf-8': volta texto de verdade.
console.log('\nCom utf-8 →');
console.log(fs.readFileSync(ARQUIVO, 'utf-8'));

// 4) Perguntar se o arquivo existe antes de ler (evita erro na 1ª execução).
console.log('Existe?', fs.existsSync(ARQUIVO));
console.log('Existe "nao-existe.txt"?', fs.existsSync(path.join(__dirname, 'nao-existe.txt')));
