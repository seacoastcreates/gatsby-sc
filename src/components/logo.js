import React from 'react'
import styled from 'styled-components'

import './layout.css'

const Logo = styled.div`
  max-width: 90%;  
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr; 
  grid-gap: 40px;
`;

export default class Logo extends Component {
  render() {
    return (
      <Logo>
        <img 
        style = {{
          height: '100px',
          float: 'left',
        }}
        src={logo} 
        alt="logo" 
      />
      </Logo>
    )
  }
}

export default Logo
