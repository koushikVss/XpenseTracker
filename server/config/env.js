const path = require("path")
const dotenv = require("dotenv")

const env = process.env.NODE_ENV || "development"
console.log("prcess env ",process.env.NODE_ENV)
dotenv.config({
    path:path.resolve(process.cwd(),`.env.${env}`)
})
console.log(`${env} env props loaded`)

