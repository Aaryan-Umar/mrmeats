
  import data from "./desc.json" with { type: "json" };

document.addEventListener("load", function () {
/* 
  let temp1 = document.getElementById("mainTemp");
      let clon1 = temp1.content.cloneNode(true);
      document.body.appendChild(clon1);
      temp1.style.display = "flex" */
      document.home();
    
    
})
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

window.onload = function () {
  document.getElementById("videoAd").scrollIntoView();
  console.log("loaded")


}




let lightImg = document.querySelector(".light-img");
let viewBtn = document.querySelectorAll(".view-btn");
let made = 0;
let input;
viewBtn.forEach((el) => {
  el.addEventListener("click", () => {
    document.getElementsByClassName("light-box")[0].style.display="block"
    document.getElementsByClassName("box-wrapper")[0].style.display="flex"
    document.getElementsByClassName("box")[0].style.display="block"


    document.body.classList.add("effect");
    let imgSrc = el.getAttribute("data-src");
    lightImg.src = imgSrc;
    el.setAttribute("draggable", false);
    lightImg.setAttribute("draggable", false);
    let box = document.querySelector(".box");
    let p = document.createElement("p");
    p.id = made;
    p.innerHTML = descs(imgSrc);
    p.classList.add("desc");
    box.appendChild(p);
    for (let i = 0; i < document.getElementsByClassName("addBtn").length; i++) {
      document.getElementsByClassName("addBtn")[i].remove();
    }
    /*
    let btn = document.createElement("div");
    btn.id = imgSrc;
    btn.classList.add("addBtn");
    btn.innerHTML = "Add To Cart";
    btn.setAttribute("onclick", "addCart(this.id)");
    box.appendChild(btn);
    */
    made++;
  });
});

function descs(type) {
  for (let i = 0; i < made; i++) {
    if (document.getElementById(i.toString()))
      document.getElementById(i.toString()).remove();
  }
  input = type.replace("imgs/", "");
  input = input.replace(".png", "");
  input = input.replace(".jpg", "");
  input = input.replace(".jpeg", "");


  switch (input) {
    case "protein":
      return data.protein;
    case "iron":
      return data.iron;
    case "zinc":
      return data.zinc;
      
    case "Omega-3":
      return data["Omega-3"];

    case "Water":
      return data.Water;
    case "carbs":
        return data["Carbs"];
    case "Steak":
          return data.Steak
    case "Bread and butter (1)":
        return data.breadbutter;
    case "lasagna":
        return data.lasagna;
    case "Chicken drumstick":
      return data["Chicken drumstick"]
    case "carbwater":
      return data["flavoredwater"];
    case "chickenandrice":
      return data.chickenrice
    case "nuts":
      return data.nuts
    case "angry-chips":
      return data.angryChips
      case "protein-shake":
        return data["protein-shake"];

    case "omega-3":
      return data["Omega-3"];

    case "steakandfries":
      return data.steakandfries;

    case "cheesy-breadsticks":
      return data.cheesybreadsticks;

    case "beef-sandwich":
      return data["beef-sandwich"];
    
    default:
      console.log(input);
      break;
  }
}
window.addEventListener("touchend", (event) => {
  if (
    event.target.className == "box-wrapper" ||
    event.target.className == "close-btn"
  ) {
    document.body.classList.remove("effect");
  }
});

window.addEventListener("click", (event) => {
  if (
    event.target.className == "box-wrapper" ||
    event.target.className == "close-btn"
  ) {
    document.body.classList.remove("effect");
  }
});

document.home = function () {
  console.log("Showed Home")
  /* inner-wrapper, navbar, light-box = Benefits of Meat*/
  document.getElementsByClassName("inner-wrapper")[0].style.display = "none"
  document.getElementsByClassName("navbar")[0].style.display = "flex"
  document.getElementsByClassName("light-box")[0].style.display = "none"
  document.getElementsByTagName("template")[0].style.display = "none"
  document.getElementById("title").style.display = "none"
  document.getElementById("cont").style.display = "flex"
  document.getElementById("homeCont").style.display = "flex"
  if (document.getElementById("team")) document.getElementById("team").style.display = "none";

  document.getElementById("menuCont").style.display = "none"
  console.log("Home")
  document.body.style.display = "block"
  for (let i = 0; i < document.getElementsByClassName("w3-container").length; i++) {
    const element = document.getElementsByClassName("w3-container")[i];
    element.remove()
    tempSpawnCount=0
    
  }


}
let tempSpawnCount = 0;
document.aboutUs = function () {
  document.getElementById("cont").style.display = "none"
  document.getElementById("homeCont").style.display = "none"

  if(document.getElementById("menuCont")) document.getElementById("menuCont").style.display = "none"

  let temp = document.getElementById("aboutUsTemp");
  if(tempSpawnCount < 1)
    {
      let clon = temp.content.cloneNode(true);
      document.body.appendChild(clon);
      tempSpawnCount++
    
    } else {
        document.getElementById("team").style.display = "block";

    }

    
let contactBtns = document.querySelectorAll(".contactBtn");

contactBtns.forEach((el) => {
  el.addEventListener("click", () => {
    let mail;
    if(el.id == "aaryanContact") mail="mailto:aauma5930@ugcloud.ca";
    if(el.id == "tyContact") mail = "mailto:tylev8356@ugcloud.ca";
    if(el.id == "mujibContact") mail = "mailto:musal2804@ugcloud.ca";
    window = window.open(mail, 'emailWindow')
  })
})
}
document.menuSpawnCount = 0

document.showMenu = function () {
  document.getElementById("cont").style.display = "none"
  if (document.getElementById("team"))document.getElementById("team").style.display = "none";

  document.getElementById("menuCont").style.display = "flex"
  document.getElementById("homeCont").style.display = "none"


    



  
}


document.showMeat = function () {
  console.log("Showing Benefits Of Meat")
  document.getElementsByClassName("inner-wrapper")[0].style.display = "flex"
  document.getElementsByClassName("navbar")[0].style.display = "flex"
  document.getElementsByClassName("light-box")[0].style.display = "flex"
    document.getElementById("title").style.display = "flex"
    document.getElementById("menuCont").style.display = "none"
    document.getElementById("homeCont").style.display = "none"

    document.getElementById("cont").style.display = "block"
    document.getElementById("title").style.display = "flex"
    for(let i = 0; i < document.getElementsByClassName("notCard").length; i++){
      let el = document.getElementsByClassName("notCard")[i]
      el.style.display = "initial"
    }
    if(document.getElementById("team"))document.getElementById("team").style.display = "none"




}

document.home()

document.getElementById("toDrinks").addEventListener("click", function () {
  document.showMenu();
  setTimeout(() => {
    document.getElementById("drinksDivider").scrollIntoView();

  }, 300);
})


document.getElementById("toMeat").addEventListener("click", function () {
  document.showMenu();
  setTimeout(() => {
    document.getElementById("mainDishes").scrollIntoView();

  }, 300);
})

