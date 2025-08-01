import ImageShow from "./ImageShow"

function ImageList({images}){
    // make sure the cards show up like a grid using tailwind css
    if(!images || images.length === 0){
        return <div className="text-white text-center">No images found</div>
    }
    // if images is empty, return a message
    // if images is not empty, map over the images and return an ImageShow component for each image
    // also add a key prop to the ImageShow component
    if(!images.length){
        return <div>No images found</div>
    }
    const renderedImages=images.map((image,index)=>{
        return <ImageShow image={image} key={index} />
    })

    return   <div className="image-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10"> {renderedImages}</div>

}
export default ImageList