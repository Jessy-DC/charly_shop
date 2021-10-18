export function Navbar() {
    return (
        <div>
            <nav className="navbar is-success" role="navigation" aria-label="main navigation">
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
                                <a className="button is-primary">
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <strong>S'inscrire</strong>
                                </a>
                                <a className="button is-light">
                                    Se connecter
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}