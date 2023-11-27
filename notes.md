# NOTES

- For the custom font part use the @import part of the font from google fonts and add that line to the top of the CSS file and call the font which you want to use in the font-family property whenever you want to use that font.

## navbar

- That sidecup logo was a pic so copy the address so use the img tag to import that one
- **display-flex**: flex box is initially taught that it is used to make the elements line up side by side.
  - But the use of display flex is a little different that is it is used to make the children elements inside a parent element convert to rows and columns i.e to the x and y axis. Now the center text is already in the form of rows and so we can now change the `flex-direction`(flex-direction is a propery of CSS and it is used to change the direction of the flex) from rows to columns and so our desired style is achieved as in the original site
  - we could have used position absolute, but we'll try to use it less and use it only when necessary
- align items center to make elements center from the y axis.
- We want to change the elements from the x axis and they aren't in the center, so we'll use justify-content: flex-start to make elements come to the start of the flexbox.
- To add gap between the elements at the navbar, we'll use gap with pixel values.
- The `*` at the very start of the css file is known as the universal selector and the properties added in that selector's block will apply to all the elements
- and in that selector we have added the color as #fff which is hex code for white and all the text will follow that color.
- You can also target individual tags inside of a div with id so as to give separate properties to that element.
- Since all the time the website has the navbar going all the way to the end so we'll use the position: fixed; property
- we'll also use z-index: 99; so that any element in the z axis stuff comes forward. So our navbar will always be on the top and above all and below(below means that the navbar will cover the vid when scrolling like layer) that is the video.
  - z-index: ; = For a positioned box, the 'z-index' property specifies the stack level of the box in the current stacking context and whether the box establishes a local stacking context.

### video part

- To link a video just like any image, we'll use the video tag just like this `<video autoplay loop muted src="https://sidcupfamilygolf.com/wp-content/uploads/2023/08/SFG-Website-Header-Video-0823.mp4"></video>` and we'll use the autoplay attribute or what idk but it autoplays the video just as the name suggests
  - autoplay: A Boolean attribute; if specified, the video automatically begins to play back as soon as it can do so without stopping to finish loading the data.
  - loop: so that the video runs in a loop
  - muted: because modern browsers blocks or doesn't play videos with sounds, since it results in a bad experience. For example if we open a multimedia site and without playing anything if sounds starts coming than it results in a very wrong experience. So any site doesn't auto plays sound and as such the browsers also blocks those type of sites so here we have use muted so that the video plays otherwise it'll be of no use.
- object-fit: cover; = Specifies how the contents of a replaced element should be scaled relative to the box established by its used height and width. we're using cover since we need the video to fully take our screen instead of getting cutout.
- also position:fixed; so that the video doesn't go away on scrolling.

## main div

- will remain blank so as to use it as a wrapper div, which will wrap all the pages
- not giving height or width to main div to use locomotive.js
- position relative and the color is given black with more transparency so as to be visible to users and it is giving a color grade effect to the video

## page1 div

- **percentage** means that take this much height/width/etc as that of the parent, if the parent (i.e main has no height so not shown) has height then the child will get otherwise there will be no height.
- So we'll use the `vh` which stands for viewport height, i.e the height of the full screen.
- The use of display flex is a little different that is it is used to make the children elements inside a parent element convert to rows and columns i.e to the x and y axis. Now the center text is already in the form of rows and so we can change the flex-direction from rows to columns and so our desired style is achieved
- here the width is applied to the whole para tag so as to make it concise as the original style and so that it doesn't go across the whole page

- h1::before part
  - The h1 header "EAT, DRINK, PLAY" is having certain style of uppercase letters with some breadth and colors on them, to apply these we are going to use pseudo-elements
    - **pseudo-elements**: are basically used to write something with the help of CSS, previously we couldn't write something in CSS, but the new feature pseudo-elements helps us to do so. It's syntax goes something like this `#id tag::element_name`.
      - content is something that we'll write and so it is like a rule to write it in the first always
      - element_name can be before or after, and the content shows up just accordingly
      - the properties go in the curly braces block
  - Now we'll use the pseudo elements to write these special letters like that of the original site and as such we write the content, position absolute so the next h1 it'll float in the air, then color black which applies on the before pseudo class as such making the whole letters black and then we'll use positioning to fix those two h1s and then we'll add position relative to the main h1 div as such the h1 will act relative to the pseudo class
  - The positioning acts opposite to what we suppose, so we give left negative values to actually go to the left or else positive values take it to the right and same goes for the other right/top/bottom.
  - Stroke- Then we'll apply stroke, which is like the borders on the h1 letters(but not as a square on the h1) and we can do that using `-webkit-text-stroke`. After using these we'll need to use 2 properties (borders has 3), width and color. Then we'll pick the color from the website and use that specific color
  - And we'll use z-index: -1 for both the video part and the h1::before so that it always remains on the bottom, top being the position relative part of the h1

