function display() {
    console.log("Display completed");
}

let show = function () {
    console.log("Show completed");
};

display();

let message = function () {
    console.log("Hello, World!");
};

let getmessage = function () {
    console.log(Date());
    message();
};

getmessage();
setTimeout(show, 1000);
