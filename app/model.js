'use strict';

// Subrutina para generar los colores CSS
const generatorColors = () =>{
    const digitColors = "01234565789ABCDEF";
    let color = "#";
    for (let index = 0; index < 6; index++) {
        color += digitColors.charAt(Math.floor(Math.random() * (15-0)+0));
    }
    return color
}

// ${generatorColors()}

let image_mosaic = `
.image-mosaic {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-auto-rows: 240px;
}
.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${generatorColors()};
    font-size: 3rem;
    color: ${generatorColors()};
    box-shadow: rgba(3, 8, 20, .1) 0 .15rem .5rem, rgba(2, 8, 20, .1) 0 .075rem .175rem;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    transition: all 500ms;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 0;
    margin: 0
}
@media screen and (min-width: 600px) {
    .card-tall {
        grid-row: span 2/auto;
    }
    .card-wide {
        grid-column: span 2/auto;
    }
}
`;

let promos = `.promos {
    width: 800px;
    margin: 0 auto;
    margin-top: 50px;
}
.promo {
    width: 250px;
    background: ${generatorColors()};
    color: #f9f9f9;
    float: left;
}
.deal {
    padding: 10px 0 0 0;
}
.deal span {
    display: block;
    text-align: center;
}
.deal span:first-of-type {
    font-size: 23px;
}
.deal span:last-of-type {
    font-size: 13px;
}
.promo .price {
    display: block;
    width: 250px;
    background: #292b2e;
    margin: 15px 0 10px 0;
    text-align: center;
    font-size: 23px;
    padding: 17px 0 17px 0;
}
ul {
    display: block;
    margin: 20px 0 10px 0;
    padding: 0;
    list-style-type: none;
    text-align: center;
    color: #999;
}
li {
    display: block;
    margin: 10px 0 0 0;
}
button {
    border: none;
    border-radius: 40px;
    background: #292b2e;
    color: #f9f9f9;
    padding: 10px 37px;
    margin: 10px 0 20px 70px;
}
.scale {
    transform: scale(1.2);
    box-shadow: 0 0 4px 1px rgba(20, 20, 20, .8);
}
.scale button {
    background: ${generatorColors()};
}
.scale .price {
    color: ${generatorColors()};
}
`;

let card_content = `.cards{
  align-items: center;
  margin-top: 400px;
  display: flex;
}

.card-content {
    width: 300px;
    height: 280px;
    padding: 0;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
    border-radius: 8px;
    box-sizing: border-box;
    overflow: hidden;
    margin-left: 110px;
}
.card-content * {
    transition: 0.3s ease all;
}
.card-content img {
    margin: 0;
    width: 300px;
    height: 224px;
    object-fit: cover;
    display: block;
}
.card-content h3 {
    margin: 0;
    padding: 12px 12px 48px;
    line-height: 32px;
    font-weight: 500;
    font-size: 20px;
}
.card-content .focus-content {
    display: block;
    padding: 8px 12px;
}
.card-content p {
    margin: 0;
    line-height: 1.5;
}
.card-content:hover img,
.card-content:focus-within img {
    margin-top: -80px;
}
.card-content:hover h3,
.card-content:focus-within h3 {
    padding: 8px 12px 0;
}

`;

let form = `form {
  border: 2px solid ${generatorColors()};
  border-radius: 10px;
  padding: 8px;
  border-radius: 2px;
}
form:focus-within {
  background: ${generatorColors()};
}
label {
  display: inline-block;
  width: 72px;
}
input {
  margin: 4px 12px;
}
`;

let navbar_ul = `.navbar ul {
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.navbar li {
  float: left;
}
.navbar li a {
  position: relative;
  display: block;
  color: ${generatorColors()};
  text-align: center;
  padding: 8px 12px;
  text-decoration: none;
  z-index: 0;
}
li a:before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  background-color: ${generatorColors()};
  border-radius: 10px;
  z-index: -1;
  transform: scale(0);
  transition: transform 0.5s ease-in-out;
}
li a:hover:before,
li a:focus:before {
  transform: scale(1);
}

`;

let hover_nav = `.hover-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.hover-nav li {
  float: left;
}
.hover-nav li a {
  position: relative;
  display: block;
  color: ${generatorColors()};
  text-align: center;
  padding: 8px 12px;
  text-decoration: none;
  z-index: 0;
}
li a:before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  background-color: ${generatorColors()};
  z-index: -1;
  transform: scale(0);
  transition: transform 0.5s ease-in-out;
}
li a:hover:before,
li a:focus:before {
  transform: scale(1);
}
`;

