//External Imports
import React from 'react'; 
import { styled } from '@mui/system'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';

// Internal Imports
import comic_image from '../../assets/images/comics.jpg'

interface Props {
    title: string; 
}



const Root = styled('div')({
    padding: 0,
    margin: 0
})

const NavBarContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

const Logo = styled('h1')({
    margin: '0 0 0 0.45em',
})

const LogoA = styled(Link)({
    color: 'rgb(28, 24, 22)',
    listSTyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none'
})

const LogoNavigation = styled('ul')({
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
})

const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: 'black'
})

const Main = styled('main')({
    backgroundImage: `linear-gradient(rgba( 0, 0, 0, .5), rgba(0, 0, 0, .7)), url(${comic_image});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute'
})

const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
})


export const Home = (props: Props) => {

    return (
        <Root>
            <NavBarContainer>
                <Logo>
                    <LogoA to="#">Comics</LogoA>
                </Logo>
                <LogoNavigation>
                    <li>
                        <NavA to='/'>Home</NavA>
                    </li>
                    <li>
                        <NavA to='/dashboard'>Dashboard</NavA>
                    </li>
                    <li>
                        <NavA to='/signin'>Sign In</NavA>
                    </li>
                    <li>
                        <NavA to='/signin'>Sign Up</NavA>
                    </li>
                </LogoNavigation>
            </NavBarContainer>
            <Main>
                <MainText>
                    <h1>{props.title}</h1>
                    <p>Welcome to our Comic Page!!!</p>
                    <Button color='primary' variant='contained' component={Link} to='/dashboard'>See the Comics!</Button>
                </MainText>
            </Main>
        </Root>
    )
}