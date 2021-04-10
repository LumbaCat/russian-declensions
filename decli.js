var sections = new Array(14);
var tailleSection = sections.length;
for (var i = 0; i < tailleSection; i++)
{
	sections[i] = new Array();
}



var ops = new Array(tailleSection);
var opInner = ["Pronoms personnels", "Pronoms possessifs singuliers", "Pronoms possessifs pluriels",
				"Pronom possessif général","Adjectifs durs", "Adjectifs mous", "Noms singuliers",
				"Noms pluriels", "Qui, quoi, réflexif", "Pronom défini emphatique",
				"Appartenence (à qui? de qui?)", "Quel", "Lequel", "Pronom adjectival (tout)"];

for (var i=0; i<ops.length; i++){
	ops[i] = document.createElement("option");
    ops[i].value = i;
    ops[i].innerHTML  = opInner[i];
    document.getElementById("sections").appendChild(ops[i]);
}

var ops2 = new Array(2);
var op2Inner = ["Révision", "Test"];

for (var i=0; i<ops2.length; i++){
    ops2[i] = document.createElement("option");
    ops2[i].value = i+1;
    ops2[i].innerHTML  = op2Inner[i];
    document.getElementById("mode").appendChild(ops2[i]);
}

function nbAlea(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min +1)) + min;
  }


var tableauPronoms =["",
"1re sing.",
"2e sing.",
"3e sing. masc.",
"3e sing. fem.",
"3e sing. neut.",
"1re pl.",
"2e pl.",
"3e pl.",
"Nominatif",
"я",
"ты",
"он",
"она",
"оно",
"мы",
"вы",
"они",
"Accusatif",
"меня",
"тебя",
"(н)его",
"(н)её",
"(н)его",
"нас",
"вас",
"(н)их",
"Datif",
"мне",
"тебе",
"(н)ему",
"(н)ей",
"(н)ему",
"нам",
"вам",
"(н)им",
"Génitif",
"меня",
"тебя",
"(н)его",
"(н)её",
"(н)его",
"нас",
"вас",
"(н)их",
"Instrumental",
"мной",
"тобой",
"(н)им",
"(н)ей",
"(н)им",
"нами",
"вами",
"(н)ими",
"Locatif",
"(обо) мне",
"(о) тебе",
"(о) нём",
"(о) ней",
"(о) нём",
"(о) наc",
"(о) вас",
"(о) них"];

var tableauPossessifs = ["",
"Masculin",
"Féminin",
"Neutre",
"Pluriel",
"Nominatif",
"мой",
"моя",
"моё",
"мои",
"Accusatif",
"мой / моегo",
"мою",
"моё",
"мои / моих",
"Datif",
"моему",
"моей",
"моему",
"моим",
"Génitif",
"моегo",
"моей",
"моегo",
"моих",
"Instrumental",
"моим",
"моей",
"моим",
"моим·",
"Locatif",
"моём",
"моей",
"моём",
"моих"];

var tableauPossessifs2 =["",
"Masculin",
"Féminin",
"Neutre",
"Pluriel",
"Nominatif",
"наш",
"наша",
"наше",
"наши",
"Accusatif",
"наш / нашего",
"нашу",
"наше",
"наши / наших",
"Datif",
"нашему",
"нашей",
"нашему",
"нашим",
"Génitif",
"нашего",
"нашей",
"нашего",
"наших",
"Instrumental",
"нашим",
"нашей",
"нашим",
"нашими",
"Locatif",
"нашем",
"нашей",
"нашем",
"наших"];

var tableauAdjectifsDurs =["",
"Masculin",
"Féminin",
"Neutre",
"Pluriel",
"Nominatif",
"-ый",
"-ая",
"-ое",
"-ые",
"Accusatif",
"-ый / -ого",
"-ую",
"-ое",
"-ые / -ых",
"Génitif",
"-ого",
"-ой",
"-ого",
"-ых",
"Datif",
"-ому",
"-ой",
"-ому",
"-ым",
"Instrumental",
"-ым",
"-ой",
"-ым",
"-ыми",
"Locatif",
"-ом",
"-ой",
"-ом",
"-ых"];

