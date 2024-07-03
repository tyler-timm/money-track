export default function Button({ className, text, type }) {
    
    return (
        <button className={className} type={type}>
            {text}
        </button>
    );
};