
import { forwardRef } from "react";
import FeatureCard from "./FeatureCards";
import VideoPlayer from "./VideoPlayer";
import './styles.css';

const Features=forwardRef((props,ref)=> {
  return (
    <div id="Features" ref={ref} className="page-width flex gap-2 flex-col">
        <div id="feature-heading" className="flex flex-col align-middle justify-center">
        <h2 className="section-heading m-2">Features</h2>
        <h4>
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </h4>
      </div>
      <div id="feature-items" className="flex gap-2 page-width">
        <FeatureCard
        imagePath="/assets/card1vector.png"
        featureTitle="OpenType features 
        Variable fonts"
        featureDesc="Slate helps you see how 
        many more days you need 
        to work to reach your 
        financial goal."
        />
        <FeatureCard imagePath="/assets/card2vector.png" 
        featureTitle="Design with real data"
        featureDesc="Slate helps you see how 
many more days you need 
to work to reach your 
financial goal."/>
        <FeatureCard imagePath="/assets/card3vector.png" 
        featureTitle="Fastest way to 
take action"
        featureDesc="Slate helps you see how 
many more days you need 
to work to reach your 
financial goal."/>
      </div>
      <div className="p-4">
      <VideoPlayer thumbnail="/assets/team-work.jpg" videoPath="/assets/feature.mp4"/>
    </div>
    </div>
  );
});

export default Features;
