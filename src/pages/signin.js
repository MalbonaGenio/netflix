import React, { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { FirebaseContext } from "../context/firebase"
import { HeaderContainer } from "../containers/header"
import { FooterContainer } from "../containers/footer"
import { Form } from '../components'
import * as ROUTES from "../constants/routes"

export default function Signin() {
    const {firebase} = useContext(FirebaseContext)
    const history = useHistory()
    const [error, setError] = useState('')
    const [emailAdress, setEmailadress] = useState('')
    const [password, setPassword] = useState('')
    const isInvalid = emailAdress === '' || password === ''
    const handleSignin = (event) => {
        event.preventDefault()

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAdress, password)
            .then(() => {
                history.push(ROUTES.BROWSE)
            })
            .catch((error) => {
                setEmailadress('')
                setPassword('')
                setError(error.message)
            })
    }

    return(
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignin} method="POST">
                    <Form.Input
                        placeholder="Email adress"
                        value={emailAdress}
                        onChange= { ({target}) => setEmailadress(target.value)}
                    />
                    <Form.Input 
                        type="password"
                        value={password}
                        autocomplete="off"
                        placeholder="Password"
                        onChange={ ({target}) => setPassword(target.value)}
                    />
                    <Form.Submit disabled={isInvalid} type="submit">
                        Sign In
                    </Form.Submit>
                    <Form.Text>
                        New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This form uses Google reCAPTCHA.
                    </Form.TextSmall>
                </Form.Base>
            </Form>
        </HeaderContainer>
        <FooterContainer />
        </>
    )
}