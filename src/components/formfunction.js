import React, {useState} from 'react';

export default function Form(props){

    const [formInput, setFormInput] = useState({
        id: '',
        name: '',
        phone: '',
        place: '',
        gender: 'male',
        isActive: false
    })

    const handleInputChange = (evt) => {
        let tempFormInput = JSON.parse(JSON.stringify(formInput));

        if(evt.target.type != "checkbox"){
            tempFormInput[evt.target.name] = evt.target.value;
        }else {
            tempFormInput[evt.target.name] = evt.target.checked;
        }

        setFormInput(tempFormInput);
    }

    return (
        <div className='formwrapper'>
            <table className='tableText'>
                <tbody>
                <tr>
                    <td>Id</td>
                    <td><input name='id' type='number' value={formInput.id} onChange={handleInputChange}/></td>
                    <td>Name</td>
                    <td><input name='name' type='text' value={formInput.name} onChange={handleInputChange}/></td>
                    <td>Phone</td>
                    <td><input name='phone' type='text' value={formInput.phone} onChange={handleInputChange}/></td>
                    <td>Place</td>
                    <td><input name='place' type='text' value={formInput.place} onChange={handleInputChange}/></td>
                    <td><select name='gender' onChange={handleInputChange} value={formInput.gender}><option value="male">Male</option><option value="female">Female</option></select></td>
                    <td><input name='isActive' type='checkbox' checked={formInput.isActive} onChange={handleInputChange}/></td>
                    <td><button onClick={() => props.onItemAdd(formInput)}>Add</button></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