var tableauAdjectifsMous =["",
"Masculin",
"Féminin",
"Neutre",
"Pluriel",
"Nominatif",
"-ий",
"-яя",
"-ее",
"-ие",
"Accusatif",
"-ий / -его",
"-юю",
"-ее",
"-ие / -их",
"Génitif",
"-его",
"-ей",
"-его",
"-их",
"Datif",
"-ему",
"-ей",
"-ему",
"-им",
"Instrumental",
"-им",
"-ей",
"-им",
"-ими",
"Locatif",
"-ем",
"-ей",
"-ем",
"-их"];

var tableauNomsSinguliers  =["",
"Masculin: \"стол\"",
"Masculin: \"музей\"",
"Masculin: \"словарь\"",
"Féminin: \"карта\"",
"Féminin: \"дыня\"",
"Féminin: \"станция\"",
"Féminin: \"ночь\"",
"Neutre: \"эхо\"",
"Neutre: \"море\"",
"Neutre: \"здание\"",
"Nominatif",
"ø",
"-й",
"-ь",
"-а",
"-я",
"-ия",
"-ь",
"-о",
"-е",
"-ие",
"Accusatif",
"ø / -а",
"-й / -я",
"-ь / -я",
"-у",
"-ю",
"-ию",
"-ь",
"-о",
"-е",
"-ие",
"Génitif",
"-а",
"-я",
"-я",
"-ы (-и)",
"-и",
"-ии",
"-и",
"-а",
"-я",
"-ия",
"Datif",
"-у",
"-ю",
"-ю",
"-е",
"-e",
"-ии",
"-и",
"-у",
"-ю",
"-ию",
"Instrumental",
"-ом",
"-ем",
"-em / -ëm",
"-ой",
"-ей",
"-ией",
"-ю",
"-ом",
"-ем",
"-ием",
"Locatif",
"-е",
"-е",
"-е",
"-е",
"-е",
"-ии",
"-и",
"-е",
"-е",
"-ии"];

var tableauNomsPluriels  =["",
"Masculin: \"столы\"",
"Masculin: \"музеи\"",
"Masculin: \"словари\"",
"Féminin: \"карты\"",
"Féminin: \"дыни\"",
"Féminin: \"станции\"",
"Féminin: \"ночи\"",
"Neutre: \"эха\"",
"Neutre: \"моря\"",
"Neutre: \"здания\"",
"Nominatif",
"-ы",
"-и",
"-и",
"-ы",
"-и",
"-ии",
"-и",
"-а",
"-я",
"-ия",
"Accusatif",
"-ы / -ов",
"-и / -ев",
"-и / -ей",
"-ы / ø",
"-и / -ь",
"-ии / -ий",
"-и / -ей",
"-а / ø",
"-я / -ей",
"-ия / -ий",
"Génitif",
"-ов",
"-ев",
"-ей",
"ø",
"-ь",
"-ий",
"-ей",
"ø",
"-ей",
"-ий",
"Datif",
"-ам",
"-ям",
"-ям",
"-ам",
"-ям",
"-иям",
"-ям",
"-ам",
"-ям",
"-иям",
"Instrumental",
"-ами",
"-ями",
"-ями",
"-ами",
"-ями",
"-иями",
"-ями",
"-ами",
"-ями",
"-иями",
"Locatif",
"-ах",
"-ях",
"-ях",
"-ах",
"-ях",
"-иях",
"-ях",
"-ах",
"-ях",
"-иях"];

var tableauQuiQuiRefl = ["",
"Traduction cas",
"Qui",
"Quoi",
"Réflexif",
"Nominatif",
"Именительный",
"кто",
"что",
"себя",
"Accusatif",
"Винительный",
"кого́",
"что",
"себя́",
"Datif",
"Дательный",
"кому́",
"чему́",
"себе́",
"Génitif",
"Родительный",
"кого́",
"чего́",
"себя́",
"Instrumental",
"Творительный",
"кем",
"чем",
"собо́й",
"Prépositionnel",
"Предложный",
"(о) ком",
"(о) чём",
"себе́"];

var tableauPronomDefEmphatique = ["",
"masculin",
"féminin",
"neutre",
"pluriel",
"Nominatif",
"сам",
"сама́",
"само́",
"са́ми",
"Accusatif",
"самого́",
"саму́",
"самого́",
"сами́х",
"Datif",
"самому́",
"само́й",
"самому́",
"сами́м",
"Génitif",
"самого́",
"само́й",
"самого́",
"сами́х",
"Instrumental",
"сами́м",
"само́й",
"сами́м",
"сами́ми",
"Prépositionnel",
"само́м",
"само́й",
"само́м",
"сами́х"];

