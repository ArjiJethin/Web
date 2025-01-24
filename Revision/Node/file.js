let fs = require("fs");

fs.open("message.txt", "w", function (error, fd) {
    if (error) {
        console.log("Error opening file: ", error);
        return;
    } else {
        console.log("File opened successfully!");
    }
});

fs.appendFile("message.txt", "Nice to meet you", function (error) {
    if (error) {
        console.log("Error writing to file: ", error);
    } else {
        console.log("Data written successfully!");
    }
});

fs.writeFile("message.txt", "Hello World!!\n", function (error) {
    if (error) {
        console.log("Error writing to file: ", error);
    } else {
        console.log("Data written successfully!!");
    }
});

fs.readFile("message.txt", "utf8", function (error, data) {
    if (error) {
        console.log("Error reading file: ", error);
    } else {
        console.log("File content: ", data);
    }
});

fs.rename("message.txt", "message.txt", function (error) {
    if (error) {
        console.log("Error renaming file: ", error);
    } else {
        console.log("File renamed successfully!");
    }
});

fs.unlink("message.txt", function (error) {
    if (error) {
        console.log("Error deleting file: ", error);
    } else {
        console.log("File deleted successfully!");
    }
});
