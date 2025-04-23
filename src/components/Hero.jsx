import {forwardRef} from "react";
import "./styles.css";
import Button from "./Button"

const Hero = forwardRef((props, ref) => {
     return (
        <div id="Hero" ref={ref} className="m-auto flexColCentered">
            <h1 className="headings-font">The best products start with Figma</h1>
            <p className="paragraph-font">Most calendars are designed for teams. Slate is designed for freelancers</p>
            <Button name="Try for free"/>
        </div>
    );
});

export default Hero;