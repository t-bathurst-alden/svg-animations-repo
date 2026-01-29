console.log("JS file is connected");

const flavours = document.querySelectorAll("#flavours object");
console.log(flavours);

function logId() {
    console.log("User Clicked",this.id);
}

flavours.forEach(object => object.addEventListener ("click", logId));