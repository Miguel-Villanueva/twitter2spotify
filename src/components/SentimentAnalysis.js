import React from "react";
import Sentiment from "sentiment";
import mockTweets from "../twitterMockData/fakerProductDescTweets.json";

const sentimentAnalysis = () => {
  const sentiment = new Sentiment();
  const tweets = mockTweets.data;

  const calcTweetSentiment = (sumSentiment, tweet) => {
    return (sumSentiment += sentiment.analyze(tweet.text).comparative);
  };
  const meanTweetSentiment =
    tweets.reduce(calcTweetSentiment, 0) / tweets.length;
  console.log(meanTweetSentiment);

  return <div></div>;
};

export default sentimentAnalysis;
