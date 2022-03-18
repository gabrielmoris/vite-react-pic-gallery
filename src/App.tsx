import React from "react";
import "./App.css";
import PicGallery from "react-pic-gallery";

function App() {
    const options = {
        customLoadComponent: () => <h3>Loading</h3>,
        hidePagination: false,
        // externalLightbox: true,
        rowHeight: "500px",
        picsPerRow: 2,
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
            <div className="wrap">
                <PicGallery
                    className="imgs"
                    imgList={listOfImages}
                    options={options}
                />
            </div>
        </div>
    );
}

export default App;
