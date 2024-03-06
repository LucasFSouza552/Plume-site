import React, { useEffect, useState } from "react";
import { getUserDatails } from "../../utils/api";
import AvatarMenu from "../../components/createAvatarMenu";
import styled from "styled-components";
import MainDashboard from "./MainDashboard";

const HeaderStyled = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const SubHeaderStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
    width: 95%;
    border: 1px solid black;
    border-radius: 80px;
    margin: 10px;
`;

const MaxSize = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const MidSize = styled.div`
    width: 99%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
`;




export default function DashboardPage(props) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUserDatails()
            .then(({ data }) => {
                setUser(data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {!user ? "User Undefined" : error.message}</div>;
    }

    return (
        <MaxSize>
            <MidSize>
                <HeaderStyled>
                    <SubHeaderStyled>
                        <ul>
                            <li>Inicio</li>
                        </ul>
                        <AvatarMenu user={user} />
                    </SubHeaderStyled>
                </HeaderStyled>
                <MainDashboard />
            </MidSize>
        </MaxSize>
    );
}






