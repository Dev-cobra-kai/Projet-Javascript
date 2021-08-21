const icone = `<span class="check"><i class="fas fa-check"></i></span>`;

let tabLi = document.querySelectorAll("ul li")

for (let li of tabLi) {
    li.addEventListener("click", function () {
        this.classList.toggle("active");
        if (this.classList.contains("active")) {
            this.innerHTML = this.innerText + icone;
        }else{
            this.innerHTML = this.innerText;
        }
    });
}