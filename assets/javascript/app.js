$("search-button").on("click", function () {
    var searchTerm = $("#search");
    var retrieveMax = $("#exampleFormControlSelect1");
    var beginYear = $("#starYear");
    var endYear = $("endYear");

    beginYear = beginYear + "0101";
    endYear = end + "1231";

    var aSearch = {
        searchTerm: searchTerm,
        retrieveMax: retrieveMax,
        beginYear: beginYear,
        endYear: endYear
    }

    function search(aSearch) {

        var searchTerm = aSearch.searchTerm;
        var retrieveMax = aSearch.retrieveMax;
        var beginYear = aSearch.beginYear;
        var endYear = aSearch.endYear;

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

            console.log(result);
            result.response.docs.forEach(function (each) {
                console.log(each.headline);
            });


        }).fail(function (err) {
            throw err;
        });

    }

    search(aSearch);
});