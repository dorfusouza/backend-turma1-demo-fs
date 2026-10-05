# Demo — Arquivos em Node.js

Programa de exemplo da aula de **Programação Back-End** (Turma 1, SENAI-SP) sobre persistência em
arquivo. Cinco scripts curtos mostram, num programa pequeno (uma `Biblioteca` com `Livro`s), como
guardar dados em arquivo e ler de volta. Depois, o desafio é aplicar a ideia no seu **Arena-Connect**.

Não precisa de `npm install` — só do [Node.js](https://nodejs.org) instalado.

## Como rodar

Baixe ou clone este repositório e, na pasta dele, rode um script por vez:

```bash
node 01-texto.js
node 02-json-simples.js
node 03-instancia-perde-metodos.js
node 04-campo-privado.js
node 05-ciclo-completo.js   # rode várias vezes seguidas e observe
```

Cada script cria um arquivo na própria pasta (`anotacao.txt`, `livro.json`, `biblioteca.json`).
Eles já estão no `.gitignore`. Para recomeçar o script 5 do zero, apague o `biblioteca.json`.

## O que cada script mostra

| Script | Tema | Pergunta para você pensar |
|---|---|---|
| `01-texto.js` | `writeFileSync`, `readFileSync`, `existsSync` | O que muda ao ler com e sem `'utf-8'`? E se o arquivo não existir? |
| `02-json-simples.js` | `JSON.stringify` e `JSON.parse` | Por que um arquivo guarda texto, e não o objeto direto? |
| `03-instancia-perde-metodos.js` | O objeto lido ainda é da classe? | O que volta do `JSON.parse`, e como transformar de novo em um `Livro`? |
| `04-campo-privado.js` | Campos privados (`#`) e JSON | Antes de rodar: o que você acha que vai aparecer no `JSON.stringify`? |
| `05-ciclo-completo.js` | Carregar → mexer → salvar | De onde vem o livro que já estava lá na segunda execução? |

Dica: antes de rodar cada script, leia o código e **anote o que você espera que aconteça**. Depois
compare com o resultado.

## O desafio

Faça o seu [Arena-Connect](https://github.com/dorfusouza/Arena-Connect) lembrar tudo ao fechar o
terminal: cadastrar → sair → abrir de novo → tudo continua lá. Use estes scripts como ponto de
partida, mas lembre: o seu projeto tem mais entidades, relacionamentos e contadores de ID.

SENAI-SP · Técnico em Desenvolvimento de Sistemas · Programação Back-End
