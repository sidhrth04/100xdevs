const jwt = require("jsonwebtoken");

//we cam decode, verify, generate


const value = {
    name: "Siddharth",
    password: 12345678
}

const token = jwt.sign(value, "secret"); //this token has been generated using the secret and hence this token can only be verified by the secret


// console.log(token);


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2lkZGhhcnRoIiwicGFzc3dvcmQiOjEyMzQ1Njc4LCJpYXQiOjE3MTk0MjczODF9.MxnS5_HvTEfB3TeTiX0e6-liSJEYf9IprNwcZXP4gSA

//this above key is my cheque book

//secret is the chequebook generator which can verify the cheque received from the customer

//anyone can decode the token, but it can only be verified using secret

const token1 = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2lkZGhhcnRoIiwicGFzc3dvcmQiOjEyMzQ1Njc4LCJpYXQiOjE3MTk0MjczODF9.MxnS5_HvTEfB3TeTiX0e6-liSJEYf9IprNwcZXP4gSA", "secret");

console.log(token1);

