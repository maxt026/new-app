import React, { useState, useEffect, Fragment } from "react";
import config from "./config.js";
import numeral from "numeral";

const YTViews = () => {
  const [subCount, setSubCount] = useState();

  useEffect(() => {
    const { api_key, channel_id } = config;
    const apiCall = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channel_id}&key=${api_key}`;
    fetch(apiCall)
      .then(result => result.json())
      .then(data => {
        console.log(data);
        const count = numeral(data.items[0].statistics.viewCount).format("0,0");
        setSubCount(count);
      });
  });

  return <Fragment>{subCount}</Fragment>;
};

export default YTViews;
