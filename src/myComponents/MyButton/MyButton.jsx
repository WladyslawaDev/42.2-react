import "./styles.css";

function MyButton ({name, onClick}) {
    return (
        <button className="myButton" onClick ={onClick}>
            {name}
        </button>
    )
}

export default MyButton;