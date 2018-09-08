function UserAccount(username, password, first, last, phone, address) {
    this.username = username;
    this.password = password;
    this.lastName = last;
    this.firstName = first;
    this.phone = phone;
    this.address = address;
    //below adds one sandwich but when you try to add another it overrides the first
    this.addSandwich = function(bread, spreads, jams, toppings, cut) {
        this.bread = bread;
        this.spreads = spreads;
        this.jams = jams;
        this.toppings = toppings
        this.cut = cut;
    } 
}
//array to store user account objects
var accounts = [];
var faveSandwiches = [];

//use this constructor to store temp data to guestOrderSum array
function GuestOrder(bread, spreads, jams, toppings, cut) {
    this.bread = bread;
    this.spreads = spreads;
    this.jams = jams;
    this.toppings = toppings
    this.cut = cut;
}

var guestOrderSum = [];
