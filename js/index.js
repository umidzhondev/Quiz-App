const quesitions = [
  (one = {
    quiz: "Mening ismim nima?",
    a: "Men qaerdan bilaman?",
    b: "Abdulloh",
    c: "Aziz",
    trueAnswer: "Umidjon",
  }),
  (two = {
    quiz: "Mening yoqtirgan dasturlash tilim qaysi?",
    a: "Python",
    b: "Php",
    c: "Java",
    trueAnswer: "JavaScript",
  }),
  (three = {
    quiz: "Mening yoshim nechada?",
    a: 17,
    b: 18,
    c: 140,
    trueAnswer: 15,
  }),
  (four = {
    quiz: "Men qaysi turdagi dasturchiman?",
    a: "Mobile",
    b: "Cyber Security",
    c: "Game",
    trueAnswer: "Web",
  }),
  (five = {
    quiz: "Men nechta dasturlash tilini bilaman?  ",
    a: "1",
    b: "4",
    c: "3",
    trueAnswer: "2",
  }),
];

let var1 = document.querySelector("#variant1"),
  var2 = document.querySelector("#variant2"),
  var3 = document.querySelector("#variant3"),
  var4 = document.querySelector("#variant4"),
  item1 = document.querySelector("#item-1"),
  item2 = document.querySelector("#item-2"),
  item3 = document.querySelector("#item-3"),
  item4 = document.querySelector("#item-4"),
  btn = document.querySelector("#btn"),
  quizIn = document.querySelector("#quiz"),
  list = document.querySelector(".list"),
  check = document.querySelector("#d"),
  button = document.querySelector(".button"),
  startBtn = document.querySelector("#start"),
  card = document.querySelector("#card"),
  count = 0,
  ball = 0,
  text2 = "Tabriklaymiz !",
  text1 = "Afsuski ,",
  text3 = "Ofarin ! ";

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  card.style.display = "flex";
  main();
});

changeDates();

function changeDates() {
  quizIn.textContent = quesitions[count].quiz;
  var1.textContent = quesitions[count].a;
  var2.textContent = quesitions[count].b;
  var3.textContent = quesitions[count].c;
  var4.textContent = quesitions[count].trueAnswer;
}

function source() {
  if (check.checked) {
    ball++;
    check.checked = false;
  } else if (!check.checked) {
    document.querySelectorAll(".item input").forEach((input) => {
      input.checked = false;
    });
  }
}

function result() {
  list.innerHTML = "";
  list.classList.add("list-height");
  quizIn.textContent = "Test yakunlandi!";

  let li = document.createElement("li");
  li.style.cssText = `
  font-size:1.3rem;
  color:#fff !important;
  padding: 0px;
  width: 320px !important ;
  display:inline-block;
  `;
  if (ball === 0) {
    li.innerHTML = ` ${text1} Siz ${quesitions.length} ta savoldan hech qaysisiga <br> to'gri javob bermadingiz `;
  } else if (ball <= 4) {
    li.innerHTML = ` ${text2} Siz ${quesitions.length} ta <br> savoldan ${ball} tasiga <br> to'gri javob berdingiz`;
  } else if (ball > 4 && ball === 5) {
    li.innerHTML = ` ${text3} Siz ${quesitions.length} ta <br> savoldan hammasiga <br> to'gri javob berdingiz`;
  }

  list.appendChild(li);
}

function main() {
  btn.addEventListener("click", () => {
    randomItems();
    count++;
    source();

    if (count > 4) {
      result();
      btn.remove();
      restart();
    } else if (count <= 4) {
      changeDates();
    }
  });
}

function randomItems() {
  let randomNum1 = Math.floor(
    Math.random() * Math.floor(quesitions.length - 1)
  );
  let randomNum4 = Math.floor(
    Math.random() * Math.floor(quesitions.length + 1)
  );
  let randomNum2 = Math.floor(
    Math.random() * Math.floor(quesitions.length + 2)
  );
  let randomNum3 = Math.floor(
    Math.random() * Math.floor(quesitions.length - 2)
  );
  item1.style.order = randomNum4;
  item2.style.order = randomNum2;
  item3.style.order = randomNum3;
  item4.style.order = randomNum1;
}

function restart() {
  let restartBtn = document.createElement("button");
  restartBtn.classList.add("btn-lg", "btn-warning", "fs-3", "w-100");
  restartBtn.textContent = "Qayta urinish";
  button.appendChild(restartBtn);
  restartBtn.addEventListener("click", () => {
    let url = location.href;
    window.open(url, "_self");
  });
}
