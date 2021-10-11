import React, { useState } from 'react'
import * as Li from './styles';
import { Item } from '../../types/Item';

type Props = {
    item: Item;
    onDelete: (id: number) => void;
}


const ListItem = ({item, onDelete}: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);

    const buttonHandler = () => {
        onDelete(item.id);
    }

    return (
        <Li.Container done={isChecked}>
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            />
            <label>{item.name}</label>
            <button onClick={buttonHandler}>X</button>
        </Li.Container>
    )
}

export default ListItem;

