/* Dungeonator D&D Generation Library */
/* The MIT License (MIT)
Copyright (c) 2016 Mike Agnew

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE. */

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
    console.log("Dungeonator already defined");
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
    getShopName = function(ownerName, category) {
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

          return ownerName + "&apos;s " + firstWord[firstNumber] + " of " + secondWord[secondNumber];
        }
        else {
          //Create simple shop name
          //Owner's Nouns
          var firstWord;
          var firstNumber;
          if(category === 'Weapons') {
            firstWord = ['Swords', 'Armaments', 'Knifes', 'Blades', 'Cutlery'];
            firstNumber = getRandomInt(0, firstWord.length - 1);
            return ownerName + "&apos;s " + firstWord[firstNumber];
          }
          else if(category === 'Armor') {
            firstWord = ['Armory', 'Armorers', 'Mithos', 'Arsenal', 'Leather and Chain', 'Chainmails', 'Leathery', 'Metalworks'];
            firstNumber = getRandomInt(0, firstWord.length - 1);
            return ownerName + "&apos;s " + firstWord[firstNumber];
          }
          else if(category === 'Magic') {
            firstWord = ['Magics', 'Arcane Shop of Wonders', 'Arcanum', 'Spells', 'Scrolls', 'Scriptorium', 'of Scrolls', 'Mystics', 'The Arcane', 'Potions'];
            firstNumber = getRandomInt(0, firstWord.length - 1);
            return ownerName + "&apos;s " + firstWord[firstNumber];
          }
          else if(category === 'Clothes') {
            firstWord = ['Cloaks', 'Cloaks', 'Clothier', 'Capes', 'Tailory', 'Fine Shirts', 'Threads'];
            firstNumber = getRandomInt(0, firstWord.length - 1);
            return ownerName + "&apos;s " + firstWord[firstNumber];
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

    getShopCategory = function(){
      var categories = ['Clothes', 'Magic', 'Armor', 'Weapons'];

      return categories[getRandomInt(0, categories.length - 1)];
    };

    Shop.CreateShop = function() {
      var thisShop = {
        shopName: String,
        shopOwner: String, //Person Object
        shopCategory: String,
        shopItems: [Object], //Item Object array
        shopDescription: String
      };
      var cat = getShopCategory();
      var ownerName = Person.CreatePerson();
      var name = getShopName(ownerName, cat);

      thisShop.shopCategory = cat;
      thisShop.shopName = name;
      thisShop.shopOwner = ownerName;

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


/* PERSON LIBRARY */
(function(window){
  'use_strict';
  function personLib() {
    var Person = {};

    //Random Range Generator
    getRandomInt = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1 )) + min;
    };

    getPersonName = function(gender) {
      //IF MALE
      if(gender === 0)
      {
          //IF - Select based on letter and list of names
        //Names grabbed from http://www.angelfire.com/tx/afira/fantasymfull.html
        //No patterns just simple grab name, no grunt work.
        var letter = getRandomInt(0, 25);
        var selection;
        if(letter === 0) {
          var A = ['Abaet','Abarden','Aboloft','Acamen','Achard','Ackmard','Adeen',	'Aerden',	'Afflon','Aghon','Agnar','Ahalfar','Ahburn','Ahdun','Aidan','Airen','Airis','Albright','Aldaren','Alderman','Aldren','Alkirk','Allso','Amerdan','Amitel','Anfar','Anumi','Anumil','Asden','Asdern','Asen','Aslan','Atar','Atgur','Atlin','Auchfor','Auden','Ault','Ayrie','Aysen'];
          selection = getRandomInt(0, A.length - 1);
          return A[selection];
        }
        else if(letter === 1) {
          var B = ['Bacohl','Badeek','Baduk','Balati','Baradeer','Barkydle','Basden','Bayde','Beck','Bedic','Beeron','Bein','Beson','Besur','Besurlde','Bewul','Biedgar','Bildon','Biston','Bithon','Boal','Boaldelr','Bolrock','Brakdern','Breanon','Bredere','Bredin','Bredock','Breen','Brighton','Bristan','Buchmeid','Bue','Busma','Buthomar','Bydern'];
          selection = getRandomInt(0, B.length - 1);
          return B[selection];
        }
        else if(letter === 2) {
          var C = ['Caelholdt','Cainon','Calden','Camchak','Camilde','Cardon','Casden','Cayold','Celbahr','Celorn','Celthric','Cemark','Cerdern','Cespar','Cether','Cevelt','Chamon','Chesmarn','Chidak','Cibrock','Cipyar','Ciroc','Codern','Colthan','Connell','Cordale','Cos','Cosdeer','Cuparun','Cusmirk','Cydare','Cylmar','Cythnar','Cyton'];
          selection = getRandomInt(0, C.length - 1);
          return C[selection];
        }
        else if(letter === 3) {
          var D = ['Daburn','Daermod','Dak','Dakamon','Dakkone','Dalburn','Dalmarn','Dapvhir','Darkboon','Darkkon','Darko','Darkspur','Darmor','Darpick','Dasbeck','Dask','Deathmar','Defearon','Derik','Derrin','Desil','Dessfar','Dinfar','Dismer','Doceon','Dochrohan','Dokoran','Dorn','Dosoman','Drakoe','Drakone','Drandon','Drit','Dritz','Drophar','Dryden','Dryn','Duba','Dukran','Duran','Durmark','Dusaro','Dyfar','Dytet'];
          selection = getRandomInt(0, D.length - 1);
          return D[selection];
        }
        else if(letter === 4) {
          var E = ['Eard','Eckard','Efamar','Efar','Egmardern','Eiridan','Ekgamut','Eli','Elik','Elson','Elthin','Enbane','Endor','Enidin','Enoon','Enro','Erikarn','Erim','Eritai','Escariet','Espardo','Etar','Etburn','Etdar','Ethen','Etmere','Etran','Eythil'];
          selection = getRandomInt(0, E.length - 1);
          return E[selection];
        }
        else if(letter === 5) {
          var F = ['Faoturk','Faowind','Fearlock','Fenrirr','Fetmar','Feturn','Ficadon','Fickfylo','Fildon','Firedorn','Firiro','Floran','Folmard','Fraderk','Fronar','Fydar','Fyn'];
          selection = getRandomInt(0, F.length - 1);
          return F[selection];
        }
        else if(letter === 6) {
          var G = ['Gafolern','Gai','Galain','Galiron','Gametris','Gauthus','Gemardt','Gemedern','Gemedes','Gerirr','Geth','Gib','Gibolock','Gibolt','Gith','Gom','Gosford','Gothar','Gothikar','Gresforn','Grimie','Gryn','Gundir','Gustov','Guthale','Gybol','Gybrush','Gyin'];
          selection = getRandomInt(0, G.length - 1);
          return G[selection];
        }
        else if(letter === 7) {
          var H = ['Halmar','Harrenhal','Hasten','Hectar','Hecton','Heramon','Hermenze','Hermuck','Hezak','Hildale','Hildar','Hileict','Hydale','Hyten'];
          selection = getRandomInt(0, H.length - 1);
          return H[selection];
        }
        else if(letter === 8) {
          var I = ['Iarmod','Idon','Ieli','Ieserk','Ikar','Ilgenar','Illilorn','Illium','Ingel','Ipedorn','Irefist','Ironmark','Isen','Isil','Ithric'];
          selection = getRandomInt(0, I.length - 1);
          return I[selection];
        }
        else if(letter === 9) {
          var J = ['Jackson','Jalil','Jamik','Janus','Jayco','Jaython','Jesco','Jespar','Jethil','Jex','Jib','Jibar','Jin','Juktar','Julthor','Jun','Justal'];
          selection = getRandomInt(0, J.length - 1);
          return J[selection];
        }
        else if(letter === 10) {
          var K = ['Kafar','Kaldar','Kellan','Keran','Kesad','Kesmon','Kethren','Kib','Kibidon','Kiden','Kilbas','Kilburn','Kildarien','Kimdar','Kinorn','Kip','Kirder','Kodof','Kolmorn','Kyrad'];
          selection = getRandomInt(0, K.length - 1);
          return K[selection];
        }
        else if(letter === 11) {
          var L = ['Lackus','Lacspor','Laderic','Lafornon','Lahorn','Laracal','Ledale','Leit','Lephar','Lephidiles','Lerin','Lesphares','Letor','Lidorn','Lin','Liphanes','Loban','Lox','Ludokrin','Luphildern','Lupin','Lurd'];
          selection = getRandomInt(0, L.length - 1);
          return L[selection];
        }
        else if(letter === 12) {
          var M = ['Macon','Madarlon','Mafar','Marderdeen','Mardin','Markard','Markdoon','Marklin','Mashasen','Mathar','Medarin','Medin','Mellamo','Meowol','Merdon','Meridan','Merkesh','Mesah',"Mes\'ard",'Mesophan','Mesoton','Mezo','Michael','Mick','Mickal','Migorn','Milo','Miphates',"Mi\'talrythin",'Mitar','Modric','Modum','Mudon','Mufar','Mujarin','Mylo','Mythik','Mythil'];
          selection = getRandomInt(0, M.length - 1);
          return M[selection];
        }
        else if(letter === 13) {
          var N = ['Nadeer','Nalfar','Namorn','Naphates','Neowyld','Nidale','Nikpal','Nikrolin','Niktohal','Niro','Noford','Nothar','Nuthor','Nuwolf','Nydale','Nythil'];
          selection = getRandomInt(0, N.length - 1);
          return N[selection];
        }
        else if(letter === 14) {
          var O = ["O\’tho",'Ocarin','Occelot','Occhi','Odaren','Odeir','Ohethlic','Okar','Omaniron','Omarn','Orin','Ospar','Othelen','Oxbaren'];
          selection = getRandomInt(0, O.length - 1);
          return O[selection];
        }
        else if(letter === 15) {
          var P = ['Padan','Palid','Papur','Peitar','Pelphides','Pender','Pendus','Perder','Perol','Phairdon','Phemedes','Phexides','Phoenix','Picon','Pictal','Picumar','Pildoor','Pixdale','Ponith','Poran','Poscidion','Prothalon','Puthor','Pyder'];
          selection = getRandomInt(0, P.length - 1);
          return P[selection];
        }
        else if(letter === 16) {
          var Q = ['Qeisan','Qidan','Quiad','Quid','Quiss','Qupar','Qysan'];
          selection = getRandomInt(0, Q.length - 1);
          return Q[selection];
        }
        else if(letter === 17) {
          var R = ["Radag\'mal",'Randar','Raysdan','Rayth','Reaper','Resboron','Reth','Rethik','Rhithik','Rhithin','Rhysling','Riandur','Rikar','Rismak','Riss','Ritic','Rogeir','Rogist','Rogoth','Rophan','Rulrindale','Rydan','Ryfar','Ryfar','Ryodan','Rysdan','Rythen','Rythern'];
          selection = getRandomInt(0, R.length - 1);
          return R[selection];
        }
        else if(letter === 18) {
          var S = ['Sabal','Sadareen','Safilix','Samon','Samot','Sasic','Scoth','Scythe','Secor','Sed','Sedar','Senick','Senthyril','Serin','Sermak','Seryth','Sesmidat','Seth','Setlo','Shade','Shadowbane','Shane','Shard','Shardo','Shillen','Silco','Sildo',"Sil\'forrin",'Silpal','Sithik','Soderman','Sothale','Staph','Stenwulf','Steven','Suktor','Suth','Sutlin','Syr','Syth','Sythril'];
          selection = getRandomInt(0, S.length - 1);
          return S[selection];
        }
        else if(letter === 19) {
          var T = ['Talberon','Telpur','Temil','Temilfist','Tempist','Teslanar','Tespar','Tessino','Tethran','Thiltran','Tholan','Tibers','Tibolt','Ticharol','Tilner','Tithan','Tobale',"Tol\’Solie", 'Tolle','Tolsar','Toma','Tothale','Tousba','Towerlock','Tuk','Tuscanar','Tusdar','Tyden'];
          selection = getRandomInt(0, T.length - 1);
          return T[selection];
        }
        else if(letter === 20) {
          var U = ['Uerthe','Ugmar','Uhrd','Undin','Updar','Uther'];
          selection = getRandomInt(0, U.length - 1);
          return U[selection];
        }
        else if(letter === 21) {
          var V = ['Vaccon','Vacone','Valkeri','Valynard','Vectomon','Veldahar','Vespar','Vethelot','Victor','Vider','Vigoth','Vilan','Vildar','Vinald','Vinkolt','Virde','Voltain','Volux','Voudim','Vythethi'];
          selection = getRandomInt(0, V.length - 1);
          return V[selection];
        }
        else if(letter === 22) {
          var W = ["Wak\’dern",'Walkar','Wanar','Wekmar','Werymn','Weshin','William','Willican','Wilte','Wiltmar','Wishane','Witfar','Wrathran','Wraythe','Wuthmon','Wyder','Wyeth','Wyvorn'];
          selection = getRandomInt(0, W.length - 1);
          return W[selection];
        }
        else if(letter === 23) {
          var X = ['Xander','Xavier','Xenil','Xex','Xithyl','Xuio'];
          selection = getRandomInt(0, X.length - 1);
          return X[selection];
        }
        else if(letter === 24) {
          var Y = ["Y\’reth",'Yabaro','Yepal','Yesirn','Yssik','Yssith'];
          selection = getRandomInt(0, Y.length - 1);
          return Y[selection];
        }
        else if(letter === 25) {
          var Z = ['Zak','Zakarn','Zecane','Zeke','Zerin','Zessfar','Zidar','Zigmal','Zile','Zilocke','Zio','Zoru','Zotar','Zutar','Zyten'];
          selection = getRandomInt(0, Z.length - 1);
          return Z[selection];
        }
      }
      //IF FEMALE
      else {

      }
    };

    Person.CreatePerson = function() {
      return getPersonName(0);

    };

    return Person;
  }
  if(typeof(Person) === 'undefined') {
    window.Person = personLib();
  } else {
    console.log("Dungeonator -- Person already defined.");
  }
})(window);
