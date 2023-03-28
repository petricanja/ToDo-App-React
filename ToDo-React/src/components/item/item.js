import React from 'react';
import './Item.css';

function Item(props) {
    return (
        <div className={`todo-item ${props.item.completed ? 'completed' : ''}`} onClick={(e) => {
            e.stopPropagation();
            props.onItemClick(props.item);
        }}>

            <div className="todo-item-date">
                <span className="day">{props.item.date.toLocaleString('default', {day: 'numeric'})}</span>
                <span className="month">{props.item.date.toLocaleString('default', {month: 'short'})}</span>
            </div>
            <div className="todo-item-content">
                <span className="data">{props.item.content}</span>
            </div>
            <span className="delete-btn" title="delete" onClick={(e) => {
                e.stopPropagation();
                props.onDeleteItem(props.item);
            }}/>
        </div>
    );
}

export default Item;