(function(){
    function a() {
    console.log(this);
    this.newvar = 'hello';
}

var b = function() {
    console.log(this);
}

a();

console.log(newvar);
b();

var c = {
    name: 'the c object',
    log: function() {
        var self = this;

        self.name = 'update the name';
        console.log(self);

        var setname = function(newname) {
            self.name = newname;
        }
        setname('updated agan! the c object');
        console.log(self);
    }
}

c.log();

})();

//----------------------------------------------------------


//Arrays

(function() {
    var arr = [
    1,
    false,
    {
        name: 'Krishna',
        address: '1705 N st.'
    },
    function(name) {
        var greet = 'Hello ';
        console.log(greet + name);
    },
    "Hello"
];


console.log(arr);

arr[3](arr[2].name);


})();

//-----------------------------------------------
console.log('%=====================================%');

//Arguments


(function() {
    function greet(firstname, lastname, language,) {

        language = language || 'en';

        if(arguments.length === 0) {
            console.log('Missing parameters!');
            console.log('--------------------');
            return;
        }

        console.log(firstname);
        console.log(lastname);
        console.log(language);
        console.log(arguments);
        console.log('arg 0: '+ arguments[0]);
        console.log('-----------------');

    }

greet();
greet('Krishna');
greet('Krishna', 'Bachina');
greet('Krishna', 'Vamsi', 'Telugu');

})();

//-------------------------------------------------------
console.log('%======================================%');



(function() {




})();
