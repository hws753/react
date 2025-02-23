//React è la libreria che gestisce la logica dei componenti.
//JSX è la sintassi che semplifica la scrittura del markup dentro i componenti React.
//Babel trasforma il codice JSX in JavaScript tradizionale per renderlo eseguibile dal browser.
//React è una libreria JavaScript utilizzata per costruire interfacce utente dinamiche e componenti riutilizzabili. Fornisce un modello basato su componenti e uno stato centralizzato per gestire gli aggiornamenti della UI in modo efficiente.

//JSX (JavaScript XML) è una sintassi che permette di scrivere il codice React in un formato simile all’HTML all'interno di JavaScript. JSX non è compreso direttamente dai browser, quindi necessita di una trasformazione.

//Babel è un transpiler che converte JSX in JavaScript standard, rendendo il codice comprensibile ai browser. Senza Babel, JSX non funzionerebbe direttamente, poiché i browser non supportano questa sintassi nativamente.

// Selezioniamo l'elemento con id "root" dove React monterà l'app
const rootEle = document.getElementById("root");

// Controlliamo se l'elemento esiste prima di procedere
if (rootEle) {
    // Creiamo la root di React utilizzando React 18
    const root = ReactDOM.createRoot(rootEle);

    // Componente principale App
    // Accetta `children` come prop, permettendo di passare contenuti dinamici
    const App = ({ children }) => {
        return (
            <main className="main"> {/* Elemento principale del layout */}
                <h1>This is the main App</h1>
                {children} {/* Renderizza gli elementi figli passati al componente */}
            </main>
        );
    };

    // Componente List: crea una lista con tre elementi
    function List() {
        return (
            <ul>
                <li>JAVASCRIPT</li>
                <li>PHP</li>
                <li>HTML</li>
            </ul>
        );
    }

    // Renderizziamo l'app all'interno di React.StrictMode
    root.render(
        /* 
            React.StrictMode aiuta a identificare problemi nel codice
            durante lo sviluppo, senza influire sul rendering in produzione.
        */
        <React.StrictMode>
            {/* Il componente App funge da contenitore per gli elementi figli */}
            <App>
                <h1>Using JSX</h1> {/* Titolo aggiuntivo dentro App */}
                <List /> {/* Sintassi equivalente a <List></List>, che rappresenta il componente List */}
            </App>
        </React.StrictMode>
    );
} else {
    // Se l'elemento con id 'root' non esiste, stampiamo un errore nella console
    console.error("Elemento con id 'root' non trovato!");
}

