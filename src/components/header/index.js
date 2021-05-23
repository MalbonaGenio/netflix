import React from "react"
import {Link as ReachRouterLink} from "react-router-dom"
import {Background, Logo, Container, ButtonLink} from "./styles/header"

export default function Header({background, children, ...restProps}) {
    return background ? <Background {...restProps}>{children}</Background> : children
}

Header.Frame = function headerFrame({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Header.Logo = function headerLogo({to, ...restProps}) {
    return(
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>

    )
}

Header.ButtonLink = function headerButtonLink({children, ...restProps}) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}