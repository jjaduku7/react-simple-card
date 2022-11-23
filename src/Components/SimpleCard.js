import React, { Component } from "react"
import Description from "./Description"
import Image from "./Image"
import Title from "./Title"

class SimpleCard extends Component {
  render() {
    return (
      <>
        <div className="container wholeCard">
          <div className="row" >
            <div className="col-md-4">
              <Image profile='JJA' />
            </div>
            <div className="col-md-8">
              <Title portfolio='Fearless W. K!' />
              <Description overview='Visionary & Selfless Leader, Excellent Husband & Father, Good Friend & Person and True National Hero.' />
            </div>
          </div>

        </div>

      </>
    )
  }
}

export default SimpleCard
