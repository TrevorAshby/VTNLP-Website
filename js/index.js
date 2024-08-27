readTextFile("./json/people.json", function(text){
    var data = JSON.parse(text);
    console.log(data);

    var peop_div = document.getElementById("peop_div2");

    var group = "Advisor";

    var group_div = document.createElement("div");
    group_div.className = "group_div2";
    console.log(data.data[group]['people']);
    var pers_div = document.createElement("div");
    pers_div.className = "pers_div";

    // NAME
    var p_name = document.createElement("p");
    p_name.className = "p_name2";
    // p_year.textContent = "(" + data.data[arr[group]].people[pers].start_year + ")";
    p_name.textContent = "Lifu Huang";

    if (!(data.data[group].people[0].name === "")) {
        pers_div.append(p_name);
    }

    // EMAIL
    var p_year = document.createElement("p");
    p_year.className = "email_text";
    // p_year.textContent = "(" + data.data[arr[group]].people[pers].start_year + ")";
    p_year.textContent = "Email: lifuh@vt.edu";

    if (!(data.data[group].people[0].name === "")) {
        pers_div.append(p_year);
    }

    // LINK PANEL
    link_div = document.createElement("div");
    link_div.className = "l_div";
    // --- github
    if (!(data.data[group].people[0].github === "")) {
        var l_img_a = document.createElement("a");
        l_img_a.href = data.data[group].people[0].github;
        var l_img = document.createElement("img");
        l_img.className = "l_img";
        l_img.src = '../imgs/logos/GitHub_logo.png'
        l_img.width = "30";
        l_img.height = "30";
        l_img_a.append(l_img)
        link_div.append(l_img_a);
        pers_div.append(link_div);
    }
    // --- linkedin
    if (!(data.data[group].people[0].linkedin === "")) {
        var l_img_a = document.createElement("a");
        l_img_a.href = data.data[group].people[0].linkedin;
        var l_img = document.createElement("img");
        l_img.className = "l_img";
        l_img.src = '../imgs/logos/Linkedin-logo-on-transparent-Background-PNG-.png'
        l_img.width = "35";
        l_img.height = "35";
        l_img.style.marginBottom = "-3px";
        l_img_a.append(l_img)
        link_div.append(l_img_a);
        pers_div.append(link_div);
    }
    // --- orcid
    if (!(data.data[group].people[0].orcid === "")) {
        var l_img_a = document.createElement("a");
        l_img_a.href = "https://orcid.org/" + data.data[group].people[0].orcid;
        var l_img = document.createElement("img");
        l_img.className = "l_img";
        l_img.src = '../imgs/logos/logo-ORCID-300x300.png'
        l_img.width = "30";
        l_img.height = "30";
        l_img.style.marginBottom = "-1px";
        l_img_a.append(l_img)
        link_div.append(l_img_a);
        pers_div.append(link_div);
    }
    // --- twitter/x
    if (!(data.data[group].people[0].twitter === "")) {
        var l_img_a = document.createElement("a");
        l_img_a.href = data.data[group].people[0].twitter;
        var l_img = document.createElement("img");
        l_img.className = "l_img";
        l_img.src = '../imgs/logos/twitter-x-logo.png'
        l_img.width = "28";
        l_img.height = "28";
        l_img_a.append(l_img)
        link_div.append(l_img_a);
        pers_div.append(link_div);
    }

    // --- google scholar
    if (!(data.data[group].people[0].twitter === "")) {
        var l_img_a = document.createElement("a");
        l_img_a.href = data.data[group].people[0].google_scholar;
        var l_img = document.createElement("img");
        l_img.className = "l_img";
        l_img.src = '../imgs/logos/google-scholar-icon.png'
        l_img.width = "30";
        l_img.height = "30";
        l_img_a.append(l_img)
        link_div.append(l_img_a);
        pers_div.append(link_div);
    }

    // ADD PANEL
    if (!(data.data[group].people[0].name === "")) {
        group_div.append(pers_div);
    }
    peop_div.append(group_div);
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