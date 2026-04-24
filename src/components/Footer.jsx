import "./Footer.css";

function Footer() {

    return (

        <section className="footer">
            <div className="container">
                <footer >
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Flows Garden</h3>
                            <p>
                                Cultivating resilient urban ecosystems <br />
                                through education and organic design.
                            </p>
                        </div>

                        <div className="links col-md-4">
                            <a href="#">Sustainability</a>
                            <a href="#">Contact</a>
                            <a href="#">Journal</a>
                            <a href="#">Privacy</a>
                        </div>

                        <div className="col-md-4" share>

                        </div>

                    </div>

                    <hr />

                    <p className="copyrights">© 2024 FLOWS GARDEN — CULTIVATING THE WILD</p>
                </footer>
            </div>
        </section>

    );
}

export default Footer