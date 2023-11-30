readTextFile("../json/people.json", function(text){
    var data = JSON.parse(text);
    console.log(data);

    var peop_div = document.getElementById("peop_div");
    var arr = data.data["Sections"];

    for (group in arr) {
        var group_head = document.createElement("h2");
        group_head.className = "pub_sec";
        // console.log(arr[group]);
        group_head.textContent = arr[group];
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
                p_img.src = '../imgs/default.png'
            }
            else {
                p_img.src = '../imgs/'+data.data[arr[group]].people[pers].img_path
            }
            pers_div.append(p_img);

            // NAME
            var p_name = document.createElement("p");
            p_name.className = "p_name";
            p_name.textContent = data.data[arr[group]].people[pers].name;

            if (!(data.data[arr[group]].people[pers].name === "")) {
                pers_div.append(p_name);
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