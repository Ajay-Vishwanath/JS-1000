class ReverbObject {
    constructor(options) {
        this.context = options.context
        this.source = options.url
        this.loadAudio(this, options.url);
        
    }

    loadAudio(object, url) {
        var context = this.context

        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.responseType = 'arraybuffer';

        request.onload = function () {
            context.decodeAudioData(request.response, function (buffer) {
                object.buffer = buffer;
            });
        }
        request.send();
    }
}

export default ReverbObject