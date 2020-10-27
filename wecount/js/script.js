// TAB SWTICH START//

// const practice = document.querySelector(".practice");
// const tabBtns = document.querySelectorAll(".tab-btn");
// const sections = document.querySelectorAll(".content");

// practice.addEventListener("click", function (e) {
//     const id = e.target.dataset.id;
//     if (id) {
//     // remove selected from other buttons
//     tabBtns.forEach(function (tabBtn) {
//         tabBtn.classList.remove("active");
//     });
//     e.target.classList.add("active");
//     // hide other sections
//     sections.forEach(function (section) {
//         section.classList.remove("active");
//     });
//     const element = document.getElementById(id);
//     element.classList.add("active");
//     }
// });

// TAB SWITCH END //


// WEATHER CHECK START //
const reportSect = document.getElementById('weather-report');
const cityForm = document.getElementById('city-form');
const cityInput = document.getElementById('city');

let apiRequest = new XMLHttpRequest();

cityForm.addEventListener('submit', ($event) => {
   $event.preventDefault();
    const chosenCity = cityInput.value;
    apiRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + chosenCity + '&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e');
    apiRequest.send();
});

// Response State
apiRequest.onreadystatechange = () => {
    if (apiRequest.readyState === 4) {
        if (apiRequest.status === 404) {
            return reportSect.textContent = 'City not found!';
        }
        const response = JSON.parse(apiRequest.response);
        reportSect.textContent = 'The weather in ' + response.name + ' is ' + response.weather[0].main + '.';
    }
}

// WEATHER CHECK END //


// COUNTER START //
// set inital value to zero
// let count = 0;
// select value and buttons
// const value = document.querySelector("#value");
// const btns = document.querySelectorAll(".btn");

// btns.forEach(function (btn) {
    
//     btn.addEventListener("click", function ($event) {
//         $event.preventDefault();
//         const styles = $event.currentTarget.classList;
//         if (styles.contains("decrease")) {
//             count--;
//         } else if (styles.contains("increase")) {
//             count++;
//         } else {
//             count = 0;
//         }

//         if (count > 0) {
//             value.style.color = "green";
//         }
//         if (count < 0) {
//             value.style.color = "red";
//         }
//         if (count === 0) {
//             value.style.color = "#222";
//         }
//         value.textContent = count;
//     });
// });

// COUNTER END //

