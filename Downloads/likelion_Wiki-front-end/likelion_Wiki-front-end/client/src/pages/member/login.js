import s from "../../styles/Wikidoc.module.css";
import MainLayout from "../../components/mainLayout";
import {Link} from 'react-router-dom';


function Login(){

    return (
    <MainLayout>
        <div>
            
            <div className={s.header}>
                <div className={s.headerContainer}>
                    <h1 className={s.title}>로그인</h1>
                </div>
            </div>    
           
                
            <form className={s.loginBody}>   
                <div className={s.loginBodyContainer}>
                <div className={s.loginInput}>
                    <lable for ={s.username}>Email</lable>
                    <input type="text" className={s.email}></input>
                    <label for ={s.password}>Password</label>
                    <input type="password" className={s.password}></input>

                </div>

                <div className={s.loginSecondLine}>
                    
                    <div >
                        <input type="checkbox" className={s.checkbox}></input>
                        <label for={s.checkbox}>자동 로그인</label>
                    </div>
                    <Link to={"/member/recover"}>[아이디/비밀번호 찾기]</Link>
                </div>

                <div className={s.loginBtn}>
                    <Link to={"/member/signUp"}>계정 만들기</Link>
                    <button>로그인</button>
                </div>
                </div>
            </form> 
            

        </div>

    </MainLayout>
    );
}

export default Login;