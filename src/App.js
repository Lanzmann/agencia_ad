import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import Portfolio from './Portfolio'
import Planos from './Planos'
import Contato from './Contato'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`

const Main = styled.main`
  flex: 1 0 auto;
  width: 100%;
`

function App() {
  return (
    <Router>
      <Wrapper>
        <Header />
        <Main>
          <Routes>
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/plans" element={<Planos/>} />
            <Route path="/contact" element={<Contato/>} />
          </Routes>
        </Main>
      </Wrapper>
    </Router>
  )
}

export default App