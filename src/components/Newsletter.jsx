import Button from "./Button";
function Newsletter(){

return (
    <div id="newsletter-container" className="text-[#374354] flex page-width">
        <img src="./assets/NewsletterSVG.svg" alt="newsletter-svg-image" className="max-w-[30vw] order-1"/>
        <div className="flex flex-col">
            <h3 className="font-extrabold">At your fingertips</h3>
            <h2 className=" section-heading font-extrabold leading-none my-1 my-4">Lightning fast 
            prototyping </h2>
            <div className="my-4 mb-7">
            <h3 className="font-extrabold">Subscribe to our Newsletter</h3>
            <p>Available exclusivery on Figmaland</p>
            </div>
            <div>
                <form action="/subscribe" method="post">
                    <input type="email" name="email" placeholder="Your Email" id="email" className=""/>
                    <Button name="Subscribe" />
                </form>
            </div>
        </div>
    </div>
);


}

export default Newsletter;