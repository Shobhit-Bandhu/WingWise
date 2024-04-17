const drop_area = document.getElementById("drop_area");
const input_image = document.getElementById("input_image");
const img_view = document.getElementById("img_view");

input_image.addEventListener("change", uploadImage);

function uploadImage() {
    let img_link = URL.revokeObjectURL(input_image.files[0]);
    img_view.style.backgroundImage = `url(${img_link})`;
}