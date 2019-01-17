(function () {
    var app = angular.module('AJIwoca', []);

	var homeCtrl = function ($filter, $timeout) {
        var self = this;
		
		self.isSongPlaying = false;
		
		self.playlist = [
			{artist: "Dimmu Borgir", title: "Progenies Of The Great Apocalypse", duration: 325, position: 0, thumbnail: ""},
			{artist: "The Eighties Matchbox B-Line Disaster", title: "Mister Mental", duration: 175, position: 0, thumbnail: ""},
			{artist: "Laibach", title: "Tanz Mit Laibach", duration: 261, position: 0, thumbnail: ""},
			{artist: "Raging Speedhorn", title: "Oh How The Great Have Fallen", duration: 224, position: 0, thumbnail: ""},
			{artist: "Skindred", title: "World Domination", duration: 153, position: 0, thumbnail: ""}			 
		];
		self.currentSong = {artist: "to begin playback", title: "Click a song", duration: 0, position: 0, thumbnail: ""};
		
		self.durationPercent = function(){
			return (self.currentSong.duration / self.currentSong.position || 0) + '%'
		}
		
		self.selectASong = function(selectedSong) {
			//stop playback here, then...
			self.currentSong = selectedSong;
			self.isSongPlaying = true;
			self.playSong();
		}
		
		self.togglePlay = function(){
			self.isSongPlaying = !self.isSongPlaying;
			self.playSong();
		}
		
		self.playSong = function(){
			//will play/pause the selected song
		}

    }

    app.controller('homeCtrl', homeCtrl);
}());