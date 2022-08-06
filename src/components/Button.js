const Button = ({ type, value, onClick }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${type} transition p-3 text-white text-2xl font-bold border border-slate-700 rounded-md hover:bg-blue-900`}
        >
            {value}
        </button>
    )
}

export default Button;