interface PrimaryButtonProps {
    text: string,
    onClick?: () => void;
    disabled: boolean;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({text, onClick, disabled = false}) => {
    return (
        <button className="
        flex justify-center items-center

        w-[120px] h-auto
        mx-[2%] my-[1%]
        px-[2%] py-[1%]

        border-3
        rounded-lg

        bg-black
        border-black
        text-white

        text-xl
        font-semibold

        duration-200 ease-in-out

        transition
        hover:bg-gray-100
        hover:border-red
        hover:text-black

        transform 
        hover:scale-105 
        hover:rotate-1 
        
        cursor-pointer
        ">{text}
        </button>
    );
}

export default PrimaryButton;