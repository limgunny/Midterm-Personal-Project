document.getElementById('time').innerHTML=new Date().toLocaleString()

function pink(){
    document.body.style.backgroundColor='pink'
}
function lightblue(){
    document.body.style.backgroundColor='lightblue'
}
function yellow(){
    document.body.style.backgroundColor='#F8FFA2'
}
function reset(){
    document.body.style.backgroundColor='white'
}

function showhtml(){
    document.getElementById('fig').src ='img/zzanggu.gif'
    document.getElementById('desc').innerHTML=
    '<b>짱구테마</b> 입니다.'
}

function showcss(){
    document.getElementById('fig').src ='img/gif2.gif'
    document.getElementById('desc').innerHTML=
    '<b>삐앙이테마</b> 입니다.'
}
