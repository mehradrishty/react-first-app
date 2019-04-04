import React, {useState} from 'react';

export default function TreeView(props){

    const [treeViewState, setTreeViewState] = useState({
        items: new Array(props.items.length).fill(false)
    })

    const toggleTree = (index) => {
        let value = treeViewState.items[index];
        let tempArr = [...treeViewState.items]; //creates the clone of the state
        tempArr[index] = !value;
        setTreeViewState({
            items: tempArr
        })
    }

    return (
        <div className='treewrapper'>
            {props.items.map((item,index) => (
                <ul onClick={() => toggleTree(index)} key={index}>
                    <li>
                        {item.name}
                        {treeViewState.items[index] ?
                            <ul>
                                <li>
                                    {item.phone}
                                </li>
                                <li>
                                    {item.place}
                                </li>
                                <li>
                                    {item.gender}
                                </li>
                            </ul>
                            : null}
                    </li>
                </ul>
            ))}
        </div>
    )
}
