import { useState, useEffect } from "react";
import getTimeDetails from "./getTimeDetails";
import "./Clock.css"; // Import del file CSS per lo stile e l'animazione

const Clock = () => {
  // Stato che memorizza l'ora attuale
  const [time, setTime] = useState(getTimeDetails(new Date()));

  // Stato per gestire il cambiamento visibile dei numeri (attivazione dell'animazione)
  const [prevTime, setPrevTime] = useState(time);

  /**
   * Effetto per aggiornare il tempo ogni secondo
   * - Imposta un `setInterval` per aggiornare il tempo ogni 1000ms
   * - Aggiorna anche `prevTime` per confrontare i numeri precedenti con quelli attuali
   * - Pulisce l'intervallo quando il componente viene smontato
   */
  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = getTimeDetails(new Date());
      setPrevTime(time); // Salva il tempo precedente
      setTime(newTime); // Aggiorna il tempo
    }, 1000);

    return () => clearInterval(interval); // Cleanup: rimuove l'intervallo quando il componente si smonta
  }, [time]);

  /**
   * Funzione per determinare se un numero è cambiato rispetto al precedente
   * - Restituisce la classe "move" se il numero attuale è diverso da quello precedente
   */
  const getAnimationClass = (current, previous) => {
    return current !== previous ? "move" : "";
  };

  return (
    <div className="clock">
      {/* Cifre delle ore */}
      <div className="digit">
        <span className={getAnimationClass(time.firstHour, prevTime.firstHour)}>
          {time.firstHour}
        </span>
      </div>
      <div className="digit">
        <span className={getAnimationClass(time.secondHour, prevTime.secondHour)}>
          {time.secondHour}
        </span>
      </div>

      {/* Separatore ":" */}
      <div className="tick">:</div>

      {/* Cifre dei minuti */}
      <div className="digit">
        <span className={getAnimationClass(time.firstMinute, prevTime.firstMinute)}>
          {time.firstMinute}
        </span>
      </div>
      <div className="digit">
        <span className={getAnimationClass(time.secondMinute, prevTime.secondMinute)}>
          {time.secondMinute}
        </span>
      </div>

      {/* Separatore ":" */}
      <div className="tick">:</div>

      {/* Cifre dei secondi */}
      <div className="digit">
        <span className={getAnimationClass(time.firstSecond, prevTime.firstSecond)}>
          {time.firstSecond}
        </span>
      </div>
      <div className="digit">
        <span className={getAnimationClass(time.secondSecond, prevTime.secondSecond)}>
          {time.secondSecond}
        </span>
      </div>
    </div>
  );
};

export default Clock;

