import MainLayout from "../../components/mainLayout";
import s from "../../styles/Wikidoc.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function WikiDoc(){

  const [content,setContent] = useState();
  
  const {title} = useParams();
  console.log(title);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/bbs/${title}`, {
          method: "GET",
          credential:"include"
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data.content)
          setContent(data.content);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost();
  }, [title]);

  // if (!post) {
  //   return (
  //     <div>
  //       <h2>이 문서는 편집할 내용이 없습니다.</h2>
  //     </div>
  //   );
  // }
  console.log(content);

    return(
        <MainLayout>
        <div>

        <div className={s.header}>
          <div className={s.headerContainer}>
            <h1 className={s.title}>[문서이름]</h1>

            <div>
              <div className={s.buttonContainer}>
                <a href= {'/edit/' + {title}.title} id={s.buttonFirst}> 편집 </a>
                <a href ={'/history/'+{title}.title}id={s.buttonLast}>문서 역사</a>
              </div>

              <div className={s.time}>
                최근 수정 시각
              </div>

            </div>

          </div>
        </div>
          
          <div className={s.body}>[본문]</div>

        </div>  
        </MainLayout>

    )
}

export default WikiDoc;