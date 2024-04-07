let curr;
var box1 = document.getElementById("box1");
var check = document.getElementById("check");
var game = document.getElementById("game");
var all = document.querySelectorAll(".box");
let isDraw;




//box.addEventListener("click",choose,false)
var arr = [1,1,1,1,1,1,1,1,1]
        

var arr1 = [0,1,2,
            3,4,5,
            6,7,8
           ]



function draw(){
    if ( arr.length !== 9){
        return false
    }for (let i = 0; i < arr.length; i++){
        if (arr[i]!== 'X' && arr[i] !== 'O'){
           return false
        }
    }
    return true
}

function checkThat(){
//Horizontal
        if(arr[0] == arr[1] && arr[0] == arr[2]  && arr[0] != 1 && arr[1] != 1 && arr[2] != 1){
            over(curr)
                   
        }else if (arr[3] == arr[4] && arr[3] == arr[5] && arr[3] != 1 && arr[4] != 1 && arr[5] != 1){
            over(curr)
            
        }else if (arr[6] == arr[7] && arr[6] == arr[8] && arr[6] != 1 && arr[7] != 1 && arr[8] != 1){
            over(curr)
           
        }

//vertical
        else if(arr[0] == arr[3] && arr[0] == arr[6]  && arr[0] != 1 && arr[3] != 1 && arr[6] != 1){
            over(curr)
           
        }else if (arr[1] == arr[4] && arr[1] == arr[7] && arr[1] != 1 && arr[4] != 1 && arr[7] != 1){
            over(curr)
           
        }else if (arr[2] == arr[5] && arr[2] == arr[8] && arr[2] != 1 && arr[5] != 1 && arr[8] != 1){
            over(curr)
            
        }
 //Across
        else if (arr[0] == arr[4] && arr[0] == arr[8] && arr[0] != 1 && arr[4] != 1 && arr[8] != 1){
            over(curr)
            
        }else if (arr[2] == arr[4] && arr[2] == arr[6] && arr[2] != 1 && arr[4] != 1 && arr[6] != 1){
            over(curr)
            
        }

        else if (draw()) {
             console.log("Draw")
       over("Draw, Nobody")
    }
       
}


function over(text){
  //  all.style.background = "red"
    check.style.display = "block";
    check.innerHTML = `${text} Wins`;
    all.forEach((button)=>{
        button.disabled = true
    })

   
}
function choose(index ,obj){
   if(curr == "X"){
    curr = "O"
    obj.textContent = curr
    arr[index] = "X"
    
   } else{
    curr = "X"
    obj.innerHTML = curr
    arr[index] = "O"    
   }

obj.setAttribute("disabled" , "true")

checkThat()
}

