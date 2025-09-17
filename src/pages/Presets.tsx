// BUTTONS
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import TertiaryButton from "../components/TertiaryButton";
import IconButton from "../components/IconButton";
import FABButton from "../components/FABButton";

const Presets = () => {
    return (
        <div className="flex justify-center items-center bg-gray-100 h-screen">
            <div className="flex flex-col items-center border w-[10%] py-4 h-auto">
                <h1 className="text-2xl font-bold">Buttons</h1>
                <p>Primary Button</p>
                <PrimaryButton text="Submit" disabled/>            
                <p>Secondary Button</p>
                <SecondaryButton text="Cancel" disabled/>
                <p>Tertiary Button</p>
                <TertiaryButton text="Cancel" disabled/>
                <p>Icon Button</p>
                <IconButton size="md" icon={<img src="./fb-icon.png" alt="Facebook" className=""/>} />
                <p>FAB Button</p>
                <FABButton size="md" icon={<img src="./fb-icon.png" alt="Facebook" className=""/>} />
            </div>
        </div>
    );
};

export default Presets;