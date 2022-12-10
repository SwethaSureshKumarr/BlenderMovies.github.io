var VIDEO_URL = "https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0";
fetch(VIDEO_URL).then((_response) => {
    if (!_response.ok) {
        throw new Error(`HTTP error! Status: ${ _response.status }`);
    }
    return _response.json();
}).then((_data) => {
    _constructVideoElements(_data);
});


const _constructVideoElements = function(_video) {
    var video = _video;
    var $videoWrapper = $(".video-wrapper");
    var $videos = $("#video")[0];
    var $source = $('<source>', {
        src: `${_video.videoUrl}`
    });
    $videos.append($source);

    // Title and the details of the film
    var $videoTitle = $("<h2>").text(video.title);
    var $videoDescription = $("<p>").text(video.description);
    $videoWrapper.append($videoTitle);
    $videoWrapper.append($videoDescription);

    // horizontalLine styles 
    var $horizontalLine = $("<hr>", {
        class: "horizontal-line"
    });

    $videoWrapper.append($horizontalLine);

    //comments of reviewers

    var $commentWrapper = $("<div>", {
        class: "comment-wrapper"
    });

    var $commentHeading = $("<h1>").text("Comments");
    $commentWrapper.append($commentHeading);
    var comments = video.comments;
    console.log(comments);

    for (var i of comments) {
        // card for the comments
        var $card = $('<div>', {
            class: "comment-card"
        });

        // image of reviewers
        var $img = $('<img>', {
            src: i.image,
            class: "comment-img"
        }).appendTo($card);

        // name of reviewers

        var $nameDescription = $('<div>', {
            class: "name-desc"
        });
        var $name = $('<p>', {
            class: "comment-name"
        }).text(i.name).appendTo($nameDescription);
        // comments of reviewers
        var $comment = $('<p>', {
            class: "comments-desc"
        }).text(i.comment);
        $nameDescription.append($comment);
        $card.append($nameDescription);
        $commentWrapper.append($card);
    }
    $videoWrapper.append($commentWrapper);
    var screenWidth = window.matchMedia("(max-width: 500px)");
    if (screenWidth.matches) {
        var $horizontalLine = $("<hr>", {
            class: "horizontal-line"
        });
        $videoWrapper.append($horizontalLine);
    }

}


// video addition to the WEBPAGE
var POSTER_URL = "https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346"
fetch(POSTER_URL).then((_response) => {
    if (!_response.ok) {
        throw new Error(`HTTP error! Status: ${ _response.status }`);
    }
    return _response.json();
}).then((_data) => {
    _constructPosterElements(_data);
});

const _constructPosterElements = function(_posters) {
    var posters = _posters;
    var $posterCard = $("<div>", {
        class: "posters"
    });

    //projects-wrapper
    posters.forEach(i => {
        var $posterimg = $("<img>", {
            class: "poster-img",
            src: i.imageUrl
        });
        $posterCard.append($posterimg);
    });

    var $poster = $(".projects-wrapper").append($posterCard);


}