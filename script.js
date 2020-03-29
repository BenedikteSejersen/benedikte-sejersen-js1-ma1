// question 1
const cat = {
    complain: function() {
        console.log("Meow!");
    }
    
};
cat.complain();
console.log(cat.complain);
// Meow!
// function complain()


// question 2
const heading = document.querySelector("h3");
console.log(heading);
// <h3> ....


// question 3
heading.style.fontSize = "2em";
// <h3 style="font-size: 2em;">Subheading</h3>


// question 4
heading.classList.add("subheading");
//<h3 style="font-size: 2em;" class="subheading">Subheading</h3>


// question 5
let paragraph = document.querySelectorAll("p");
console.log(paragraph);
//NodeList(5) [ p, p, p, p, p ]


// question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p> New paragraph </p>`;
// <div class="results"><p> New paragraph </p></div>
//   <p> New paragraph </p>
// </div>


// question 7
function listOfCats(catArray) {
    for (let i=0; i<catArray.length; i++) {
        console.log(catArray[i].name);
    }
};
listOfCats(cats);
// Blob
// Harold
// Blurt


// question 8
function listOfCats(catArray) {
    for (let i=0; i<catArray.length; i++) {
        const catName = `<h5>` + catArray[i].name + `</h5>`;
        console.log(catName);
    }
};
listOfCats(cats);
// <h5>Blob</h5>
// <h5>Harold</h5>
// <h5>Blurt</h5>


// question 9
const resultsContainer = document.querySelector(".results");

function listOfCats(catArray) {
    let catsName ="";
        for (let i=0; i<catArray.length; i++) {
            catsName += `<h5>${catArray[i].name}</h5>`;
            console.log(catsName);
        }
   return catsName;
};
resultsContainer.innerHTML = listOfCats(cats);
// only one (selected) name will de displayed in the browser


// question 10
const resultsContainer = document.querySelector(".results");

function listOfCats(catArray) {
  let catsNameAndAge = "";

    for (var i = 0; i < catArray.length; i++) {
        catsNameAndAge += "<div><h5>" + catArray[i].name + "</h5><p>";

        if (catArray[i].age === undefined) {
            catsNameAndAge += "Age unknown";
        } else {
            catsNameAndAge += catArray[i].age;
        }

        catsNameAndAge += "</p></div>";
    console.log(catsNameAndAge);
    };

  return catsNameAndAge;
}

resultsContainer.innerHTML = listOfCats(cats);