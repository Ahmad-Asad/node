<<<<<<< HEAD
const express = require('express');
const app = express();


app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})

app.listen(3000, () => {

    console.log("Hello from Node.JS");
});

=======
const express = require('express');
const app = express();


app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})

app.listen(3000, () => {

    console.log("Hello from Node.JS");
});


>>>>>>> 94acde9dddc7839bd53c2d9444116f48145b724b
