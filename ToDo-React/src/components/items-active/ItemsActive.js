import React from 'react';
import Item from '../item/Item';

function ItemsActive(props) {
    return (
        <div>
            {props.items.filter(item => { return !item.completed }).map(function (value, index) {
                return <Item key={index} item={value} onItemClick={props.onItemClick} onDeleteItem={props.onDeleteItem}></Item>
            })}
        </div>
    );
}
export default ItemsActive;