const mongoose = require('mongoose');
// const db_url = "mongodb://localhost/";
// const db_name = "newdb"
// const db_username = 
// const db_password = 


mongoose.connect("mongodb://localhost/newdb")
.then((db) => {
   console.log('DB Connected in connect js');
})
.catch((err) => {
    console.log('Error Detected')
})