// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: purple; icon-glyph: magic;
/* Location Objects & Routing Weights
These objects contain weights that indicate the order of navigation from each location. The while loop in the main function iterates through the
object going from lowest weight (first destination) to highest weight (final destination), and checks if the input includes that value. Then it references the address link associated with that address and opens it in Apple Maps.
*/
const starbucks = {1 : 102, 2 : 106, 3 : 108, 4 : 105, 5 : 107, 6 : 104, 7 : 103, 8 : 101};
const msm = {1 : 106, 2 : 105, 3 : 101, 4 : 108, 5 : 107, 6 : 104, 7 : 103, 8 : 102};
const home = {1 : 104, 2 : 105, 3 : 101, 4 : 102, 5 : 106, 6 : 108, 7 : 107, 8 : 103};
const safeway = {1 : 105, 2 : 102, 3 : 101, 4 : 106, 5 : 108, 6 : 107, 7 : 103, 8 : 104};
const gas = {1 : 102, 2 : 106, 3 : 101, 4 : 108, 5 : 107, 6 : 104, 7 : 103, 8 : 105};
const killerBurger = {1 : 102, 2 : 101, 3 : 105, 4 : 104, 5 : 103, 6 : 107, 7 : 108, 8 : 106};
const losDos = {1 : 105, 2 : 102, 3 : 101, 4 : 104, 5 : 104, 6 : 106, 7 : 108, 8 : 107};
const kM = {1 : 101, 2 : 105, 3 : 102, 4 : 104, 5 : 103, 6 : 106, 7 : 107, 8 : 108};
const work = {1 : 103, 2 : 104, 3 : 105, 4 : 101, 5 : 102, 6 : 106, 7 : 108, 8 : 107};

// Addresses Object, stores the links so the main function can choose a location
// NOTE: addresses redacted, previously used safari maps links
const addresses = {
	101 : "ADDRESS:starbucks",
	102 : "ADDRESS:msm",
	103 : "ADDRESS:home",
	104 : "ADDRESS:safeway",
	105 : "ADDRESS:gas",
	106 : "ADDRESS:killerBurger",
	107 : "ADDRESS:kM",
	108 : "ADDRESS:work"
	};

// Location Key Translator, takes the input locationKey and converts it to the name of the relevant object
const locationKeyTranslator = {
	"1.1.6" : "starbucks",
	"1.3.3" : "msm",
	"1.1.1" : "home",
	"1.1.4" : "safeway",
	"1.1.7" : "gas",
	"1.3.5" : "killerBurger",
	"1.1.8" : "losDos",
	"1.2.9" : "kM",
    "1.1.2" : "work"
};

// Object Map Lookup Table, Converts the string to a variable
const locations = {starbucks, msm, home, safeway, gas, killerBurger, losDos, kM, work};

// Input Translator, allows you to assign the letter variables in the cloud document AKA input
let inputTranslator = {
  101 : "A",
  102 : "B",
  103 : "C",
  104 : "D",
  105 : "E",
  106 : "F",
  107 : "G",
  108 : "H"
}

// Input will need to come from the action menu, store in local or cloud storage. Will need to write to the input doc to remove location after execution 
let fm = FileManager.iCloud();
let path = fm.joinPath(fm.documentsDirectory(), "navIntent.json");
await fm.downloadFileFromiCloud(path);
let navIntentData = JSON.parse(fm.readString(path));

console.log(navIntentData);

// MAIN FUNCTION //
let locationKey = navIntentData["Loc"];
let currentLocationName = locationKeyTranslator[locationKey];
let currentLocation = locations[currentLocationName];
let weight = 1;

while(weight <= 8){
  if(Object.values(navIntentData).includes(currentLocation[weight])){
		Safari.open(addresses[currentLocation[weight]]);
    break;
  } else {
  weight++;
  };
};
