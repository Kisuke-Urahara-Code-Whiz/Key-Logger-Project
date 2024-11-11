const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startBtn = document.getElementById("start-bnb");
const stopBtn = document.getElementById("stop-bnb");

let listening = false;

startBtn.addEventListener("click", () => {
    if (!listening) {
        document.addEventListener("keydown", handleDown);
        document.addEventListener("keyup", handleUp);
        logDiv.textContent = "";
        stateDiv.textContent = " ";
        listening = true;
    }
});

stopBtn.addEventListener("click", () => {
    if (listening) {
        document.removeEventListener("keydown", handleDown);
        document.removeEventListener("keyup", handleUp);
        stateDiv.textContent = "Stopped listening for key events";
        listening = false;
    }
});


function handleDown(a) {
    logDiv.textContent = `Key ${a.key} pressed down`;
    stateDiv.textContent = "key is down";
}

function handleUp(a) {
    logDiv.textContent = `Key ${a.key} pressed up`;
    stateDiv.textContent = "key is up";
}
