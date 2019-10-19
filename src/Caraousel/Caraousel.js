import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Caraousel.css';

export default class Caraousel extends Component {

  componentDidMount() {
    window.addEventListener('DOMContentLoaded', () => { setTimeout(init, 1) }, true);
    function init(e) {
      if (document.querySelector(".slides")) {
        let slides = document.querySelector(".slides");
        slides.addEventListener('click', clicked, false);
        document.querySelectorAll(".slides .slide")[0].click();
      }
    }

    function clicked(e) {
      let slide = e.target;
      if (slide.getAttribute("data-slide")) { rearrange(slide.getAttribute("data-slide")); }
    }

    function rearrange(slide) {
      let slides = document.querySelectorAll(".slides .slide");
      for (let n = 0; n < slides.length; n++) {
        slides[n].classList.remove("slide--left");
        slides[n].classList.remove("slide--left-left");
        slides[n].classList.remove("slide--center");
        slides[n].classList.remove("slide--right");
        slides[n].classList.remove("slide--right-right");
      }
      slides[slide].classList.add("slide--center");
      if (slide == 0) {
        slides[4].classList.add("slide--left");
        slides[3].classList.add("slide--left-left");
        slides[1].classList.add("slide--right");
        slides[2].classList.add("slide--right-right");
      }
      if (slide == 1) {
        slides[0].classList.add("slide--left");
        slides[4].classList.add("slide--left-left");
        slides[2].classList.add("slide--right");
        slides[3].classList.add("slide--right-right");
      }
      if (slide == 2) {
        slides[1].classList.add("slide--left");
        slides[0].classList.add("slide--left-left");
        slides[3].classList.add("slide--right");
        slides[4].classList.add("slide--right-right");
      }
      if (slide == 3) {
        slides[2].classList.add("slide--left");
        slides[1].classList.add("slide--left-left");
        slides[4].classList.add("slide--right");
        slides[0].classList.add("slide--right-right");
      }
      if (slide == 4) {
        slides[3].classList.add("slide--left");
        slides[2].classList.add("slide--left-left");
        slides[0].classList.add("slide--right");
        slides[1].classList.add("slide--right-right");
      }
    }
    return {
      init
    }
  }

  caraouselData() {
    return [
      {
        caraouselTitle: "Geology & Geophysics",
        hryperlink: "geoligy",
        caraouselimg: "/images/pic10.jpg",
        caraouseltext: "iOG understands the various paradigms of the sub-surface ecosystem and its complexity. The domain knowledge and expertise in multiple discipline enables it to understand, interpreted and model the subsurface."
      },
      {
        caraouselTitle: "Production Management",
        hryperlink: "productionmanagement",
        caraouselimg: "/images/pic3.jpg",
        caraouseltext: "iOG solutions provide the complete range of Production Management services."
      },
      {
        caraouselTitle: "Reservoir Management",
        hryperlink: "reserviormanagement",
        caraouselimg: "/images/pic4.jpg",
        caraouseltext: "iOG solutions provide end-to-end consulting services for management of reservoirs, utilizing state of the art geo-science and engineering technologies."
      },
      {
        caraouselTitle: "Data Management Services",
        hryperlink: "datamanagement",
        caraouselimg: "/images/pic2.jpg",
        caraouseltext: "iOG solutions provide the complete range of Production Management services."
      },
      {
        caraouselTitle: "Well & Drilling Services",
        hryperlink: "welldrilling",
        caraouselimg: "/images/pic5.jpg",
        caraouseltext: "iOG solutions provide Management Services for Well Planning, Drilling, Test & Log Interpretation, Performance Monitoring to abandonment."
      }

    ]

  }

  render() {
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 caraouselblock">
            <div className="slides col-lg-12 col-md-12 col-sm-12 col-xs-12">
              {
                this.caraouselData().map((data, index) => {
                  return (
                    <div key={index} className="slide col-lg-3 col-md-3 col-sm-3 col-xs-3" data-slide={index}>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
                          <img src={data.caraouselimg} className="img-responsive" />
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}