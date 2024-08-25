import styled from "styled-components"

const UserInputTag = styled.div`
    margin-bottom: 40px;
`

interface IOnChange{
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
    username:string
    email:string
    onCreate: ()=> void,
}

function CreateUser({onChange, username, email, onCreate}: IOnChange){
    return (
        <UserInputTag>
            <input
            name="username"
            // value={username}
            placeholder="username 입력"
            onChange= {onChange}
            value={username}
            />
            <input
            name="email"
            // value={email}
            placeholder="email 입력"
            onChange= {onChange}
            value={email}
            />
            <button onClick={onCreate}>등록</button>
        </UserInputTag>
    )
}

export default CreateUser