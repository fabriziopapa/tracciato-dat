# Tracciato DAT 🚀

Gestisci facilmente i tuoi **file tracciato** con il nostro sistema di creazione e parsing di record `.dat`! Questo progetto è pensato per caricare, gestire e validare **dati strutturati** in un formato personalizzato. Può essere usato per qualsiasi esigenza di carico dati che richieda la formattazione rigorosa dei record.

---

## 🔥 Funzionalità principali

### ✅ Creazione dei Tracciati
Crea e formatta **tracciati personalizzati**. I tracciati sono gestiti tramite classi e campi strutturati, con i record separati da `@`.

### 📝 Supporto per vari tipi di record
- **Record di testata (00)**: Gestisce le informazioni generali e comuni a tutti i tipi di record.
- **Record Sostituti comunicazioni (15)**: Supporta operazioni di **inserimento**, **modifica** e **cancellazione**.
- Supporto per la gestione di altri tipi di record, come **Sostituti importi (16)**, **Anagrafica (01)**, e così via.

### 🔄 Operazioni sui record
- **Inserimento** di nuovi record.
- **Modifica** dei record esistenti, con restrizioni specifiche.
- **Cancellazione** dei record, incluso il supporto per la gestione gerarchica tra i record (ad esempio, record 15 e 16).

---

## 🧑‍💻 Struttura del Progetto

Il progetto è organizzato in modo semplice e chiaro. Ecco una panoramica delle cartelle e file principali:

```plaintext
src/
│
├── components/
│   ├── tracciato/
│   │   ├── Field.ts         # Gestione dei singoli campi nel tracciato
│   │   ├── Testata.ts       # Classe per il record di testata (00)
│   │   └── Record15.ts      # Classe per il record tipo 15 (Sostituti comunicazioni)
│   │
│   ├── App.tsx              # Componente principale dell'applicazione React
│
├── public/
│   └── index.html           # File HTML di base
│
├── package.json             # Gestione delle dipendenze e degli script di build
└── tsconfig.json            # Configurazione di TypeScript

```

## 🚀 Come Iniziare
1. Clonare il repository

Per iniziare, clona il repository:
```bash
git clone https://github.com/fabriziopapa/tracciato-dat.git
```

2. Installare le dipendenze

Installiamo tutte le dipendenze necessarie per il progetto:

```bash
npm install
```
3. Avviare il progetto in modalità sviluppo

Avvia il server di sviluppo con:
```bash
npm run dev
```

L'app sarà disponibile su http://localhost:3000
.

4. Creare una versione di produzione

Per creare una build di produzione, esegui:
```bash
npm run build
```

La build ottimizzata sarà disponibile nella cartella dist/.

## 🧑‍🏫 Utilizzo delle Classi
# Classe Testata (Record 00)

La classe Testata rappresenta il record di testata che contiene i primi 9 campi di ogni record. Ecco come usarla:
```typescript
import { Testata } from './components/tracciato/Testata';

const testata = new Testata();
const tracciatoTestata = testata.toString();
console.log(tracciatoTestata);  // Es: 000000@I@@15@00@000000@0@0000@000000@70002@09/11/2001@11.00.00@0@1@0@
```

# Classe Record15 (Sostituti Comunicazioni)

La classe Record15 estende la Testata e aggiunge i campi specifici per il record 15. Ecco un esempio:
```typescript
import { Testata } from './components/tracciato/Testata';
import { Record15 } from './components/tracciato/Record15';

const testata = new Testata();
const record15 = new Record15(testata);
const tracciatoRecord15 = record15.toString();
console.log(tracciatoRecord15);  // Es: 000000@I@@15@00@000000@0@0000@000000@70002@09/11/2001@11.00.00@0@1@0@70003@15@Sostituto@2022-11-01@Q@01...
```
## 💡 Tecnologie utilizzate

React (frontend): La libreria per la creazione dell'interfaccia utente.

TypeScript: Per una gestione dei tipi sicura e robusta.

Vite: Il tool di sviluppo che rende il progetto super veloce con il live-reloading.

GitHub Actions: Per la gestione automatica dei flussi di lavoro CI/CD.

## 🤝 Contributi

Se vuoi contribuire al progetto, sei il benvenuto! Puoi fare il fork del repository, implementare le tue modifiche e inviare una pull request. Se trovi bug o hai suggerimenti, apri una issue.

## 📜 Licenza

[MIT](https://choosealicense.com/licenses/mit/)

✨ Grazie per il tuo interesse! Se hai domande, apri una issue o contattami direttamente. Buon lavoro! 😊