var tableauPronPossGen = ["",
"MASCULIN",
"FÉMININ",
"NEUTRE",
"PLURIEL",
"Nominatif",
"свой",
"своя́",
"своё",
"свои́",
"Accusatif",
"своего́",
"свою",
"своего́",
"свои́х",
"Datif",
"своему́",
"свое́й",
"своему́",
"свои́м",
"Génitif",
"своего́",
"свое́й",
"своего́",
"свои́х",
"Instrumental",
"свои́м",
"свое́й",
"свои́м",
"свои́ми",
"Prépositionnel",
"своём",
"свое́й",
"своём",
"свои́х"];

var tableauLequel = ["",
"Masculin",
"Féminin",
"Neutre",
"Pluriel",
"Nominatif",
"кото́рый",
"кото́рая",
"кото́рое",
"кото́рыe",
"Accusatif",
"кото́рый / кото́рого",
"кото́рую",
"кото́рое",
"кото́рыe / кото́рых",
"Datif",
"кото́рому",
"кото́рой",
"кото́рому",
"кото́рым",
"Génitif",
"кото́рого",
"кото́рой",
"кото́рого",
"кото́рых",
"Instrumental",
"кото́рым",
"кото́рой, кото́рою",
"кото́рым",
"кото́рыми",
"Prépositionnel",
"кото́ром",
"кото́рой",
"кото́ром",
"кото́рых"];

var tableauPronomAdjectival = ["",
"Masculin",
"Féminin",
"Neutre",
"Pluriel",
"Nominatif",
"весь",
"вся",
"всё",
"все",
"Accusatif",
"весь / всего",
"всю",
"всё",
"все / всех",
"Datif",
"всему",
"всей",
"всему",
"всем",
"Génitif",
"всего",
"всей",
"всего",
"всех",
"Instrumental",
"всем",
"всей, всею",
"всем",
"всеми",
"Prépositionnel",
"всём",
"всей",
"всём",
"всех"];

var tableauQuel = ["",
"Masculin",
"Féminin",
"Neutre",
"Pluriel",
"Nominatif",
"како́й",
"кака́я",
"како́е",
"каки́е",
"Accusatif",
"како́й / како́го",
"каку́ю",
"како́е",
"каки́е / каки́х",
"Datif",
"како́му",
"како́й",
"како́му",
"каки́м",
"Génitif",
"како́го",
"како́й",
"како́го",
"каки́х",
"Instrumental",
"каки́м",
"како́й",
"каки́м",
"каки́ми",
"Prépositionnel",
"како́м",
"како́й",
"како́м",
"каки́х"];

