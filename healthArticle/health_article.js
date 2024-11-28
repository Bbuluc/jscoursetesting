var xhr = new XMLHttpRequest();
var url = './health_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function () {
    if (xhr.status === 200) {
        var articles = xhr.response.articles; // Fetch articles from response
        var articlesDiv = document.getElementById('articles'); // Fetch the container

        // Loop through articles and dynamically add them to the page
        articles.forEach(function (article) {
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            var title = document.createElement('h2');
            title.textContent = article.title;

            var description = document.createElement('p');
            description.textContent = article.description;

            var waysHeader = document.createElement('h3');
            waysHeader.textContent = 'Ways to Achieve:';

            var waysList = document.createElement('ul');
            article.ways_to_achieve.forEach(function (way) {
                var listItem = document.createElement('li');
                listItem.textContent = way;
                waysList.appendChild(listItem);
            });

            var benefitsHeader = document.createElement('h3');
            benefitsHeader.textContent = 'Benefits:';

            var benefitsList = document.createElement('ul');
            article.benefits.forEach(function (benefit) {
                var listItem = document.createElement('li');
                listItem.textContent = benefit;
                benefitsList.appendChild(listItem);
            });

            // Append all parts to the article div
            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(waysHeader);
            articleDiv.appendChild(waysList);
            articleDiv.appendChild(benefitsHeader);
            articleDiv.appendChild(benefitsList);

            // Append article div to the main container
            articlesDiv.appendChild(articleDiv);
        });
    } else {
        console.error('Failed to fetch articles. Status:', xhr.status);
    }
};

// Send the AJAX request
xhr.send();

