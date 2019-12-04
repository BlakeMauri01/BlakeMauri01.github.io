const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(response => {
        response.json()
            .then(
                response => {
                    const towns = response.towns;

                    towns.forEach(
                        (town) => {
                            if (town.name.toLowerCase() == "fish haven" || town.name.toLowerCase() == "preston" || town.name.toLowerCase() == "soda springs"){
                            let article = document.createElement('article');
                            let h2 = document.createElement('h2');

                            //Images
                            let imageDiv = document.createElement('div');
                            let image = document.createElement('img');

                            image.setAttribute('src','images/', town.photo);

                            imageDiv.appendChild(image);
                            article.appendChild(imageDiv);

                            //Names
                            image.setAttribute('alt', town.name);

                            h2.textContent = town.name;

                            article.appendChild(h2);

                            //Motto
                            let mottoDiv = document.createElement('div');

                            let mottoLabel = document.createElement('label');
                            mottoLabel.textContent = 'Motto: ';

                            let mottoSpan = document.createElement('span');
                            mottoSpan.textContent = town.motto;

                            mottoDiv.appendChild(mottoLabel);
                            mottoDiv.appendChild(mottoSpan);

                            article.appendChild(mottoDiv);

                            //Year Founded
                            let yearFoundedDiv = document.createElement('div');
                            let yearFoundedLabel = document.createElement('label');
                            yearFoundedLabel.textContent = 'Year Founded: ';

                            let yearFoundedSpan = document.createElement('span');
                            yearFoundedSpan.textContent = town.yearFounded;

                            yearFoundedDiv.appendChild(yearFoundedLabel);
                            yearFoundedDiv.appendChild(yearFoundedSpan);

                            article.appendChild(yearFoundedDiv);

                            document.querySelector('section.towns').appendChild(article);

                            //Current Population
                            let currentPopulationDiv = document.createElement('div');
                            let currentPopulationLabel = document.createElement('label');
                            currentPopulationLabel.textContent = 'Current Population: ';

                            let currentPopulationSpan = document.createElement('span');
                            currentPopulationSpan.textContent = town.currentPopulation;

                            currentPopulationDiv.appendChild(currentPopulationLabel);
                            currentPopulationDiv.appendChild(currentPopulationSpan);

                            article.appendChild(currentPopulationDiv);

                            document.querySelector('section.towns').appendChild(article);

                            //Average Rainfall
                            let averageRainfallDiv = document.createElement('div');
                            let averageRainfallLabel = document.createElement('label');
                            averageRainfallLabel.textContent = 'Average Rainfall: ';

                            let averageRainfallSpan = document.createElement('span');
                            averageRainfallSpan.textContent = town.averageRainfall;

                            averageRainfallDiv.appendChild(averageRainfallLabel);
                            averageRainfallDiv.appendChild(averageRainfallSpan);

                            article.appendChild(averageRainfallDiv);

                            document.querySelector('section.towns').appendChild(article);

                            //Events
                            let eventsDiv = document.createElement('div');
                            let eventsLabel = document.createElement('label');
                            eventsLabel.textContent = 'Events: ';

                            let eventsSpan = document.createElement('span');
                            eventsSpan.textContent = town.events.join(', ');

                            eventsDiv.appendChild(eventsLabel);
                            eventsDiv.appendChild(eventsSpan);

                            article.appendChild(eventsDiv);

                            document.querySelector('section.towns').appendChild(article);
                            }
                        }
                    );
                }
            )
    });