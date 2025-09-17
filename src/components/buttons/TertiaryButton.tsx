interface TertiaryButtonProps {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
}

const TertiaryButton: React.FC<TertiaryButtonProps> = ({ text, onClick, disabled = false }) => {
    return (
        <button
            onClick={disabled ? undefined : onClick}
            className={`
                flex justify-center items-center

                w-[120px] h-auto
                mx-[2%] my-[1%]
                px-[2%] py-[1%]

                border rounded-lg

                bg-transparent
                border-transparent
                text-gray-600

                text-xl
                font-semibold

                duration-200 ease-in-out

                transition
                hover:text-gray-800
                hover:underline

                transform
                hover:scale-102

                cursor-pointer
                ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            `}
        >
            <p className="text-xl">{text}</p>
        </button>
    );
}

export default TertiaryButton;
