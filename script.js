function filterbyName() {
    let input = document.getElementById("searchBox");
    if (input.value.length == 0)
    return;
    let word = input.value.toLowerCase();
    let tables = document.querySelectorAll(".F1Leaderboard");
    for (table of tables) {
        let rows = document.querySelectorAll("tbody tr");
        doFilter(rows, 1, word);
    }
}

function filterByNationality() {
    let menuItem = document.getElementsByClassName("select_Nationality")[0];
    let word = menuItem.value.toLowerCase();
    let tables = document.querySelectorAll(".F1Leaderboard");
    for (table of tables) {
        let rows = document.querySelectorAll("tbody tr");
        doFilter(rows, 2, word);
    }
}

function doFilter(rows, column, word) {
    /* Loop through all table rows and hide rows
       that have cells that don't match the search query.
     */
    for (let i = 0; i < rows.length; i++) {
        let td = rows[i].getElementsByTagName("td")[column];
        let txtValue = td.innerText
        if (txtValue.toLowerCase().indexOf(word) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

//select all the checkboxes
var checkboxes = document.querySelectorAll('.checkbox');
//listen on each check box
for (var checkbox of checkboxes) {
    checkbox.addEventListener('click', function () {
        if (this.checked == true) {
            showTeam(this.value);
            filterbyName();
        }
        else {
            hideTeam(this.value);
        }
    });
}

function showTeam(team) {
    let word = team
    let tables = document.querySelectorAll(".F1Leaderboard");
    let rows;
    for (table of tables) {
        rows = document.querySelectorAll("tbody tr");
    }
    for (let i = 0; i < rows.length; i++) {
        let td = rows[i].getElementsByTagName("td")[3];
        let txtValue = td.innerText;
        if (txtValue == word) {
            rows[i].style.display = "";
        }
    }
}
function hideTeam(team) {
    let word = team
    let tables = document.querySelectorAll(".F1Leaderboard");
    let rows;
    for (table of tables) {
        rows = document.querySelectorAll("tbody tr");
    }
    for (let i = 0; i < rows.length; i++) {
        let td = rows[i].getElementsByTagName("td")[3];
        let txtValue = td.innerText;
        if (txtValue == word) {
            rows[i].style.display = "none";
        }
        
    }
}