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

function showsecon(){
    document.getElementById('fig').src ='img/secon.jpg'
    document.getElementById('desc').innerHTML=
    '<b>세계 보안 엑스포</b>에 참가하여 다양한 기업들이 적용한 보안 솔루션페어에 참관했습니다.'
}

function showcircuit(){
    document.getElementById('fig').src ='circuit/speaker.jpg'
    document.getElementById('desc').innerHTML=
    '다양한 <b>전기전자회로실습</b>을 통해서 회로를 해석하고 결선하는 능력을 향상시켰습니다.'
}
function showdigital(){
    document.getElementById('fig').src ='img/digital.png'
    document.getElementById('desc').innerHTML=
    '다양한 <b>디지털회로실습</b>을 통해서 하드웨어적인 이진 연산 회로에 대해서 공부하고 회로를 결선하는 능력을 향상시켰습니다.'
}