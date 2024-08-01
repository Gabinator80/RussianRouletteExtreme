const title  = document.title;

window.addEventListener("blur", () =>  {
    document.title = "COME BACK😭";
}),

window.addEventListener("focus", () => {
    document.title = title;
});
