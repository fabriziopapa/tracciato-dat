// src/components/tracciato/Record15.ts
import { Testata } from './Testata';
import { Field } from './Field';

export class Record15 {
    testata: Testata;
    fields: Field[] = [];

    constructor(testata: Testata) {
        // Inizializzazione dei primi 9 campi comuni (riutilizzo della classe Testata)
        this.testata = testata;

        // Aggiungi i campi specifici per il tipo record 15
        this.fields.push(new Field('2022', 'numero', 4));         // ANNO
        this.fields.push(new Field('F123456789012345', 'testo', 16));  // COD_FISC_SOSTITUTO
        this.fields.push(new Field('01', 'numero', 2));           // PROGRC
        this.fields.push(new Field('A123456789012345', 'testo', 16));  // COD_FISCO
        this.fields.push(new Field('D', 'testo', 1));             // SOSTITUTO_TIPO_COMUNICAZIONE
        this.fields.push(new Field('Sostituto comunicazione esempio', 'testo', 60)); // DESCR_SOSTITUTO
        this.fields.push(new Field(new Date('2021-01-01'), 'data', 10)); // DATA_RICEZIONE
        this.fields.push(new Field('X', 'testo', 1));             // QUADRO
        this.fields.push(new Field('01', 'numero', 2));           // PROGR_CONGUAGLIO
        this.fields.push(new Field('123456789012', 'testo', 12)); // CODICE_INPDAP_AMMINISTRAZIONE
        this.fields.push(new Field(new Date('2021-12-31'), 'data', 10)); // DATA_CESSAZIONE
        this.fields.push(new Field('RM', 'testo', 2));            // PROVINCIA_LAVORO
        this.fields.push(new Field(new Date('2021-01-01'), 'data', 10)); // DATA_IND
        this.fields.push(new Field(new Date('2021-12-31'), 'data', 10)); // DATA_FIND
        this.fields.push(new Field('02', 'testo', 2));            // TIPO_IMPIEGO
        this.fields.push(new Field('01', 'testo', 2));            // TIPO_SERVIZIO
        this.fields.push(new Field('1', 'testo', 1));             // F_CONTRIBUTI_INPDAP
        this.fields.push(new Field(new Date('2021-01-01'), 'data', 10)); // DATA_INSD
        this.fields.push(new Field(new Date('2021-01-01'), 'data', 10)); // DATA_MOD
        this.fields.push(new Field('Operator01', 'testo', 10));   // OPERATORE
        this.fields.push(new Field('Capitolo01', 'testo', 6));    // CAPITOLO
        this.fields.push(new Field('12', 'numero', 12));          // F_MESI_ESTRAC
        this.fields.push(new Field('06', 'numero', 2));           // MESE_RIF
        this.fields.push(new Field('01', 'numero', 2));           // CASSA_PENS
        this.fields.push(new Field('T', 'testo', 1));             // TEMPO
    }

    toString(): string {
        // Combina la testata con i campi specifici del record 15
        return this.testata.toString() + this.fields.map(field => field.toString()).join('@') + '@';
    }
}
