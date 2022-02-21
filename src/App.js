import './style.scss';

import {useEffect, useState} from "react";
import AddressItem from "./Component/AddressItem";

function App() {
    const [value,setValue] = useState('');

    const data = [{
       address:'Ленина',
        price:34
    },
        {
            address:'Мира',
            price:31
        },
        {
            address:'Ленина',
            price:32
        },
        {
            address:'1го мая',
            price:3
        }]
    const [address, setState] = useState([]);
    const getState = () => {
        setState(data);
    }

    useEffect(() => {
        getState();
    }, []);
     const filteredAddress = address.filter(el=>{
         return el.address.toLowerCase().includes(value.toLowerCase())
     })

    return (
        <div className="App">
            <h2>Начните набирать адресс:</h2>
            <input  type="text" onChange={(e)=> {
                let className = 'drop';
                e.currentTarget.classList.add(className)
                setValue(e.target.value);
            }
            }/>
            <div>
                 {
                filteredAddress.map((adress,i) => {
                    return <AddressItem key={i} address={adress.address} price={adress.price}/>
                })
            }
            </div>

        </div>
    );
}

export default App;
