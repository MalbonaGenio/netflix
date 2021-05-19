import styled from "styled-components/macro"

export const Container = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
` 

export const Inner = styled.div`
    display: flex;  
    padding: 70px 45px;
    flex-direction: column;
    max-width: 820px;
    margin: auto;
` 

export const Item = styled.div`
    color: white;
    margin-bottom: 10px;

    &:first-of-type {
        margin-top: 2em;
    }
` 

export const Frame = styled.div`
    margin-bottom: 10px;
    max-width: 1200px;
`

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    color: white;
    
    margin-top: 0;    
    margin-bottom: 8px;
    text-align: center;
    @media (max-width: 600px) {
        font-size: 35px;
    }
` 

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 26px;
    font-weigth: normal;
    background: #303030;
    padding: .8em 1.2em;
    user-select: none;
    align-items: center;
    width: 100%;
    box-sizing: border-box;

    img {
        filter: brightness(0) invert(1);
        max-width: 24px;

        @media (max-width: 600px) {
            max-width: 16px;
        }
    }

    @media (max-width: 600px) {
        font-size: 16px;
    }
` 

export const Body = styled.div`
    font-size: 26px;
    font-weigth: normal;
    line-heigth: normal;
    background: #303030;
    padding: .8em 1.2em;
    user-select: none;
    align-items: center;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
` 