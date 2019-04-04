import React from "react";

export default class ListClass extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='listwrapper'>
                <table className='tableText'>
                    <thead>
                    <tr>
                        <td onClick={() => this.props.onItemSort('id')}>
                            Id
                        </td>
                        <td onClick={() => this.props.onItemSort('name')}>
                            Name
                        </td>
                        <td onClick={() => this.props.onItemSort('phone')}>
                            Phone
                        </td>
                        <td onClick={() => this.props.onItemSort('place')}>
                            Place
                        </td>
                        <td onClick={() => this.props.onItemSort('gender')}>
                            Gender
                        </td>
                        <td onClick={() => this.props.onItemSort('isActive')}>
                            Is Active
                        </td>
                        <td>
                            Delete
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.items.map((item,index) => (
                        <tr key={index}>
                            <td>
                                {item.id}
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.phone}
                            </td>
                            <td>
                                {item.place}
                            </td>
                            <td>
                                {item.gender}
                            </td>
                            <td>
                                <input type='checkbox' checked={item.isActive} readOnly />
                            </td>
                            <td onClick={()=> this.props.onItemDelete(item)}>X</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }

}
