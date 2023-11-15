import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import TomatoIcon from './TomatoIcon';

const HeaderContainer = styled.header`
    nav {
        display: flex;
        height: 2.25rem;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        background-color: var(--tomato);
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
    justify-content: center;

    .link {
        display: block;
        margin: 4px;
        font-size: 1rem;
        color: white;
        text-decoration: none;
        font-weight: 700;

        background-image: linear-gradient(currentColor, currentColor);
        background-position: 0% 100%;
        background-repeat: no-repeat;
        background-size: 0% 2px;
        transition: background-size 0.3s;
    
        &:hover {
            background-size: 100% 2px;
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
                    <TomatoIcon />
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