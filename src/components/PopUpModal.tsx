import React from "react";

interface PopUpModalProps {
    title?: string; // optional
    message: string;
    onClose: () => void;
}
const PopUpModal: React.FC<PopUpModalProps> = ({ title, message, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            {/* Modal box */}
            <div className="bg-white rounded-lg p-6 w-80 max-w-full shadow-lg">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="mb-4">{message}</p>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default PopUpModal