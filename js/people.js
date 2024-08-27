readTextFile("./json/people.json", function(text){
    var data = JSON.parse(text);
    console.log(data);

    var peop_div = document.getElementById("peop_div");
    var arr = data.data["Sections"];

    for (group in arr) {
        var group_head = document.createElement("h2");
        group_head.className = "pub_sec";
        // console.log(arr[group]);
        if (arr[group] != "Advisor" && arr[group] != "Alumni") {
            group_head.textContent = arr[group] + " Students";
        }
        else {
            group_head.textContent = arr[group];
        }
        peop_div.append(group_head);

        var group_div = document.createElement("div");
        group_div.className = "group_div";
        for (pers in data.data[arr[group]].people) {
            var pers_div = document.createElement("div");
            pers_div.className = "pers_div";

            // IMAGE
            var p_img = document.createElement("img");
            p_img.className = "p_img";

            if ((data.data[arr[group]].people[pers].img_path === "")) {
                p_img.src = '../imgs/people/default.jpg'
            }
            else {
                p_img.src = '../imgs/people/'+data.data[arr[group]].people[pers].img_path
            }
            pers_div.append(p_img);

            // NAME
            var p_name = document.createElement("p");
            p_name.className = "p_name";
            p_name.textContent = data.data[arr[group]].people[pers].name;

            if (!(data.data[arr[group]].people[pers].name === "")) {
                pers_div.append(p_name);
            }

            // START YEAR
            var p_year = document.createElement("p");
            p_year.className = "p_year";
            // p_year.textContent = "(" + data.data[arr[group]].people[pers].start_year + ")";
            p_year.textContent = data.data[arr[group]].people[pers].start_year;

            if (!(data.data[arr[group]].people[pers].name === "")) {
                pers_div.append(p_year);
            }

            // RESEARCH AREA
            var r_area = document.createElement("p");
            r_area.className = "r_area";
            // p_year.textContent = "(" + data.data[arr[group]].people[pers].start_year + ")";
            r_area.textContent = data.data[arr[group]].people[pers].research_area;

            if (!(data.data[arr[group]].people[pers].name === "")) {
                pers_div.append(r_area);
            }

            // LINK PANEL
            link_div = document.createElement("div");
            link_div.className = "l_div";
            // --- github
            if (!(data.data[arr[group]].people[pers].github === "")) {
                var l_img_a = document.createElement("a");
                l_img_a.href = data.data[arr[group]].people[pers].github;
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
            if (!(data.data[arr[group]].people[pers].linkedin === "")) {
                var l_img_a = document.createElement("a");
                l_img_a.href = data.data[arr[group]].people[pers].linkedin;
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
            if (!(data.data[arr[group]].people[pers].orcid === "")) {
                var l_img_a = document.createElement("a");
                l_img_a.href = "https://orcid.org/" + data.data[arr[group]].people[pers].orcid;
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
            if (!(data.data[arr[group]].people[pers].twitter === "")) {
                var l_img_a = document.createElement("a");
                l_img_a.href = data.data[arr[group]].people[pers].twitter;
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
            if (!(data.data[arr[group]].people[pers].twitter === "")) {
                var l_img_a = document.createElement("a");
                l_img_a.href = data.data[arr[group]].people[pers].google_scholar;
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
            if (!(data.data[arr[group]].people[pers].name === "")) {
                group_div.append(pers_div);
            }
        }
        peop_div.append(group_div);
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