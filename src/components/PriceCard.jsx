import pricePackages from "./pricePackages.js";
import Button from "./Button.jsx";

function CreateCard(props) {
  return (
    <div
      className={`w-80 rounded-2xl p-6 text-center text-white shadow-md ${
        props.highlight
          ? "bg-blue-500 scale-105"
          : "bg-white text-black"
      } transition-all duration-300`}
    >
      <h3 className="text-lg font-bold mb-1 text-[#374354] text-[1.5rem]">{props.name}</h3>
      <h6 className="text-sm mb-4 text-[#374354]">{props.details}</h6>

      <div
        className="grid grid-cols-[auto_auto] grid-rows-2 justify-center items-center my-8 text-[#374354] gap-x-1"
        style={{ gridTemplateAreas: "'price dollar' 'price pm'" }}
      >
        <h1
          style={{ gridArea: "price"}}
          className="text-[4rem] font-extrabold leading-none flexColCentered"
        >
          {props.price}
        </h1>
        <h3
          style={{ gridArea: "dollar" }}
          className="text-xl font-semibold flexColCentered"
        >
          $
        </h3>
        <h6 style={{ gridArea: "pm" }} className="text-sm">
          Per Month
        </h6>
      </div>

      <ul className="space-y-2 text-sm mb-8 text-black flex flexColCentered gap-4">
        {props.features.map((feature, index) => (
          <li key={index} >Pricing Feature</li>
        ))}
      </ul>

      <Button name="Order Now" />
    </div>
  );
}

function PriceCard() {
  return pricePackages.map((pricePackage) => {
    return (
    //   <div className="flex justify-center items-center gap-6 bg-[#1d2330] py-12">
    //       </div>
    <div id="pack-card">
        <CreateCard
          key={pricePackage.id}
          name={pricePackage.name}
          details={pricePackage.details}
          price={pricePackage.price}
          features={pricePackage.features}
          />
    </div>
    );
  });
}

export default PriceCard;
