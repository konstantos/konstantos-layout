document.querySelectorAll(".del-hash").forEach(el => {
    el.addEventListener("click", () => {
        setTimeout(() => history.replaceState(null, null, window.location.href.split("#")[0]), 1);
    });
});
