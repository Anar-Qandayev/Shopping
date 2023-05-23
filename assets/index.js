const BASE_URL="https://fakestoreapi.com";

axios.get(`${BASE_URL}/products`).then((res) =>{
    let cards=document.querySelector("#card");
    res.data.map(item=>{
        cards.innerHTML += `
        <figure>
        <div class="card-image">
            <img src="${item.image}" alt="">
        </div>
            <figcaption>
                <a href="">
                    <h3>Qiymət:${item.price} azn</h3>
                    <p>${item.title.slice(0,5)}...</p>
                    <span>${item.description.slice(0,15)}...</span>
                </a>
            </figcaption>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-regular fa-heart"></i>
            <div class="icons">
                <img src="https://cdn.dsmcdn.com/mnresize/250/250/marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png" alt="">
            </div>
        </figure>
        `
    });
})

let solid=document.querySelector(".fa-solid");
let regular=document.querySelector(".fa-regular");
solid.addEventListener("click",()=>{
    regular.style.visibility="visible";
    solid.style.visibility="hidden";
})