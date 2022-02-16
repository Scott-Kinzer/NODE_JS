const fs = require('fs');
const path = require('path');

function someWierdActions() {
    const arr = ['folder_1', 'file_1', 'folder_2', 'file_2', 'folder_3'];
    const dir = 'test_Dir';
    fs.mkdirSync(dir);


    for (let i = 0; i< arr.length - 1; i++) {
        if ((i % 2) == 0) {
            fs.mkdir(path.resolve(__dirname + `/${dir}`, arr[i]), e => {
                if (e) {
                    console.error(e);
                } else {
                    console.log('Success');
                }
             });
        }    else {
            fs.writeFile(__dirname + `/${dir}/${arr[i]}.txt`, `SOME DATA`, function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
                  
            }); 
        }
    }
}

// someWierdActions();


function makeSomeChanges() {
    fs.readdir(path.resolve(__dirname + `/${"test_Dir"}`), (err, files) => {
        files.forEach(file => {


            const stat = fs.lstatSync(__dirname + `/${"test_Dir"}/${file}`)

            if (stat.isFile()) {
                fs.writeFile(path.resolve(__dirname + `/${"test_Dir"}/${file}`), '', function(){console.log('done')})
    
            } else {
                fs.rename(path.resolve(__dirname + `/${"test_Dir"}/${file}`), __dirname + `/${"test_Dir"}/new ${file}`, function(err) {
                    if (err) {
                      console.log(err)
                    } else {
                      console.log("Successfully renamed the directory.")
                    }
                  })
            }


                });

       
      })

}

makeSomeChanges();




