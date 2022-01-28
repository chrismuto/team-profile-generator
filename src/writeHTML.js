const fs = require('fs');
const path = require('path');

function writeHTML(employees) {
    const cardsHTML = employees.map(employee => {
        if (employee.getRole() === "Manager") {
            return `<div class="card col-4 col-md-3 col-lg-2 p-4 m-4 rounded-2">
            <h3 class="bg-warning rounded-pill p-3">${employee.name}</h3>
            <p>Role: Manager</p>
            <p>Id: ${employee.id}</p>
            <p>email: <a href="mailto:${employee.email}">${employee.email}</a></p>
            <p>Office number: ${employee.officeNumber}</p>
            </div>`
        }
        if (employee.getRole() === "Engineer") {
            return `<div class="card col-4 col-md-3 col-lg-2 p-4 m-4 rounded-2">
            <h3 class="bg-warning rounded-pill p-3">${employee.name}</h3>
            <p>Role: Engineer</p>
            <p>Id: ${employee.id}</p>
            <p>email: <a href="mailto:${employee.email}">${employee.email}</a></p>
            <p>profile: <a href="https://www.github.com/${employee.github}" target="_blank">${employee.github}</a></p>
            </div>`
        } else {
            return `<div class="card col-4 col-md-3 col-lg-2 p-4 m-4 rounded-2">
            <h3 class="bg-warning rounded-pill p-3">${employee.name}</h3>
            <p>Role: Intern</p>
            <p>Id: ${employee.id}</p>
            <p>email: <a href="mailto:${employee.email}">${employee.email}</a></p>
            <p>school: ${employee.school}</p>
            </div>`
        }
    }).join("");
    console.log(cardsHTML);
const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
    <div class= "jumbotron container-fluid bg-success h-25 p-4 text-center">
        <h1>Team Generator header</h1>
    </div>
    <main class="row col-12 justify-content-center text-center">
    ${cardsHTML}
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>`
fs.writeFile(path.join(__dirname, '../dist/index.html'), HTML, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Success!");
    }
})
}

module.exports = writeHTML