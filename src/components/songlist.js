import React, { useState } from 'react'
import styled from 'styled-components';
import {db} from '../../lib/firebase';

//Components
import Song from './song';

const Songlist = () => {

    const [data, setData] = useState();

    React.useState(() => {
        db.collection('liedjes').onSnapshot((collection) => {
            let d = [];
            collection.docs.map(el => {
                d.push(el.data())
            })
            setData(d);
        })
    }, [])


    return(
        <Container>
            <h2>Songlijst</h2>
            <Legend><p>Artiest</p><p>Titel</p></Legend>
            {data ? 
                data.map((el, index) => {
                    return <Song artiest={el.artiest} titel={el.titel} index={index} key={index}/>
                })
                : null
            }
        </Container>
    )
}

const Container = styled.div`

    border-top: solid 1px black;
    margin-top: 35px;
    h2{
        font-weight: bold;
        text-align: left;
        margin-bottom: 10px;
    }

`

const Legend = styled.div`

    p{
        display: inline-block;
        width: 50%;
    }


    @media only screen and (max-width: 550px){
    p{
        display: block;
        width: 100%;
        border: none;
    }
}

`

export default Songlist;