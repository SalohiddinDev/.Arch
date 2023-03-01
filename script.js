let c  = document.querySelector('#line')
function img(b,h){
    let a =document.getElementById("img")
    a.src=h
    c.style.marginLeft = b*500 +'px'
}
    let b = 0 
    let h = 0
    let p = 0
    let n =0
    let a  = document.getElementById("number")
    let m  = document.getElementById("number2")
    let v = document.querySelector("#col__num")
    let j = document.querySelector("#col__num3")
function sanat2(){
    let o =  setTimeout(()=>{
    h++
    m.innerHTML = h+"+"
    sanat2()    
    },50)
    if(h==50){
        clearTimeout(o)
    }
}
function sanat3(){
    let o =  setTimeout(()=>{
    p++
    v.innerHTML = p
    sanat3()    
    },50)
    if(p==15){
        clearTimeout(o)
    }
}
function sanat4(){
    let o =  setTimeout(()=>{
    n++
    j.innerHTML = n
    sanat4()    
    },100)
    if(n==5){
        clearTimeout(o)
    }
}
function sanat(){
    let g =  setTimeout(()=>{
    b++
    a.innerHTML = b+"+"
    sanat()    
    },50)
    if(b==50){
        clearTimeout(g)
    }
}
sanat()
sanat2()
sanat3()
sanat4()
