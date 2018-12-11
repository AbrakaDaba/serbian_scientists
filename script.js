var body = document.getElementsByTagName('body')[0];
var header = body.firstChild.nextSibling;
var img1 = document.createElement('img');
var cover = document.getElementsByClassName('cover')[0];
var content = document.getElementById('content');
var img2 = document.createElement('img');
var bio = document.createElement("p");
var link = document.createElement("a");
var h2 = document.getElementsByTagName('h2')[0];
var modal = document.getElementById('modal');
var circle = document.querySelector('#circles_holder').children; // uhvatimo sve circles
var button = document.createElement("button");
button.innerHTML = "Даље";
button.setAttribute("type", "button");
var inputs = document.getElementsByTagName('input');
var back = document.getElementById("back");
var form = document.createElement("form");
var forma = document.getElementsByTagName('form')[0];
modal.appendChild(form); 
back.style.display = "none";
var texts = {
    tesla: '<div><q> Садашљост је Ваша. Ја радим за будућност и она припада мени!</q><br><br><p><img src="tesla3.jpg" alt="tesla"><strong>Никола Тесла</strong>, један од најблиставијих умова човечанства, рођен је 10. јула 1856. у селу Смиљану, крај Госпића у Лици, у тадашњој Аустријској царевини (данас Република Хрватска), од мајке Ђуке Тесле, рођ. Мандић и оца Милутина Тесле, свештеника Српске Православне Цркве. Мајка Ђука била је, такође, из свештеничке породице, неписмена, паметна и племенита жена. Имала је срећу да, за разлику од оца Милутина, који је умро док је Никола студирао, доживи сву славу свога сина. Осим Николе имали су још једног сина и три кћери.<br><br>Никола је основну школу завршио у Смиљану, а нижу реалну гимназију у Госпићу. Породица се сели у Госпић 1862. године, тако да Никола креће у вишу реалну гимназију у Карловaц. Од раног детињства је показао склоност ка науци. Доста је читао, проводећи многе часове у очевој библиотеци. Након матуре оболео од колере и опорављао се годину дана.<br><br>Једини је Србин по коме је названа једна међународна јединица мере, јединица мере за густину магнетног флукса или јачину магнетног поља — тесла.</p><a href = "https://sr.wikipedia.org/wiki/%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0_%D0%A2%D0%B5%D1%81%D0%BB%D0%B0" target="_blank">Сазнајте више...</a></div>',
    pupin: '<div><q>Ништа човека не чини тако срећним као поштено уверење да је дао све од себе.</q><br><br><p><img src="pupin3.jpg" alt="pupin"><strong>Михајло Пупин</strong> је рођен 9. октобра 1854. године, по грегоријанском календару, или 27. септембра 1854. године по јулијанском календару, у селу Идвор (данас у општини Ковачица) у Банату (тада Аустријско царство, данас Србија). Отац му се звао Константин, а мајка Олимпијада.[3] По одласку у Америку, додао је свом презимену и реч „Идворски“ (енгл. Michael Idvorsky Pupin), чиме је нагласио своје порекло. Имао је четворицу браће и пет сестара.<br><br>Пупин се 1888. године оженио Американком Саром Катарином Џексон из Њујорка са којом је имао ћерку Барбару. У браку су били само 8 година када је она преминула након тешке упале плућа.<br><br>Основно образовање Михајло је стицао најпре у свом родном месту, у српској православној основној школи, а потом у немачкој основној школи у Црепаји. Средњу школу уписао је 1871. године у Панчеву прво у Грађанској школи, а потом у Реалки. У гимназији наставља дружење са Орловаћанином Урошем Предићем, започето у Црепаји.</p><a href="https://sr.wikipedia.org/wiki/%D0%9C%D0%B8%D1%85%D0%B0%D1%98%D0%BB%D0%BE_%D0%9F%D1%83%D0%BF%D0%B8%D0%BD" target="_blank">Сазнајте више...</a></div>',
    milankovic: '<div><q>Духовну својину... њу заиста сматрам за свој феудални посед. Не могу је отуђити и зато не могу осиромашити</q><br><br><p><img src="milankovic3.jpg" alt="milankovic"><strong>Милутин Миланковић</strong> (Даљ, 28. мај 1879. — Београд, 12. децембар 1958) био је српски математичар, астроном, климатолог, геофизичар, грађевински инжењер, доктор техничких наука као и популаризатор науке и физичар.<br><br>Ванредни професор примењене математике био је од 1909. до 1920. године (осим 1914—1918), док је као редовни професор небеске механике радио од 1920. до 1955. (осим 1941—1945) на Универзитету у Београду. Био је декан Филозофског факултета школске 1926/27, пионир у ракетном инжењерству, потпредседник САНУ у три мандата почев од 1948, директор Астрономске опсерваторије у Београду од 1948. до 1951, члан и реоснивач Комисије 7 за небеску механику Међународне астрономске уније од 1948. до 1953. итд.<br><br>Миланковић је дао два фундаментална доприноса науци. Први допринос је „Канон осунчавања Земље” који карактерише све планете Сунчевог система. Други допринос је теоријско објашњење Земљиних дуготрајних климатских промена.</p><a href="https://sr.wikipedia.org/wiki/%D0%9C%D0%B8%D0%BB%D1%83%D1%82%D0%B8%D0%BD_%D0%9C%D0%B8%D0%BB%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D0%B8%D1%9B" target="_blank">Сазнајте више...</a></div>',
}


