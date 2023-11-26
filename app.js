const h1 = document.querySelector("div.hello:first-child h1")

console.log(h1)

let handleTitleClick = () =>  {
    const currentcolor = h1.style.color;
    let newcolor;
    if(currentcolor === "blue"){
        newcolor = "orange";
    } else {
        newcolor = "blue";
    }
    h1.style.color = newcolor;
};

h1.addEventListener("click", handleTitleClick);


// let handleMouseEnter = () => {
//     h1.innerHTML = "Mouse is here!";
// };

// let handleMouseLeave = () => {
//     h1.innerHTML = "Mouse is gone!";
// };

// let handleWindowResize = () => {
//     document.body.style.background = "tomato";
// };

// function handleWindowCopy() {
//     alert("copier!");
// }

// function handleWindowOffline() {
//     alert("SOS Internet down")
// }

// function handleWindowOnline() {
//     alert("Internet is online!");
// }

// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);
// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);