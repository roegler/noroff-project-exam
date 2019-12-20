/*var data = 
{
    "name": "About SpaceX",
    "founder": "Elon Musk",
    "founded": 2002,
    "employees": 7000,
    "vehicles": 3,
    "launch_sites": 3,
    "test_sites": 1,
    "ceo": "Elon Musk",
    "cto": "Elon Musk",
    "coo": "Gwynne Shotwell",
    "cto_propulsion": "Tom Mueller",
    "valuation": 15000000000,
    "headquarters": {
      "address": "Rocket Road",
      "city": "Hawthorne",
      "state": "California"
    },
    "summary": "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets."
  }

function displayInformation(information) {
    console.log(information)

    var informationBox = document.getElementById("about-box")
    if (informationBox != null) {
        informationBox.innerHTML = `
        <div class="about-box-text">
            <h2 class="information-title">${information.name}</h2>
            <p>${information.summary}</p>
        </div>
        `
    }

}

displayInformation(data)*/


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
