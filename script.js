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

    var numpad=document.getElementById("drum-machine")

    var display=document.getElementById("display");
    console.log('b');


    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 81) {
            Q.classList.add("qact");
            window.setTimeout(function(){
               Q.classList.remove("qact"); 
            },300);
            Q.onclick();
            console.log('Q');
        }
    });


    Q.onclick=function (){
        QA.play();
        console.log('Q');
    }

    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 87) {
            W.classList.add("wact");
            window.setTimeout(function(){
               W.classList.remove("wact"); 
            },300);
            W.onclick();
            console.log('W');
        }
    });


    W.onclick=function (){
        WA.play();
        console.log('W');
    }


    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 69) {
            E.classList.add("eact");
            window.setTimeout(function(){
               E.classList.remove("eact"); 
            },300);
            E.onclick();
            console.log('E');
        }
    });


    E.onclick=function qclick (){
        EA.play();
        console.log('E');
    }
    

    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 65) {
            A.classList.add("aact");
            window.setTimeout(function(){
               A.classList.remove("aact"); 
            },300);
            A.onclick();
            console.log('A');
        }
    });


    A.onclick=function qclick (){
        EA.play();
        console.log('A');
    }

    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 83) {
            S.classList.add("sact");
            window.setTimeout(function(){
               S.classList.remove("sact"); 
            },300);
            S.onclick();
            console.log('S');
        }
    });


    S.onclick=function qclick (){
        SA.play();
        console.log('S');
    }

    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 68) {
            D.classList.add("dact");
            window.setTimeout(function(){
               D.classList.remove("dact"); 
            },300);
            D.onclick();
            console.log('D');
        }
    });


    D.onclick=function qclick (){
        DA.play();
        console.log('D');
    }

    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 90) {
            Z.classList.add("zact");
            window.setTimeout(function(){
               Z.classList.remove("zact"); 
            },300);
            Z.onclick();
            console.log('Z');
        }
    });


    Z.onclick=function qclick (){
        ZA.play();
        console.log('Z');
    }

    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 88) {
            X.classList.add("xact");
            window.setTimeout(function(){
               X.classList.remove("xact"); 
            },300);
            X.onclick();
            console.log('X');
        }
    });


    X.onclick=function qclick (){
        XA.play();
        console.log('X');
    }

    document.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 67) {
            C.classList.add("cact");
            window.setTimeout(function(){
               C.classList.remove("cact"); 
            },300);
            C.onclick();
            console.log('C');
        }
    });


    C.onclick=function qclick (){
        CA.play();
        console.log('C');
    }

    

}