//how to connect to mongo

import { MongoClient } from "mongodb";
import {uri, otherSecrete } from "./credential.js"

const client = new MongoClient(uri)
const db = client.db('sample_mflix')
const moviesCollection = db.collection('movies')

//console.log( await moviesCollection.findOne({}))
let query = {title:{ $regex: /terminator/i}}
let arrayMovie = await moviesCollection.find(query).limit(3).toArray()

for (let i=0; i < arrayMovie.length; i++){
    console.log(arrayMovie[i].title)

}

//let firstMovie= myArray[0]
//console.log(firstMovie.title)


console.log(`there are ${arrayMovie.length} movies`)

//db.close()