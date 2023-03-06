const { TransactionDescription } = require('ethers/lib/utils');
const express = require('express');
const app = express();
const noteRoute = express.Router();
let Note = require('../model/Note')




// Add note
noteRoute.route('/add-note').post((req, res, next) => {
  
  //Reconstruimos la url de la imagen
  req.body.image = "https://gateway.pinata.cloud/ipfs/" + req.body.image;
  

  //Conexion con la API pinata para subir el json con la metadata
  const pinataSDK = require('@pinata/sdk');
  const pinata = new pinataSDK({ pinataApiKey: 'e5f5ac67569d9dcd38bc', pinataSecretApiKey: '58fddf2d184ec479d06fba6489e7efff8e6569d857f6c38070743c24564f33e2' });

  //Construimos metadata
  const body = {
    attributes: [
      {
        trait_type: "creators",
        value: "Omar, Anxo & Samu"
      }, 
      {
        trait_type: "organization",
        value: "Teleco Uvigo"
      }
    ],
    description: req.body.description,
    image: req.body.image,
    name: req.body.name,
  };
  const options = {
    pinataMetadata: {
        name: "NST Dapp",
    },
    pinataOptions: {
        cidVersion: 0
    }
  };

  pinata.pinJSONToIPFS(body, options).then((result) => {

    req.body.token_URI = "ipfs://" + result.IpfsHash;

    Note.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        return res.json(req.body.token_URI)
      }
    })  

  }).catch((err) => {
    console.log(err)
  })
     
});


// Get note
noteRoute.route('/get-note/:image').get((req, res) => {
    Note.findById(req.params.image, (error, data) => {
    if (error) {
      return error
    } else {
      res.json(data)
    }
  })
})

//Get all Notes
noteRoute.route('/').get((req, res) => {
  Note.find((error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})





    
module.exports = noteRoute;