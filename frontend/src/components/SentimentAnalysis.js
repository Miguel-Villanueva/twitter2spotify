import React from "react";
import Sentiment from "sentiment";
import mockTweets from "../twitterMockData/sadTweets.json";
import winkSentiment from "wink-sentiment";

const sentimentAnalysis = () => {
  const sentiment = new Sentiment();

  const tweets = mockTweets.data;

  //Testing wink-sentiment library
  const calcWinkSentiment = (sum, data) => {
    const score = winkSentiment(data.tweet).normalizedScore;
    console.log(sum);
    if (score !== 0) {
      return (sum += score);
    } else {
      return sum;
    }
  };
  //const meanWinkSentiment = tweets.reduce(calcWinkSentiment, 0) / tweets.length;
  console.log("wink sentiment mean: " + tweets.reduce(calcWinkSentiment, 0));
  //Ignoring nuetral words (sad tweets)-> meanTweetSentiment = .272727
  //Account for nuetral words (sad tweets)-> meanTweetSentiment = .00144
  const calcTweetSentiment = (sumSentiment, tweet) => {
    if (sentiment.analyze(tweet.tweet).calculation.length !== 0) {
      return (sumSentiment += sentiment.analyze(tweet.tweet).comparative);
      // sentiment.analyze(tweet.tweet).score /
      // sentiment.analyze(tweet.tweet).calculation.length);
    } else {
      return sumSentiment;
    }
  };
  const meanTweetSentiment =
    tweets.reduce(calcTweetSentiment, 0) / tweets.length;
  console.log("AFINN sentiment mean " + meanTweetSentiment);

  return <div></div>;
};

export default sentimentAnalysis;
