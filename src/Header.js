// PDF 2.50
const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            {props.content}
        </header>
    );
};

export default Header;