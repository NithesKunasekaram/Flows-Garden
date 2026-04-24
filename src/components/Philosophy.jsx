import "./Philosophy.css";



function Philosophy() {
  return (
    <section className="philosophy">
      <div className="container">
        <div className="row">

          <div className="col-md-6">

            <h2 className="PhiloHeader">Urban biodiversity is<br></br>
              not a luxury, but a <br />
              necessity for the soul.</h2>

            <div className="row">
              <div className="Logo1 col-md-1">❤️</div>
              <div className="col-md-7">
                <p className="PhiloSubHeader">RESTORATIVE DESIGN</p>
                <p className="subPara">We transform forgotten urban corners into resilient
                  micro-habitats that support local pollinators and native
                  flora.</p>
              </div>

            </div>

            <div className="row">
              <div className="Logo1 col-md-1">🎓</div>
              <div className="col-md-7">
                <p className="PhiloSubHeader">SHARED KNOWLEDGE</p>
                <p className="subPara">Education is the root of our garden. We host weekly
                  workshops to demystify permaculture for city dwellers.
                </p>
              </div>

            </div>


          </div>

          <div className="col-md-6">

            <div className="gallery-container">
              <div className="gallery-item">
                <img src="./Images/PhiloX-top.png" alt="Garden Path" />
              </div>
              <div className="gallery-item">
                <img src="./Images/PhiloX-Bottom.jpg" alt="Gardening Tools" />
              </div>
              <div className="gallery-item">
                <img src="./Images/PhiloY-top.jpg" alt="Bee on Flower" />
              </div>
              <div className="gallery-item">
                <img src="./Images/PhiloY-Bottom.png" alt="Teamwork in Garden" />
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  );
}

export default Philosophy;