(function () {
    var app = angular.module('AJIwoca', []);

	var homeCtrl = function ($filter, $timeout) {
        var self = this;
		
		self.playlist = [
			{artist: "Dimmu Borgir", title: "Progenies Of The Great Apocalypse", duration: 5.416, position: 0, thumbnail: ""},
			{artist: "The Eighties Matchbox B-Line Disaster", title: "Mister Mental", duration: 2.916, position: 0 thumbnail: ""},
			{artist: "Laibach", title: "Tanz Mit Laibach", duration: 4.35, position: 0 thumbnail: ""},
			{artist: "Raging Speedhorn", title: "Oh How The Great Have Fallen", duration: 3.733, position: 0 thumbnail: ""},
			{artist: "Skindred", title: "World Domination", duration: 2.383, position: 0 thumbnail: ""}			 
		];
		self.currentSong = {artist: "", title: "", duration: 0, position: 0, thumbnail: ""};
		
		self.selectASong = function(selectedSong) {
			//stop playback here, then...
			self.currentSong = selectedSong;
			self.playSong();
		}
		
		self.playSong = function(){
			//will play/pause the selected song
			alert("la la la");
		}

    }

    app.controller('homeCtrl', homeCtrl);
}());