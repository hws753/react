import {useState} from 'react';
const Clock = ({country, timezone}) => {
    const offset = Date.now() + 3600 * timezone * 1000;
    const dateIni = new Date(offset);
    console.log(date, offset, timezone);
    const [date, setDate] = useState(dateIni);
    const [nation, setNation] = useState(country);
    const [date, setDate] = useState({date, nation});

    useEffect(() => {
        //code to execute if input changes
        const nation = ['CHINA', 'JAPAN', 'KOREA'];
        const idx = Math.floor(Math.random() * 3);
        setNation(nation[idx]); 
        const interval = setInterval(() => {
            const time = date.getTime() + 1000;
            setDate(new Date(time));
        }, 1000);
        return () => {
            //when component is unmounted
            clearInterval(interval);
        };
    }, [date]);

    setTimeout(() => {
        const offset = date.getTime() + 3600 * 1000;
        setDate(new Date(offset));
    }, 1000);
    return (
        <h2>
            In {country} is {date.toLocaleDateString() + ' ' + date.toLocaleTimeString()}
        </h2>
    );
};

export default Clock;