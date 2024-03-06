import { useEffect, useState } from "react";
import { getUserDatails } from "../utils/api";
import styled from 'styled-components';

const login = () => window.location.href = 'http://26.147.127.222:3000/api/auth/discord';

const UserInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0px 20px;

    &::before {
    content: '';
    color: black;
    border-left: 3px solid black;
    margin-right: 10px;
    height: 50%;
  }
`

const AvatarStyle = styled.img`
    width: 40px;
    border-radius: 20px;
    margin-right: 5px;
`;

const UserInfoStyle = styled.div`
    font-family: Oswald, Arial, sans-serif;
    font-size: 15px;
`;

export default function AvatarMenu(props) {
    // console.log(props);
    const { user } = props;

    if (!user) {
        return (
            <div>
                <button onClick={login}>Login</button>
            </div>)
    }

    return (
        <UserInfoWrapper>
            <AvatarStyle src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`} alt="Avatar" />
            <UserInfoStyle>{user.username}</UserInfoStyle>
        </UserInfoWrapper>
    )
}