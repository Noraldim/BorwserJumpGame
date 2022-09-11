var player = document.getElementByid("player");
var rock = document.getElementByid("rock");

// // function jump (){
// // 	if (player.classList != "anme") {
// // 		player.classList.add("anme");
// // 	}
// // 	setTimeout(function(){
// // 		player.classList.remove("anme");
// // 	},500);
// // }

 

 player.addEventListener("click", function () {
    player.classList.add("anme");
    setTimeout(function(){
        player.classList.remove("anme")
    },900)


 },);


// var cheakLoss = setInterval(function () {

//     var characterTop = parseTnt(window.getComputedStyle(player).getPropertyValue("top"));
//     var rockLeft = parseTnt(window.getComputedStyle(rock).getPropertyValue("left"));
//     if(rockLeft<20 && rockLeft>0 %% rockLeft>=130){
//         rock.style.anme = "none";
//         rock.style.display ="none";
//         alert("YOU LOSE");
//     }

// },10);
