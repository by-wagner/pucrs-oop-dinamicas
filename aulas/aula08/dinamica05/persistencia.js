// persistencia.js

import { writeFile, readFile } from 'fs/promises';
import { Cofrinho } from './entidades.js';

export async function salvarCofrinho(cofre, nomeArquivo) {
    const json = JSON.stringify(cofre, null, 2);
    await writeFile(nomeArquivo, json, 'utf-8');
}

export async function lerCofrinho(nomeArquivo) {
    const conteudo = await readFile(nomeArquivo, 'utf-8');
    const obj = JSON.parse(conteudo);
    return Cofrinho.fromJSON(obj);
}