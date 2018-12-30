import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { relative } from 'path'
import styled from 'styled-components'
import Hero from './hero'

import './style.css'
import logo from '../images/seahorse.png'

const HeaderWrapper = styled.div`
  background: #faf8fb;
  img {
    margin-bottom: 0;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div style={{ gridTemplateColumns: '45% 55%'}} 
      className="logo-title">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#4e4e4e',
            textDecoration: 'none',
            fontFamily: 'Fjalla One',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Hero />
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
