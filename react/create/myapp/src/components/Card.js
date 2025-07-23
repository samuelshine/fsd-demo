function Card(props) {
    return (
        <div className="flex flex-col bg-pink-50 rounded-xl shadow-md p-4 m-4 w-64
            text-center border border-pink-800 items-center">
                <img 
                    src={props.image}
                    alt="logo"
                    className="w-42 h-42 object-contain mx-auto mb-4"
                />
                <hr className="text-black"/>
                <div className="text-lg font-semibold text-grey-800">{props.title}</div>
                <div className="text-sm text-grey-500">{props.handle}</div>
        </div>
    );
}

export default Card;