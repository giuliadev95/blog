import * as React from 'react'
import {Link} from 'gatsby'

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
                <footer>
                    <ul>
                        <li>
                        <span> 
                            <Link to = "/"> Tutor life </Link>
                        </span>
                        </li>
                        <li>
                            Chi sono
                        </li>
                        <li>
                            Contatti
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <h4>Risorse</h4>
                        </li>
                        <li>
                            FAQ
                        </li>
                        <li>
                            Blog
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <h4>Legale</h4>
                        </li>
                        <li>
                            Termini e condizioni
                        </li>
                        <li>
                            Privacy Policy
                        </li>
                    </ul>
                </footer>
            </div>
) }

export default Layout