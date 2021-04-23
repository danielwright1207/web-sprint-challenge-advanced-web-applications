import React, { useEffect, useState } from "react";
import axiosWithAuth from "../helpers/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // `http://localhost:5000/api/colors`

  const getColors = () =>
    axiosWithAuth()
      .get(`http://localhost:5000/api/colors`)
      .then((res) => {
        setColorList(res.data);
        console.table(res.data, "got my colors");
      })
      .catch((err) => {
        console.log(err);
      });

  useEffect(() => {
    getColors();
  }, []);

  // useEffect(async () => {
  //   try {
  //     const { data } = await axiosWithAuth().get(
  //       `http://localhost:5000/api/colors`
  //     );
  //     setColorList(data);
  //     console.table(data);
  //   } catch (error) {
  //     console.log(error, "error with getting colors");
  //   }
  // }, []);

  return (
    <>
      <ColorList
        colors={colorList}
        updateColors={setColorList}
        getColors={getColors}
      />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
