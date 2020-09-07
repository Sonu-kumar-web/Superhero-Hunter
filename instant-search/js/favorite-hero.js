var mainDiv = document.getElementById("main-div");
/*This loop will iterate in the local storage. Makes a html (using the values of key in local storage) and place in the main div*/
Object.keys(localStorage).forEach(function(key) {
    var heroDetail = JSON.parse(localStorage.getItem(key));
    const item = `<div class="card">
                        <div class="image">
                            <img src="${heroDetail.image.url}">
                        </div>
                        <div class="title">
                            <h1>
                                Name : ${heroDetail.name}
                            </h1>
                        </div>
                        <div class="des">
                            <p>Gender : ${heroDetail.appearance.gender}</p>
                            <p>Height : ${heroDetail.appearance.height[0]}</p>
                            <p>Weight : ${heroDetail.appearance.weight[1]}</p>
                            <p>Eye Color : ${heroDetail.appearance['eye-color']}</p>
                            <p>Hair Color : ${heroDetail.appearance['hair-color']}</p>
                            <p>Publisher : ${heroDetail.biography.publisher}</p>
                            <button id = ${heroDetail.id} >Unavorite</button>
                        </div>
                    </div>`

    const position = "beforeend";
    mainDiv.insertAdjacentHTML(position, item);
});
/*Function will handle click on unfavorite button*/
mainDiv.addEventListener('click', () => {
        var heroId = event.target.id
        event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
        localStorage.removeItem(heroId);
    })
    /*Function handel the search btn click*/
document.getElementById("search-btn").addEventListener('click', () => {
    location.replace("./index.html");
})