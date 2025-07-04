let btn1=document.getElementById("btn1");
        let btn2=document.getElementById("btn2");
        let copyDiv=document.querySelector(".copyCode");

        const hexValues=()=>{
            let hexvalues="abcdef0123456789";
            colors="#";
            for(let i=0;i<6;i++){
                colors=colors+hexvalues[Math.floor(Math.random()*16)];
            }
            return colors;
        }

        const handleBtn1=()=>{
            let rgb1=hexValues();
            let rgb2="#404040";
            console.log(rgb1);
            document.body.style.backgroundImage=`linear-gradient(to right, ${rgb1},${rgb2})`;
            copyDiv.innerHTML=`background-image : linear-gradient(to right,${rgb1},${rgb2}`;
            btn1.innerText=`${rgb1}`;
            btn2.innerText=`${rgb2}`;
        };

        const handleBtn2=()=>{
            let rgb1=hexValues();
            let rgb2=hexValues();
            console.log(rgb2);
            document.body.style.backgroundImage=`linear-gradient(to right, ${rgb1},${rgb2})`;
            copyDiv.innerHTML=`background-image : linear-gradient(to right,${rgb1},${rgb2}`;
            btn1.innerText=`${rgb1}`;
            btn2.innerText=`${rgb2}`;
        };
        btn1.addEventListener("click",handleBtn1);
        btn2.addEventListener("click",handleBtn2);
        copyDiv.addEventListener("click",()=>{
            navigator.clipboard.writeText(copyDiv.innerText);
        })