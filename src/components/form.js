import React from "react";

export default class FormClass extends React.Component{

    constructor(props){
        super(props);
        this.state  = {
            id: '',
            name: '',
            phone: '',
            place: '',
            gender: 'male',
            isActive: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    render(){
        return (
            <div className='formwrapper'>
                <table className='tableText'>
                    <tbody>
                    <tr>
                        <td>Id</td>
                        <td><input name='id' type='number' value={this.state.id} onChange={this.handleInputChange}/></td>
                        <td>Name</td>
                        <td><input name='name' type='text' value={this.state.name} onChange={this.handleInputChange}/></td>
                        <td>Phone</td>
                        <td><input name='phone' type='text' value={this.state.phone} onChange={this.handleInputChange}/></td>
                        <td>Place</td>
                        <td><input name='place' type='text' value={this.state.place} onChange={this.handleInputChange}/></td>
                        <td><select name='gender' onChange={this.handleInputChange} value={this.state.gender}><option value="male">Male</option><option value="female">Female</option></select></td>
                        <td><input name='isActive' type='checkbox' checked={this.state.isActive} onChange={this.handleInputChange}/></td>
                        <td><button onClick={() => this.props.onItemAdd(this.state)}>Add</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    };

};
