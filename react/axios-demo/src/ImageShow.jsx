function ImageShow({image}){
    return (   
        <div className="p-4 bg-sky-50 h-min max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image.urls.small} alt={image.alt_description} />
        </div>
    )
}
export default ImageShow