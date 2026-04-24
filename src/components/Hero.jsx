import "./Hero.css";


function Hero() {
  return (


    <section className="hero">

      <div className="container">
        <div className="row">

          <div className="col-md-6 heroBanner">

            <p className="smallHeader">— ESTABLISHED 2024</p>
            <p className="mainHeader">Cultivating</p>
            <p className="mainHeader">the <span className="wild">Wild</span></p>

            <div className="heroPara">
              Bridging the gap between concrete landscapes and <br />
              thriving ecosystems. We design living journals through <br />
              urban permaculture and community education.
            </div>

            <div >
              <button className="ExploreBtn">Explore the Garden</button>
              <a href="" className="ourLink">Our Process</a>
              <span className="Symbol">  →</span>
            </div>

          </div>

          <div className="col-md-6 heroImg">

            <div className="design-container">
              <img
                src="./Images/HeroMain.png"
                alt="Urban Garden"
                className="base-image"
              />
              <img
                src="./Images/HeroSub.jpg"
                alt="Seedlings"
                className="sticker-image"
              />
            </div>

          </div>

        </div>
      </div>





    </section>
  );
}

export default Hero;