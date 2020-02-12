// import
var mysql = require('mysql');
//import mysql from './node_modules/mysql';

// create connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database : "test"
});


let users =[];
let user = {
    userid : '',
    firstname :'',
    lastname :'',
    age : 0
}
let usersArr =[
    {     
        userid : '',
        firstname :'',
        lastname :'',
        age : 0
    }
];


//connect DB
con.connect(function(err){
    if(err) throw err;

    //console.log(con.state);
    console.log("Connected !");

    //sql=  "INSERT INTO user (firstname,lastname,age) values ('gridsana','paparn',35)";
    //con.query(sql,function(err,result){
    //    if(err) throw err;
    //    console.log("INSERT Complete !");
    //})

    // sql=  "SELECT * FROM test.user u ";
    // con.query(sql,function(err,result){
    //     if(err) throw err;
    //     console.log(result);

    //     console.log(result[0]['userid']);
    // })

    sql=  "SELECT * FROM test.user u ";
    con.query(sql,(err,result) => {
        if(err) throw err;
        //console.log(result);
        //console.log(user);
        result.map((rs)=>{
            user.userid = rs['userid'];
            user.firstname = rs['firstname'];
            user.lastname = rs['lastname'];
            user.age = rs['age'];

            users.push(user);
            //console.log(user.userid);
            //console.log(user.firstname);
            //console.log(user.lastname);
            //console.log(user.age);
       
        });
        console.log(users);
        console.log(usersArr);
    })

    // sql=  "DELETE FROM test.user WHERE userid = 1";
    // con.query(sql,function(err,result){
    //     if(err) throw err;
    //     console.log("delete success");
    // })

     //sql=  "UPDATE test.user SET lastname ='LNameChange' WHERE userid =2 ";
     //con.query(sql,function(err,result){
     //    if(err) throw err;
     //    console.log("update success");
     //})

    //if(con.state == "connected"){
    //    con.destroy();
    //    console.log(con.state);
    //}
    
});




