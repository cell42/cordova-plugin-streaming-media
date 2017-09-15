    "use strict";
    function StreamingMedia() {
    }

    StreamingMedia.prototype.playVideo = function (url, options) {
        this.__openFile(url);
    };

    StreamingMedia.prototype.playAudio = function (url, options) {
        this.__openFile(url);
    };

    StreamingMedia.prototype.install = function () {
	    if (!window.plugins) {
		    window.plugins = {};
	    }
	    window.plugins.streamingMedia = new StreamingMedia();
	    return window.plugins.streamingMedia;
    };

    StreamingMedia.prototype.__openFile = function (url) {
        var uri = new Windows.Foundation.Uri(url)

        Windows.Storage.StorageFile.getFileFromApplicationUriAsync(uri)
        .done(function(filePath) {
            Windows.System.Launcher.launchFileAsync(filePath);
        });
    };

    cordova.addConstructor(StreamingMedia.prototype.install);
    cordova.commandProxy.add("StreamingMedia", StreamingMedia);
