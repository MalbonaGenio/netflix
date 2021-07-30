import React, { useState, useContext } from "react"
import { useHistory } from "react-router"
import { FirebaseContext } from "../context/firebase"
import { HeaderContainer } from "../containers/header"
import { FooterContainer } from "../containers/footer"
import { Form } from "../components"
import * as ROUTES from "../constants/routes"

export default function Signup() {
    const history = useHistory()
    const {firebase} = useContext(FirebaseContext)

    const [error, setError] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailAdress, setEmaiAdress] = useState('')
    const [password, setPassword] = useState('')

    //form validation
    const isInvalid = firstName === '' || lastName === '' || emailAdress === '' || password === ''
    //handle submit
    const handleSignup = (event) => {
        event.preventDefault()

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAdress, password)
            .then((result) => {
                result.user.updateProfile({
                    displayName: lastName + firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1
                })
                .then(() => {
                    history.push(ROUTES.BROWSE)
                })
            })
            .catch((error) => {
                setFirstName('')
                setLastName('')
                setEmaiAdress('')
                setPassword('')
                setError(error.message)
            })




    }
    return(
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignup} method="POST">
                    <Form.Input
                        placeholder="First Name"
                        value={firstName}
                        onChange= {({target}) => setFirstName(target.value)}
                    />

                    <Form.Input
                        placeholder="Last Name"
                        value={lastName}
                        onChange={({target}) => setLastName(target.value)}
                    />

                    <Form.Input 
                        placeholder="Email adress"
                        value={emailAdress}
                        onChange={({target}) => setEmaiAdress(target.value)}
                    />

                    <Form.Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        autocomplete="off"
                        onChange={({target}) => setPassword(target.value)}
                    />

                    <Form.Submit disabled={isInvalid} type="submit">
                        Sign Up
                    </Form.Submit>

                    <Form.Text>
                        Already a user? <Form.Link to="/signin">Sign in.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This form uses Google reCAPTCHA.
                    </Form.TextSmall>
                </Form.Base>

            </Form>
        </HeaderContainer>
        <FooterContainer/>
        </>
    )

}
