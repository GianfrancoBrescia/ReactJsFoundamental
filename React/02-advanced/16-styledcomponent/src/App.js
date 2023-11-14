import './App.css';
import React from 'react'
import styled from 'styled-components'

const mainColor = 'red'

const Titolo = styled.h1`
  color: ${props => props.color || 'gold'};
  font-size: 2.8em;
  margin: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${mainColor};
  display: inline-block

`;

const Button = styled.button`
  color: yellow;
  border-color: brown;
`

const Link = ({className, children}) => {
    return <a className={className}>
        {children}
    </a>
}

const Stilizzato = styled(Link)`
  color: blue;
  font-weight: bold
`

const IntegrationBootStrap = styled.h2.attrs(() => ({
    className: 'display-4'
}))`
  font-weight: bold;
  color: orange`;

const InputAttr = styled.input.attrs((props) => ({
    type: 'text',
    size: props.small ? 10 : undefined,
}))`
  border-radius: 3px
`

class App extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (<div>
                <Titolo>ESEMPIO STYLED</Titolo>
                <Button>Stilizzato</Button>
                <Stilizzato>Clicca qui</Stilizzato>
                <IntegrationBootStrap>TEST BOOTSTRAP</IntegrationBootStrap>
                <InputAttr small/>
            </div>
        )
    }
}

export default App
