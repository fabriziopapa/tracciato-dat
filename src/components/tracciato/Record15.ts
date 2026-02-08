// src/components/tracciato/Record15.ts
import { Testata } from './Testata';
import { Field } from './Field';

export class Record15 {
    fields: Field[] = [];

    constructor(testata: Testata) {
        // Aggiungi i primi 9 campi del record 00 dalla testata
        this.fields.push(...testata.fields);

        // Aggiungi i campi specifici per il record 15
        this.fields.push(new Field('70003', 'testo', 5));          // Codice Ateneo
        this.fields.push(new Field('15', 'testo', 2));             // Tipo Record
        this.fields.push(new Field('Sostituto', 'testo', 60));    // Descrizione Sostituto
        this.fields.push(new Field('2022-11-01', 'data', 10));    // Data Ricezione
        this.fields.push(new Field('Q', 'testo', 1));             // Quadro
        this.fields.push(new Field('01', 'testo', 2));            // Progresso Conguaglio
        this.fields.push(new Field('AB123', 'testo', 12));        // Codice INPDAP
        this.fields.push(new Field('2022-12-31', 'data', 10));    // Data Cessazione
        this.fields.push(new Field('NA', 'testo', 2));            // Provincia Lavoro
        this.fields.push(new Field('2022-01-01', 'data', 10));    // Data Inizio
        this.fields.push(new Field('2022-12-31', 'data', 10));    // Data Fine
        this.fields.push(new Field('1', 'testo', 2));             // Tipo Impiego
        this.fields.push(new Field('01', 'testo', 2));            // Tipo Servizio
        this.fields.push(new Field('1', 'testo', 1));             // F Contributi INPDAP
        this.fields.push(new Field('2022-11-01', 'data', 10));    // Data Inizio (INS)
        this.fields.push(new Field('2022-12-01', 'data', 10));    // Data Modifica
        this.fields.push(new Field('Operator1', 'testo', 10));   // Operatore
        this.fields.push(new Field('123456', 'testo', 6));        // Capitolo
        this.fields.push(new Field('12', 'testo', 12));           // F Mesi Estrac
        this.fields.push(new Field('05', 'testo', 2));            // Mese Rif
        this.fields.push(new Field('P', 'testo', 2));             // Cassa Pensione
        this.fields.push(new Field('Y', 'testo', 1));             // Tempo
    }

    toString(): string {
        return this.fields.map(field => field.toString()).join('@') + '@';
    }
}

