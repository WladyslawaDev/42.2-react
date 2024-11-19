import "./styles.css";

function MyInput ({name, type ="text", placeholder, label, onChange }) {
    return (
 <div className="input-collective-container"> 
       

       <label htmlFor={name} className="input-label">
        {label}
      </label>

           <input className="input-box" 
           id={name}
           name={name}
           type={type}
           placeholder={placeholder}
           onChange= {onChange}
           />
        </div>

    )
}
export default MyInput; 