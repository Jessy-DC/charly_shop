import {useAuth0} from "@auth0/auth0-react";

export function Navbar() {

    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

    if (isAuthenticated) {
        console.log(user)
    }

    return (
        <div>
            <nav className="navbar is-success is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        Charly Shop
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                       data-target="navbarBasicExample">
                        <span aria-hidden="true"/>
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Accueil
                        </a>

                        <a className="navbar-item">
                            Commander
                        </a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                Dessins
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    Tous
                                </a>
                                <a className="navbar-item">
                                    Nouveautés
                                </a>
                                <a className="navbar-item">
                                    Meilleures ventes
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                {!isAuthenticated && <div>
                                    <a className="button is-primary">
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        <strong>S'inscrire</strong>
                                    </a>
                                    <a onClick={() => loginWithRedirect()} className="button is-light">
                                        Connexion
                                    </a>
                                </div> }
                                {isAuthenticated && <a onClick={() => logout({
                                    returnTo: window.location.origin,
                                })} className="button is-light">Se déconnecter</a>}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}