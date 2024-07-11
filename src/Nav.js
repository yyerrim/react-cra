import { useState } from 'react';
import styles from './App.module.css';

// PDF 2.51
// const Nav = (props) => {
//     return (
//         <nav>
//             <ul className={styles.border}>
//                 <li><a href={props.list1.url}>{props.list1.desc}</a></li>
//                 <li><a href={props.list2.url}>{props.list2.desc}</a></li>
//                 <li><a href={props.list3.url}>{props.list3.desc}</a></li>
//             </ul>
//         </nav >
//     );
// };

// PDF 2.71
// const Nav = (props) => {
//     return (
//         <nav>
//             <ul className={styles.border}>
//                 {
//                     // props.list.map((v) => <li><a href={v.url}>{v.desc}</a></li>) // 중괄호 없이 사용할때는 return 안적어도됨
//                     props.list.map((v, i) => {
//                         return <li key={i}><a href={v.url}>{v.desc}</a></li>
//                     })
//                 }
//             </ul>
//         </nav >
//     );
// };

// PDF 2.75
const Nav = (props) => {
    console.log("Nav 생성");
    const [list, setList] = useState(props.list);
    // console.log(list);
    // setList(123);
    // state를 사용할때 값이 변경(setList(123);)되면 컴포넌트가 새로 그려짐
    // 새로 그려지면 컴포넌트 함수가 다시 호출되기 때문에 무한 반복에 빠져버림 => 오류 발생

    // PDF 2.78
    const append = () => {
        const data = parseInt(Math.random() * 10) + 1;
        const obj = { url: data, desc: data };
        const updateList = [...list];
        updateList.push(obj);
        setList(updateList);
    };
    // Nav만 렌더링됨

    // PDF 2.80
    const remove = (index) => {
        const updateList = [...list];
        updateList.splice(index, 1); // splice(index, 1) : 지정한 index 1개 없애기
        setList(updateList);
    };

    const [isUpdate, setIsUpdate] = useState(false);
    const [updateIndex, setUpdateIndex] = useState(-1);
    const [updateContent, setUpdateContent] = useState('');
    const [updateUrl, setUpdateUrl] = useState('');
    // PDF 2.83
    const showUpdate = (index) => {
        setIsUpdate(true);
        setUpdateIndex(index);
        setUpdateContent(list[index].desc);
        setUpdateUrl(list[index].url);
    };
    return (
        <nav>
            <button onClick={append}>추가</button>
            <ul className={styles.border}>
                {
                    list.map((v, i) => {
                        return (
                            <li key={i}>
                                <a href={v.url}>{v.desc}</a>
                                <button onClick={() => showUpdate(i)}>수정</button>
                                <button onClick={() => { remove(i); }}>삭제</button>
                            </li>
                        )
                    })
                }
            </ul>
            {
                isUpdate ? (
                    <div>
                        수정모드: {updateIndex}번
                        <input type='text' id='content' value={updateContent}
                            onChange={(e) => {
                                const content = e.target.value;
                                setUpdateContent(content);
                            }} />
                        <input type='text' id='url' value={updateUrl}
                            onChange={(e) => {
                                const url = e.target.value;
                                setUpdateUrl(url);
                            }} />
                        <button onClick={() => {
                            const value = updateContent;
                            const url = updateUrl;
                            const updateList = [...list];
                            updateList[updateIndex] = { "url": url, "desc": value };
                            setList(updateList);
                            setIsUpdate(false);
                        }}>
                            완료
                        </button>
                    </div>
                ) : null
            }
        </nav >
    );
};

export default Nav;