window.onload=function(){
    var QA=document.getElementById("QA");
    var WA=document.getElementById("WA");
    var EA=document.getElementById("EA");
    var AA=document.getElementById("AA");
    var SA=document.getElementById("SA");
    var DA=document.getElementById("DA");
    var ZA=document.getElementById("ZA");
    var XA=document.getElementById("XA");
    var CA=document.getElementById("CA");

    var Q=document.getElementById("Q");
    var W=document.getElementById("W");
    var E=document.getElementById("E");
    var A=document.getElementById("A");
    var S=document.getElementById("S");
    var D=document.getElementById("D");
    var Z=document.getElementById("Z"); 
    var X=document.getElementById("X");
    var C=document.getElementById("C");

    var QA1=document.getElementById("QA1");
    var WA1=document.getElementById("WA1");
    var EA1=document.getElementById("EA1");
    var AA1=document.getElementById("AA1");
    var SA1=document.getElementById("SA1");
    var DA1=document.getElementById("DA1");
    var ZA1=document.getElementById("ZA1");
    var XA1=document.getElementById("XA1");
    var CA1=document.getElementById("CA1");
  


    var power=document.getElementById("cmn-toggle-4");
    var mode=document.getElementById("cmn-toggle-5")

    power.checked=true;

    var display=document.getElementById("display");
    console.log('b');


    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 81) {
            console.log(power.checked);
            if(!power.checked){
                console.log("power off");
                QA.classList.add("qdeact");
                window.setTimeout(function(){
                   QA.classList.remove("qdeact"); 
                },300);
            }else{
                QA.classList.add("qact");
                window.setTimeout(function(){
                    QA.classList.remove("qact"); 
                },300);
                QA.onclick();
                console.log('QA');
            }
        }
    });


    QA.onclick=function (){
        if(!mode.checked && power.checked){
            Q.play();
            display.innerText="Fizz";
            console.log("mode off");
        }else if(mode.checked && power.checked){
            QA1.play();
            display.innerText="Pianno-1";
            console.log("mode on");
        }
        console.log('QA');
    }

    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 87) {
            if(!power.checked){
                console.log("power off");
                WA.classList.add("wdeact");
                window.setTimeout(function(){
                   WA.classList.remove("wdeact"); 
                },300);
            }else{
                WA.classList.add("wact");
                window.setTimeout(function(){
                    WA.classList.remove("wact"); 
                },300);
                WA.onclick();
                console.log('WA');
            }
        }
    });


    WA.onclick=function (){
        if(!mode.checked && power.checked){
            W.play();
            display.innerText="Buzz";
            console.log("mode off");
        }else if(mode.checked && power.checked){
            WA1.play();
            display.innerText="Pianno-2";
            console.log("mode on");
        }
        console.log('WA');
    }


    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 69) {
            if(!power.checked){
                console.log("power off");
                EA.classList.add("edeact");
                window.setTimeout(function(){
                   EA.classList.remove("edeact"); 
                },300);
            }else{
                EA.classList.add("eact");
                window.setTimeout(function(){
                    EA.classList.remove("eact"); 
                },300);
                EA.onclick();
                console.log('EA');
            }
        }
    });


    EA.onclick=function qclick (){
        if(!mode.checked && power.checked){
            E.play();
            display.innerText="Pop";
            console.log("mode off");
        }else if(mode.checked && power.checked){
            EA1.play();
            display.innerText="Pianno-3";
            console.log("mode on");
        }
        console.log('EA');
    }
    

    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 65) {
            if(!power.checked){
                console.log("power off");
                AA.classList.add("adeact");
                window.setTimeout(function(){
                   AA.classList.remove("adeact"); 
                },300);
            }else{
                AA.classList.add("aact");
                window.setTimeout(function(){
                    AA.classList.remove("aact"); 
                },300);
                AA.onclick();
                console.log('AA');
            }
        }
    });


    AA.onclick=function qclick (){
        if(!mode.checked && power.checked){
            A.play();
            display.innerText="Clap";
            console.log("mode off");
        }else if(mode.checked && power.checked){
            AA1.play();
            display.innerText="Side-Kick";
            console.log("mode on");
        }
        console.log('AA');
    }

    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 83) {
            if(!power.checked){
                console.log("power off");
                SA.classList.add("sdeact");
                window.setTimeout(function(){
                   SA.classList.remove("sdeact"); 
                },300);
            }else{
                SA.classList.add("sact");
                window.setTimeout(function(){
                    SA.classList.remove("sact"); 
                },300);
                SA.onclick();
                console.log('SA');
            }
        }
    });


    SA.onclick=function qclick (){
        if(!mode.checked && power.checked){
            S.play();
            display.innerText="Heat-1";
            console.log("mode off");
        }else if(mode.checked && power.checked){
            SA1.play();
            display.innerText="Header";
            console.log("mode on");
        }
        console.log('SA');
    }

    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 68) {
            if(!power.checked){
                console.log("power off");
                DA.classList.add("ddeact");
                window.setTimeout(function(){
                   DA.classList.remove("ddeact"); 
                },300);
            }else{
                DA.classList.add("dact");
                window.setTimeout(function(){
                    DA.classList.remove("dact"); 
                },300);
                DA.onclick();
                console.log('DA');
            }
        }
    });


    DA.onclick=function qclick (){
        if(!mode.checked && power.checked){
            D.play();
            display.innerText="Heat-2";
            console.log("mode off");
        }else if(mode.checked && power.checked){
            DA1.play();
            display.innerText="Fizz-Buzz";
            console.log("mode on");
        }
        console.log('DA');
    }

    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 90) {
            if(!power.checked){
                console.log("power off");
                ZA.classList.add("zdeact");
                window.setTimeout(function(){
                   ZA.classList.remove("zdeact"); 
                },300);
            }else{
                ZA.classList.add("zact");
                window.setTimeout(function(){
                    ZA.classList.remove("zact"); 
                },300);
                ZA.onclick();
                console.log('ZA');
            }
        }
    });


    ZA.onclick=function qclick (){
        if(!mode.checked && power.checked){
            Z.play();
            display.innerText="Heat-3";
            console.log("mode off");
        }else if(mode.checked && power.checked){
            ZA1.play();
            display.innerText="Rock-N-Roll";
            console.log("mode on");
        }
        console.log('ZA');
    }

    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 88) {
            if(!power.checked){
                console.log("power off");
                XA.classList.add("xdeact");
                window.setTimeout(function(){
                   XA.classList.remove("xdeact"); 
                },300);
            }else{
                XA.classList.add("xact");
                window.setTimeout(function(){
                    XA.classList.remove("xact"); 
                },300);
                XA.onclick();
                console.log('XA');
            }
        }
    });


    XA.onclick=function qclick (){
        if(!mode.checked && power.checked){
            X.play();
            display.innerText="Drum";
            console.log("mode off");
        }else if(mode.checked && power.checked){
            XA1.play();
            display.innerText="Finisher";
            console.log("mode on");
        }
        console.log('XA');
    }

    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 67) {
            if(!power.checked){
                console.log("power off");
                CA.classList.add("cdeact");
                window.setTimeout(function(){
                   CA.classList.remove("cdeact"); 
                },300);
            }else{
                CA.classList.add("cact");
                window.setTimeout(function(){
                    CA.classList.remove("cact"); 
                },300);
                CA.onclick();
                console.log('CA');
            }
        }
    });


    CA.onclick=function qclick (){
        if(!mode.checked && power.checked){
            C.play();
            display.innerText="Closure";
            console.log("mode off");
        }else if(mode.checked && power.checked){
            CA1.play();
            display.innerText="Bang";
            console.log("mode on");
        }
        console.log('CA');
    }

    

}