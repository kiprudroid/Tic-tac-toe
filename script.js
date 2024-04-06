let curr;
var box1 = document.getElementById("box1");
var check = document.getElementById("check");
var game = document.getElementById("game");
var all = document.querySelectorAll("button");
let hasNull;



//box.addEventListener("click",choose,false)
var arr = []
        

var arr1 = [0,1,2,
            3,4,5,
            6,7,8
           ]

function checkThat(){
//Horizontal
        if(arr[0] == arr[1] && arr[0] == arr[2]  && arr[0] != null && arr[1] != null && arr[2] != null){
            over(curr)            
        }else if (arr[3] == arr[4] && arr[3] == arr[5] && arr[3] != null && arr[4] != null && arr[5] != null){
            over(curr)
        }else if (arr[6] == arr[7] && arr[6] == arr[8] && arr[6] != null && arr[7] != null && arr[8] != null){
            over(curr)
        }

//vertical
        else if(arr[0] == arr[3] && arr[0] == arr[6]  && arr[0] != null && arr[3] != null && arr[6] != null){
            over(curr)
        }else if (arr[1] == arr[4] && arr[1] == arr[7] && arr[1] != null && arr[4] != null && arr[7] != null){
            over(curr)
        }else if (arr[2] == arr[5] && arr[2] == arr[8] && arr[2] != null && arr[5] != null && arr[8] != null){
            over(curr)
        }
 //Across
        else if (arr[0] == arr[4] && arr[0] == arr[8] && arr[0] != null && arr[4] != null && arr[8] != null){
            over(curr)
        }else if (arr[2] == arr[4] && arr[2] == arr[6] && arr[2] != null && arr[4] != null && arr[6] != null){
            over(curr)
        }else if(HasNull(arr)){
            over("Draw, nobody")
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
function HasNull(array){
    if(arr.length != 9){
        return false;
    }
    for(choice in array){
        if(choice != "X" && choice != "Y"){
            return false
        }
    }

    return true
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
HasNull()
 

}

