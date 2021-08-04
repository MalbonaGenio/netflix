import React, { useContext, useState } from 'react';
import { Header } from '../components';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';
import * as ROUTES from '../constants/routes'
import {useContent} from '../hooks';

export function BrowseContainer() {
    const [profile, setProfile] = useState({});
    const [loading, setLoading ] = useState('true')
    const [category, setCategory] = useState('series')
    const { firebase } = useContext(FirebaseContext)

    const user = {
        displayName: "fff",
        photoURL: "2"
    };

    const {series} = useContent('series')
    console.log(series)
    
    return profile.displayName ? (
        <>
            <Header src="joker1" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="Netlfix" />
                        <Header.Link 
                            active={category === 'series' ? 'true' : 'false'}
                            onClick={() => setCategory('series')}>
                            Series
                        </Header.Link>
                        <Header.Link
                            active={category === 'films' ? 'true' : 'false'}
                            onClick={() => setCategory('films')}>
                            Films
                        </Header.Link>
                    </Header.Group>
                </Header.Frame>

            </Header>
            <FooterContainer />
        </>)
        : (<SelectProfileContainer user={user} setProfile={setProfile}/>);
}