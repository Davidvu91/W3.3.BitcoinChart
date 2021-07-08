
const url = "https://newsapi.org/v2/everything?q=tesla&from=2021-07-08&sortBy=publishedAt&apiKey=698e41aa0a824f15b275f3a51812306c"
console.log(url);


async function getArticles() {

    const response = await fetch(url);
    const json = await response.json();
    const { articles } = json;
    document.getElementById("title").innerHTML = `CoderNews `;
    // console.log(json);
    console.log(articles)
    const articlesHTML = articles.map(renderArticle);
    console.log(articlesHTML);
    console.log(articlesHTML.join(""))
  document.getElementById("newsList").innerHTML = articlesHTML.join("");
};

getArticles();

function renderArticle(article) {
  return `
    <div class=" container mb-3 align-self-center article">
        <p class= " titleContent ">  ${article.title} </p>
        <img src="${article.urlToImage}" alt="Snow" />
        <i class="fa fa-edit fa-xs"></i><h4 class="mb-0">${article.author}</h4>
        <h6 class="mb-0"><a href="${article.url}">${article.source.name}</a></h6>
        <p><i class="fa fa-envelope"></i>${article.content}</p>
   
    </div>
  `;
}


const languages = ["ar", "zh", "en", "es", "fr", "ru"];

function renderLanguageAnchorTags() {
  const languageHTML = languages.map(
    (l) => `<a href="http://127.0.0.1:5500/index.html?language=${l}">${l}</a>`,
  );
  document.getElementById("languages").innerHTML = languageHTML;
}

renderLanguageAnchorTags(); 