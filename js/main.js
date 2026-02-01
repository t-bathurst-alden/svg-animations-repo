console.log("JS file is connected");

const flavours = document.querySelectorAll("#flavours img");
console.log(flavours);

function logId() {
    console.log("User Clicked",this.id);
}

flavours.forEach(img => img.addEventListener ("click", logId));

const svg = document.getElementById('orangepeach')

svg.addEventListener("click", doSomething)

function doSomething(){
    console.log("User Clicked",this.id);
}

