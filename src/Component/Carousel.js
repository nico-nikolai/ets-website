import React, { Component } from "react";
import { UncontrolledCarousel } from "reactstrap";

import Slide_1 from "../Assets/Images/header-slides/A 1 IMG_2871.jpg";
import Slide_2 from "../Assets/Images/header-slides/A 2 IMG_4443.jpg";
import Slide_3 from "../Assets/Images/header-slides/A 3IMG_4132.jpg";
import Slide_4 from "../Assets/Images/header-slides/A 4 IMG_1353.jpg";
import Slide_5 from "../Assets/Images/header-slides/A 5 Zozo.jpg";
import Slide_6 from "../Assets/Images/header-slides/A 6 IMG_1755.jpg";
import Slide_7 from "../Assets/Images/header-slides/A 7 IMG_1963.jpg";
import Slide_8 from "../Assets/Images/header-slides/A 8 IMG_3799.jpg";
import Slide_9 from "../Assets/Images/header-slides/A 9 EDM AAB 1.jpg";
import Slide_10 from "../Assets/Images/header-slides/a 10 IMG_1933.jpg";
import Slide_11 from "../Assets/Images/header-slides/B LDR IMG_2335.jpg";
import Slide_12 from "../Assets/Images/header-slides/B RTD IMG_0858.jpg";
import Slide_13 from "../Assets/Images/header-slides/Benny Banassi.jpg";
import Slide_14 from "../Assets/Images/header-slides/Blink 182.jpg";
import Slide_15 from "../Assets/Images/header-slides/BOXING TV 1.JPG";

import Slide_17 from "../Assets/Images/header-slides/CHRIS STAPLEON.jpg";
import Slide_18 from "../Assets/Images/header-slides/CONCERT KENDRICK.jpg";
import Slide_19 from "../Assets/Images/header-slides/Corp Boyd .jpg";
import Slide_20 from "../Assets/Images/header-slides/CPC WYG.png";
import Slide_21 from "../Assets/Images/header-slides/CPC.jpeg";
import Slide_22 from "../Assets/Images/header-slides/Dionne Warwick.JPG";
import Slide_23 from "../Assets/Images/header-slides/Dracula 1.jpg";
import Slide_24 from "../Assets/Images/header-slides/Dracula 3.jpg";
import Slide_25 from "../Assets/Images/header-slides/Dracula 4.jpg";
import Slide_26 from "../Assets/Images/header-slides/EDM AAB 3.jpg";
import Slide_27 from "../Assets/Images/header-slides/Fit 15.jpg";
import Slide_28 from "../Assets/Images/header-slides/fit 16.jpg";
import Slide_29 from "../Assets/Images/header-slides/Graves.jpg";
import Slide_30 from "../Assets/Images/header-slides/HOUSE OF WORSHIP 1.jpg";
import Slide_31 from "../Assets/Images/header-slides/IMG_0413.jpg";
import Slide_32 from "../Assets/Images/header-slides/IMG_1068.jpg";
import Slide_33 from "../Assets/Images/header-slides/IMG_1710.jpg";
import Slide_34 from "../Assets/Images/header-slides/IMG_1859.jpg";
import Slide_35 from "../Assets/Images/header-slides/IMG_1984.jpg";
import Slide_36 from "../Assets/Images/header-slides/IMG_3225.jpg";
import Slide_37 from "../Assets/Images/header-slides/IMG_3642.jpg";
import Slide_38 from "../Assets/Images/header-slides/IMG_3901.jpg";
import Slide_39 from "../Assets/Images/header-slides/IMG_4027.jpg";
import Slide_40 from "../Assets/Images/header-slides/IMG_4209.jpg";
import Slide_41 from "../Assets/Images/header-slides/IMG_4387.jpg";
import Slide_42 from "../Assets/Images/header-slides/IMG_4736.jpg";
import Slide_43 from "../Assets/Images/header-slides/IMG_4747.jpg";
import Slide_44 from "../Assets/Images/header-slides/IMG_5218.jpg";
import Slide_45 from "../Assets/Images/header-slides/isotopes stadium calvary 2.jpg";
import Slide_46 from "../Assets/Images/header-slides/Isuzu (1 of 1)-2.jpg";
import Slide_47 from "../Assets/Images/header-slides/Isuzu.jpg";
import Slide_48 from "../Assets/Images/header-slides/jacksons lighting.jpg";

