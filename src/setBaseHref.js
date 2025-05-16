(function () {
    let baseHref = "/";
    if (window.location.host.includes("github.io")) {
        baseHref = "/Portfolio-gh-page/"; // Dein Repo-Name hier
    }
    document.getElementById("dynamic-base").setAttribute("href", baseHref);
})();