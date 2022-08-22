import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";
/* components */
import EditorContainer from "../components/EditorContainer";

const EditDiary = () => {
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const { date } = useParams();

  /* find target diary */
  const [originData, setOriginData] = useState();
  useEffect(() => {
    console.log("EditDiary", diaryList);
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find((it) => it.date === date);

      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        alert("없는 일기입니다.");
        navigate("/calendar", { replace: true });
      }
    }
  }, [originData, diaryList]);
  console.log("EditDiary", originData);

  return (
    <div className="EditDiary">
      {originData && (
        <EditorContainer
          isEdit={true}
          originData={originData}
        ></EditorContainer>
      )}
    </div>
  );
};

export default EditDiary;
