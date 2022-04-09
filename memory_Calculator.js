// THIS IS A CODE SNIPPET TO COVERT BITES TO KB, MB, GB, TB


const formatSize = size => {
    let i = Math.floor(Math.log(size) / Math.log(1024))
    return (
        (size / Math.pow(1024, i)).toFixed(2) * 1 + 
        ' ' + 
        ['B', 'KB', 'MB', 'GB', 'TB'][i]
    )
}

let example = 2048 * 1000
console.log(formatSize(example))



// …or create a new repository on the command line
//  echo "# Helper_JS_Files" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin git@github.com:DaveBeCoding/Helper_JS_Files.git
// git push -u origin main
// …or push an existing repository from the command line
//  git remote add origin git@github.com:DaveBeCoding/Helper_JS_Files.git
// git branch -M main
// git push -u origin main