fetch("https://api.spacexdata.com/v3/history").then(function(result) {
        result.json().then(function(news) {

        for (var i = 0; i < news.length; i++) {
            var newsItem = news[i]; 
            console.log(newsItem)

            var updatesInfo = document.getElementById("information-box-container")
            if (updatesInfo != null) {
                updatesInfo.innerHTML += `
                <div class="information-box">
                    <img class="information-box-img" src="Optimized-images/9_engine_test_texas.jpg" alt="Picture from space">
                    <div class="information-box-text">
                        <p>${newsItem.event_date_utc}</p>
                        <h3>${newsItem.title}</h3>
                        <p>${newsItem.details}</p>
                        <a href=${newsItem.links.article} target="_blank">READ ARTICLE</a>
                    </div>
                </div>
            `
            }
        }

    })
})
