// const path = require("path"); //importing common.js type
// import path from "path"; //es6 type

// console.log(path);

// console.log(__filename)
// console.log(__dirname)

//path.extname - this gives the extension of our file
// console.log(__filename);
// console.log(path.extname("c:\\Users\ADMIN\Documents\Projects\NODE_BLR\package.json"));

//path.basename - this gives the name of the file
// console.log(path.basename(__filename));

//path.dirname - this gives the path of the directory
// console.log(path.dirname(__dirname));

//path.parse //this splits whole path into seperate
// let pathObj = path.parse(__filename);
// console.log(pathObj);

// //path.format - this method will convert that object into path
// let fullPath = path.format(pathObj);
// console.log(fullPath);

//path.isAbsoulute - this method is used to check whether the folder is available or not
// console.log(path.isAbsolute("c:\\Users\ADMIN\Documents\Projects\NODE_BLR\package.json"));

//path.normalize - this method will normalize your path by removing extra slashes
// console.log(path.normalize("c:\\Users\ADMIN\Documents\Projects\NODE_BLR\package.json"))
// console.log(path.isAbsolute('c:\\UsersADMINDocumentsProjectsNODE_BLRpackage.json'))

//path.join - this method gives single path by joining all the paths
// console.log(path.join('\home\movies','\harrypotter\part-1'))
