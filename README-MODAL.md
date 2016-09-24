# Modal Element

#### What is a Carousel?

- [Semantic UI](http://semantic-ui.com/modules/modal.html)
- [Foundation](http://foundation.zurb.com/sites/docs/v/5.5.3/components/reveal.html)

#### Requirements:

- Build a function that will get an HTML string as it's argument:

  ```javascript
  function myModal(modalContent) {
    /* Code goes here */
  }
  ```

- Open the modal by calling this function OR providing it as EventListeners callback function:

  ```javascript
  let modalContent = `<div>
  						<p> Hello! I am content of the modal</p>
  						<img src="#">
  					</div`;
  myModal(modalContent);
  /* OR */
  let button = document.querySelector('#modal-button');
  button.addEventListener('click', myModal(modalContent),false);
  ```

- Your modal should have a "close button".

- Modal should be removed in three ways : 1) clicking the "close button" 2) pressing `esc` 3) clicking on the area outside of the Modal's content.

- Modal should be always centered in the window, filling 80% of the window width and 80% of the window height at max.

- The layer beneath the modal, when activated, should be inaccessible ( no scroll on the back layers, no typing input, no button click on the back layer or …  )

- All in plain JavaScript, no JS libraries ( jQuery, ... )



#### Bonus Requirements

* Make it Object Oriented
* Use ES2015
* Make Modal's size as options of your code.
* Fullscreen mode!

