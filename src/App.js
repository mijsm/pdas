import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

// console.log(AlexaImage); //under 10kb, inline
// console.log(SiriImage); //over 10kb, path to img file

function App() {
    return (
        <div>
            <div>Personal Digital Assistants</div>

            <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} alt=""/>
            <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage} alt=""/>
            <ProfileCard title="Siri" handle="@siri01" image={SiriImage} alt=""/>
        </div>
    )
}

export default App;