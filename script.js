console.log('Peter is een ijsbeer met een bipolaire stoornis.');

//VERANDEREN VAN PETER DE BIPOLAIRE BEER ZIJN STEMMING
//Bron: https://stackoverflow.com/questions/40947791/im-trying-to-generate-a-random-word-from-my-array-with-a-button-click
function displayImg() {

  var images = ["PeterdeBipolarBearNeutraal.png",
    "PeterdeBipolarBearbeetjesad.png",
    "PeterdeBipolarBearmoe.png",
    "PeterdeBipolarBearboos.png",
    "PeterdeBipolarBearverwonderd.png",
    "PeterdeBipolarBearblij.png",
    "PeterdeBipolarBeardood.png",
    "PeterdeBipolarBearetend.png",
    "PeterdeBipolarBeargek.png",
    "PeterdeBipolarBearmisselijk.png",
    "PeterdeBipolarBearslapend.png",
    "PeterdeBipolarBearsmooth.png",
    "PeterdeBipolarBearvampierig.png"
  ];

  var num = Math.floor(Math.random() * (images.length));
  document.canvas.src = "BipolarAfbeeldingen/" + images[num];
}

function print(str) {
  document.getElementById('new').innerHTML = "";
}
print();

function process() {
  var word = displayImg();
  print(word)

}
process()
document.getElementById('btnShow').addEventListener('click', process);

//VERANDEREN VAN DE TIJD VAN DE DAG
//Bron: Huiswerkopdrachten week 3: Jaargetijden
//Declaratie van DOM 
var dagKnopje = document.querySelector('#dagknop');
var namiddagKnopje = document.querySelector('#namiddagknop');
var nachtKnopje = document.querySelector('#nachtknop');



//Eventhandlers
function maakdag() {
  document.body.classList.remove('namiddag', 'nacht');
  document.body.classList.add('dag');
}

function maaknamiddag() {
  document.body.classList.remove('dag', 'nacht');
  document.body.classList.add('namiddag');
}

function maaknacht() {
  document.body.classList.remove('namiddag', 'dag');
  document.body.classList.add('nacht');
}

// eventListeners
dagKnopje.addEventListener('click', maakdag);
namiddagKnopje.addEventListener('click', maaknamiddag);
nachtKnopje.addEventListener('click', maaknacht);


//CONDITIONEEL STATEMENT
//Bron: https://www.youtube.com/watch?v=IsG4Xd6LlsM&t=255s en https://www.w3schools.com/js/js_if_else.asp
//Declaratie van de DOM
var submitKnopje = document.querySelector('#submitknop');

//Eventhandlers
function marksgrade() {
  if (document.ijsbeerformulier.tekstje.value == 30)
    window.alert('Dat is juist, goed gedaan!');
  else if (document.ijsbeerformulier.tekstje.value != 30)
    window.alert('Dat is helaas onjuist. Probeer het opnieuw.');
}

//Eventlisteners
submitKnopje.addEventListener('click', marksgrade);
