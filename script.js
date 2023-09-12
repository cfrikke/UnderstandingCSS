let fb = document.getElementById("fancybutton");
let buttonclicked = false;
     
     function toggleClass() { 
    document.getElementById("fancybutton").classList.toggle("escapeMouse");
    console.log("done");
    buttonclicked = true;
    }

    function askPerms() {
     navigator.permissions.query({ name: "notifications"}).then((result) => {
          if(result.state === "granted"){
               alert("Permissions accepted!");
          } else if(result.state === "denied") {
               confirm("You denied permissions...");
               if(confirm("You denied permissions...") === true){
                    askPerms();
               }else{
                    alert("You Failed.");
                    window.close();
               }
          }
     });
 }