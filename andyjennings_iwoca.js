(function () {
    var app = angular.module('AJIwoca', []);

	var homeCtrl = function ($filter, $interval) {
        var self = this;
		
		self.isSongPlaying = false;
		self.songTimer = null;
		
		self.playlist = [
			{artist: "Dimmu Borgir", title: "Progenies Of The Great Apocalypse", duration: 325, position: 0, thumbnail: "dimmu.jpg"},
			{artist: "The Eighties Matchbox B-Line Disaster", title: "Mister Mental", duration: 175, position: 0, thumbnail: "mistermental.jpg"},
			{artist: "Laibach", title: "Tanz Mit Laibach", duration: 261, position: 0, thumbnail: "wat.jpg"},
			{artist: "Onedice", title: "Twice As Sick", duration: 126, position: 0, thumbnail: "onedice.jpg"},
			{artist: "Raging Speedhorn", title: "Oh How The Great Have Fallen", duration: 224, position: 0, thumbnail: "rsh.jpg"}		 
		];
		self.currentSong = {artist: "to begin playback", title: "Click a song", duration: 0, position: 0, thumbnail: ""};
		
		self.durationPercent = function(){
			return (((self.currentSong.position / self.currentSong.duration) || 0 ) * 100) + '%'
		}
		
		self.calculateTime = function(time){
			var seconds = time % 60;
			var minutes = time < 60 ? 0 : Math.floor(time/60);
			return minutes + ":" + (seconds < 10 ? "0"+seconds : seconds);
		}
		
		self.selectASong = function(selectedSong) {
			$interval.cancel(self.songTimer);
			self.currentSong = selectedSong;
			self.currentSong.position = 0;
			self.isSongPlaying = true;
			self.playSong();
		}
		
		self.togglePlay = function(){
			self.isSongPlaying = !self.isSongPlaying;
			self.playSong();
		}
		
		self.playSong = function(){
			if(self.isSongPlaying) {
				self.songTimer = $interval(function(){self.currentSong.position += 1; if (self.currentSong.position == self.currentSong.duration) $interval.cancel(self.songTimer);},1000);
			} else {
				$interval.cancel(self.songTimer);
			}
		}
    }

    app.controller('homeCtrl', homeCtrl);
}());