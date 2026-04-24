import "./Flora.css";

function Flora() {
  return (
    <section className="flora">

      <div className="container">
        <div className="row">

          <div className="col-md-6 ">

            <h2 className="floraHeader">Featured Flora</h2>
            <p className="floraPara">A curated selection of the resilient species currently thriving in our <br />
              community sanctuaries.</p>

          </div>

          <div className="col-md-6 floraBtn">

          </div>



          <div className="col-md-12 heroBanner">

            <div className="cards" >
              <div className="card" col-md-4>
                <img src="./Images/FloraCard1.png" />
                <h3 className="cardHeader">Crimson Bottlebrush</h3>
                <h5 className="subHeader">CALLISTEMON CITRINUS</h5>
                <p className="cardPara">A resilient shrub known for its architectural blooms that <br />
                  provide essential nectar for native honeyeaters.</p>
              </div>

              <div className="card" col-md-4>
                <img src="./Images/FloraCard2.png" />
                <h3 className="cardHeader">Blue Glow Agave</h3>
                <h5 className="subHeader"> AGAVE 'BLUE GLOW'</h5>
                <p className="cardPara">Perfect for urban heat islands, this succulent offers a <br />
                  striking silhouette with minimal water requirements.</p>
              </div>

              <div className="card" col-md-4>
                <img src="./Images/FloraCard3.png" />
                <h3 className="cardHeader">Silver Lady Fern</h3>
                <h5 className="subHeader">BLECHNUM GIBBUM</h5>
                <p className="cardPara">Bringing a lush, prehistoric feel to shaded balconies <br />
                  and indoor-outdoor transition spaces.</p>
              </div>
            </div>

          </div>

        </div>
      </div>



    </section >



  );
}

export default Flora;