# NOTES

- navbar
  - That sidecup logo was a pic so copy the address so use the img tag to import that one
  - flex box is used to make the elements line up side by side
  - align items center to make elements center from the y axis
  - We want to change the elements from the x axis and they aren't in the center, so we'll use justify-content: flex-start to make elements come to the start of the flexbox.
  - To add gap between the elements at the navbar, we'll use gap with pixel values.
  - The `*` at the very start of the css file is known as the universal selector and the properties added in that selector's block will apply to all the elements
  - and in that selector we have added the color as #fff which is hex code for white and all the text will follow that color.
  - You can also target individual tags inside of a div with id so as to give separate properties to that element.
  - Since all the time the website has the navbar going all the way to the end so we'll use the position: fixed; property
  - we'll also use z-index: 99; so that any element in the z axis stuff comes forward. So our navbar will always be on the top and above all and below(below means that the navbar will cover the vid when scrolling like layer) that is the video.
    - z-index: ; = For a positioned box, the 'z-index' property specifies the stack level of the box in the current stacking context and whether the box establishes a local stacking context.

- video part
  - To link a video just like any image, we'll use the video tag just like this `<video autoplay loop muted src="https://sidcupfamilygolf.com/wp-content/uploads/2023/08/SFG-Website-Header-Video-0823.mp4"></video>` and we'll use the autoplay attribute or what idk but it autoplays the video just as the name suggests
    - autoplay: A Boolean attribute; if specified, the video automatically begins to play back as soon as it can do so without stopping to finish loading the data.
    - loop: so that the video runs in a loop
    - muted: because modern browsers blocks or doesn't play videos with sounds, since it results in a bad experience. For example if we open a multimedia site and without playing anything if sounds starts coming than it results in a very wrong experience. So any site doesn't auto plays sound and as such the browsers also blocks those type of sites so here we have use muted so that the video plays otherwise it'll be of no use.
  - object-fit: cover; = Specifies how the contents of a replaced element should be scaled relative to the box established by its used height and width. we're using cover since we need the video to fully take our screen instead of getting cutout.
  - also position:fixed; so that the video doesn't go away on scrolling.

- main div
  - will remain blank so as to use it as a wrapper div, which will wrap all the pages
  - using position relative so as to use locomotive.js 

- page1 div
  - **percentage** means that take this much height/width/etc as that of the parent, if the parent (i.e main has no height so not shown) has height then the child will get otherwise there will be no height.
  - So we'll use the `vh` which stands for viewport height, i.e the height of the full screen.
