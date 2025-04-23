
import './styles.css';

function FeatureCard(props){
    return (
        <div className="Feature-card flex flex-col flexColCentered">
            <img className='vectors' src={props.imagePath} alt="vector image" />
            <h3 className='font-extrabold'>{props.featureTitle}</h3>
            <p className='m-5'>{props.featureDesc}</p>
        </div>
    );
}

export default FeatureCard;