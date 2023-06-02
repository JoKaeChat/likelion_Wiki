import MainLayout from "../../components/mainLayout";
import s from "../../styles/Wikidoc.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function WikiDoc(){

  const [post,setPost] = useState();
  const {title} = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/bbs/${title}`, {
          method: "GET",
          credential:"include"
        });
        if (response.ok) {
          const data = await response.json();
          setPost(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    if(post){
      console.log(post);
    }

    fetchPost();
  }, [title]);

  
  
  

  

    return(
        <MainLayout>
        <div>

        <div className={s.header}>
          <div className={s.headerContainer}>
            <h1 className={s.title}>
              { post&& post[0].title } 
            </h1>
            
            <div>
              <div className={s.buttonContainer}>
                <Link to= {'/edit/' + {title}.title} id={s.buttonFirst}> 편집 </Link>
                <Link to ={'/history/'+{title}.title}id={s.buttonLast}>문서 역사</Link>
              </div>

              <div className={s.time}>
               {post&& post.created_at}
              </div>

            </div>

          </div>
        </div>
          
          <div className={s.body}>
           {post&&post[0].body}
          
          </div>

        </div>  
        </MainLayout>

    )
}

export default WikiDoc;