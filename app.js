import express from "express";


const app = express();


app.get('/', async(req, res) => {
  res.status(200).send();
}) 

app.get('/locations', async(req, res) => {
  return res.json ([
    {
      "_id": {
        "$oid": "640f95f4eaeb3d9724c5a1b7"
      },
      "name": "Yssy Alphaville",
      "address": "Alphaville Empresarial - Al. Rio Negro, 500 - Res. Tambore, Barueri - SP, 06454-000",
      "coordinates": {
        "lat": -23.501939740306895,
        "lng": -46.84598361990986
      }
    },
    {
      "_id": {
        "$oid": "640f9871eaeb3d9724c5a1b8"
      },
      "name": "Yssy Brasília",
      "address": "St. de Habitações Coletivas e Geminadas Norte - Asa Norte, Brasília - DF, 70730-555",
      "coordinates": {
        "lat": -15.772955493750331,
        "lng": -47.889134127981215
      }
    },
    {
      "_id": {
        "$oid": "640f98ceeaeb3d9724c5a1b9"
      },
      "name": "Yssy Espirito Santo",
      "address": "Rod. Gov. Mário Covas, 882 - Padre Mathias, Cariacica - ES, 29157-100",
      "coordinates": {
        "lat": -20.233857842131517,
        "lng": -40.3699344743869
      }
    },
    {
      "_id": {
        "$oid": "641091825b47d9e06b17a5fb"
      },
      "name": "Yssy Joinville",
      "address": "Ágora Tech Park, R. Dona Francisca, 8300 - Distrito Industrial, Joinville - SC, 89219-600",
      "coordinates": {
        "lat": -26.20166915196167,
        "lng": -48.89042504779205
      }
    }
  ])
})

export default app