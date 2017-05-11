var friends = new Object();

    friends.Bill = new Object();
        friends.Bill.firstName = "Bill";
        friends.Bill.lastName = "Jeffs";
        friends.Bill.number = "(435)654-6574";
        friends.Bill.address = ['4262 dogwood circle','Weston','FL','33331'];
    
    friends.Steve = new Object();
        friends.Steve.firstName = "Steve";
        friends.Steve.lastName = "Bins";
        friends.Steve.number = "(984)345-4352";
        friends.Steve.address = ['One Microsoft Way','Redmond','WA','98052'];



var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Jeffs",
        number: "(435)654-6574",
        address: ['4262 dogwood circle','Weston','FL','33331'],
    },
    
    steve: {
        firstName: "Steve",
        lastName: "Bins",
        number: "(984)345-4352",
        address: ['One Microsoft Way','Redmond','WA','98052'],
    }
};

var list = function () {
    for (var key in friends){
        console.log(key);
    }
}

var search = function(name){
    for (var key in friends) {
        if (friends[key].firstName === name){
            var myfriend = friends[key];
            console.log("First Name: " + myfriend.firstName);
            console.log("Last Name: " + myfriend.lastName);
            console.log("Number: " + myfriend.number);
            console.log("Address: " + myfriend.address);
            return friends[key];
        }
    }
}

list();
search("Bill");


