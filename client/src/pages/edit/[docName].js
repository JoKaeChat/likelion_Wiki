import s from "../../styles/Wikidoc.module.css";
import MainLayout from "../../components/mainLayout";
import {Link, useParams} from 'react-router-dom';


function WikiDocEdit(){

    const {title} = useParams();


    return(
        <MainLayout>
          <div className={s.header}>
            <div className={s.headerContainer}>
              <h1 className={s.title}>[문서이름] (새 문서 생성)</h1>
              <div className={s.buttonContainer}>
                <Link to={`/delete/${title}`}  id={s.red} className={s.buttonFirst}>삭제</Link>
                <Link to={`/w/${title}`} className={s.buttonLast}>돌아가기</Link>
              </div>
            </div>
          </div>
          
          <div className={s.body}>
          
            <div className={`${s.flex} ${s.margin_bottom_10px}` } >
              <textarea className ={s.textarea}/>  
            </div> 
            <div className={s.saveBtnContainer}>
             <button className={s.saveBtn}>저장</button>
            </div>

          </div>
        </MainLayout>
    )
}

export default WikiDocEdit;