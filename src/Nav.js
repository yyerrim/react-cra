// PDF 2.51
import styles from './App.module.css';

const Nav = (props) => {
    return (
        <nav>
            <ul className={styles.border}>
                <li><a href={props.list1.url}>{props.list1.desc}</a></li>
                <li><a href={props.list2.url}>{props.list2.desc}</a></li>
                <li><a href={props.list3.url}>{props.list3.desc}</a></li>
            </ul>
        </nav >
    );
};

export default Nav;