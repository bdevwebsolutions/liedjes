import React from 'react'
import styled from 'styled-components';
import {useForm} from 'react-hook-form';


const Song = ({artiest, titel, index}) => {

    const [edit, setEdit] = React.useState(false);

    return (
        <Container>

            { !edit ?
                    (
                        <Preview k={index}>
                            <p>{index}: {artiest}</p>
                            <p>{titel}</p>
                        </Preview>
                    )
                : null
            }
        </Container>
    )


}

const Container = styled.div`
    
`



const Preview = styled.div`
    p{
        display: inline-block;
        width: 50%;
        padding: 14px 5px;
    }

    background-color: ${props => props.k % 2 === 0 ? "grey" : "white"};
    color: ${props => props.k % 2 === 0 ? "white" : "black"};
    font-weight: bold;
    font-size: 12px;

    @media only screen and (max-width: 550px){

        border: solid 1px grey;
        p{
            display: block;
            width: 100%;
            border: none;
        }
    }
`

const Editview = styled.div`

`

export default Song;