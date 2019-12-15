fetch('json/temples.json')
    
.then(response => {
            response.json()
                .then(
                    response => {
                        const temples = response.temples;

                        temples.forEach(
                            (temple) => {
                                console.log(temple);

                                let article = document.createElement('article');
                                let h2 = document.createElement('h2');

                                let templeNameDiv = document.createElement('div');
                                let templeNameLabel = document.createElement('label');
                                templeNameLabel.textContent = 'Temple: ';

                                let templeNameSpan = document.createElement('span');
                                templeNameSpan.textContent = temple.TempleName;

                                templeNameDiv.appendChild(templeNameLabel);
                                templeNameDiv.appendChild(templeNameSpan);

                                article.appendChild(templeNameDiv);

                                document.querySelector('section.temples').appendChild(article);
                            }
                        
                    );
                }
            )
    });