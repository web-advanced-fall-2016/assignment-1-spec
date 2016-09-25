# Search Field Element With Dropdown for Suggestions From Static Data

#### What does it mean?

- [Semantic UI](http://semantic-ui.com/modules/search.html)

#### Requirements:

- You should built a function that receives a Text Field selector and dropdown item template as its arguments and add make that text field searchable:

  ```javascript
  let itemTemplate = `<div class="item">
  					</div>
  					`;
  function(textFieldSelector, itemTemplate) {
   /* code goes here */  
  }
  ```

- 50,000 names have been provide in a file named: [names.txt](https://github.com/web-advanced-fall-2016/assignment-1-spec/raw/master/names.txt). The search function should search for names inside this file. Each name is provided with the following format: `first-name last-name:rand`. Names are separated with `;`. Copy the names from the file and put it at the end of your JS file statically:

  ```javascript
  /* All your Code */

  var names = "Jewell Munter:854370;Alden Ehrhard:852014;Chance Hunnewell:158189;Adriana Geffers:17473;Celia Schnieders:746599;Corliss Denk:791623;Sally Zehnpfennig:185749;Jayme Behrends:462289;Jesica Farmsworth:720507;Laree Chime:822125;Henrietta Chandsawangbh:400455;Regine Criado:593497;Louann Rull:437496;Raylene Bodell:230709;Lenora Heidorn:84678;Terica Bacote:53904;Dena Picket:584555;Laurie Arambuia:912065;Freeda Barbar:725347;Arlena Blenden:512319;Toshia Siaperas:623512;Randell Hassig:117809;Denise Litsey:461117;Ron Blankenbecler:147578;Quincy Wileman:626921;Cherish Patz:744193;Burma Erskin:5184;Arron Bulfer:803810;Tiny Pokorski:482737;Mitzie Hadef:253250;Genie Malys:421633;Robbin Steenburg:356368;Delsie Gallegos:76374;Kaycee Leone:924465;Lorna Komar:474375;Joie Warf:448658;Zana Philpot:710606;Caroline Koles:87033;Joey Heine:740998;Pilar Gividen:714223;Kesha Rushforth:157566;Phebe Yournet:979838;Casimira Wohlenhaus:244810;Glenda Prestridge:466791;Bianca Derienzo:510015;Earnest Lapage:888249;Argentina Arnoux:672254;Elva Wieto:786812;Tomi Kirgan:684709;Jacquelynn Drader:666873;Robert Dasen:449309;";
  ```

- If you are interested in the code with which I generated the names, check assignment-1-spec repository.

- Search box should be dynamic, meaning, it should update as user changes the input.

- All in plain JavaScript, no JS libraries ( jQuery, ... )


- Style your item template nicely.




#### Bonus Requirements

* Make it Object Oriented

* Use ES2015.

* Use rank number to order your matches when displaying for user.

* Make the item template more complex, like add a thumbnail image for each items. Doesn't matter what that image is(use just a placeholder). Or show their rank next to their name.

  ​

