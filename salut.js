let faussereponse = document.getElementById("wrong1");
let faussereponse2 = document.getElementById("wrong2");
let faussereponse3 = document.getElementById("wrong3");
let faussereponse4 = document.getElementById("wrong4");
let faussereponse5 = document.getElementById("wrong5");
let faussereponse6 = document.getElementById("wrong6");
let faussereponse7 = document.getElementById("wrong7");
let faussereponse8 = document.getElementById("wrong8");
let faussereponse9 = document.getElementById("wrong9");
let faussereponse10 = document.getElementById("wrong10");
let reponsevrai = document.getElementById("Vrai1");
let reponsevrai2 = document.getElementById("Vrai2");
let reponsevrai3 = document.getElementById("Vrai3");
let reponsevrai4 = document.getElementById("Vrai4");
let reponsevrai5 = document.getElementById("Vrai5");
let label1 = document.getElementById('label1');
let label2 = document.getElementById("label2");
let label3 = document.getElementById("label3");
let label4 = document.getElementById("label4");
let label5 = document.getElementById("label5");
let label6 = document.getElementById("label6");
let label7 = document.getElementById("label7");
let label8 = document.getElementById("label8");
let label9 = document.getElementById("label9");
let label10 = document.getElementById("label10");
let label11 = document.getElementById("label11");
let label12 = document.getElementById("label12");
let label13 = document.getElementById("label13");
let label14 = document.getElementById("label14");
let label15 = document.getElementById("label15");

let labelvrai = [label3,label4,label8,label10,label15];
let labelfaux = [label1,label2,label5,label6,label7,label9,label11,label12,label13,label14];
let Vrai= [reponsevrai,reponsevrai2,reponsevrai3,reponsevrai4,reponsevrai5];
let faux = [faussereponse,faussereponse2,faussereponse3,faussereponse4,faussereponse5,faussereponse6,faussereponse7,faussereponse8,faussereponse9,faussereponse10];

function validation() {
    sommefaux=0;
    sommevrai=0;
    for(let i=0; i < labelvrai.length; i++)
    {
        labelvrai[i].style.color = 'green';

        if (Vrai[i].checked === true){
            sommevrai+=1;
        }
    }
    for(let i= 0; i < labelfaux.length; i++)
    {
        labelfaux[i].style.color = 'red';
        if (faux[i].checked === true){
            sommefaux+=1;
        }
    }
    alert( `vous avez comme résultat ${sommevrai} bonne réponse et ${sommefaux} mauvaise réponse `);
}

