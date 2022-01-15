const cards = require('./functions')

console.log(cards.managerCard)
console.log(cards.teamMemCard)

let htmlOutput = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/bootswatch.journal.css"> 
    <title>Team Profile</title>
</head>
<body>
    <h1 class="bg-primary p-4 text-center" style="color:white; font-size: 40;">Team Profile</h1>
    
    <div class="container d-flex flex-column justify-content-center">
        <div class="col-lg-12 d-flex justify-content-center" id="manager">
            ${cards.managerCard}
        </div>
        <div class="col-lg-12 d-flex flex-wrap justify-content-center" id="team">
            ${cards.teamMemCard}  
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script> 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="./assets/index.js"></script>
</body>
</html>
`

module.exports = htmlOutput