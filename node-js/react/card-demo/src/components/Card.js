import 'bulma/css/bulma.css';

function Card(image, title, handler, description) {
    return(
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">{title}</p>
                <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
            </header>
            <div class="card-image">
                <figure class="image is-4by3">
                <img
                    src={image}
                    alt="Placeholder image"
                />
                </figure>
            </div>
            <div class="card-content">
                <div class="content">{description}</div>
            </div>
        </div>
    )
}

export default Card;
// This component is a placeholder for a card component that will be styled using Bulma CSS framework