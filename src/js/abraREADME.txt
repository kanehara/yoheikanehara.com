abra.js is a js plugin that allows one to simply trigger animations of elements when they appear in the window.
Just style your elements as normal and customize abra.css for animations.
This plug in utilizes typed.js, jquery, and CSS3 for typing animations.

-- AbraAppear --

1) Give elements you want animated one of following class:

  i) abraAppear : used for most elements
  ii) abraAppearHr : used for Hr elements since margins behave differently

2) These elements are then applied CSS3 animation in the abra.css file.

3) Custom animations can be made.  Just create own class and adjust the applyAbraAppear function in abra.js to apply a custom CSS3 animation.

-- AbraType --

1) Give the tag surrounding your text the class "abraTyped"

2) Give your "abraTyped" elements a unique id attribute which will be used to store the string to be typed.

3) Wrap your "abraTyped" elements in a span with class "abraTypedWrap".  This is so multiple "abraTyped" elements are typed in order.  For example, the following:

<span class="abraTypedWrap">
  <h1 id='hello'>Hello</h1>
  <h2 id='world'>World</h1>
</span>

would be typed in the order:
  
  1. Hello
  2. World
  
The "abraTypedWrap" class is used to detect which abraTyped elements are on screen. So in the example above, the abraTyped animatino will not be triggered until the
entire span is in view (i.e. not just one of the headers).
    
* Adjust type speed by adjusting the "abraTypeSpeed" variable in abra.js