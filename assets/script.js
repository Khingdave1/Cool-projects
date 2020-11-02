/*===== SHOW MENU =====*/
function openNav() {
    document.getElementById("mySidenav").style.left = "0";
}

function closeNav() {
    document.getElementById("mySidenav").style.left = "-1000%";
}

/*===== SHOW WORKS =====*/
const projectList = document.querySelector(".projects-list");
const projects = [
    { name: "3d card effect", image: "assets/img/3d-card-effect.png", live: "3dcardeffect/index.html"},
    { name: "Essence", image: "assets/img/essence.png", live: "essence/index.html"},
    { name: "Text slider", image: "assets/img/text-slider.png", live: "textslider/index.html"},
    { name: "Weather", image: "assets/img/weather.png", live: "wecount/index.html"},
    { name: "Counter", image: "assets/img/counter.png", live: "counter/index.html"},
    { name: "Countdown", image: "assets/img/countdown.png", live: "countdown/index.html"},
    { name: "CSS variables with JS", image: "assets/img/cvwjs.png", live: "cssvariableswithjs/index.html"},
    { name: "Drum keys", image: "assets/img/drum-keys.png", live: "drumkeys/index.html"},
    { name: "Animate page load", image: "assets/img/animate-page-load.png", live: "animatepageload/index.html"},
    { name: "JS clock", image: "assets/img/js-clock.png", live: "jsclcok/index.html"},
    { name: "Array cardio", image: "assets/img/array-cardio.png", live: "arraycardio/index.html"},
    { name: "Sign in", image: "assets/img/signin.png", live: "signinform/index.html"}
];

function showProjects() {
    let output = "";
    projects.forEach(
    ({ name, image, live}) =>
    (output += `
            <div class="projects-item">
                <img src=${image}>
                <div class="projects-details">
                    <p>${name}</p>
                    <a href=${live} target="_blank">View</a>
                </div>
            </div>
            `)
    )
    projectList.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showProjects);

// register the service worker 
if ("serviceWorker" in navigator) { 
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("../serviceWorker.js")
        .then(result => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err)); //err => error
    });
}  
// NB: Here, we start by checking if the service Worker is supported by the current browser. Because it's still not supported by all browsers. Then, we listen to the page load event to register our service worker by passing the name of our file serviceWorker.js to navigator.serviceWorker.register() as a parameter to register our worker. With this update, we have now transformed our regular web app to a PWA.


const toggleSwitch = document.querySelector('.toggle-switch');

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.documentElement.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
    document.documentElement.classList.toggle("light-theme");
}

toggleSwitch.addEventListener("click", function () {
    if (prefersDarkScheme.matches) {
        document.documentElement.classList.toggle("light-theme");
        var theme = document.documentElement.classList.contains("light-theme") ? "light" : "dark";
    } else {
        document.documentElement.classList.toggle("dark-theme");
        var theme = document.documentElement.classList.contains("dark-theme") ? "dark" : "light";
    }
    localStorage.setItem("theme", theme);
});