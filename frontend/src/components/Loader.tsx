export const Loader = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-black text-white">
            <div className="relative flex flex-col items-center w-64 p-4 space-y-4 animate-pulse">
                <div className="h-16 w-16 rounded-full bg-gray-700"></div>
                <div className="flex flex-col items-center w-full space-y-2">
                    <div className="h-5 w-3/5 rounded-lg bg-gray-700"></div>
                    <div className="h-5 w-4/5 rounded-lg bg-gray-700"></div>
                </div>
                <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-gray-700"></div>
            </div>
        </div>
    );
};

// Add the custom CSS directly in the same file
const styles = document.createElement('style');
styles.innerHTML = `
@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.animate-pulse {
    animation: pulse 2s infinite;
}
`;
document.head.appendChild(styles);