## page2 div

- GSAP animation library: Now we'll use GSAP which is used add animations so we'll add the gsap src to the script tag before the body tag ending and then we'll also source the script.js file, and it has a plugin called ScrollTrigger
- the syntax goes something like this:

``` js
gsap.to("#nav", { // this is how we initiate gsap animation and the #nav is the name of the element as in CSS we'll use
    // now we can give any properties we want
    // we can also use all the CSS properties only we need to use Camel Case
    backgroundColor: "black"
})
```

- we can also use all the CSS properties only we need to use **Camel Case** i.e first word will be small and then the next word will have the first letter capital and rest all small.
- rest of the things are in the comments **TODO: add those here**

### cursor div

- Don't mess with the main div. Now we'll make the cursor div

### scroller div

- Now we'll make two divs for the two scroller that goes on flex absolute, and we'll give properties `display:inline-block` so that they come at the same line and `whitespace: nowrap;` so that the two lines with the same text comes at the same line and appears as a straight line.
- childer scroller will also have the same properties as the parent scroller
- we'll adjust the size and the weight of the font according to the original
- also give margin right to the h4 div to make space between the two divs of sentences
- now use `-webkit-text-stroke: 2px color_req;` which is used to add stroke to any text, i.e to add boundary to the top of any letter
- then add color transparent for transparency to the block that is bounded by the text stroke
- Since the page is also scroling to the left and right and the contents are a bit unusual so we'll apply `overflow-y:hidden` `overflow-x: auto` so as to not move the main page left and right and instead the scroller text goes left and right using scroll bar
- Now we'll need to add scroll animation so we declare and apply `@keyframes animation_name{}` which has translate x position from 0 to translate x position till -100% and then we'll neeed to add that animation to the div which we want to applly that and we can do that using the `animation-name: name_as_set` followed by the other settings such as duration etc
- animation duration will be needed to set as per the original, then `animation-timing-function: linear;` to show how it will proceed after one cycle and linear makes it same as the initial cycle and then the `animation-iteration-count: infinite;` to iterate it inifinitely

**TODO**: learn all about GSAP and CSS animations

### about-us div

- Now we have given some viewport height and some width to the p as well as the h3 and some flex, justify content space-around and align items center and padding to make the text better appear as the original
- Then the images to the left and right we have used height and width as per the original but the thing noteable is the `object-fit: cover;` which is used to make the image appear as a cropped instead of like a forcefully resized image.
- Also to make the h3 appear slightly above the p, we'll need to add margin-bottom with some pixels.

### cards div

- If the video appears playing in the background after then use the min-height property of CSS, more on that in the responsive stuff 
- When hovered on the card then change the opacity of the overlay to 1
- Also for the tilt effect, use the transform property with `rotate3d()` value on the card on hover and its value will be in the format `transform: rotate3d(x,y,z,degrees)`, here x/y/z axis gets the values a 0 or 1 to show if it'll rotate in those axis or not and at last the degree with which it'll rotate. If you give -1 it will rotate from the other side respectively for all the other axes.
- Also give the perspective property to the html, body part so that the 3d effect look better
- Also rotate the dot image using transform property
- use linear gradient for two colors to blend and use the value as "to left bottom" so as to make the color blend in a more diagonal way( to left makes the two colors blend in the left manner)


### page3 div

- Always add vh to get a new page with scroll like the original website, then display flex, text align, align items and justify contents to center to make everything in the p tag centered
- Then use `#page3>p` to add the properties to the p tag to overrride all the previous styling by page3 for that specific p tag.
- Then use the position absolute to keep the images above all and as such remember to add the position relative to the parent tag whenever applying position relative to any children
- Then take the page id and the separate image id's and apply the left, right, top, bottom as per the original structure.

#### Adding the forgotten ScrollTrigger
 
- What to use when you need to select an element multiple times then you need to use `document.querySelectorAll("#id_name tag_name")`. Why we need to use this and not `document.querySelector()` because the 'all' version takes all the h4 in the form of NodeLists (which is a kind of an array but not really an array, more on that on DOM manipulation) and as such it takes all of the h4s and if we don't use the all then it'll only take the first h4 which we totally won't do here.
- Then we'll use the forEach loop which is used for an array, for now you can treat it like an array and in the function value we have used elem which means that use the h4 that comes from the querySelectorAll everytime and as such all the h4s will get selected
- Then `elem.addEventListener("mouseenter", function () { crsr.style.scale = 2; })` to add event listener so that when mouse enters then cursor style scales i.e increases and also added a cursor style wherein on hover it increases the green circle part to a very big circle of that same teal green color on mouseenter and on mouseleave it resets the cursor style to the original one. We can just copy and change the properties in the foreach loop in order to do that.
- Now we'll apply gsap using gsap.from and then the elements in double quotes and then in {} add all the things you want
