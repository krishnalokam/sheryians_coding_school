HTML - For content
CSS - Styling

CSS - Cascading Style Sheet

inline css
internal css
external css

- more types later ( SASS)
  CSS - Cascading Style Sheet

<!-- Text specific properties -->

color:
background-color:
font-size
font-style: italic / normal / oblique
font-family:
text-align
text-transform

common useful fonts:
montesarrat
poppins
nato
gogole sans

# Div

-- as a container
-- to make rectangual shapes

linear-gradient:
background: linear-gradient(to right top, red, white, green);
radial-gradient:
conic-gradient;

background-size:cover
background-size:contain

HTML is not what you think -- documentation to be prepared

margin: Imaginary space

padding:
border:
border-radius

pseudo classes:
:hover {

}
:active {

}
:checked {

}

transition - a change of state
transition: all ease 2s;
cubic-bezier
;

css boiler plate code:

- \* {
  margin : 0;
  padding :0;
  box-sizing: border-box;
  }

  html, body {
  height: 100%;
  width: 100%;
  }

### position absolute

position: absolute
z-index

transform: translate(-50%,-50%);
transform: translateX(10%);
transform:translateY(10%);
transform: translate(-50%, -50%) rotate(45deg);
transform:rotateX(90deg)

body {
perspective: 1000px
}

#box1 {
transform: scale(1.5); // scales 1.5 times its original size
}

.box:nth-child(3){
background-color: crimson;
}

.box:nth-last-child(1){
background-color: crimson;

}

.box:nth-last-child(2n){
background-color: crimson;

}

{
position:fixed;
position:sticky
}

# Grid

Flex - 1D
Grid - 2D

grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

width: fit-content;
object-fit:

# Responsiveness

Units

# Responsiveness

- px
- %
- vw
- vh
- vmax - viewport maximum
- vmin - viewport minimum
- em - depends on parent font-size
- rem - 1rem = 16px

min
max

# Animations

animations ko banana
animations ko apply karna

#

after before

Tailwind is a utility frameworkJ
