const fs = require('fs');
const path = require('path');

fs.writeFile(__dirname + "/file_1.txt", 'SOME DATA', function(err) {


    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");


    fs.readFile(__dirname + "/file_1.txt", 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }

        fs.mkdir(path.join(__dirname, 'test'), (err) => {
            if (err) {
                return console.error(err);
            }
            console.log('Directory created successfully!');


        fs.writeFile(__dirname + "/test/file_copied.txt", data, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");

            fs.unlink(__dirname + "/file_1.txt", function(err){
                if (err) {
                    console.log(err);
                } else {
                    console.log("Файл удалён");
                }
            });
              
        }); 



        });
        
    

      })
      
}); 