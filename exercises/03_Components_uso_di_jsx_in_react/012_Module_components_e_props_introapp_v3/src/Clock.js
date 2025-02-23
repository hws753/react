// const Clock = ({country, timezone}) => {
//     const offset = Date.now() + 3600 * timezone * 1000;
//     const date = new Date(offset);
//     console.log(date, offset, timezone);
//     return (
//         <h2>
//             In {country} is {date.toLocaleDateString() + " " + date.toLocaleTimeString()}
//         </h2>
//     );
// };
// export default Clock;

//Creazione di uno stato al componente con la classe
import React, { Component } from "react"; // Importiamo React e la classe Component da React

// Definiamo la classe Clock che estende Component, il che significa che è un componente a classe di React
class Clock extends Component {
  constructor(props) {
    super(props); // Chiamiamo il costruttore della classe padre (Component)

    // Inizializziamo lo stato con la data calcolata in base al fuso orario ricevuto dai props
    this.state = {
      date: this.getUpdatedDate(props.timezone),
    };
  }

  // Metodo di React chiamato automaticamente dopo che il componente è stato montato nel DOM
  componentDidMount() {
    // Creiamo un intervallo che aggiorna lo stato ogni secondo
    this.interval = setInterval(() => {
      this.setState({ date: this.getUpdatedDate(this.props.timezone) });
    }, 1000);
  }

  // Metodo di React chiamato prima che il componente venga rimosso dal DOM
  componentWillUnmount() {
    // Puliamo l'intervallo per evitare memory leaks
    clearInterval(this.interval);
  }

  // Metodo personalizzato per calcolare la data e l'ora in base al fuso orario
  getUpdatedDate(timezone) {
    const offset = Date.now() + 3600 * timezone * 1000; // Calcoliamo l'offset in millisecondi
    return new Date(offset); // Creiamo un nuovo oggetto Date con l'offset applicato
  }

  // Metodo render() che restituisce il JSX per visualizzare l'orario aggiornato
  render() {
    const { country } = this.props; // Estraiamo il valore "country" dai props
    const { date } = this.state; // Estraiamo la data dallo stato

    return (
      <h2>
        In {country} is {date.toLocaleDateString() + " " + date.toLocaleTimeString()}
      </h2>
    );
  }
}

// Esportiamo il componente per poterlo importare e utilizzare in altri file
export default Clock;
