import React, {useState} from 'react';

const Form = ({getFilter}) => {

    const [form, setForm] = useState({name:'', username:'', email:''})

    const formHandler = (e) => {
        const eData = {...form, [e.target.name]: e.target.value}
        setForm({...form, ...eData})
        // getFilter(eData)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        getFilter(form)
        console.log(form);
    }
    return (
        <div>
            <form>
                <label>Name: <input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>
                <label>Username: <input type="text" name={'username'} value={form.username} onChange={formHandler}/></label>
                <label>Email: <input type="text" name={'email'} value={form.email} onChange={formHandler}/></label>
                <button onClick={onSubmit}>Find</button>
            </form>
        </div>
    );
};

export default Form;