const express = require('express');
const GoogleMapsAPI = require('googlemaps');
const locations = require('./locations');
const mapConfig = require('./mapConfig');

const app = express();

var gmAPI = new GoogleMapsAPI({
        key: 'AIzaSyD23vvkRVfY0tMIm0HNUxAzD87RpL3KJkE',
        stagger_time:       1000, // for elevationPath
        encode_polylines:   false,
        secure:             true, // use https
    });
var params = {
    center: '195 Thomas St, Seattle, WA 98109',
    zoom: 11,
    size: '750x600',
    maptype: 'roadmap',
    markers: locations.getAll(),
    style: [
        {
            feature: 'road',
            element: 'all',
            rules: {
                hue: '0x00ff00'
            }
        }
    ]
};

app.get('/', function (req, res) {
    gmAPI.staticMap(params); // return static map URL
    gmAPI.staticMap(params, function(err, binaryImage) {
        if (!err) {
            res.writeHead(200, {
                'Content-Type': 'image/png',
                'Content-Length': binaryImage.length
            });
            res.end(binaryImage, 'binary');          
        } else {
            console.log(err);
        }
    });
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})