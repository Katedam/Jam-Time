function UserAccount(username, password, first, last, phone, address, bread, spreads, jams, toppings, cut) {
    this.username = username;
    this.password = password;
    this.lastName = last;
    this.firstName = first;
    this.phone = phone;
    this.address = address;
    this.addSandwich = [];
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
UserAccount.prototype.addAccount = function(profile) {
    accounts.push(new UserAccount(profile));
}
//add sandwich to unique user account, to call: accounts[index].addFaveSandwich(pass arguments);
UserAccount.prototype.addFaveSandwich = function(bread, spreads, jams, toppings, cut) {
    this.addSandwich.push(new Sandwich(bread, spreads, jams, toppings, cut)); 
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
