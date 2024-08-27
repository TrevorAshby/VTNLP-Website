readTextFile("../json/publications.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
    //for (var x in data)
    //console.log(data.data["0"].img_path)

    var pub_div = document.getElementById("pub_div");
    var arr = data.data["Sections"];
    for (year in arr) {
        var year_head = document.createElement("h2");
        year_head.className = "pub_sec";
        year_head.textContent = arr[year];
        pub_div.append(year_head);
        var pub_sec_hr = document.createElement("hr");
        pub_sec_hr.className = "pub_hr";
        pub_div.append(pub_sec_hr);
        // pub_div.append(document.createElement('hr'))
        console.log(data.data[arr[year]].papers);
        var year_div = document.createElement("div");
        year_div.className = "year_div";
        for (pub in data.data[arr[year]].papers) {
            // console.log(data.data[arr[year]].papers[pub].Title);
            var article_title = document.createElement("a");
            article_title.className = "article_title";
            article_title.href = data.data[arr[year]].papers[pub].Link;
            article_title.textContent = data.data[arr[year]].papers[pub].Title;
            if (!(data.data[arr[year]].papers[pub].Title === "")) {
                year_div.append(article_title);
            }
            
            var article_authors = document.createElement("p");
            article_authors.className = "article_authors";
            article_authors.textContent = data.data[arr[year]].papers[pub].Authors;
            if (!(data.data[arr[year]].papers[pub].Authors === "")) {
                year_div.append(article_authors);
            }
            year_div.append(article_authors);

            var article_github = document.createElement("a");
            article_github.className = "article_github";
            article_github.textContent = "GitHub";
            article_github.href = data.data[arr[year]].papers[pub].ProjectPage;
            if (!(data.data[arr[year]].papers[pub].ProjectPage === "")) {
                year_div.append(article_github);
            }

            var article_conference = document.createElement("p");
            article_conference.className = "article_conference";
            article_conference.textContent = data.data[arr[year]].papers[pub].Conference;
            if (!(data.data[arr[year]].papers[pub].Conference === "")) {
                year_div.append(article_conference);
            }
        }
        pub_div.append(year_div);
    }
});

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}