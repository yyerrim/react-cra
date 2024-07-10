// PDF 2.50
// const Header = (props) => {
//     return (
//         <header>
//             <h1>{props.title}</h1>
//             {props.content}
//         </header>
//     );
// };

// PDF 2.67
// const Header = (props) => {
//     let title = "제목";
//     title += "1";
//     return (
//         <header>
//             <h1>{title}</h1>
//             {/* title은 컴포넌트가 새로 만들어질때마다 값이 초기화됨 */}
//             {/* state를 사용하면 title이 초기화 되는게 아니라 값을 기억해둠 */}
//             {props.content}
//         </header>
//     );
// };

// PDF 2.88
const Header = (props) => {
    let title = "제목";

    const handleClick = (msg) => {
        alert(msg);
    };
    return (
        <header>
            <h1 onClick={(e) => {
                const h1 = e.target;
                const msg = h1.innerText;
                handleClick(msg);
            }}>
                {title}
            </h1>
            {props.content}
        </header>
    );
};
export default Header;