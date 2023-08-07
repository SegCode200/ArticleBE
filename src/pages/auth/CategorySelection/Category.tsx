import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Swal from "sweetalert2"
import {AiOutlinePlus} from "react-icons/ai"
import { useSelector } from 'react-redux'
import { AuthorsCategory } from '../../../Api/AuthorApi'


const Data=[
    "Programming",
    "Travel",
    "Tech",
    "Coding",
    "Design",
    "Relationships",
    "Machine Learning",
    "Data Science",
    "Productivity",
    "Politics",
    "Cryptocurrency",
    "Sociology",
    "Psychology",
    "Money",
    "StartUp",
    "Ux",
    "Javascript",
    "Typescript",
    "Education",
    "History",
    "React",
    "LifeStyle",
    "Work",
    "Health",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
    "Programming",
]
const Category = () => {
    const user = useSelector((state:any)=> state.signUser)


    const [State, setState] = useState(0)


    const onStateChange =()=>{
        setState(prevCount => prevCount + 1)
        if(State===5){
            Swal.fire({
                icon: 'error',
                title: 'You cannot select more than 5',
                text: 'Press continue to move to the next page',
                footer: 'Goat no do pass yourself ooo'
              })
        }else if (State >5){
            Swal.fire({
                icon: 'error',
                title: 'You cannot select more than 5',
                text: 'Press continue to move to the next page',
                footer: 'Goat no do pass yourself ooo'
              })

            
        }
    }
  return (
    <div>
        <Container>
            <Main>
                <Logo>LOFO</Logo>

                <Div>
                    <BigText>What are you interested in?</BigText>
                    <SmallText>Choose FIve only</SmallText>
                </Div>

                <Holder

                >
                    {
                        Data.map((props:string, id:number)=>(
                            <Hold key={id}
                            onClick={()=>{
                                onStateChange()
                                AuthorsCategory(user._id, props)
                             
                                
                            }}
                         
                            >
                            
                                    <Text>{props}</Text><AiOutlinePlus size={14}/>
                            </Hold>
                        ))
                    }
                </Holder>

                <Div>
                    <Button
                     active={State >= 5 } disabled={State < 5}
                    >Continue</Button>
                </Div>
            </Main>
        </Container>
    </div>
  )
}

export default Category
const Button = styled.button<{ active: boolean }>`
  background-color: ${props => (props.active ? 'silver' : 'gray')};
  color: ${props => (props.active ? 'black' : '#8f8f8f')};
  width:300px;
  height:50px;
  margin-top: 10px;
  font-family: Poppins;
  justify-content: center;
  border-radius: 30px;
  display: flex;
  align-items: center;
  border: none;
  cursor: ${props => (props.active ? 'pointer' : 'not-allowed')};

;
font-size: 25px;
/* margin: 20px; */
`
const Icon = styled.div``
const Text = styled.div`
font-size: 13px;
font-weight: 400;
margin-right: 5px;
`
const Hold = styled.div`
padding: 10px 15px;
background-color: silver;
border-radius: 30px;
cursor: pointer;
margin: 12px;
display: flex;
align-items: center;


`
const Holder = styled.div`
display: flex;
width: 80%;
flex-wrap: wrap;
justify-content: center;


`
const SmallText = styled.div`
font-size: 15px;
font-weight: 500;
margin: 20px;

`
const BigText = styled.div`
font-size: 20px;
font-weight: 500;
`
const Div = styled.div`
display: flex;
/* margin-top: 100px; */
flex-direction: column;
align-items:center;
`
const Logo = styled.div`
font-size: 60px;
font-weight: 600;
margin-top: 20px;

`
const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

;
`