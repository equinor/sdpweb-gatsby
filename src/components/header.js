import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { H2 } from "./headers"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#3a3a3a`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <H2 style={{ margin: 0}}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </H2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
