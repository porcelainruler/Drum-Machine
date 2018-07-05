window.onload=function(){
    var Q=document.getElementById("Q");
    var W=document.getElementById("W");
    var E=document.getElementById("E");
    var A=document.getElementById("A");
    var S=document.getElementById("S");
    var D=document.getElementById("D");
    var Z=document.getElementById("Z");
    var X=document.getElementById("X");
    var C=document.getElementById("C");

    var QA=document.getElementById("QA");
    var WA=document.getElementById("WA");
    var EA=document.getElementById("EA");
    var AA=document.getElementById("AA");
    var SA=document.getElementById("SA");
    var DA=document.getElementById("DA");
    var ZA=document.getElementById("ZA");
    var XA=document.getElementById("XA");
    var CA=document.getElementById("CA");

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

    var display=document.getElementById("display");
    console.log('b');


    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 81) {
            console.log(power.checked);
            if(!power.checked){
                console.log("power off");
                Q.classList.add("qdeact");
                window.setTimeout(function(){
                   Q.classList.remove("qdeact"); 
                },300);
            }else{
                Q.classList.add("qact");
                window.setTimeout(function(){
                    Q.classList.remove("qact"); 
                },300);
                Q.onclick();
                console.log('Q');
            }
        }
    });


    Q.onclick=function (){
        if(!mode.checked){
            QA.play();
            display.innerText="Fizz";
            console.log("mode off");
        }else{
            QA1.play();
            display.innerText="Pianno-1";
            console.log("mode on");
        }
        console.log('Q');
    }

    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 87) {
            if(!power.checked){
                console.log("power off");
                W.classList.add("wdeact");
                window.setTimeout(function(){
                   W.classList.remove("wdeact"); 
                },300);
            }else{
                W.classList.add("wact");
                window.setTimeout(function(){
                    W.classList.remove("wact"); 
                },300);
                W.onclick();
                console.log('W');
            }
        }
    });


    W.onclick=function (){
        if(!mode.checked){
            WA.play();
            display.innerText="Buzz";
            console.log("mode off");
        }else{
            WA1.play();
            display.innerText="Pianno-2";
            console.log("mode on");
        }
        console.log('W');
    }


    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 69) {
            if(!power.checked){
                console.log("power off");
                E.classList.add("edeact");
                window.setTimeout(function(){
                   E.classList.remove("edeact"); 
                },300);
            }else{
                E.classList.add("eact");
                window.setTimeout(function(){
                    E.classList.remove("eact"); 
                },300);
                E.onclick();
                console.log('E');
            }
        }
    });


    E.onclick=function qclick (){
        if(!mode.checked){
            EA.play();
            display.innerText="Pop";
            console.log("mode off");
        }else{
            EA1.play();
            display.innerText="Pianno-3";
            console.log("mode on");
        }
        console.log('E');
    }
    

    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 65) {
            if(!power.checked){
                console.log("power off");
                A.classList.add("adeact");
                window.setTimeout(function(){
                   A.classList.remove("adeact"); 
                },300);
            }else{
                A.classList.add("aact");
                window.setTimeout(function(){
                    A.classList.remove("aact"); 
                },300);
                A.onclick();
                console.log('A');
            }
        }
    });


    A.onclick=function qclick (){
        if(!mode.checked){
            AA.play();
            display.innerText="Clap";
            console.log("mode off");
        }else{
            AA1.play();
            display.innerText="Side-Kick";
            console.log("mode on");
        }
        console.log('A');
    }

    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 83) {
            if(!power.checked){
                console.log("power off");
                S.classList.add("sdeact");
                window.setTimeout(function(){
                   S.classList.remove("sdeact"); 
                },300);
            }else{
                S.classList.add("sact");
                window.setTimeout(function(){
                    S.classList.remove("sact"); 
                },300);
                S.onclick();
                console.log('S');
            }
        }
    });


    S.onclick=function qclick (){
        if(!mode.checked){
            SA.play();
            display.innerText="Heat-1";
            console.log("mode off");
        }else{
            SA1.play();
            display.innerText="Header";
            console.log("mode on");
        }
        console.log('S');
    }

    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 68) {
            if(!power.checked){
                console.log("power off");
                D.classList.add("ddeact");
                window.setTimeout(function(){
                   D.classList.remove("ddeact"); 
                },300);
            }else{
                D.classList.add("dact");
                window.setTimeout(function(){
                    D.classList.remove("dact"); 
                },300);
                D.onclick();
                console.log('D');
            }
        }
    });


    D.onclick=function qclick (){
        if(!mode.checked){
            DA.play();
            display.innerText="Heat-2";
            console.log("mode off");
        }else{
            DA1.play();
            display.innerText="Fizz-Buzz";
            console.log("mode on");
        }
        console.log('D');
    }

    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 90) {
            if(!power.checked){
                console.log("power off");
                Z.classList.add("zdeact");
                window.setTimeout(function(){
                   Z.classList.remove("zdeact"); 
                },300);
            }else{
                Z.classList.add("zact");
                window.setTimeout(function(){
                    Z.classList.remove("zact"); 
                },300);
                Z.onclick();
                console.log('Z');
            }
        }
    });


    Z.onclick=function qclick (){
        if(!mode.checked){
            ZA.play();
            display.innerText="Heat-3";
            console.log("mode off");
        }else{
            ZA1.play();
            display.innerText="Rock-N-Roll";
            console.log("mode on");
        }
        console.log('Z');
    }

    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 88) {
            if(!power.checked){
                console.log("power off");
                X.classList.add("xdeact");
                window.setTimeout(function(){
                   X.classList.remove("xdeact"); 
                },300);
            }else{
                X.classList.add("xact");
                window.setTimeout(function(){
                    X.classList.remove("xact"); 
                },300);
                X.onclick();
                console.log('X');
            }
        }
    });


    X.onclick=function qclick (){
        if(!mode.checked){
            XA.play();
            display.innerText="Drum";
            console.log("mode off");
        }else{
            XA1.play();
            display.innerText="Finisher";
            console.log("mode on");
        }
        console.log('X');
    }

    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 67) {
            if(!power.checked){
                console.log("power off");
                C.classList.add("cdeact");
                window.setTimeout(function(){
                   C.classList.remove("cdeact"); 
                },300);
            }else{
                C.classList.add("cact");
                window.setTimeout(function(){
                    C.classList.remove("cact"); 
                },300);
                C.onclick();
                console.log('C');
            }
        }
    });


    C.onclick=function qclick (){
        if(!mode.checked){
            CA.play();
            display.innerText="Closure";
            console.log("mode off");
        }else{
            CA1.play();
            console.log("mode on");
        }
        console.log('C');
    }

    

}