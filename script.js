// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            const div = document.getElementById("container");
            const pageTitleElement = document.querySelector("h1");

            pageTitleElement.textContent = `Astronauts (${json.length})`

            for (let i = 0; i < json.length; i++) {
                const astronaut = json[i];
                const isActive = astronaut.active;
                const fontColor = isActive ? 'green' : 'black';
                const activeStatusText = isActive ? '<span style="color: green">true</span>' : 'Active: false';

                json.sort(function(least, greatest) {
                    return greatest.hoursInSpace - least.hoursInSpace;
                });
                
            div.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li>Active: ${activeStatusText}</li>
                        <li>Skills: ${json[i].skills.join(", ")}</li>
                    </ul>
                </div>
            <img class="avatar" src="${json[i].picture}">
            </div>
            `;
        }
       });
    });
});