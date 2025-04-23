
import {forwardRef} from "react";
import Map from "./Map";
import Button from "./Button";

var Contact=forwardRef((props,ref)=> {
  const address =
    "6386 Spring St undefined Anchorage,Georgia 12473 United States";
  const phoneNo = "(843) 555-0130";
  const mailId = "willie.jennings@example.com";

  return (
    <div ref={ref} id="contact-container" className="flex my-[10vh] gap-5 page-width m-auto justify-center" >

    <div id="contactForm" className="flex flex-col">
        <h3 className="text-[1rem] font-extrabold text-center my-[3rem]">Contact Us</h3>
        <form action="/contact" method="post" className="flex flex-col gap-5">
            <input type="text" name="name" placeholder="Your Name" id="email" className=""/>
            <input type="email" name="email" placeholder="Your Email" id="email" className=""/>
            <input type="text" name="Message" placeholder="Your Message" id="email" className="message"/>
            <Button name="Send" />
                </form>
    </div>
      <div id="location" className="flexColCentered my-[5vh]">
        <div id="contact-details" className="flex gap-5 flex-1">
          <div className="flexColCentered">
            <img src="./assets/marker.svg" alt="location logo" />
            <h6 id="address" className="text-center">{address}</h6>
          </div>
          <div className="flexColCentered">
            <img src="./assets/phone.svg" alt="phone logo" />
            <h6 id="phone"  className="text-center">{phoneNo}</h6>
          </div>
          <div className="flexColCentered">
            <img src="./assets/mail.svg" alt="mail logo" />
            <h6 id="mail"  className="text-center">{mailId}</h6>
          </div>
        </div>
        <div className="my-[10vh]">
        <Map latitude="51.16433189886411" longitude="-115.56670091118391" />
        </div>
      </div>
    </div>
  )
});

export default Contact;
