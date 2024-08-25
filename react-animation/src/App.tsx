import React, { useRef, useState } from 'react';
import {motion} from "framer-motion"
import styled from 'styled-components';
import { start } from 'repl';
import { hover } from '@testing-library/user-event/dist/hover';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* align-items: center; */
  color : ${props => props.theme.textColor};
  background-color: ${props => props.theme.backgroundColor};  
`

const UserWrapper = styled.div`
  width: 500px;
`
export interface IUsers{
  id:number;
  username: string;
  email:string;
  active:boolean;
}



function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: ""
  })

  const [users, setUsers] = useState<IUsers[]>([
    {
      id: 1,
      username: 'nemo',
      email: 'public.nemo08240@gmail.com',
      active:true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active:true
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active:true
    }
  ]);

  const {username, email} = inputs

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.currentTarget
    setInputs({
      ...inputs,
      [name]: value
    })
   console.log(e.currentTarget.value)
  }

  const nextId = useRef(4)

  const onCreate = () => {
    const user ={
      id: nextId.current,
      username,
      email,
      active: false
    }

    setUsers([...users, user])

    setInputs({
      username: "",
      email: "",
    })

    nextId.current +=1;
    
  }

  const onRemove = (id:number) => {
    setUsers(users.filter(user => user.id !== id))
  }

  const onToggle = (id:number) =>{
    setUsers(
      users.map(user => user.id ===id ? {...user, active: !user.active}: user)
    )
  }

  return (
   <Wrapper>
    <UserWrapper>
      <CreateUser onChange={onChange} username={username} email={email} onCreate={onCreate}/>
      <UserList 
        users={users} 
        onRemove={onRemove} 
        onToggle={onToggle}/>
      </UserWrapper>
   </Wrapper>
  );
}

export default App;
