import React from "react"
import { IUsers } from "../App"
import styled from "styled-components";

interface IUserListProps{
    users: IUsers[];
    onRemove: (id:number) => void
    onToggle: (id:number) => void
}
interface IUsersProps{
   user:IUsers;
   onRemove: (id:number) => void
   onToggle: (id:number) => void
  }

const UserListWrapper = styled.div`
    text-align: left;
    margin-top: 10px;
    
`

const EmailTag = styled.b`
    margin-right: 10px;
`


function User({user, onRemove, onToggle}: IUsersProps){
    return (
        <UserListWrapper>
            <EmailTag 
            style={{
                cursor: 'pointer',
                color: user.active? 'yellow' : "white"
            }}
            onClick={()=> onToggle(user.id)}
            >{user.email}</EmailTag> 
            <span>({user.username})</span>
            <button onClick={()=>onRemove(user.id)}>제거</button>
        </UserListWrapper>
    )
}

function UserList({users, onRemove, onToggle}: IUserListProps ){
    return (
        <div>
           {users.map(user => <User key={user.id} user={user} onRemove={onRemove} onToggle={onToggle}></User>)}
        </div>
    )
}



export default UserList