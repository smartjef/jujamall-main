
var places1 = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia",
    "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
    "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands",
    "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands",
    "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire",
    "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands",
    "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia",
    "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea",
    "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran",
    "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya",
    "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
    "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives",
    "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
    "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal",
    "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea",
    "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
    "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon",
    "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
    "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan",
    "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden",
    "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga",
    "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Tuvalu", "Uganda", "Ukraine",
    "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu",
    "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"
];
var places = [];
function aheadOfTimeSearch(country) {
    if (country.length > 2) {
        $.getJSON(
            `http://www.mapquestapi.com/search/v3/prediction?key=2dVBKmPmnGAdhlP4AG9HPv7X4dAznIYt&limit=5&collection=adminArea,poi,address,category,franchise,airport&q=${country}`,
            (resp) => {
                results = resp['results'];
                places[country] = []
                for (const result of results) {
                    const s = result['displayString']
                    if(places.indexOf(s) === -1){
                        places.push(s)
                    }
                    /*
                    places[country].push({
                        'displayString': result['displayString'],
                        'name': result['name']

                    })
                    //console.log(displayString)
                    // console.log(places)

*/
                }
            },
        );
    }
}
$(document).ready(function () {
    //getData('/api/category/');
    $("#locationSearch").autocomplete({
        //called on input event
        source: (request, response) => {
            //works for now but inefficient, to be improved later
            const seachLocation = request.term;
            aheadOfTimeSearch(seachLocation)
            const p = places.filter(function(place){
                const lowerp = place.toLowerCase()
                return lowerp.includes(seachLocation.toLowerCase())
            })
            response(p);
            /*
            //checks if location had already been queried before reducing server calls
            if (seachLocation in places) {
                const p = places[seachLocation]
                .map(function(place){
                    //console.log(place)
                    return place['displayString'];
                })
                response(p);
                return;
            }
            aheadOfTimeSearch(seachLocation)
            //check after update if thee exist search place in result
            if(seachLocation in places){
                const p = places[seachLocation]
                .map(function(place){
                    return place['displayString'];
                })
                response(p);
                return;
            }
            // response(places);
            // console.log(places);
            //response(places)
            // return places1
            */
        },
        minLength: 2,
        autofocus: true,
        // delay: 500,
    });
});





