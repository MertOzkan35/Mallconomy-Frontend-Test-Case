import React, { useEffect } from "react";
import axios from "axios";
import Intro from "../components/intro/intro";
import { addActions } from "../store/actions";
import { useDispatch } from "react-redux";

export default function Home(props) {
  const dispatch = useDispatch();

  // received data is sent to redux
  useEffect(() => {
    dispatch(addActions(props.actions));
  }, []);
  // received data is sent to redux
  return (
    <div>
      <Intro />
    </div>
  );
}

// Retrieving data with the help of axios
export const getServerSideProps = async () => {
  const res = await axios.get(
    "https://cdn.mallconomy.com/testcase/actions.json"
  );

  return {
    props: { actions: res.data },
  };
};
// Retrieving data with the help of axios
