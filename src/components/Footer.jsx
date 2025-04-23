import Socials from "./Socials";

function Footer() {
  return (
    <div id="footer-container" className="bg-[#252B42] flex align-middle justify-center gap-[10vw] py-[10vh] text-2xl">
      <div id="footer-pages" className="flex gap-[10vw]">
        <div className="flex flex-col gap-4">
          <h3>Pages</h3>
          <ul className="text-[0.7rem] font-light  flex flex-col gap-2">
            <li>Home</li>
            <li>Features</li>
            <li>Parteners</li>
            <li>Pricing</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Tomothy</h3>
          <ul className="text-[0.7rem] font-light flex flex-col gap-2">
            <li>Eleanor Edwards</li>
            <li>Ted Robertson</li>
            <li>Annette Russell</li>
            <li>Jennie Mckinney</li>
            <li>Gloria Richards</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Jane Black</h3>
          <ul className="text-[0.7rem] font-light  flex flex-col gap-2">
            <li>Philip Jones</li>
            <li>Product</li>
            <li>Colleen Russell</li>
            <li>Marvin Hawkins</li>
            <li>Bruce Simmmons</li>
          </ul>
        </div>
      </div>
      <div id="footer-contact" className="text-[1rem] flex flex-col gap-5">
        <div className="flex gap-3">
          <img src="./assets/marker.svg" alt="location marker" style={{height:20 , width:20 }}/>
          <h6>7480 Mistwood Hollo </h6>
        </div>
        <div className="flex gap-3">
          <img src="./assets/phone.svg" alt="phone logo" style={{height:20 , width:20 }} />
          <h6>(239) 555-0108</h6>
        </div>
        <Socials />
      </div>
    </div>
  );
}

export default Footer;
