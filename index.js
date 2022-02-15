const fs = require('fs');
const path = require('path');

const onlineUsers = [
    {name: "Bob"}
]

const inPersonUsers = [
    {name: "BobInPerson"}
]

fs.mkdir(path.join(__dirname, 'main'), (err) => {
    if (err) {
        return console.error(err);
    }

    fs.mkdir(path.join(__dirname + '/main', 'online'), (err) => {
        if (err) {
            return console.error(err);
        }



        fs.writeFile(__dirname + '/main/online/online.txt', ``, (err) => {
            if (err) console.log(err);

            for (let user of onlineUsers) {
                for (let key in user) {
                    fs.appendFile(__dirname + '/main/online/online.txt', `${key}: ${user[key]} \n`, (err) => {
                        if (err) {
                            throw err;
                        }
                        // console.log("File is updated.");
                    });
                }
            }

              
            
          });


    
    });
    
    fs.mkdir(path.join(__dirname + '/main', 'inPerson'), (err) => {
        if (err) {
            return console.error(err);
        }

        fs.writeFile(__dirname + '/main/inPerson/inPerson.txt', ``, (err) => {
            if (err) console.log(err);

            for (let user of inPersonUsers) {
                for (let key in user) {
                    fs.appendFile(__dirname + '/main/inPerson/inPerson.txt', `${key}: ${user[key]} \n`, (err) => {
                        if (err) {
                            throw err;
                        }
                        // console.log("File is updated.");
                    });
                }
            }

              
            
          });
    
    });

    fs.writeFile("app.js", `const onlineUsers = [
        {name: "Bob"}
    ]
    
    const inPersonUsers = [
        {name: "Bob"}
    ]`, (err) => {
        if (err)
          console.log(err);
        
      });

});

function replaceData() {

    fs.readFile(__dirname + "/main/inPerson/inPerson.txt", 'utf8', function (err,data) {


            const dataOnline =  fs.readFileSync(__dirname + "/main/online/online.txt", {encoding:'utf8', flag:'r'})
            fs.writeFileSync(__dirname + "/main/inPerson/inPerson.txt", dataOnline);
      
       fs.writeFile(__dirname + "/main/online/online.txt", data, 'utf8', function (err) {
          if (err) return console.log(err);
       });
      });
}

replaceData();

