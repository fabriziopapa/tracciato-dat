// src/components/tracciato/Testata.ts
import { Field } from './Field';

export class Testata {
    fields: Field[] = [];

    constructor() {
        // Inizializzazione dei primi 9 campi comuni a tutti i record (Tipo 00)
        this.fields.push(new Field('000000', 'numero', 6));     // ProgrGen
        this.fields.push(new Field('I', 'testo', 1));           // TipoOperazione
        this.fields.push(new Field('', 'testo', 1));            // SeparatorChr
        this.fields.push(new Field(15, 'numero', 2));           // TotCampi
        this.fields.push(new Field('00', 'testo', 2));          // TipoRecord
        this.fields.push(new Field('000000', 'numero', 6));     // ProgrTipoRec
        this.fields.push(new Field('0', 'testo', 1));           // Comparto
        this.fields.push(new Field('0000', 'testo', 4));        // RuoloVariabile
        this.fields.push(new Field('000000', 'testo', 6));      // Matricola
    }

    toString(): string {
        return this.fields.map(field => field.toString()).join('@') + '@';
    }
}
