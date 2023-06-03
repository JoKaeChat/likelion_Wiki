import MainLayout from "../../components/mainLayout";
import s from "../../styles/Wikidoc.module.css";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function WikiDocHistory() {
  const { title } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `http://54.180.147.24:3001/api/histroy/${title}`,
          {
            method: "GET",
          }
        );
        if (response) {
          const record = await response.json();
          console.log(record);
          if (record[0] === undefined) {
            setData("db empty");
            return;
          }
          setData(...data, record);
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (data) {
      console.log(data);
    }
    fetchPost();
  });
  return (
    <MainLayout>
      <div>
        <div className={s.header}>
          <div className={s.headerContainer}>
            <h1 className={s.title}>[호랑이] (문서 역사)</h1>

            <div>
              <div className={s.buttonContainer}>
                <a href={"/edit/" + { title }.title} className={s.buttonFirst}>
                  {" "}
                  편집{" "}
                </a>

                <a
                  href={"/history/" + { title }.title}
                  className={s.buttonLast}
                >
                  문서 역사
                </a>
              </div>
              <div className={s.time}>최근 수정 시각</div>
            </div>
          </div>
        </div>
        <div className={s.body}>
          <ul className={s.historyList}>
            <li>
              [문서 생성 시간][버전 이름] [작성자]<a>보기</a>
            </li>
            <li>
              [문서 생성 시간][버전 이름] [작성자]<a>보기</a>
            </li>
            <li>
              [문서 생성 시간][버전 이름] [작성자]<a>보기</a>
            </li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}

export default WikiDocHistory;
