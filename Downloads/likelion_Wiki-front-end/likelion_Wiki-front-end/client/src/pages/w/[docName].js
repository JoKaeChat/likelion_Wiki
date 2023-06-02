import MainLayout from "../../components/mainLayout";
import s from "../../styles/Wikidoc.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
function WikiDoc() {
  const [post, setPost] = useState("");
  const { title } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `http://54.180.147.24:3001/api/bbs/${title}`,
          {
            method: "GET",
          }
        );
        console.log("response" + response);
        if (response) {
          const data = await response.json();
          console.log(data);
          if (data[0] === undefined) {
            setPost("db empty");
            return;
          }
          setPost(data[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (post) {
      console.log(post);
    }

    fetchPost();
  }, [title]);

  // if (post === "db empty") {
  //   const history = useHistory();
  //   history.push(`/edit/${title}`);
  //   return null; // 또는 리디렉션 후 렌더링할 내용을 반환할 수 있습니다.
  // }
  console.log(post);
  return (
    <MainLayout>
      <div>
        <div className={s.header}>
          <div className={s.headerContainer}>
            <h1 className={s.title}>{post.title}</h1>

            <div>
              <div className={s.buttonContainer}>
                <Link to={"/edit/" + { title }.title} id={s.buttonFirst}>
                  {" "}
                  편집{" "}
                </Link>
                <Link to={"/history/" + { title }.title} id={s.buttonLast}>
                  문서 역사
                </Link>
              </div>

              <div className={s.time}>{post?.created_at}</div>
            </div>
          </div>
        </div>

        <div className={s.body}>{post?.body}</div>
      </div>
    </MainLayout>
  );
}

export default WikiDoc;
