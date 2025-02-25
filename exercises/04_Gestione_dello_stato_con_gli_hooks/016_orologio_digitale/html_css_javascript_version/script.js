// Seleziona i contenitori per ore, minuti e secondi dalla pagina HTML
let hoursContainer = document.querySelector('.hours');       // Ottieni il primo elemento con class=".hours"
let minutesContainer = document.querySelector('.minutes');     // Ottieni il primo elemento con class=".minutes"
let secondsContainer = document.querySelector('.seconds');   // Ottieni il primo elemento con class=".seconds"

// Seleziona tutti gli elementi con classe "tick" e li converte in un array
let tickElements = Array.from(document.querySelectorAll('.tick'));//Seleziona tutti gli elementi con class=".tick":

// Crea un oggetto Date impostato all'epoca (inizio del tempo) e 
// lo modifica per forzare un aggiornamento immediato
let last = new Date(0); // crea un nuovo oggetto Date con il valore 0, che rappresenta la data di riferimento Epoch time.
//l'oggetto Date accetta come parametro un valore numerico che rappresenta il numero di millisecondi trascorsi 
// dal 1° gennaio 1970 00:00:00 UTC (detto Unix Epoch Time o timestamp 0).
last.setUTCHours(-1); // Imposta l'ora UTC a -1, assicurando che al primo aggiornamento venga cambiato il valore

// Funzione per aggiornare il tempo visualizzato sul clock
function updateTime () {
  // Ottiene l'ora corrente
  let now = new Date();
  
  // Converte le ore di "last" e "now" in stringhe per confrontarle
  let lastHours = last.getHours().toString();
  let nowHours = now.getHours().toString();
  
  // Se le ore sono cambiate, aggiorna il contenitore delle ore
  if (lastHours !== nowHours) {
    updateContainer(hoursContainer, nowHours);
  }
  
  // Converte i minuti di "last" e "now" in stringhe per confrontarli
  let lastMinutes = last.getMinutes().toString();
  let nowMinutes = now.getMinutes().toString();
  
  // Se i minuti sono cambiati, aggiorna il contenitore dei minuti
  if (lastMinutes !== nowMinutes) {
    updateContainer(minutesContainer, nowMinutes);
  }
  
  // Converte i secondi di "last" e "now" in stringhe per confrontarli
  let lastSeconds = last.getSeconds().toString();
  let nowSeconds = now.getSeconds().toString();
  
  // Se i secondi sono cambiati, aggiorna il contenitore dei secondi
  // La funzione tick() è commentata; se decommentata, alternerà la visibilità degli elementi "tick"
  if (lastSeconds !== nowSeconds) {
    //tick()
    updateContainer(secondsContainer, nowSeconds);
  }
  
  // Aggiorna il riferimento al tempo precedente per il prossimo ciclo di aggiornamento
  last = now;
}

// Funzione che inverte lo stato di visibilità degli elementi "tick" (ad es. i due punti del clock)
function tick () {
  // Per ogni elemento "tick", alterna la classe "tick-hidden" per mostrare/nascondere l'elemento
  tickElements.forEach(t => t.classList.toggle('tick-hidden'));//La proprietà  classList restituisce i nomi delle classi CSS di un elemento.
}

// Funzione per aggiornare il contenitore di una specifica unità di tempo (ore, minuti o secondi)
function updateContainer (container, newTime) {
  // Divide la stringa newTime in un array di caratteri (per esempio, "9" diventa ["9"])
  let time = newTime.split('');
  
  // Se l'array ha un solo elemento, aggiunge uno zero iniziale per avere sempre due cifre
  if (time.length === 1) {
    time.unshift('0');
  }
  
  // Seleziona il primo elemento figlio del contenitore (corrispondente alla cifra delle decine)
  let first = container.firstElementChild;
  // Se il testo dell'ultimo elemento figlio di "first" non corrisponde alla nuova cifra, 
  // aggiorna il numero
  if (first.lastElementChild.textContent !== time[0]) {
    updateNumber(first, time[0]);
  }
  
  // Seleziona l'ultimo elemento figlio del contenitore (corrispondente alla cifra delle unità)
  let last = container.lastElementChild;
  // Se il testo dell'ultimo elemento figlio di "last" non corrisponde alla nuova cifra, aggiorna il numero
  if (last.lastElementChild.textContent !== time[1]) {
    updateNumber(last, time[1]);
  }
}

// Funzione per aggiornare il numero mostrato in un determinato elemento, aggiungendo un'animazione
function updateNumber (element, number) {
  // Alternativamente, si potrebbe aggiornare direttamente il testo:
  // element.lastElementChild.textContent = number
  
  // Clona l'elemento contenente il numero per creare un nuovo nodo per l'animazione
  let second = element.lastElementChild.cloneNode(true);//Il cloneNode()metodo crea una copia di un nodo e restituisce il clone.
                                                        // Il cloneNode()metodo clona tutti gli attributi e i loro valori.
                                                        // Impostare il parametro deeptrue su se si desidera clonare anche i discendenti (figli).
  // Aggiorna il testo del nodo clonato con il nuovo numero
  second.textContent = number;
  
  // Il nuovo nodo (con il numero aggiornato) viene aggiunto sotto l'elemento esistente.
  element.appendChild(second);
  // Aggiunge la classe "move" per attivare l'animazione definita in CSS
  // L'animazione move fa scorrere il numero esistente verso l'alto simulando un cambio.
  element.classList.add('move');

  // Dopo 990 millisecondi, rimuove la classe "move" per resettare l'animazione
  // setTimeout(function () {
  //   element.classList.remove('move')
  // }, 990);
  
  // Dopo 990 millisecondi, rimuove il vecchio nodo (primo figlio) dal contenitore
  // Dopo quasi un secondo, il vecchio numero viene rimosso, lasciando solo il nuovo numero visibile
  setTimeout(function () {
    element.removeChild(element.firstElementChild)
  }, 990);
  // Non vedi un doppio campo dei secondi perché l'animazione fa scorrere il nuovo numero sopra il vecchio, 
  // e poi quest'ultimo viene rimosso subito dopo. A livello del DOM, per una frazione di secondo ci sono due elementi, 
  // ma visivamente sembra sempre uno solo grazie all'animazione CSS. 
}

// Imposta un intervallo che chiama la funzione updateTime ogni 100 millisecondi per aggiornare 
// il clock in tempo reale
setInterval(updateTime, 100);