var tableauAppartenence = ["",
"Masculin",
"Féminin",
"Neutre",
"Pluriel",
"Nominatif",
"чей",
"чья",
"чьё",
"чьи",
"Accusatif",
"чей / чьего́",
"чью",
"чьё",
"чьи / чьих",
"Datif",
"чьему́",
"чьей",
"чьему́",
"чьим",
"Génitif",
"чьего́",
"чьей",
"чьего́",
"чьих",
"Instrumental",
"чьим",
"чьей, чье́ю",
"чьим",
"чьи́ми",
"Prépositionnel",
"чьём",
"чьей",
"чьём",
"чьих"];

  function construireTableau(li,co,tableau,mode,titre) {
	var p = document.getElementById('consignes')
	p.innerHTML  = "Tableau des déclinaisons des "+titre+".";

	  var test = document.getElementById("test");
      var remove = document.getElementById("tableau");
	  test.removeChild(remove);

	  var remove2 = document.getElementById("arreter");
	  test.removeChild(remove2);

	  var table = document.createElement("table");
	  table.setAttribute("id", "tableau");

	  var caption = document.createElement("caption");
	  caption.innerHTML = titre;
	  table.appendChild(caption);

	  var lignes = new Array(li);
	  for(var i = 0; i<li; i++){
		  lignes[i] = document.createElement("tr");
	  }

	  var col = new Array(li);
	  for(var i = 0; i<li; i++){
		  col[i] = new Array(co);
		  if(i == 0){
			  for(var j = 0; j<co; j++){
				  col[i][j] = document.createElement("th");
			  }
		  }else{
			  col[i][0] = document.createElement("th");
			  for(var j = 1; j<co; j++){
				  col[i][j] = document.createElement("td");
				  col[i][j].setAttribute("name", "cases");
				  col[i][j].setAttribute("class", "click");
				  if (mode == 1){
					col[i][j].setAttribute("onclick", "choix(this.id)");
				  }else{
					col[i][j].setAttribute("onclick", "choixTest(this.id)");
				  }

			  }
		  }
	  }

	  var compteurId = 0;
	  for(var i = 0; i<li; i++){
		  for(var j = 0; j<co; j++){
			  col[i][j].setAttribute("id", compteurId.toString());
			  compteurId++;
		  }
	  }

	  col[0][0].setAttribute("class", "thtransp");

	  var a = 0;
	  for(var i = 0; i<li; i++){
		  for(var j = 0; j<co; j++){
			  col[i][j].innerHTML = tableau[a+j];
			  col[i][j].value = tableau[a+j];
		  }
		  a +=(co);
	  }

	  for(var i = 0; i<li; i++){
		  for(var j = 0; j<co; j++){
			  lignes[i].appendChild(col[i][j]);
		  }

		  table.appendChild(lignes[i]);
	  }

	  test.appendChild(table);

	  var formu = document.getElementById("formu");
	  if(mode == 1){
		if(document.getElementById("boutonCacher") == null){
			var bouton1 = document.createElement("button");
			bouton1.setAttribute("id", "boutonCacher");
			bouton1.setAttribute("class", "btn_droite");
			bouton1.innerHTML = "Cacher";
			bouton1.setAttribute("onclick", "toutCacher()");

			var br = document.createElement("br");
			br.setAttribute("id", "br");

			var bouton2 = document.createElement("button");
			bouton2.setAttribute("id", "boutonRemettre");
			bouton2.setAttribute("class", "btn_droite_dessous");
			bouton2.innerHTML = "Montrer";
			bouton2.setAttribute("onclick", "toutRemettre()");

			formu.appendChild(bouton1);
			formu.appendChild(br);
			formu.appendChild(bouton2);
		}
	  }else{
		if(document.getElementById("boutonCacher") != null){
			var bouton1 = document.getElementById("boutonCacher");
			var br = document.getElementById("br");
			var bouton2 = document.getElementById("boutonRemettre");

			formu.removeChild(bouton1);
			formu.removeChild(br);
			formu.removeChild(bouton2);
		}
	  }

	  // ajout <button> arrêter
		arreter= document.createElement("button");
		arreter.setAttribute("id", "arreter");
		arreter.setAttribute("onclick", "document.location.reload(false)");
		arreter.setAttribute("class", "styledArret");
		arreter.innerHTML  = "Arrêter";
		test.appendChild(arreter);
  }

  function choix(id) {
	var section = document.getElementById('sections').value;
	switch(section){
		case '0':
			var tableau = tableauPronoms;
		  break;
		case '1':
			var tableau = tableauPossessifs;
		  break;
		case '2':
		var tableau = tableauPossessifs2;
		break;
		case '3':
			var tableau = tableauPronPossGen;
			break;
		case '4':
			var tableau = tableauAdjectifsDurs;
			break;
		case '5':
			var tableau = tableauAdjectifsMous;
			break;
		case '6':
			var tableau = tableauNomsSinguliers;
			break;
		case '7':
			var tableau = tableauNomsPluriels;
			break;
		case '8':
			var tableau = tableauQuiQuiRefl;
			break;
		case '9':
			var tableau = tableauPronomDefEmphatique;
			break;
		case '10':
			var tableau = tableauAppartenence;
			break;
		case '11':
			var tableau = tableauQuel;
			break;
		case '12':
			var tableau = tableauLequel;
			break;
		case '13':
			var tableau = tableauPronomAdjectival;
			break;
	  }

	  var cellule = document.getElementById(id);
	  if(cellule.innerHTML == tableau[id.toString()]){
		  cellule.innerHTML="";
	  }else{
		  cellule.innerHTML=tableau[id.toString()];
	  }
  }


var value;
var mauvaisesRep = 0;
var bonRep = 0;

var sel;

