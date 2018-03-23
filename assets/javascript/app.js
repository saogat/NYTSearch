$("#search-button").on("click", function (event) {
    console.log("working");
    event.preventDefault();
    var searchTerm = $("#search").val();
    var retrieveMax = $("#exampleFormControlSelect1").val();
    var beginYear = $("#startYear").val();
    var endYear = $("#endYear").val();

    beginYear = beginYear + "0101";
    endYear = endYear + "1231";

    var aSearch = {
        searchTerm: searchTerm,
        retrieveMax: retrieveMax,
        beginYear: beginYear,
        endYear: endYear
    }

    console.log(aSearch);

    function search(aSearch) {

        var searchTerm = aSearch.searchTerm;
        var retrieveMax = aSearch.retrieveMax;
        var beginYear = aSearch.beginYear;
        var endYear = aSearch.endYear;

       
        console.log("searchTerm " + searchTerm);
        console.log("retrieveMax " + retrieveMax);
        console.log("beginYear " + beginYear);
        console.log("endYear " + endYear);


        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "d2e18cbda0f94114a6691e96edc1ccb5",
            'q': searchTerm,
            'end_date': endYear,
            'begin_date': beginYear
        });
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function (result) {
            for (var i=0; i<aSearch.retrieveMax; i++){
                $("#results").append($("<p>").text(JSON.stringify(result.response.docs[i].headline.main)));
            console.log(result.response.docs[i].headline.main);
            console.log(result.response.docs[i])}
        }).fail(function (err) {
            throw err;
        });

    }

    search(aSearch);
});

$("#clear-button").on("click", function (event) {
    console.log("working");
    event.preventDefault();
    $("#results").empty();
});