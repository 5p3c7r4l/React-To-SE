type Flag = {
    [key:string]: string
    help:string,
    path:string,
    getPath:string
}

const argument = process.argv
const flags: Flag = {
    help: '-h',
    path: "-p",
    getPath: "-P"
}
const flagDescriptions: Flag = {
    help:`Shows all the available options`,
    path:`[-p <Path as String>] Sets the path that the package should take`,
    getPath:`Shows the current used path`
}

let paths:string = ".";

if (argument.indexOf(flags.help) > -1) {
    console.warn(`List of all available flags:`)
    for (const [key,value] of Object.entries(flags)) {console.warn(`~         ${value}: ${key} -- ` + flagDescriptions[key])}

}

if (argument.indexOf(flags.path)) {
    paths = argument[argument.indexOf(flags.path) + 1]
}



const rtseOptions = {
    paths
}

module.exports = rtseOptions;
