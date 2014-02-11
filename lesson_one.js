(function(){
  
  this.aThing = { x: 10, y: 10 };

  function Person( firstName, lastName, age, gender ){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.howOldWillYouBeIn = function( x ){
      Radical.prototype.howOldWillIYouBeIn = function( x ){
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

  // we create a person
  var george = new Person( 'George', 'Constanza', 43, 'male' );
  // and we call a method
  george.greet();

  // we create a radical
  var haley = new Radical( "Haley", "Firebrand", 32, 'female' );
  // we call the overridden greet method
  haley.greet();
  // we call an inherited method set up in the 'traditional way'
  haley.walk();
  // we also inherit the 'member method' (the one we defined inside the constructor of the parent class)
  haley.howOldWillIYouBeIn(5);
  // we call our very own method
  haley.yell();

  // this keyword usage nside closures
  console.log( this.aThing );

})();