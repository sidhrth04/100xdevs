const express = require("express")

const app = express();


function isOldEnoughMW(req, res, next){
    if(age >= 14){
        next();
    }
    else{
        res.json({
            msg : "Sorry you are not of the age yet"
        })
    }
}
app.use(isOldEnoughMW); //another way to use middlewares instead of writing in each and every get,post or put request

//app.use only triggers for all the endpoints below it
//if it is declared after one get request, it wont be applicable for the get request above it

app.get("/ride1", isOldEnoughMW, function(req, res){
    res.json({
        msg : "You have successfully riden the ride1"
    })
})


app.get("/ride2", isOldEnoughMW, function(req, res)){
    res.json({
    msg : "You have successfully riden the ride2"
    })
}

app.listen(3000);
