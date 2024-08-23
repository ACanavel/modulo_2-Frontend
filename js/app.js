document.addEventListener("DOMContentLoaded", function() {
    const articles = document.querySelectorAll(".temas article");

    articles.forEach(article => {
        article.addEventListener("mouseenter", function() {
            article.style.backgroundColor = "#e9ecef";
        });

        article.addEventListener("mouseleave", function() {
            article.style.backgroundColor = "#fff";
        });
    });

});
