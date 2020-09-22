 myFunction = ()=> {
    let navLink = document.querySelector("nav-links");
    if (navLink.style.display === "block") {
      navLink.style.display = "none";
    } else {
      navLink.style.display = "block";
    }
  }