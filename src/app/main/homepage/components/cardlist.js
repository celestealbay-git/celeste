import React from "react";
import ImageCard from "../../../components/card";


export default function CardList() {
    return(
        <div style={containerStyle}>
            <ImageCard
               image="https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg"
               title="Mountain View"
               description="A beautiful mountain landscape."
               />

               <ImageCard
               image="https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg"
               title="Ocean Breeze"
               description="Relaxing ocean scenery."
               />

               <ImageCard
               image="https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg"
               title="City Lights"
               description="Night view of the city skyline."
               />
        </div>
    );
}

const containerStyle = {
    display: "flex",
    gap: "10px",
    justifyContent: "wrap",
    flexwrap: "wrap",
    padding: "40px",
};