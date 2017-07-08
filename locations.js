var skateParks = [
    {
        location: 'Holman Rd NW & 13th Ave NW, Seattle, WA 98117',
        name: 'Crown Hill'
    },
    {
        location: '3801 Beacon Ave S, Seattle, WA 98108',
        name: 'Jefferson'
    },
    {
        location: '22nd Ave NW & NW 57th St, Seattle, WA 98107',
        name: 'Ballard Bowl'
    }
];

module.exports = {
    getAll: function () {
        var locations = new Array(skateParks.length);

        skateParks.forEach(function(skatePark) {
            locations.push(skatePark.location);
        });
        
        return [
            {
                location: '195 Thomas St, Seattle, WA 98109',
              // label   : 'A',
              // color   : 'green',
              // shadow  : true
            },
            {
                location: '9208 29th Ave SW, Seattle, WA 98126',
              // icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=cafe%7C996600',
              // scale: 2
            },
            {
                location: '3rd Ave NE & NE 112th St, Seattle, WA 98125'
            },
            {
                location: '1 S Hanford St, Seattle, WA 98134'
            },
            {
                location: '5201 Green Lake Way N, Seattle, WA 98103'
            },
            {
                location: '2161 S Judkins St, Seattle, WA 98144'
            },
            {
                location: 'Delridge Way SW & SW Genesee St, Seattle, WA 98106'
            },
            {
                location: '25th Ave NE & NE 77th St, Seattle, WA 98115'
            },
            {
                location: 'Holman Rd NW & 13th Ave NW, Seattle, WA 98117'
            },
            {
                location: '22nd Ave NW & NW 57th St, Seattle, WA 98107'
            },
            {
                location: '3801 Beacon Ave S, Seattle, WA 98108'
            }
        ];
    }
};