let hover_img = `.hover-img {
  background-color: ${generatorColors()};
  color: ${generatorColors()};
  display: inline-block;
  margin: 8px;
  max-width: 320px;
  min-width: 240px;
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 100%;
}
.hover-img * {
  box-sizing: border-box;
  transition: all 0.45s ease;
}
.hover-img:before,
.hover-img:after {
  background-color: rgba(0, 0, 0, .5);
  border-top: 32px solid rgba(0, 0, 0, .5);
  border-bottom: 32px solid rgba(0, 0, 0, .5);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: '';
  transition: all 0.3s ease;
  z-index: 1;
  opacity: 0;
  transform: scaleY(2);
}
.hover-img img {
  vertical-align: top;
  max-width: 100%;
  backface-visibility: hidden;
}
.hover-img figcaption {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.1em;
  opacity: 0;
  z-index: 2;
  transition-delay: 0.1s;
  font-size: 24px;
  font-family: sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.hover-img:hover:before,
.hover-img:hover:after {
  transform: scale(1);
  opacity: 1;
}
.hover-img:hover>img {
  opacity: .7;
}
.hover-img:hover figcaption {
  opacity: 1;
}
`;

let image_rotate = `.image-rotate {
  overflow: hidden;
  margin: 8px;
  min-width: 240px;
  max-width: 320px;
  width: 100%;
}
.image-rotate img {
  transition: all 0.3s;
  box-sizing: border-box;
  max-width: 100%;
}
.image-rotate:hover img {
  transform: scale(1.3) rotate(5deg);
}
`;

let parent = `.parent {
  border: 1px solid ${generatorColors()};
  height: 250px;
  position: relative;
  width: 250px;
}
.child {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
`;

let button_tranparent = `.button-transparent {
  color: ${generatorColors()};
  border: 1px solid ${generatorColors()};
  background-color: transparent;
  border-radius: 5px;
  padding: 0 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.button-transparent:hover {
  transform: scale(.8)
}
`;

let grid_aside = `.grid-aside {
  display: grid;
  grid-template-columns: 1fr minmax(343px, 67%);
  height: 350px;
}
main,
aside {
  padding: 12px;
  text-align: center
}
main {
  background: ${generatorColors()};
}
aside {
  background: ${generatorColors()};
}
`;

let rotating_card = `.rotating-card {
  perspective: 150rem;
  position: relative;
  height: 31rem;
  max-width: 459px;
  margin: 2rem;
  box-shadow: none;
  background: none
}
.rotating-card-side {
  height: 35rem;
  border-radius: 15px;
  transition: all 0.8s ease;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  padding: 2rem;
  color: #fff
}
.rotating-card-side.back {
  transform: rotateY(-180deg);
  background-color: ${generatorColors()};
  background-image: linear-gradient(43deg, ${generatorColors()} 0%, ${generatorColors()} 46%, ${generatorColors()} 100%)
}
.rotating-card-side.front {
  background-color: ${generatorColors()};
  background-image: linear-gradient(160deg, ${generatorColors()} 0%, ${generatorColors()} 100%)
}
.rotating-card:hover .rotating-card-side.front {
  transform: rotateY(180deg)
}
.rotating-card:hover .rotating-card-side.back {
  transform: rotateY(0deg)
}
`;

let isometric_card = `.isometric-card {
  margin: auto;
  transform: rotateX(51deg) rotateZ(43deg);
  transform-style: preserve-3d;
  background-color: ${generatorColors()};
  will-change: transform;
  width: 296px;
  height: 338px;
  border-radius: 2rem;
  box-shadow: 1px 1px 0 1px ${generatorColors()}, -1px 0 28px 0 ${generatorColors()}, 28px 28px 28px 0 rgba(34, 33, 81, .25);
  transition: 0.4s ease-in-out transform, 0.3s ease-in-out box-shadow
}
.isometric-card:hover {
  transform: translate3d(0, -16px, 0) rotateX(51deg) rotateZ(43deg);
  box-shadow: 1px 1px 0 1px ${generatorColors()}, -1px 0 28px 0 ${generatorColors()}, 54px 54px 28px -10px rgba(34, 33, 81, .15)
}
`;

let header = `header {
  background-color: ${generatorColors()};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 92px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 25px 0 black;
  z-index: 10;
}
header * {
  display: inline;
}
header li {
  margin: 92px;
}
header li a {
  color: ${generatorColors()};
  text-decoration: none;
}
`;

let switch1 = `.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 23px;
  background-color: ${generatorColors()};
  border-radius: 20px;
  transition: all 0.3s
}
.switch:after {
  content: '';
  position: absolute;
  width: 21px;
  height: 21px;
  border-radius: 20px;
  background-color: ${generatorColors()};
  top: 1px;
  left: 1px;
  transition: all 0.3s
}
input[type='checkbox']:checked+.switch:after {
  transform: translateX(20px)
}
input[type='checkbox']:checked+.switch {
  background-color: ${generatorColors()};
}
.offscreen {
  position: absolute;
  left: -9999px;
}
`;

