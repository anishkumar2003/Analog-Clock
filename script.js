const hh=document.querySelector('.hour');
const min=document.querySelector('.min');
const sec=document.querySelector('.sec');


const setcloc=()=>
{
    let day=new Date;

    let h=day.getHours()*30;
    let m=day.getMinutes()*6;
    let s=day.getSeconds()*6;
    console.log(h,m,s);

    hh.style.transform=`rotateZ(${(h)}deg)`;
    min.style.transform=`rotateZ(${m}deg)`;
    sec.style.transform=`rotateZ(${s}deg)`;
}
setcloc();

setInterval(setcloc,1000);   


const btn = document.querySelector('.btn');
let isWhiteBackground = true;
const clock=document.querySelector('.clock');

const changebg = () => {
    if (isWhiteBackground) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        clock.style.boxShadow = '0 0 20px 5px rgba(255, 255, 255, 0.7)';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        setTimeout(()=>
        {
            clock.style.boxShadow = 'none';
        },3000);
    }
    isWhiteBackground = !isWhiteBackground; 
}

btn.addEventListener('click', changebg);