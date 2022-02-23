import './style.scss';

import {useEffect, useState} from "react";
import AddressItem from "./Component/AddressItem";
import {data} from "./addres";

function App() {
    const [value,setValue] = useState('');


    const [address, setState] = useState([]);
    const getState = () => {
        setState(data);
    }

    useEffect(() => {
        getState();
    }, []);
     const filteredAddress = address.filter(el=>{
         return el.address.toLowerCase().includes(value.toLowerCase()) || el.location.toLowerCase().includes(value.toLowerCase());
     }
)

    return (
        <div className="App">
            <h2>Начните набирать адресс:</h2>
            <div>Найдено адрессов: {filteredAddress.length}</div>
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
