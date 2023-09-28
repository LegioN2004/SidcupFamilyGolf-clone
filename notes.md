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
