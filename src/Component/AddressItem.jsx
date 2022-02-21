import React from 'react';

const AddressItem = (props) => {
    return (
        <div className='item'>
           <p>Адресс доставки: {props.address}</p>
           <p>Цена доставки: {props.price}</p>
        </div>
    )

    };

export default AddressItem;