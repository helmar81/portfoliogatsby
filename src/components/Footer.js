import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy;  Design: <a href="https://uspekhi.web.app"  target="_blank" rel="noopener noreferrer">USPEKHI</a>. Built with: <a href="https://www.gatsbyjs.org/"  target="_blank" rel="noopener noreferrer">Gatsby.js</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
