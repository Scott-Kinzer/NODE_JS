const fs = require('fs');

fs.writeFile(__dirname + "/file.txt", "Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");

    fs.readFile(__dirname + "/file.txt", 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        
        

        fs.writeFile(__dirname + "/file_1.txt", data, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
              
        }); 


      })


}); 