//cathing circle's number and sending it further
for (i = 0; i < circle.length; i++) {
    circle[i].addEventListener("click", function (e) {
        modal.style.borderRadius = "25px";
        var clicked = e.target; // uhvatimo kliknuti element
        var num = clicked.innerHTML; //uvatimo broj iz kliknutog diva 'circle'
        clicked.parentNode.style.display = "none";
        document.getElementById('circles_shadows').style.display = "none";
        inputForming(num);

    });
}

//formiranje input polja u zavisnosti od izabranog broja
function inputForming(num) {
    var j = 0;
    while (j < num) {
        var input = document.createElement("input");
        form.appendChild(input);
        input.setAttribute('id', "naucnik" + j);
        input.setAttribute('required', "required");
        form.appendChild(input);
       
        h2.innerText = "Унесите презимена научника";
        input.setAttribute('placeHolder', "Унесите презиме " + (j + 1) + ". научникa");
        input.parentNode.firstElementChild.focus();
        if (num == 1) { //placeholderi u odnosu na broj izabranih naucnika
            h2.innerText = "Унесите презиме научника";
            input.setAttribute('placeHolder', "Унесите презиме научникa");
            input.focus();
        }
        j++;
        form.appendChild(button);
    }

    // manipulation with input values
    button.addEventListener('click', function () {
        var names = [];
        for (i = 0; i < num; i++) {
            var lowName = inputs[i].value.toLowerCase();
            if (lowName == "тесла") {
                lowName = "tesla";
            } else if (lowName == "пупин") {
                lowName = "pupin";
            } else if (lowName == "миланковић") {
                lowName = "milankovic"
            } else if (lowName == "milanković") {
                lowName = "milankovic";
            }
            names.push(lowName);
        }
        console.log(names, lowName);
        names = names.filter(element => element == 'tesla' || element == "pupin" || element == 'milankovic' || element == 'тесла' || element == "пупин" || element == 'миланковић' || element == 'milanković');
        var names = new Set(names);
        names = Array.from(names);
        console.log(num, lowName, names);
        formValidation(num, names, lowName)
    });
}

//form validation       
function formValidation(num, names, lowName) {
    for (i = 0; i < num; i++) {
        var lowName = inputs[i].value.toLowerCase();
        //equal inputs
        console.log( inputs[i].value.toLowerCase(), num, lowName, names, names.length, inputs.length);

    if(names.length !== 0 && ((i > 0 &&  inputs[i].value.toLowerCase() == inputs[i - 1].value.toLowerCase()) || (i > 1 &&  inputs[i].value.toLowerCase() == inputs[i - 2].value.toLowerCase()))){ 
            alert("Svi unosi moraju biti različiti!\n\nDozvoljeni unosi su: Tesla, Pupin ili Milanković.");
            //inputs[i] = inputs[i+1];
            wrongInput(inputs, i); 
            inputs[i].setAttribute("placeHolder", `Molimo ponovite unos!`);
            button.click();
            break;
        }
        //wrong inputs
        if (lowName !== "tesla" && lowName !== "pupin" && lowName !== "milankovic" && lowName !== "milanković" && lowName !== "тесла" && lowName !== "пупин" && lowName !== "миланковић") {
            wrongInput(inputs, i);
        } else if (names.length == parseInt(num)) {
            correctInput(inputs, i);
            startingBio(names, i);
        } else {
            correctInput(inputs, i);
        }
    }
};

function wrongInput(inputs, i) {
    inputs[i].setAttribute("placeHolder", `Тесла, Пупин или Миланковић`);
    inputs[i].value = "";
    inputs[i].style.transform = "scale(1.1)";
    inputs[i].style.borderColor = "red";
    inputs[i].style.fontSize = "20px";
    inputs[i].focus();
    inputs[i].classList.remove("checked");
}

function correctInput(inputs, i) {
    inputs[i].style.borderColor = "#888";
    inputs[i].style.transform = "scale(1)";
    inputs[i].style.fontSize = "25px";
    inputs[i].classList.add("checked");
}

function startingBio(names, i) {
    modal.style.backgroundColor = "#568";

    setTimeout(function () {
        cover.style.opacity = "0"
        modal.style.transform = "rotate(1360deg)";
        num = names.length;

        makingBio(num, names, i);
        header.style.borderRadius = "0 0 35% 35%";
    }, 2000);
}


function makingBio(num, names, i) {
    setTimeout(function () {
        cover.style.display = "none";
    }, 3000);

    var slider = document.createElement('div');
    
    slider.classList.add("slider");
    content.appendChild(slider);
    var element = names[i];
    var name;
    var text = texts.element;
    //var littleImg = document.createElement("img");
   // littleImg.setAttribute("src", element + "3.jpg")
    console.log(element);
    if (element == "tesla") {
        name = "Никола Тесла";
    } else if (element == "pupin") {
        name = "Михајло Пупин"
    } else {
        name = "Милутин Миланковић"
    }
    slider.innerHTML = '<h3 id="scientist">' + name + '</h2>' + texts[element];
    slider.style.background = 'radial-gradient(circle, transparent 20%, rgb(12, 12, 12) 85%), url("' + element + '1.jpg"';
    slider.style.backgroundSize = "cover";
    slider.style.backgroundPositionY = "-85px";
    setTimeout(function () {
        slider.style.opacity = "1";
        header.style.marginTop = "-150px";
        back.style.display = "block";
    }, 3500);
}


function screenResizing(x) {
    if (x.matches) { // If media query matches
      back.innerText = "<<";
    } else {
        back.innerText = "<< Birajte ponovo";
    }
  }
var x = window.matchMedia("(max-width: 600px)")
screenResizing(x) // Call listener function at run time
x.addListener(screenResizing) // Attach listener function on state changes
