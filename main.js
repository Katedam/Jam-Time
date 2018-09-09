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
    this.cut = cut;
}

UserAccount.prototype.addFaveSandwich = function(sandwich) {
    addSandwich.push(new Sandwich(sandwich));
} 
    
UserAccount.prototype.addAccount = function(profile) {
    accounts.push(new UserAccount(profile));
}

accounts.push(new UserAccount("sarahbean", "coolbeans", "Bean", "Sarah", "503-555-1234", "34 N Sandwich Ave"));

//use this constructor to store temp data to guestOrderSum array
function GuestOrder(bread, spreads, jams, toppings, cut) {
    this.bread = bread;
    this.spreads = spreads;
    this.jams = jams;
    this.toppings = toppings
    this.cut = cut;
}

var guestOrderSum = [];

GuestOrder.prototype.newOrder = function(sandwich) {
    guestOrderSum.push(new GuestOrder(sandwich));
}
