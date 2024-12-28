const sendMessage = document.getElementById("send");
const progress = document.getElementById("progress");
const brainImg = document.getElementById("imageBrain")
let tabImageBrain = ["assets/img/brain.png", "assets/img/brain2.png"]


var progressXp = 90;


sendMessage.addEventListener("click", function () {
    if (progressXp < 300) {
        progressXp += 40;
    }
    if (progressXp > 300) {
        progressXp = 300;
        brainImg.src = tabImageBrain [1];

    }

    console.log(progressXp);

    progress.animate(
        [
            { transform: "translateX(0px)", width: "0px" },
            { transform: `translateX(0px)`, width: `${progressXp}px` },
        ],
        {
            duration: 1000,
            fill: "forwards",
        }
    );

    sendMessage.style.color = "black";

    const sendMessageAnimation = sendMessage.animate(
        [
            { transform: "translateX(0px) scale(1) translateY(0px) rotate(0)" },
            {
                transform:
                    "translateX(70px) scale(0) translateY(-300px)",
            },
        ],
        {
            duration: 1000,
            fill: "backwards",
        }
    );


    sendMessageAnimation.finished.then(() => {
        sendMessage.style.color = "white";
    });
});



const img = document.querySelector(".brain-img");

img.addEventListener("transitionend", () => {
    const computedStyle = window.getComputedStyle(img);
    const transform = computedStyle.transform;

    if (transform.includes("matrix")) {
        const scale = parseFloat(transform.split(", ")[0].replace("matrix(", ""));
        if (scale === 1.35) {
            window.location.href = "deep-network.html";
        }
    }
});
