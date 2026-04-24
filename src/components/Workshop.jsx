import './Workshop.css'


function WorkshopTeaser() {

  return (

    <section className="WorkShop">

      <div className="container">
        <div className="card1">
          <p className="subtitle">HANDS-ON LEARNING</p>
          <h1 className="workshopHeader">
            Grow your own <br /> sanctuary with our <br /> masterclass workshops.
          </h1>

          <div className="buttons">
            <button className="primary">View Summer Schedule</button>
            <button className="secondary">Gift a Workshop</button>
          </div>

          <div className="stats">
            <div>
              <h3>12+</h3>
              <p>Monthly Events</p>
            </div>
            <div>
              <h3>2.4k</h3>
              <p>Students Taught</p>
            </div>
            <div>
              <h3>15</h3>
              <p>Urban Sites</p>
            </div>
          </div>
        </div>
      </div>

    </section>

  )

}

export default WorkshopTeaser