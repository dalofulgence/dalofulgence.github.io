import {Hike} from './hike.js';

let hikes = [];

let hike1 = new Hike("Bechler Falls", "falls.jpg", 
"Image of Bechler Falls", "3 miles",
 "Easy", "Beautiful short hike along the Bechler river to Bechler Falls", 
 "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.");



let hike2 = new Hike("Teton Canyon", "falls.jpg", "Image of Bechler Falls",
"3 miles", "Easy","Beautiful short (or long) hike through Teton Canyon.",
"Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.");

let hike3 = new Hike("Denanda Falls", "falls.jpg", "Image of Bechler Falls",
"7 miles", "Moderate","Beautiful hike through Bechler meadows river to Denanda Falls",
"Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.");
hikes.push(hike1);
hikes.push(hike2);
hikes.push(hike3);

console.log(hikes);

 //create an array of hikes
// const hikeList = [
//     {
//       name: "Bechler Falls",
//       imgSrc: "falls.jpg",
//       imgAlt: "Image of Bechler Falls",
//       distance: "3 miles",
//       difficulty: "Easy",
//       description:
//         "Beautiful short hike along the Bechler river to Bechler Falls",
//       directions:
//         "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
//     },
//     {
//       name: "Teton Canyon",
//       imgSrc: "falls.jpg",
//       imgAlt: "Image of Bechler Falls",
//       distance: "3 miles",
//       difficulty: "Easy",
//       description: "Beautiful short (or long) hike through Teton Canyon.",
//       directions:
//         "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
//     },
//     {
//       name: "Denanda Falls",
//       imgSrc: "falls.jpg",
//       imgAlt: "Image of Bechler Falls",
//       distance: "7 miles",
//       difficulty: "Moderate",
//       description:
//         "Beautiful hike through Bechler meadows river to Denanda Falls",
//       directions:
//         "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
//     }
//   ];
  
  const imgBasePath = "https://byui-cit.github.io/cit261/examples/";
  //on load grab the array and insert it into the page
  window.addEventListener("load", () => {
    showHikeList();
  });
  
  function showHikeList(){
    const hikeListElement = document.getElementById("hikes");
    hikes.forEach(hike => {
       hikeListElement.appendChild(renderOneHike(hike));
       });
    
      
    };

  
  // function showHikeList() {
  //   const hikeListElement = document.getElementById("hikes");
  //   hikeListElement.innerHTML = "";
  //   renderHikeList(hikes, hikeListElement);
  // }
  
  // function renderHikeList(hikes, parent) {
  //   hikes.forEach(hike => {
  //     parent.appendChild(renderOneHike(hike));
  //   });
  // }
  function renderOneHike(hike) {
    const item = document.createElement("li");
    console.log(hike);
  
    item.innerHTML = ` <h2>${hike.name}</h2>
          <div class="content">
          <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
          <div class="info">
                  <div>
                      <h3>Distance</h3>
                      <p>${hike.distance}</p>
                  </div>
                  <div>
                      <h3>Difficulty</h3>
                      <p>${hike.difficulty}</p>
                  </div>
                  <div>
                      <h3>Description</h3>
                      <p>${hike.description}</p>
                  </div>
                  <div>
                      <h3>Directions</h3>
                      <p>${hike.directions}</p>
                  </div>
          </div>
          </div>`;
  
    return item;
  }
 