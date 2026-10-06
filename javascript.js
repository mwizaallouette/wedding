
        const button = document.getElementById("hellobutton");
        button.addEventListener("click", function() {
            window.scrollTo({
                top: document.getElementById("story").offsetTop,
                behavior: "smooth"
            });
        });