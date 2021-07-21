import React, {useState} from "react"
import { HeaderContainer } from "../containers/header"
import { Form } from '../components'


export default function Signin() {
    const [error, setError] = useState('')
    const [emailAdress, setEmailadress] = useState('')
    const [password, setPassword] = useState('')

    const handleSignin = (event) => {
        event.preventDefault()

    }

    return(
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
                    <Form.Submit disabled="false" type="submit">
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
    )
}