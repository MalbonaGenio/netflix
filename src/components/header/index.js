import React from "react"
import {Link as ReachRouterLink} from "react-router-dom"
import {Background, Group, Link, Text, Logo, Container, ButtonLink} from "./styles/header"

export default function Header({background = true, children, ...restProps}) {
    return background ? <Background {...restProps}>{children}</Background> : children
}

Header.Frame = function headerFrame({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Header.Group = function headerGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}

Header.Logo = function headerLogo({to, ...restProps}) {
    return(
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>

    )
}

Header.Text = function headerText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Header.Link = function headerLink({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}

Header.ButtonLink = function headerButtonLink({children, ...restProps}) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}