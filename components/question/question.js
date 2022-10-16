import React from "react";
import Navbar from "../../components/navbar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { deleteActions } from "../../store/actions";
import { addcompletedActions } from "../../store/completedActions";
import { addScore } from "../../store/score";
function Post() {
  //  **************
  const dispatch = useDispatch();
  const DB = useSelector((state) => state.DB.actionsDb);
  const router = useRouter();
  //  **************

  // We find the element sent in the DB, then render it
  const selectedQuestion = DB.find((x) => x.id == router.query.postId);
  // We find the element sent in the DB, then render it

  const completedQuestions = (value) => {
    // we add the question to the completed questions at the same time we add the score
    dispatch(deleteActions(value));
    dispatch(addcompletedActions(value));
    dispatch(addScore(value));
    // we add the question to the completed questions at the same time we add the score
  };

  return (
    <div>
      <Navbar />
      <div className="question">
        <div className="whiteBox">
          <div className="questionImage">
            <Image
              src={selectedQuestion && selectedQuestion.image}
              alt=""
              title=""
              width="72px%"
              height="72px%"
              objectFit="cover"
            />
          </div>
          <div className="questionPoint">
            +{selectedQuestion && selectedQuestion.point} Points
          </div>
          <div className="questionTitle">
            {selectedQuestion && selectedQuestion.title}
          </div>
          <div className="questionDescription">
            {selectedQuestion && selectedQuestion.description}
          </div>
          <div
            onClick={(e) => completedQuestions(selectedQuestion)}
            className="buttonDiv"
          >
            {selectedQuestion && (
              <Link href={`/congratulations`}>
                <button>Earn point</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
