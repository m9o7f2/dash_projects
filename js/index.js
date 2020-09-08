// body padding

(function () {
    let aSide = document.querySelector("aside");

    console.log(aSide.offsetHeight)

    document.body.style.paddingLeft = aSide.offsetWidth + "px";
})(),

//progress

(function () {
    let progBar = document.querySelectorAll(".my-prog div");

    progBar.forEach(el => {
        el.style.width = el.getAttribute("data-width");
        el.parentElement.previousElementSibling.innerHTML = el.getAttribute("data-width")
    });

})(),
//time color

(function () {
    let dTime = document.querySelectorAll(".card-info .time");

    dTime.forEach(el => {

        if(el.getAttribute("data-time") <= 2 ){
            el.style.background = "#FDD7DE";
            el.lastElementChild.style.color = "#D7ADAD";
            el.firstElementChild.style.fill = "#D7ADAD";
            el.lastElementChild.innerHTML = el.getAttribute("data-time") +" " + "Days Left";
        }else if( el.getAttribute("data-time") <= 6 ){
            el.style.background = "#FDEDCE";
            el.lastElementChild.style.color = "#DDB97E";
            el.firstElementChild.style.fill = "#DDB97E";
            el.lastElementChild.innerHTML = el.getAttribute("data-time") +" " + "Days Left";
        }else{
            el.style.background = "#F2F3F6";
            el.lastElementChild.style.color = "#A0A4B0";
            el.firstElementChild.style.fill = "#A0A4B0";
            el.lastElementChild.innerHTML = el.getAttribute("data-time") +" " + "Days Left";
        }

    })

})()

