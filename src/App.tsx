// src/App.tsx

import React from 'react';
import { Testata } from './components/tracciato/Testata';
import { Record15 } from './components/tracciato/Record15';

const App = () => {
  // Crea la testata (Tipo 00)
  const testata = new Testata();

  // Crea il record 15
  const record15 = new Record15(testata);

  // Genera il tracciato per il record 15
  const tracciato = record15.toString();

  return (
    <div>
      <h1>Tracciato Record 15</h1>
      <pre>{tracciato}</pre>
    </div>
  );
};

export default App;

