import s from "../../styles/Wikidoc.module.css";
import MainLayout from "../../components/mainLayout";

function Mypage(){

    return(

        <MainLayout>
            <div>
                <div className={`{${s.header}` }>
                    <div className={`${s.headerContainer}  `}>
                            <h1 className={`${s.title}`}>내 정보</h1>
                    </div>
                </div>    

                <div className={`${s.mypageBody} ${s.body}`}>
                    <div>
                        <div>사용자 이름</div>
                        <div>정동구</div>
                    </div>

                    <div>
                        <div>이메일</div>
                        <div>
                            <div>zzzjdg@naver.com</div> 
                            <button>이메일 변경</button>
                        </div>
                    </div>


                    <div>
                        <div>권한</div>
                        <div>member</div>
                    </div>

                    <div>
                        <div>비밀번호 변경</div>
                        <button>비밀번호 변경</button>
                    </div>



                </div> 
                <div className={s.saveBtnContainer}>
                    <button className={s.saveBtn}>저장</button>
                </div>
            
            
            </div>

        </MainLayout>
    );

}

export default Mypage;