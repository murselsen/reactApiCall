import React from 'react';

const ImageItem = ({ image }) => {
    console.log("Image Item:", image);
};


const Imagelist = ({ imagesPlaceholder }) => {
    console.log("Images Placeholder:", imagesPlaceholder);
    return (<div className="ImageList">
        {imagesPlaceholder.map((image) => <ImageItem key={image.id} image={image} />)}
    </div>)
};
export default Imagelist;