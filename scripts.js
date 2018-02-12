
function getPersons() {
    console.log('get persons');
    
    var personsUrl = "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp";

    $.ajax({
        url: personsUrl,
        type: 'GET',
        dataType: 'jsonp',
        jsonpCallback: 'jsonCallback',
        success: function (data) {
            //console.log(data);
            handlePersonsResponse(data);
        },
        error: function (err) {
            //console.log(err);
        }
    });

  }

function handlePersonsResponse(data) {
    for(var i = 0; i < data.length; i++){
        var newLi = document.createElement('li');

        var anchor = document.createElement('a');
        var anchorText = document.createTextNode( data[i].email );
        anchor.setAttribute( 'href', 'mailto:' + data[i].email );
        anchor.appendChild( anchorText );

        newLi.appendChild( document.createTextNode(data[i].name+ ' email: ')  );
        newLi.appendChild( anchor );

        list.appendChild(newLi, list.firstChild);

    }

}