import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    nav {
        display: flex;
        height: 3.5rem;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        background-color: tomato;
        padding: 6px;
    }
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-right: 6px;
    margin-left: 0.5rem;

    span {
        font-weight: 900;
        font-size: 1.5rem;
        color: white;
        margin-left: 0.5rem;
    }
`

const Links = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;

    .link {
        display: block;
        margin: 4px;
        font-size: 1rem;
        color: white;
        text-decoration: none;
        font-weight: 700;

        &:hover {
            color: white;
            font-weight: 900;
        }
    }

    .separator {
        color: white;
        margin: 0 8px;
    }
`;

function Header() {
    return (
        <HeaderContainer>
            <nav>
                <Logo>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" height="24" width="24">
                        <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 18.75c-4.694 0-8.5-3.806-8.5-8.5S5.306 1.75 10 1.75s8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5z"/>
                        <path d="M10 4.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM10 13.25a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/>
                    </svg>
                    <span>ad.</span>
                </Logo>
                <Links>
                    <Link className="link" to="/portfolio">
                        Portfolio
                    </Link>
                    <span className="separator">|</span>
                    <Link className="link" to="/plans">
                        Planos
                    </Link>
                    <span className="separator">|</span>
                    <Link className="link" to="/contact">
                        Contato
                    </Link>
                </Links>
            </nav>
        </HeaderContainer>
    )
}

export default Header