function UserAccount(username, password, first, last, phone, address) {
    this.username = username;
    this.password = password;
    this.lastName = last;
    this.firstName = first;
    this.phone = phone;
    this.address = address;
    this.favoriteSandwiches = [];
};
//array to store user account objects
var accounts = [];

function Sandwich(bread, spreads, jams, toppings, cut) {
    this.bread = bread;
    this.spreads = spreads;
    this.jams = jams;
    this.toppings = toppings
    this.isGrilled = false;
    this.cut = cut;
}
//add a new unique user account
// UserAccount.prototype.addAccount = function(username, password, first, last, phone, address) {
//     accounts.push(new UserAccount(this.username, this.password, this.first, this.last, this.phone, this.address));
// }
//add sandwich to unique user account, to call: accounts[index].addFaveSandwich(pass arguments);
UserAccount.prototype.addFaveSandwich = function(bread, spreads, jams, toppings, cut) {
    this.favoriteSandwiches.push(new Sandwich(bread, spreads, jams, toppings, cut)); 
} 

//fake user accounts
accounts.push(new UserAccount("katedam", "stickywithit", "Dameron", "Kate", "503-222-1234", "34 N Hazelnut Ave"));
accounts.push(new UserAccount("ebittyschwinnie", "itsjamtime", "Clarkson", "Elizabeth", "503-322-5678", "77 NE Awesomesauce Ave"));
accounts.push(new UserAccount("zachary13", "hungryforPBandJ", "Tahsuda", "Zachary", "503-444-4321", "567 SE Marmalade St"));

//use this constructor to store temp data to guestOrderSum array
function GuestOrder(bread, spreads, jams, toppings, cut) {
    this.bread = bread;
    this.spreads = spreads;
    this.jams = jams;
    this.toppings = toppings
    this.cut = cut;
}

var guestOrderSum = [];
//add a new order to temp guest user
GuestOrder.prototype.newOrder = function(sandwich) {
    guestOrderSum.push(new GuestOrder(sandwich));
}

var breads = ["Classic White", "Brioche", "Gluten-free White", "Cinnamon Raisin Swirl", "Bagel", "Teff Wrap without Honey", "English Muffin"];
var spreads = ["Crunchy PB", "Creamy PB", "Almond Butter", "Sunflower Seed Butter", "Hazelnut Butter", "Cashew Nut Butter"];
var jams = ["Grape Jelly", "Strawberry Jam", "Apricot Preserves", "Marionberry Jam", "Orange Marmalade", "Mixed Berry"];
var toppings = ["Bananas", "Nutella", "Chocolate Chips", "Raisins", "Honey", "Coconut Flakes", "Butterscotch Chips"];
var cuts = ["Vertical", "Diagonal", "No Cut", "No Crust"];

localStorage.setItem('accounts', JSON.stringify(accounts))

// function updateAccounts() {
//     var localAccounts = 

// }

