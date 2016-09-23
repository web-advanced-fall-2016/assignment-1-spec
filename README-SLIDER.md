# Slider/Carousel Element

#### What is a Carousel?

- [Simple Carousel](https://github.com/samantehrani/simple-carousel)
- [Reason we are doing this!](http://shouldiuseacarousel.com/)
- [Foundation's Carousel](http://foundation.zurb.com/sites/docs/v/5.5.3/components/orbit.html)
- [Cool Carousel on GitHub](http://sachinchoolur.github.io/lightslider/)

#### Requirements:

- Make a carousel that fills the full window size on all window/screen sizes. 
- Your carousel has to handle images.
- You page doesn't need to have any other elements in it.
- Carousel should work Horizontally.
- All in plain JavaScript, no JS libraries ( jQuery, ... )


- Structure your carousel elements like below in your HTML file.

  ```HTML
  <div class="carousel">
  	<img class="slide" src="img/a.jpeg">
  	<img class="slide" src="img/c.jpeg">
  	<img class="slide" src="img/d.jpeg">
  	<img class="slide" src="img/b.jpeg">
    	<p class="slide"> I am optional!</p>
  </div>
  ```

- Then, make a function that receives carousels root selector and constructs the carousel's functionality:

  ```
  let myCarousels = function(rootSelector, controlsSelector, slideSelector) {
    /* Code goes here */
  }
  ```

- Carousel size can be fixed and set with inline css or you can insert css rules in your stylesheet.

- Your carousel must have controls for moving forward an backward.

- Styling is important, we are designers and what makes us different (in a good way) from developers is our choice of design and aesthetics. So make it stand out and be proud of your submission. That said, it doesn't have to be looking like crazy amazing (not ugly is good enough).



#### Bonus Requirements

* Make it Object Oriented
* Use ES2015
* Carousel can handle any element as it's slides with any content like text(`<p>,<video>, <audio>,<div>`).
* Auto transition option, duration of the time on each slide.
* Make option to choose from Horizontal or Vertical transition. OR even both.
* Add thumbnail pane beneath it (http://sachinchoolur.github.io/lightslider/).
* Lazy loading the slides that are not in view. Load them when user is two slides away from it. ( Email me if it's unclear what it means ).

