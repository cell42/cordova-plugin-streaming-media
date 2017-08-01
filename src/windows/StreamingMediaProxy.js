"use strict";
function StreamingMedia() {
}

StreamingMedia.prototype.playVideo = function (url, options) {
    var uri = new Windows.Foundation.Uri(url)

    Windows.Storage.StorageFile.getFileFromApplicationUriAsync(uri)
    .done(function(filePath) {
        Windows.System.Launcher.launchFileAsync(filePath);
    });
};

StreamingMedia.prototype.playAudio = function (url, options) {
	throw new Error("InvalidFunction: playAudio is not yet implemented");
};

StreamingMedia.prototype.install = function () {
	if (!window.plugins) {
		window.plugins = {};
	}
	window.plugins.streamingMedia = new StreamingMedia();
	return window.plugins.streamingMedia;
};

cordova.addConstructor(StreamingMedia.prototype.install);
cordova.commandProxy.add("StreamingMedia", StreamingMedia);