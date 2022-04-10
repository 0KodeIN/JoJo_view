let arr = new Array(5);
for(let i = 0; i <arr.length;i++){
    arr[i] = new Array(5);
}
for(let i = 0; i <5;i++){
    for(let j = 0; j<5;j++){
        arr[i][j]= i * 2;
    }
}
console.log(arr);
let new_arr = new Array(5);
for(let i = 0; i <arr.length;i++){
    new_arr[i] = new Array(5);
}

for(let i = 0; i<5;i++){
     new_arr[i] = arr[i].map((num) => num * 2);
}
var check = 0;
console.log(new_arr);
let sezon1 = document.getElementById("1s");
sezon1.onclick = function(){
    var app = document.querySelector('.app');
    if(check != 0){
        for(let i = 0;i < 5;i++){
            app.removeChild(app.firstChild)
        }
    }
    let n = 24;
    for(let i = 0;i < 24;i++){
        var div = document.createElement('div');
        div.className = "sezon1";
        div.innerHTML = `<img src="img/1s_c2.png" alt="" class="vue-img"> <p>1 сезон ${n--} серия</p> <button id = "1s${n+1}">Перейти</button> `;
        div.id = `1s${n+1}ch`;
        app.insertBefore(div, app.firstChild);
        check = 1;
    }

}
// sezon.onclick = createVideo();

