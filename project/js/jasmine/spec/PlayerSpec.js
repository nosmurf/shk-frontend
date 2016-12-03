describe("Users", function() {
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  it("hay users disponibles", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });

  describe("el usuario está autenticado", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("users autenticado ok", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    
  });

  // demonstrates use of spies to intercept and test method calls
 

});