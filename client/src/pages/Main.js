import MainLayout from "../components/mainLayout";
import s from "../styles/Wikidoc.module.css";
import {Link} from 'react-router-dom';

function Main(){
  
  const params = "대문";
  
  return(

      
       
        <MainLayout>
      <div>

        <div className={s.header}>
          <div className={s.headerContainer}>

            <h1 className={s.title}>멋사위키 대문</h1>

            <div className={s.buttonContainer}>
              <Link to= {'/edit/' + params} className={s.buttonFirst}> 편집 </Link>
              <Link to ={'/history/'+params} className={s.buttonLast}>문서 역사</Link>
            </div>

          </div>

        </div>
          
        <div className={s.body}>
          <div>멋사 위키에 오신 걸 환영합니다~</div>
        </div>

      </div>
        </MainLayout>
        
    )
}

export default Main;