import Slide_50 from "../Assets/Images/header-slides/LEGACY XMAS2.jpg";
import Slide_51 from "../Assets/Images/header-slides/Mayors Ball.jpg";
import Slide_52 from "../Assets/Images/header-slides/PARTY.JPG";
import Slide_53 from "../Assets/Images/header-slides/Pat holmes boxing.jpg";
import Slide_54 from "../Assets/Images/header-slides/Reba.JPG";
import Slide_55 from "../Assets/Images/header-slides/RTD.png";
import Slide_56 from "../Assets/Images/header-slides/Salt Lake SMD 1024.jpg";
import Slide_57 from "../Assets/Images/header-slides/Taos Mountain Music Matisyahu 2.JPG";
import Slide_58 from "../Assets/Images/header-slides/Trump.jpg";
import Slide_59 from "../Assets/Images/header-slides/TV SHOOT.jpg";
import Slide_60 from "../Assets/Images/header-slides/UNM Fiestas 17.jpg";
import Slide_61 from "../Assets/Images/header-slides/WAKE U 2.jpg";

export default class Carousel extends Component {
  render() {
    const slides = [
      {
        src: Slide_1,
      },
      {
        src: Slide_2,
      },
      {
        src: Slide_3,
      },
      {
        src: Slide_4,
      },
      {
        src: Slide_5,
      },
      {
        src: Slide_6,
      },
      {
        src: Slide_7,
      },
      {
        src: Slide_8,
      },
      {
        src: Slide_9,
      },
      {
        src: Slide_10,
      },
      {
        src: Slide_11,
      },
      {
        src: Slide_12,
      },
      {
        src: Slide_13,
      },
      {
        src: Slide_14,
      },
      {
        src: Slide_15,
      },
      {
        src: Slide_17,
      },
      {
        src: Slide_18,
      },
      {
        src: Slide_19,
      },
      {
        src: Slide_20,
      },
      {
        src: Slide_21,
      },
      {
        src: Slide_22,
      },
      {
        src: Slide_23,
      },
      {
        src: Slide_24,
      },
      {
        src: Slide_25,
      },
      {
        src: Slide_26,
      },
      {
        src: Slide_27,
      },
      {
        src: Slide_28,
      },
      {
        src: Slide_29,
      },
      {
        src: Slide_30,
      },
      {
        src: Slide_31,
      },
      {
        src: Slide_32,
      },
      {
        src: Slide_33,
      },
      {
        src: Slide_34,
      },
      {
        src: Slide_35,
      },
      {
        src: Slide_36,
      },
      {
        src: Slide_37,
      },
      {
        src: Slide_38,
      },
      {
        src: Slide_39,
      },
      {
        src: Slide_40,
      },
      {
        src: Slide_41,
      },
      {
        src: Slide_42,
      },
      {
        src: Slide_43,
      },
      {
        src: Slide_44,
      },
      {
        src: Slide_45,
      },
      {
        src: Slide_46,
      },
      {
        src: Slide_47,
      },
      {
        src: Slide_48,
      },

      {
        src: Slide_50,
      },
      {
        src: Slide_51,
      },
      {
        src: Slide_52,
      },
      {
        src: Slide_53,
      },
      {
        src: Slide_54,
      },
      {
        src: Slide_55,
      },
      {
        src: Slide_56,
      },
      {
        src: Slide_57,
      },
      {
        src: Slide_58,
      },
      {
        src: Slide_59,
      },
      {
        src: Slide_60,
      },
      {
        src: Slide_61,
      },
    ];
    return (
      <div className="">
        <div className="">
        <div className="">
        <h2 className="gallery-title">Gallery</h2>
        </div>
        </div>
        <div className="carousel-box">
          <div className="">
          <div className="carousel-images">
            <UncontrolledCarousel items={slides} />
          </div>
          </div>
        </div>
      </div>
    );
  }
}