var c;
var l;

function choixTest(id) {
	// liste des mots
	var cellules = document.getElementsByName("cases");
	var long = cellules.length;

	if(sel == document.getElementById(id)){
		enleverRadioBoxes();


		sel.style = "background-color: #3b3b3b";

		var bon = document.getElementById("bon");
		bon.setAttribute("class", "vert");
		var reste = l-bonRep;
		bon.innerHTML = "Reste: "+reste;

		if(mauvaisesRep > 0){
			var mal = document.getElementById("mal");
			mal.setAttribute("class", "rouge");
			mal.innerHTML = "Erreurs: "+mauvaisesRep;
		}

		sel = null;
	}else{

	for(var i=0; i<long; i++){
		if (cellules[i].style != null){
			cellules[i].style = "background-color: #3b3b3b";
		}else{
			cellules[i].setAttribute("style", "background-color: #3b3b3b");
		}
	}
	// récupération mot
	sel = document.getElementById(id);
	sel.setAttribute("style", "background-color: #264588");

	document.getElementById('sol').innerHTML = "";
	document.getElementById('bon').innerHTML = "";
	document.getElementById('mal').innerHTML = "";
	enleverRadioBoxes();

		//affectation value;
		value = sel.value;

		// 5 nb aleatoires entre 1 et 5
		var radioValue = new Array(5);

		// tableau des cellules
		var memoire = new Array();
		memoire.push(sel.value);
		//defini la place de la trad correcte
		var bonneRep = nbAlea(0, 4);
		radioValue[bonneRep] = sel.value;

		for(var i=0; i<radioValue.length; i++){
			if(i != bonneRep){
				do{
					var indice = nbAlea(0, long-1);
				}while (isIn(cellules[indice].value, memoire));
				memoire.push(cellules[indice].value);
				radioValue[i] = cellules[indice].value;
			}
		}

			// ajout <radio>
			var radios = new Array(5);
			var radioLabel = new Array(5);

			for(var i=0; i<radioLabel.length; i++){
				radioLabel[i] = radioValue[i];
			}

			var divs = new Array(5);

			la = document.getElementById("la");

			for (var i=0; i<radios.length; i++){
				radios[i] = document.createElement("button");
				radios[i].setAttribute("class", "styled");
				radios[i].setAttribute("value", radioValue[i]);
				radios[i].setAttribute("name", "selection");
				radios[i].setAttribute("onclick", "verifier(this)");
				radios[i].innerHTML  = radioLabel[i];

				divs[i] = document.createElement("div");
				divs[i].setAttribute("class", "formu");
				divs[i].appendChild(radios[i]);

				la.appendChild(divs[i]);
			}
	}

}


function isIn(indice, t){
    var retour = false;
    for (var i=0; i<t.length; i++){
        if(t[i] == indice){
            retour = true;
        }
    }
    return retour;
}

function verifier(obj){
	sel.style = "background-color: #3b3b3b";
	if(obj.value == value){
		bonRep++;
		enleverRadioBoxes();
		sel.innerHTML = value;
		sel.removeAttribute("onclick");

		var sol = document.getElementById("sol");
		sol.setAttribute("class", "vert");
		sol.innerHTML = "Bravo!";

		var bon = document.getElementById("bon");
		bon.setAttribute("class", "vert");
		var reste = l-bonRep;
		bon.innerHTML = "Reste: "+reste;

		if(mauvaisesRep > 0){
			var mal = document.getElementById("mal");
			mal.setAttribute("class", "rouge");
			mal.innerHTML = "Erreurs: "+mauvaisesRep;
		}


	}else{
		mauvaisesRep++;
		enleverRadioBoxes();
		var sol = document.getElementById("sol");
		sol.setAttribute("class", "rouge");
		sol.innerHTML = "Dommage!";

		var bon = document.getElementById("bon");
		bon.setAttribute("class", "vert");
		var reste = l-bonRep;
		bon.innerHTML = "Reste: "+reste;

		var mal = document.getElementById("mal");
		mal.setAttribute("class", "rouge");
		mal.innerHTML = "Erreurs: "+mauvaisesRep;

		sel = null;
	}

	var cellules = document.getElementsByName("cases");
	var long = cellules.length;
	var compteur = 0;
	for (var i=0; i<long; i++){
        if(cellules[i].innerHTML != ""){
            compteur++;
		}
	}
	if(compteur == long){
		var sol = document.getElementById("sol");
		sol.setAttribute("class", "vert");
		sol.innerHTML = "Terminé!";

		var bon = document.getElementById("bon");
		bon.innerHTML = "";

		if(mauvaisesRep > 0){
			var mal = document.getElementById("mal");
			mal.setAttribute("class", "rouge");
			mal.innerHTML = "Erreurs: "+mauvaisesRep;
		}
	}
}


  var toutesLesCellules = new Array();
  function remplir() {
	var cellules = document.getElementsByName("cases");
	cellules.forEach(element => {
		toutesLesCellules.push(element.innerHTML);
	});
  }

  function toutCacher() {
	var cellules = document.getElementsByName("cases");
	var long = cellules.length;
		for(var i=0; i<long; i++){
		if(cellules[i].innerHTML == toutesLesCellules[i]){
			cellules[i].innerHTML="";
		}
	}
  }

  function toutRemettre() {
	var cellules = document.getElementsByName("cases");
	var long = cellules.length;
	  for(var i=0; i<long; i++){
		  if(cellules[i].innerHTML != toutesLesCellules[i]){
			  cellules[i].innerHTML=toutesLesCellules[i];
		  }
	  }
  }

