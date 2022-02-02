// deno run --allow-all cli.ts

// deno run --allow-all cli.ts username elycheikh
let isMatch = false 
//console.log(Deno.args)
if( !isMatch && Deno.args.length == 2 && Deno.args[0] == "username"){
    isMatch = true  
    console.log(" username is : ",Deno.args[1])
}

// deno run --allow-all cli.ts lasrname smail
if( !isMatch && Deno.args.length == 2 && Deno.args[0] == "lastname"){
    isMatch = true  
    console.log(" last name is : ",Deno.args[1])
}

 
 
 if(!isMatch){
     console.log(" you need to write command with right pararams")
 }