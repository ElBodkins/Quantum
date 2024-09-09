function loadComponent(id, filePath) {
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((error) => console.error("Error loading component:", error));
}

function navigateTo(route) {
  const routes = {
    "/": "pages/home.html",
    "/ontrack": "pages/ontrack.html",
    "/yard": "pages/yard.html",
    "/fleet": "pages/fleet.html",
    "/drive": "pages/drive.html",
    "/contact": "pages/contact.html",
    "/web": "pages/web.html",
  };


  history.pushState({}, "", route);

  const contentPath = routes[route] || "pages/home.html"; 
  loadComponent("content-placeholder", contentPath);
}

window.onpopstate = () => {
  const path = window.location.pathname;
  navigateTo(path);
};

document.addEventListener("DOMContentLoaded", function() {
  loadComponent("preheader-placeholder", "shared/preheader.html");
  loadComponent("header-placeholder", "shared/header.html");
  loadComponent("footer-placeholder", "shared/footer.html");

  const initialPath = window.location.pathname;
  navigateTo(initialPath);
 
 

});


