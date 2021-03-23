import React from 'react'
import styled from 'styled-components';
import {useForm} from 'react-hook-form';

//firebase
import {addSong} from '../../lib/firebaseFunctions';


export const Controls = () => {

    const [open, setOpen] = React.useState(false);
    const {register, handleSubmit, errors, reset} = useForm();
    const [succes, setSucces] = React.useState("")

    const onSubmit = async (data) => {
        await addSong(data).then(res => {
            setSucces(res);
            reset()
        }).catch(err => {
            setSucces("OHNO")
        })
    }

    return(
        <Container>
            <button onClick={() => {setOpen(!open)}}>{open ? "Sluiten" : "Toevoegen"}</button>
            {
                open ?
                    <Popup>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>Titel</label>
                            <input name="titel" ref={register({required: true})}/>
                            {errors.titel && <span>Verplicht invullen aub</span>}
                            <label>Artiest</label>
                            <input name="artiest"  ref={register({required: true})}/>
                            {errors.artiest && <span>Verplicht invullen aub</span>}
                            <label>Text</label>
                            <textarea name="text" ref={register({required: true})}/>
                            {errors.text && <span>Verplicht invullen aub</span>}
                            <input type="submit"/>
                        </form>
                        {succes !== "" ? <p>{succes}</p> : null }
                    </Popup> 
                    : null
            }

        </Container>
    )
}

const Container = styled.div`

    margin-top: 15px;
    

    button{
        display: block;
        width: 100%;
        background-color: #3790FF;
        color: white;
        border-radius: 5px;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 8px 0px;
        font-weight: bold;

        :active{
            outline: none;
        }
    }

`

const Popup = styled.div`

    label{
        display: block;
        font-weight: bold;
        margin-top: 15px;
    }

    input{
        display: block;
        width: 100%;

    }

    textarea{
        display: block;
        width: 100%;
        min-height: 400px;
    }

    span{
        display: block;
        color: red;
    }
    input[type="submit"]{
        margin-top: 15px;
        cursor: pointer;
        background-color: orange;
        color: white;
        font-weight: bold;
        outline: none;
        border: none;
        padding: 8px 0;
        border-radius: 5px;
    }

`