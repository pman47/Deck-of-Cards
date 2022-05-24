// cardsNames
const cardNames = [
  "2C",
  "2D",
  "2H",
  "2S",
  "3C",
  "3D",
  "3H",
  "3S",
  "4C",
  "4D",
  "4H",
  "4S",
  "5C",
  "5D",
  "5H",
  "5S",
  "6C",
  "6D",
  "6H",
  "6S",
  "7C",
  "7D",
  "7H",
  "7S",
  "8C",
  "8D",
  "8H",
  "8S",
  "9C",
  "9D",
  "9H",
  "9S",
  "10C",
  "10D",
  "10H",
  "10S",
  "AC",
  "AD",
  "AH",
  "AS",
  "JC",
  "JD",
  "JH",
  "JS",
  "KC",
  "KD",
  "KH",
  "KS",
  "QC",
  "QD",
  "QH",
  "QS",
];

let cardsArr = [...cardNames];

window.onload = load;

function load() {
  // document.querySelector(".restartContainer").remove();
  // document.getElementById("100").innerHTML = "";
  // document.getElementById("101").innerHTML = "";
  // document.getElementById("102").innerHTML = "";
  // document.getElementById("103").innerHTML = "";
  const container = document.getElementById("container");
  container.innerHTML = "";
  shuffle(cardsArr);
  // let random = Math.floor(Math.random() * 40) + 1;
  for (let i = 0; i < 52; i++) {
    let url = `https://github.com/Newton-School/Deck_of_Cards/blob/main/JPEG/${cardsArr[i]}.jpg?raw=true;`;
    const card = document.createElement("div");
    card.classList.add("card");
    card.draggable = false;
    const img = document.createElement("img");
    img.dataset.cardNo = cardsArr[i];
    img.draggable = true;
    img.ondragstart = onDragStart;
    img.src = url;
    img.classList.add("cardImg");
    img.id = i;
    img.ondragstart = () => {
      onDragStart();
    };
    card.append(img);
    container.append(card);
  }
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function onDragStart() {
  event.dataTransfer.setData("text", event.target.id);
  event.dataTransfer.setData("cardNo", event.target.dataset.cardNo.slice(-1));
  // console.log(event.dataTransfer);
}

function onDrop(event) {
  const id = event.dataTransfer.getData("text");
  const cardNo = event.dataTransfer.getData("cardNo");
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  //   console.log(dropzone.dataset.cardType);
  if (dropzone.dataset.cardType == cardNo) {
    // dropzone.appendChild(draggableElement);
    draggableElement.parentElement.remove();
    draggableElement.remove();
    // draggableElement.classList.remove("cardImg");
    // draggableElement.id = "";
  }
  event.dataTransfer.clearData();
  // checkIfAllDone();
}

function onDragOver(event) {
  event.preventDefault();
}

// function checkIfAllDone() {
//   let flag = false;
//   const container = document.querySelector("#container").childNodes;
//   for (con of container) {
//     if (con.hasChildNodes()) {
//       flag = true;
//     }
//   }
//   if (!flag) {
//     const restartBtn = document.createElement("div");
//     restartBtn.innerHTML = `You Won
//       <br />
//       <button id="restart-button" onclick="window.location.reload()">Restart</button>`;
//     restartBtn.classList.add("restartContainer");
//     document.body.append(restartBtn);
//   }
//   //   if (document.getElementsByClassName("cardImg").length == 0) {
//   //     document.querySelector(".restartContainer").style.display = "flex";
//   //   }
// }
