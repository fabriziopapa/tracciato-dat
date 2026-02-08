// src/components/tracciato/Field.ts

export type FieldType = 'testo' | 'valuta' | 'data' | 'ora' | 'numero';

export class Field {
    value: string | number | Date;
    type: FieldType;
    length: number;

    constructor(value: string | number | Date, type: FieldType, length: number) {
        this.value = value;
        this.type = type;
        this.length = length;
    }

    toString(): string {
        let strValue: string;

        switch (this.type) {
            case 'valuta':
            case 'numero':
                strValue = (typeof this.value === 'number' ? this.value : parseFloat(String(this.value))).toFixed(2);
                break;
            case 'data':
                if (this.value instanceof Date) {
                    strValue = this.value.toISOString().split('T')[0]; // YYYY-MM-DD
                } else {
                    strValue = String(this.value);
                }
                break;
            case 'ora':
                if (this.value instanceof Date) {
                    strValue = this.value.toTimeString().split(' ')[0]; // HH:MM:SS
                } else {
                    strValue = String(this.value);
                }
                break;
            case 'testo':
            default:
                strValue = String(this.value);
                break;
        }

        // Rimuoviamo qualsiasi spazio aggiunto in eccesso
        return strValue.substring(0, this.length);  // Truncate or keep as is
    }
}
