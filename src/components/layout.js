import * as React from 'react'
import {Link} from 'gatsby'
import logo from '../images/logo.png'

const Layout = ( {pageTitle, children} ) => {
    return (
            <div>
                <header>
                    <span> 
                        <Link to = "/"> Tutor life </Link>
                    </span>
                    <nav>
                        <ul>
                            <li>
                                <Link to = "/about"> Chi sono </Link>
                            </li>
                            <li>
                                <Link to = "/blog"> Articoli </Link>
                            </li>
                            <li>
                                <Link to = "/contacts"> Contatti </Link>
                            </li>
                        </ul>
                    </nav>
                   
                </header>

                <main>
                    {children}
                </main>
            </div>
) }

export default Layout