let btn_hamburger = `.btn-hamburger {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer
}
.btn-hamburger .bar {
  height: 5px;
  background: ${generatorColors()};
  border-radius: 5px;
  margin: 3px 0;
  transform-origin: left;
  transition: all 0.5s
}
.btn-hamburger:hover .top {
  transform: rotate(45deg)
}
.btn-hamburger:hover .middle {
  opacity: 0
}
.btn-hamburger:hover .bottom {
  transform: rotate(-45deg)
}
`;

let body = `body {
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 256;
  background-color: ${generatorColors()};
  font-size: 15px;
}
`;

let box = `.box {
  display: inline-block;
  width: 120px;
  height: 120px;
  padding: 8px;
  margin: 8px;
  background: ${generatorColors()};
  color: ${generatorColors()};
  border: 1px solid ${generatorColors()};
  border-radius: 4px
}
`;

let btn = `.btn {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  padding: 16px 24px;
  border: 1px solid ${generatorColors()};
  border-radius: 8px;
  background: ${generatorColors()};
  background: -webkit-gradient(linear, left top, left bottom, from(${generatorColors()}), to(${generatorColors()}));
  background: -moz-linear-gradient(top, ${generatorColors()}, ${generatorColors()});
  background: linear-gradient(to bottom, ${generatorColors()}, ${generatorColors()});
  -webkit-box-shadow: ${generatorColors()} 0 0 0 0;
  -moz-box-shadow: ${generatorColors()} 0 0 0 0;
  box-shadow: ${generatorColors()} 0 0 0 0;
  text-shadow: ${generatorColors()} 1px 1px 1px;
  font: normal normal bold 22px verdana;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
`;

let h = `h1, h2, h3, h4, h5, h6 {
  letter-spacing: 0;
  font-weight: normal;
  position: relative;
  padding: 0 0 10px 0;
  font-weight: normal;
  line-height: normal;
  color: ${generatorColors()};
  margin: 0;
}
`;

let hero = `.hero {
  position: relative;
  width: 100%;
  height: 70vh;
  margin-bottom: 45px;
  padding: 50px 0 0 0;
  overflow: hidden;
  background: ${generatorColors()};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.hero .container-fluid {
  padding: 0;
}

.hero .hero-image {
  position: relative;
  width: 40%;
  text-align: right;
  padding-left: 53%;
  bottom: 250px;
}

.hero .hero-image img {
  max-width: 80%;
  max-height: 80%;
  border-radius: 10px;
}

.hero .hero-content {
  width: 40%;
  position: relative;
  padding-left: 75px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
}

.hero .hero-text p {
  color: #ffffff;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 15px;
}

.hero .hero-text h1 {
  color: #ffffff;
  font-size: 70px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 40px;
}

.hero .hero-text h2 {
  display: inline-block;
  margin: 0;
  height: 35px;
  color: #ffffff;
  font-size: 35px;
  font-weight: 600;
}

.hero .hero-links .link {
  margin-top: 35px;
  color: ${generatorColors()};
  box-shadow: inset 0 0 0 50px #ffffff;
  text-decoration: none;
  border: 3px solid #ffffff;
  border-radius: 10px;
  padding: 10px;
}

.hero .hero-links .link:hover {
  color: #ffffff;
  background: transparent;
  box-shadow: inset 0 0 0 0 #ffffff;
  border-color: #ffffff;
}

.hero .hero-links .link:first-child {
  margin-right: 10px;
}
`;

const stylesData = {

    styles:{

        image_mosaic : {
            selector : "image-mosaic",
            style : image_mosaic
        },

        promos : {
            selector : "promos",
            style : promos
        },

        card_content : {
            selector : "card-content",
            style : card_content
        },

        form : {
          selector : "form",
          style : form
        },

        navbar_ul : {
          selector : "navbar",
          style : navbar_ul
        },

        hover_nav : {
          selector : "hover-nav",
          style : hover_nav
        },

        hover_img : {
          selector : "hover-img",
          style : hover_img
        },

        image_rotate : {
          selector : "image-rotate",
          style : image_rotate
        },

        
        button_tranparent : {
          selector : "button-transparent",
          style : button_tranparent
        },
        
        parent : {
          selector : "parent",
          style : parent
        },

        grid_aside : {
          selector : "grid-aside",
          style : grid_aside
        },

        rotating_card : {
          selector : "rotating-card",
          style : rotating_card
        },

        isometric_card : {
          selector : "isometric-card",
          style : isometric_card
        },

        header : {
          selector : "header",
          style : header
        },

        switch1 : {
          selector : "switch",
          style : switch1
        },

        btn_hamburger : {
          selector : "btn-hamburger",
          style : btn_hamburger
        },

        body : {
          selector : "body",
          style : body
        },

        box : {
          selector : "box",
          style : box
        },

        btn : {
          selector : "btn",
          style : btn
        },

        hero : {
          selector : "hero",
          style : hero
        },

        h : {
          selector : "h",
          style : h
        },


    }
}

export default stylesData;
