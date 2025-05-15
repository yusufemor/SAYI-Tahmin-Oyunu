function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let number = getRndInteger(1, 100);
let MyNumber;
let MyNumberBefore;
let denemeSayaci = 0;

function girdi() {
  MyNumber = document.getElementById('girdi').value;
  
  if (MyNumber != MyNumberBefore) {
    MyNumberBefore = MyNumber;
    denemeSayaci = denemeSayaci + 1;
  } else {
    renk("red2");
    innerHTML("paragraf2", "Aynı sayıyı yazdın!");
    return;
  }

  innerHTML('denemeSayaci', denemeSayaci + ". deneme");

  if (MyNumber == number && MyNumber <= 100) {
    renk("green");
    innerHTML("paragraf2", "TEBRİKLER! " + denemeSayaci + ". denemede BİLDİN");
    document.body.style.backgroundColor = "#008000";
  } else {
    if (MyNumber < number && MyNumber <= 100) {
      renk("red");
      innerHTML("paragraf2", "Tuttuğum sayı " + MyNumber + " sayısından büyük.");
    } else if (MyNumber > number && MyNumber <= 100) {
      renk("red");
      innerHTML("paragraf2", "Tuttuğum sayı " + MyNumber + " sayısından küçük.");
    } else {
      renk("red2");
      innerHTML('paragraf2', "Çok büyük sayı yazdın! En fazla 100 yazabilirsin.");
    }
    document.body.style.backgroundColor = "#ff0000";
  }
}

function renk(Renk) {
  document.getElementById('paragraf2').classList.remove("red2");
  document.getElementById('paragraf2').classList.remove("green");
  document.getElementById('paragraf2').classList.remove("blue");
  document.getElementById('paragraf2').classList.remove("red");
  document.getElementById('paragraf2').classList.add(Renk);
}

function innerHTML(Etiket, cumle) {
  document.getElementById(Etiket).innerHTML = cumle;
}

function restartGame() {
  number = getRndInteger(1, 100);
  MyNumberBefore = null;
  denemeSayaci = 0;

  document.getElementById('girdi').value = '';
  innerHTML('paragraf2', '');
  innerHTML('denemeSayaci', '');
  
  document.body.style.backgroundColor = '#ebc8b2';
}

const playButton = document.getElementById("playButton");
const myAudio = document.getElementById("myAudio");

playButton.addEventListener("click", () => {
  myAudio.play();
});
