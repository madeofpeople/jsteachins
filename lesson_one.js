(function(){
  
  this.aThing = { x: 10, y: 10 };

  function Person( firstName, lastName, age, gender ){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.howOldWillYouBeIn = function( x ){
      console.log( "I'll be", x + this.age,",",x,"years from now!");
    }
  }
  Person.prototype.greet = function(){
    console.log( "I'm ", this.firstName, this.lastName, "and I'm ", this.age, "years old!");
  }
  Person.prototype.walk = function(){
    console.log( "I'm", this.firstName,"and I'm walking from here to there!" );
  }

  // constructor
  function Radical( firstName, lastName, age, gender ){
    // a radical is just a person, who's methods are different ;)
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    // its good for maintenance and readability to declare properties, even if they wont have values yet
    this.view = null;
  }
  // Radical's prototype is an instance of Person... a bit tricky to think about
  // but that's how inheritance happens in JS
  Radical.prototype = new Person();
  // Now Radical has the stuff of a Person, but we need to make sure it knows it's a radical too (wha?)
  Radical.prototype.contructor = Radical;
  // Here we 'override' a method in the 'parent class' (Person)
  Radical.prototype.greet = function(){
    console.log( "I'm ", this.firstName, this.lastName, "and I'm ", this.age, "years old!", "and I'm a radical!");
  }
  // This is a method that only belongs to Radicals
  Radical.prototype.yell = function(){
    alert("AAAAAAAAAAAAH!");
  }

  // Mutators
  // Getters and setters are awesome, always create them in pairs
  // a good explanation of why
  // http://stackoverflow.com/questions/1568091/why-use-getters-and-setters
  // i think of them as the knobs and pits in puzzle pieces.
  Radical.prototype.getView = function(){
    return this.element;
  }
  Radical.prototype.setView = function( el){
    /* 
    in a more complex example we can do stuff here
    if you just set the property directly, any manipulation
    would happen outside that class, and then sort of 'be in the wrong place'
    this would break 'separation of concerns' and 
    */
    this.view = el;
    /*
    for example here, we can assign the click event listener to our view, that calls our greet method.
    greet would still have access to all our properties using the "this" keyword.
    include the value this.view
    */
    console.log( el );
    var me = this;
    this.view.addEventListener("click", function(){
      me.greet();
    }, false );
  }

  // we create a person
  var george = new Person( 'George', 'Constanza', 43, 'male' );
  // and we call a method
  george.greet();
  // we create a radical
  var haley = new Radical( "Haley", "Firebrand", 32, 'female' );
  var drew = new Radical( "Drew", "Hornbein", 26, 'male' );
  // we call the overridden greet method
  haley.greet();
  // lets use the setView method to ascribe a view in the dom for haley.
  console.log( 'document.getElementById("haley"):', document.getElementById("haley") );
  haley.setView( document.getElementById("haley") );
  // different "instances" of Radical have different properties based on what was passed to the contructor
  drew.greet();
  // we call an inherited method walk which is "encapsulated" into the Radical class because it extends Person.
  haley.walk();
  // we also inherit the 'member method' (the one we defined inside the constructor of the parent class)
  haley.howOldWillYouBeIn(5);
  // we call our very own method
  haley.yell();
  // this keyword usage nside closures
  console.log( this.aThing );

})();