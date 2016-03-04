/* Dungeonator D&D Generation Library */

(function(window) {
  'use_strict';
  function dungeonator() {
    var Dungeonator = {};
    Dungeonator.about = "This is a Library to generate various D&D data as JSON objects.";

    Dungeonator.CreateShop = function() {
      return Shop.CreateShop();
    }

    return Dungeonator;
  }
  if(typeof(Dungeonator) === 'undefined') {
    window.Dungeonator = dungeonator();
  } else {
    console.log("Dungeonator already dsfdefined");
  }
})(window);

/* PERSON LIBRARY */
(function(window){
  'use_strict';
  function personLib() {
    var Person = {};

    return Person;
  }
  if(typeof(Person) === 'undefined') {
    window.Person = personLib();
  } else {
    console.log("Dungeonator -- Person already defined.");
  }
})(window);

/* SHOP LIBRARY */
(function(window) {
  'use_strict';
  function shopLib() {
    var Shop = {};

    //Random Range Generator
    getRandomInt = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1 )) + min;
    }

    //Create the shop name
    getName = function(ownerName, category) {
      var isCombinedName = getRandomInt(0, 5);

      if(isCombinedName === 1) {
        //Create a combined shop name
        //ie. OwnerName's ShopName

        var isOfShop = getRandomInt(0, 10);
        if(isOfShop === 1) {
          //Create a OF shop name
          //ie. Owner's noun of Noun
          var firstWord = ['House', 'Shop'];
          var secondWord = ['Horrors', 'Magic', 'Swords', 'Shields', 'Armor', 'Pens', 'Cloaks', 'The Arcane', 'Oddities'];
          var firstNumber = getRandomInt(0, firstWord.length - 1);
          var secondNumber = getRandomInt(0, secondWord.length - 1);

          return ownerName + "\'s " + firstWord[firstNumber] + " of " + secondWord[secondNumber];
        }
        else {
          //Create simple shop name
          //Owner's Nouns
          var firstWord;
          var firstNumber;
          if(category === 'Weapons') {
            firstWord = ['Swords', 'Armaments', 'Knifes', 'Blades', 'Cutlery'];
            firstNumber = getRandomInt(0, firstWord.length - 1);
            return ownerName + "\'s " + firstWord[firstNumber];
          }
          else if(category === 'Armor') {
            firstWord = ['Armory', 'Armorers', 'Mithos', 'Arsenal', 'Leather and Chain', 'Chainmails', 'Leathery', 'Metalworks'];
            firstNumber = getRandomInt(0, firstWord.length - 1);
            return ownerName + "\s " + firstWord[firstNumber];
          }
          else if(category === 'Magic') {
            firstWord = ['Magics', 'Arcane Shop of Wonders', 'Arcanum', 'Spells', 'Scrolls', 'Scriptorium'];
            firstNumber = getRandomInt(0, firstWord.length - 1);
            return ownerName + "\s " + firstWord[firstNumber];
          }
          else if(category === 'Clothes') {
            firstWord = ['Cloaks', 'Cloaks', 'Clothier', 'Capes', 'Tailory', 'Fine Shirts', 'Threads'];
            firstNumber = getRandomInt(0, firstWord.length - 1);
            return ownerName + "\s " + firstWord[firstNumber];
          }
          else {
            return 'Category not found';
          }
        }
      }
      else {
        //ADJECTIVE NOUN(S) shop name format
        var adjective = ['Shining', 'Wilted', 'The', 'Tilted', 'Celebrated', 'Special', 'First', 'Famous', 'Magnificent']
        var adjNumber = getRandomInt(0, adjective.length - 1);

        var firstWord;
        var firstNumber;
        if(category === 'Weapons') {
          firstWord = ['Swords', 'Armaments', 'Knifes', 'Blades', 'Cutlery', 'Blade', 'Steel', 'Rending'];
          firstNumber = getRandomInt(0, firstWord.length - 1);
          return adjective[adjNumber] + " " + firstWord[firstNumber];
        }
        else if(category === 'Armor') {
          firstWord = ['Armory', 'Armorers', 'Mithos', 'Arsenal', 'Leather and Chain', 'Chainmails', 'Leathery', 'Metalworks'];
          firstNumber = getRandomInt(0, firstWord.length - 1);
          return adjective[adjNumber] + " " + firstWord[firstNumber];
        }
        else if(category === 'Magic') {
          firstWord = ['Magics', 'Arcane Shop of Wonders', 'Arcanum', 'Spells', 'Scrolls', 'Scriptorium'];
          firstNumber = getRandomInt(0, firstWord.length - 1);
          return adjective[adjNumber] + " " + firstWord[firstNumber];
        }
        else if(category === 'Clothes') {
          firstWord = ['Cloaks', 'Cloaks', 'Clothier', 'Capes', 'Tailory', 'Fine Shirts', 'Threads'];
          firstNumber = getRandomInt(0, firstWord.length - 1);
          return adjective[adjNumber] + " " + firstWord[firstNumber];
        }
        else {
          return 'Category not found';
        }
      }
    };

    getCategory = function(){
      var categories = ['Clothes', 'Magic', 'Armor', 'Weapons'];

      return categories[getRandomInt(0, categories.length - 1)];
    };

    Shop.CreateShop = function() {
      var thisShop = {
        shopName: String,
        shopOwner: Object, //Person Object
        shopCategory: String,
        shopItems: [Object], //Item Object array
        shopDescription: String
      };
      var cat = getCategory();
      var name = getName('Ziltoid', cat);

      thisShop.shopCategory = cat;
      thisShop.shopName = name;

      return thisShop;
    };

    return Shop;
  }
  if(typeof(Shop) === 'undefined') {
    window.Shop = shopLib();
  } else {
    console.log("Shop already defined - Dungeonator");
  }
})(window);
