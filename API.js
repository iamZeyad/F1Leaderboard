document.body.onload = () => {
    F1Log().then(data => {
        createTable(data.DriverStandings);
    });
};

async function F1Log() {
    const response = await fetch("https://ergast.com/api/f1/current/last/driverStandings.json");
    const data = await response.json();
    return data.MRData.StandingsTable.StandingsLists[0];
}

function createRow(data) {
    let row = document.createElement('tr');
    let pos = document.createElement('td');
    let name = document.createElement('td');
    let nationality = document.createElement('td');
    let team = document.createElement('td');
    let pts = document.createElement('td');
    
    let tbody = document.getElementsByClassName('tbody')[0];
    
    tbody.appendChild(row);
    
    pos.appendChild(document.createTextNode(data.positionText));
    name.appendChild(document.createTextNode(data.Driver.givenName + " " + data.Driver.familyName));
    nationality.appendChild(document.createTextNode(data.Driver.nationality));
    team.appendChild(document.createTextNode(data.Constructors[0].name));
    pts.appendChild(document.createTextNode(data.points));
    
    row.appendChild(pos);
    row.appendChild(name);
    row.appendChild(nationality);
    row.appendChild(team);
    row.appendChild(pts);
}

function createTable(data) {
    for (let i = 0; i < data.length; i++) {
        createRow(data[i]);
    }
}