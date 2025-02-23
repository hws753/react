import {useState} from 'react';
import { useEffect } from 'react';

// const Clock = ({country, timezone}) => {
//     const offset = Date.now() + 3600 * timezone * 1000;
//     const dateIni = new Date(offset);
//     console.log(dateIni, offset, timezone);
//     const [date, setDate] = useState(dateIni);

//     useEffect(() => {
//         //code to execute if input changes
//         // const nation = ['CHINA', 'JAPAN', 'KOREA'];
//         // const idx = Math.floor(Math.random() * 3);
//         // setNation(nation[idx]); 

//         const interval = setInterval(() => {
//             const time = date.getTime() + 1000;
//             setDate(new Date(time));
//         }, 1000);
//         return () => {
//             //when component is unmounted
//             clearInterval(interval);
//         };
//     }, []);

//     // setTimeout(() => {
//     //     const offset = date.getTime() + 3600 * 1000;
//     //     setDate(new Date(offset));
//     // }, 1000);
//     return (
//         <h2>
//             In {country} is {date.toLocaleDateString() + ' ' + date.toLocaleTimeString()}
//         </h2>
//     );
// };

const Clock = ({country, timezone}) => {
    const offset = Date.now() + 3600 * timezone * 1000;
    const dateIni = new Date(offset);
    

    const [date, setDate] = useState(dateIni);
    console.log(date, offset, timezone);

    useEffect(()=>{
        const interval = setInterval(()=>{
            const time = date.getTime() + 1000;
            setDate(new Date(time));
        }, 1000);
        return () => {
            //when component is unmounted
            clearInterval(interval);
        };
    }, [date]);

    return (
        <h2>In {country} is {date.toLocaleDateString() + " " + date.toLocaleTimeString()}</h2>
    );
};

export default Clock;