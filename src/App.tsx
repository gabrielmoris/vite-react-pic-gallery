import React from "react";
import "./App.css";
import PicGallery from "react-pic-gallery";

function App() {
    const options = {
        customLoadComponent: () => <h3>Loading</h3>,
        hidePagination: true,
        externalLightbox: false,// IF I PUT HERE TRUE IT DOESN't OPEN THE IMG
        rowHeight: '500px',
        picsPerRow:3
    };

    const listOfImages = [
        {
            thumbnailSrc: "https://picsum.photos/id/237/200/300",
            fullSrc: "https://picsum.photos/id/237/800/600",
        },
        {
            thumbnailSrc: "https://picsum.photos/id/154/200/150",
            fullSrc: "https://picsum.photos/id/154/200/150",
        },
    ];

    return (
        <div className="App">
            <PicGallery className="imgs" imgList={listOfImages}
             options={options}
              />
        </div>
    );
}

export default App;
