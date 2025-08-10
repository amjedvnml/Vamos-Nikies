




const Button = ({ children, onClick, className = "" }) => {
    return (
        <button
            className={`btn btn-primary w-2.50 h-10 font-semibold py-6 px-6 text-center flex items-center justify-center hover:scale-105 transition duration-300 ease-in-out ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button