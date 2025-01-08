document.getElementById("add-to-cart").addEventListener("click", function () {
    const infobox = document.getElementById("infobox");
    
    // Exibe a infobox
    infobox.classList.remove("hidden");
    infobox.classList.add("show");
  
    // Remove a infobox após 3 segundos
    setTimeout(() => {
      infobox.classList.remove("show");
      infobox.classList.add("hidden");
    }, 3000);
  });
  