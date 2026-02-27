let modalButton = document.querySelector(".modal-name__button")
let modal = document.querySelector(".modal")
let modalContent = document.querySelector(".modal__content") 
let modalOpen = document.querySelector(".modalOpen")
let closeButton = document.querySelector(".close-button")
modalButton.addEventListener("click", () => {
    modal.classList.add("modal_active")
})

    modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modalContent.classList.add("modal_hide");
        setTimeout(() => {
            modal.classList.remove("modal_active"); 
            modalContent.classList.remove("modal_hide"); 
        }, 300); 
    }
});

closeButton.addEventListener("click",() => {
     modalContent.classList.add("modal_hide");
        setTimeout(() => {
            modal.classList.remove("modal_active"); 
            modalContent.classList.remove("modal_hide"); 
        }, 300); 
})


