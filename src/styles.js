import styled from "styled-components";

const TabsConteiner = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const ModelDivisior = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    border-bottom: 1px solid black;
    margin-bottom: 10px;
    justify-content: center;

`;

const MainStyle = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export { TabsConteiner, ModelDivisior, MainStyle };