import React from "react";

export default class TreeView extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items: new Array(this.props.items.length).fill(false)
        };
        console.log(this.state.items);
    }

    toggleTree(index){
        let value = this.state.items[index];
        let tempArr = [...this.state.items]; //creates the clone of the state
        tempArr[index] = !value;
        this.setState({
            items: tempArr
        })

    }

    render(){
        return (
            <div className='treewrapper'>
                {this.props.items.map((item,index) => (
                    <ul onClick={() => this.toggleTree(index)} key={index}>
                        <li>
                            {item.name}
                            {this.state.items[index] ?
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
    };

};
