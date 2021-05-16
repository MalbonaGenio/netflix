import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    max-width: 1000px;
    flex-direction: column;
    padding: 70px 56px;
    margin: auto;

    @media(max-width: 1000px) {
        padding: 70px, 30px;
    }
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 15px;

    @media(max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr))
    }
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`

export const Title = styled.p`
    font-size; 16 px    
    color: #757575;
    margin-bottom: 40px;

`

export const Text = styled.p`
    font-size: 13px;
    color: #757575;
    margin-bottom: 20px;
`

export const Link = styled.a`
    font-size: 13px;
    color: #757575;
    margin-bottom: 20px;
    text-decoration: none;
`

export const Break = styled.p`
    flex-basis: 100%;
    heigth: 0;
`