function commencer(section, mode){

	mauvaisesRep = 0;
	bonRep = 0;

	switch(section){
		case '0':
			construireTableau(7,9,tableauPronoms,mode,"pronoms personnels");
			remplir();
		  break;
		case '1':
			construireTableau(7,5,tableauPossessifs,mode,"pronoms possessifs singuliers");
			remplir();
		  break;
		case '2':
		construireTableau(7,5,tableauPossessifs2,mode,"pronoms possessifs pluriels");
		remplir();
		break;
		case '3':
		construireTableau(7,5,tableauPronPossGen,mode,"pronom possessif général");
		remplir();
		break;
		case '4':
			construireTableau(7,5,tableauAdjectifsDurs,mode,"adjectifs durs");
			remplir();
			break;
		case '5':
			construireTableau(7,5,tableauAdjectifsMous,mode,"adjectifs mous");
			remplir();
			break;
		case '6':
			construireTableau(7,11,tableauNomsSinguliers,mode,"noms singuliers");
			remplir();
			break;
		case '7':
			construireTableau(7,11,tableauNomsPluriels,mode,"noms pluriels");
			remplir();
		  break;
		case '8':
			construireTableau(7,5,tableauQuiQuiRefl,mode,"pronoms \"qui\", \"quoi\" et réflexif");
			remplir();
		  break;
		case '9':
			construireTableau(7,5,tableauPronomDefEmphatique,mode,"pronom défini emphatique");
			remplir();
		  break;
		case '10':
			construireTableau(7,5,tableauAppartenence,mode,"pronom d'appartenence");
			remplir();
		  break;
		case '11':
			construireTableau(7,5,tableauQuel,mode,"pronom \"quel\"");
			remplir();
		  break;
		case '12':
			construireTableau(7,5,tableauLequel,mode,"pronom \"lequel\"");
			remplir();
		  break;
		case '13':
			construireTableau(7,5,tableauPronomAdjectival,mode,"pronom adjectival (tout)");
			remplir();
		  break;
	  }
	  if(mode == 2){
		// cacher les mots
		toutCacher();
	}
	c = document.getElementsByName("cases");
	l = c.length;
}


function rootCommencer(){

	toutesLesCellules = new Array();

	document.getElementById("sol").innerHTML = "";
	document.getElementById("bon").innerHTML = "";
	document.getElementById("mal").innerHTML = "";

	enleverRadioBoxes();

	// récupère données
	var section = document.getElementById('sections').value;
	var mode = document.getElementById('mode').value;

	commencer(section, mode);
}


function enleverRadioBoxes(){
	var coeur2 = document.getElementById("coeur2");
	var remove = document.getElementById("la");
	coeur2.removeChild(remove);

	nouveauLa = document.createElement("div");
	nouveauLa.setAttribute("id", "la");

	p = document.createElement("p");
	p.setAttribute("class", "transp");
	p.innerHTML = ".";

	nouveauLa.appendChild(p);

	coeur2.appendChild(nouveauLa);
}

