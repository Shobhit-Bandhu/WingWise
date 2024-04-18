const drop_area = document.getElementById("drop_area");
const input_image = document.getElementById("input_image");
const img_view = document.getElementById("img_view");


input_image.addEventListener("change", uploadImage);

async function uploadImage() {
    let img_link = URL.createObjectURL(input_image.files[0]);


    img_view.style.backgroundImage = `url(${img_link})`;
    img_view.textContent=""
    img_view.style.border=0;

    const img = input_image.files[0];
    if (!img) return;

    const formData = new FormData();
    formData.append("image", img);

    fetch(
        "/predict",
        {
            method: "POST",
            body: formData
        }
    ).then(
        response => response.json()
    ).then(data => {
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = JSON.stringify(data, null, 2);
    }).catch(
        error => {
            console.log(error);
        }
    )
}


async function predict() {
    fetch(
        "/predict",
        {
            method: "POST",
            body: formData
        }
    ).then(
        response => response.json()
    ).then(data => {
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = JSON.stringify(data, null, 2);
    }).catch(
        error => {
            console.log(error);
        }
    )
}

drop_area.addEventListener("dragover", (e) =>{
    e.preventDefault();
})
drop_area.addEventListener("drop", (e) =>{
    e.preventDefault();
    input_image.files = e.dataTransfer.files;
    uploadImage();
})