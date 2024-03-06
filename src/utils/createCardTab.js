import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
    display: flex;
    flex-direction: row;
    width:  ${props => props.expanded ? '90%' : '20%'};
    height: ${props => props.expanded ? '100%' : '150px'};
    margin: 10px;
    background-color: gray;
    border-radius: 10px;
`;

const CardInside = styled.div`
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: end;
    background-color: ${props => props?.cor ? props.cor : '#6a46b4'};
    width:  100%;
    height: 100%;

    width:  ${props => props.expanded ? '20%' : '100%'};
    height: 150px;
    border-radius: 10px;


    background-image: url(${props => props.imagem});
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;

    
    &:hover {
        cursor: pointer;
    }


`;

const CardTitle = styled.div`
    position: relative;
    bottom: 0px;
    background-color: #a6a6a6bd;
    display: flex;
    width: 80%;
    border-radius: 8px;
    margin: 5px;
    justify-content: center;
`;

const CardData = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
        font-weight: bold;
    }
`;

export default function CreateCard({ Tab }) {
    const [expanded, setExpanded] = useState(false);

    const { id, ficha, tag, cor } = Tab;
    const TabDatas = Tab.tab;

    const Imagem = TabDatas ? Object.values(TabDatas).find((datas) => {

        if (datas?.value && isImageUrl(`${datas.value}`)) {
            return isImageUrl(`${datas.value}`);
        }
        return null;

    })?.value : null;

    const handleExpand = () => {
        setExpanded(true);
    }

    return (
        <Card expanded={expanded} >

            {expanded &&
                <ContentDetails>
                    {DetailedTab(TabDatas)}
                </ContentDetails>
            }

            <CardInside key={id} tabId={ficha} cor={cor} imagem={Imagem} expanded={expanded} onClick={handleExpand} className="card">
                <CardTitle>

                    <CardData>
                        <div>{ficha}</div>
                        <div>{`${tag || ""}`.slice(0, 30)}</div>
                    </CardData>
                    {/* <GuildIcon src={guildIcon} alt='icone do servidor'></GuildIcon> */}


                </CardTitle>




            </CardInside>

        </Card>

    );
}

const ContentDetails = styled.div`
    width: 60%;
`;

const Datail = styled.div`
    width: fit-content;
    justify-content: center;
    color: black;
`;

const DetailedTab = (Tab) => {
    return Object.values(Tab).map((Datas) => (<Datail>{Datas.value}</Datail>));
}


function isImageUrl(url) {
    // Regular expression for a valid image file. It satisfies all the conditions of a valid image file
    const imageRegex = /(jpg|jpeg|png)+/i;

    // Extract the file extension from the URL
    const fileExtension = url.split('.').pop().toLowerCase();

    // Match the file extension against the regular expression
    return imageRegex.test(fileExtension);
}