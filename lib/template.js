// create beginning and ending HTML template literals for eventual concatenation and rendering
const beginningHTML = 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="./dist/style.css">
  <title>Team Profile</title>
</head>
<body>
  <header>
    <nav class="navbar navbar-dark" id="header">
      <a class="mx-2 navbar-brand"><h2>Team Profile</h2></a>
      <form class="d-inline-flex">
        <input class="form-control mx-sm-2" id="search-input" type="search" placeholder="Find an Employee Placeholder" aria-label="Search">
        <button class="btn btn-success my-2 m-sm-1" id="search-button" type="submit">Search</button>
      </form>
    </nav>
  </header>

  <main class ='p-1 mb-4 text-black text-center'>    

    <div class = 'container text-center m-10' id="banner">
      <h4>My Current Team</h4>
    </div>
    <div class="row" id="sortable">`;

const endingHTML =
`   
    </div>
  </main>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script
    src="https://cdn.jsdelivr.net/npm/dayjs@1.11.3/dayjs.min.js"
    integrity="sha256-iu/zLUB+QgISXBLCW/mcDi/rnf4m4uEDO0wauy76x7U="
    crossorigin="anonymous">
  </script>
  <script src="../src/template.js"></script>
</body>
</html>`;

module.exports.beginningHTML = beginningHTML;
module.exports.endingHTML = endingHTML;