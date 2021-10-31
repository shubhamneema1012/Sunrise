let b="race a car";
let a="0abcdefghijklmnopqrstuvwxyz";
let c=new Array();
let d=0;
for(let i=0;i<b.length;i++){
    if(a.includes(b[i].toLowerCase())){
        c[d]=b[i].toLowerCase();
        d++;
    }
}
if(c.join("")==c.reverse().join()){
    console.log(true);
}else{
    console.log(false);
}"P"
