import React, { useEffect, useState } from "react";
import "./App.css";
import PicGallery from "react-pic-gallery";

function App() {
    const [gatitosImg, setGatitosImg] = useState([]);

    const options = {
        customLoadComponent: () => <h3>Loading</h3>,
        hidePagination: false,
        // externalLightbox: true,
        rowHeight: "500px",
        picsPerRow: 2,
    };

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/breeds?limit=24", {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": "1b8133ca-3906-4234-8523-dd77ba7a54b1",
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then((result) => {
                return result.json();
            })
            .then((parsedResult) => {
                let arr: any = [];
                parsedResult.forEach((gatito: any) => {
                    arr.push({
                        thumbnailSrc: gatito.image.url,
                        fullSrc: gatito.image.url,
                    });
                });
                setGatitosImg(arr);
                console.log("gatitosImg", gatitosImg, "ARR", arr);
            })
            .catch((e) => {
                console.log("que paso con los gatitos?", e);
            });
    }, []);

    // const listOfImages = [
    //     {
    //         thumbnailSrc: "https://picsum.photos/id/237/200/300",
    //         fullSrc: "https://picsum.photos/id/237/800/600",
    //     },
    //     {
    //         thumbnailSrc: "https://picsum.photos/id/154/200/150",
    //         fullSrc: "https://picsum.photos/id/154/200/150",
    //     },
    // ];
    // console.log(gatitos)


    return (
        <div className="App">
            <div className="wrap">
                {gatitosImg.length && (
                    <PicGallery
                        className="imgs"
                        imgList={gatitosImg}
                        options={options}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
