function Menu({custom_text}) {
    return (
        <div className="NavMenu">
            <a href="/">Home</a><br />
            <a href="https://www.google.com">{custom_text}</a><br />
        </div>
    );
}
export default Menu;
// This component is a simple navigation menu with links to Home and Google.