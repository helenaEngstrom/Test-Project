describe('omdb service', function(){
    var movieData = {"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"7.9","imdbVotes":"342","imdbID":"tt0251413","Type":"game","Response":"True"};
    
    it('should return search movie data', function(){
        var service = {};
        
        angular.mock.module({
            'omdbApi':{
                search: function(query){
                    return movieData;
                }
            }
        });
        expect(service.search('star wars')).toEqual(movieData);
    });
});