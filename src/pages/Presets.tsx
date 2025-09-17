import { useNavigate } from "react-router-dom";

// BUTTONS
import PrimaryButton from "../components/buttons/PrimaryButton";
import SecondaryButton from "../components/buttons/SecondaryButton";
import TertiaryButton from "../components/buttons/TertiaryButton";
import IconButton from "../components/buttons/IconButton";
import FABButton from "../components/buttons/FABButton";
import ProfessionalContainer from "../components/container/ProfessionalContainer";

const Presets = () => {
    const navigate = useNavigate();

    const handleReturn = () => {
        navigate("/Dashboard");
    }
    return (
        <div className="flex justify-center items-center bg-gray-100 h-screen">
            {/* BUTTONS */}
            <div className="flex flex-col items-center border w-[10%] py-4 h-auto">
                <h1 className="text-2xl font-bold">Buttons</h1>
                <p>Primary Button</p>
                <PrimaryButton text="Submit" disabled/>            
                <p>Secondary Button</p>
                <SecondaryButton text="Cancel" disabled/>
                <p>Tertiary Button</p>
                <TertiaryButton text="Cancel" disabled/>
                <p>Icon Button</p>
                <IconButton size="md" icon={<img src="./fb-icon.png" alt="Facebook"/>} />
                <p>FAB Button</p>
                <FABButton size="md" icon={<img src="./fb-icon.png" alt="Facebook"/>} />
            </div>
            {/* CONTAINER */}
            <div className="flex flex-col items-center border w-[10%] py-4 h-auto">
                <h1 className="text-2xl font-bold">Container</h1>
                <p>Professional</p>
                <ProfessionalContainer/>
            </div>
            <button onClick={handleReturn}>return</button>
        </div>
    );
};

export default Presets;