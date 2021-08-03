import styled from "styled-components/macro"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 80%;
    margin: auto;
`;
export const Title = styled.h1`
    color: #fff;
    font-weight: 500;
    font-size: 48px;
    text-align: center;
    width: 100%;

`;
export const List = styled.ul`
    /* remove default ul styles */
    padding: 0;
    marging: 0;
    display: flex;
    flex-direction: row;    
`;

export const Picture = styled.img`
    width: 100%;
    max-width: 150px;
    heigth: auto;
    cursor: pointer;
    border: 3px solid black;
`;

export const Name = styled.p`
    color: #808080;
    font-size: 16px;
    text-overflow: ellipsis;

    &:hover {
        font-weigth: bold;
        color: #e5e5e5
    }
`;

export const Item = styled.li`
    max-width: 200px;
    max-height: 200px;
    list-style-type: none;
    text-align: center;
    margin-rigth: 30px;

    &:hover > ${Picture} {
        border: 3px solid white;
    }

    &:hover ${Name} {
        font-weight: bold;
        color: white;
    }

    &:last-of-type {
        margin-right: 0;
    }
`;



