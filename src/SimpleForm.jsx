import { useState } from "react"; // Importamos el hook useState desde React para manejar el estado del formulario
import './App.css';

function SimpleForm() {
  // Definimos el estado formData para almacenar los valores del formulario
  // Inicialmente, el campo "name" y "email" están vacíos
  const [formData, setFormData] = useState({ name: "", email: "" });

   // Estado para almacenar los datos cuando el usuario envía el formulario
  const [submittedData, setSubmittedData] = useState(null);  

    // Función que maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    // Actualizamos el estado usando el spread operator para mantener los valores previos
    // [e.target.name] permite modificar dinámicamente el campo correspondiente (name o email)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    // Función que maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenimos el comportamiento por defecto del formulario (recargar la página)
    setSubmittedData(formData);  // Guardamos los datos enviados en el estado
    setFormData({ name: "", email: "" });  // Limpiar los campos de entrada
    console.log("Datos enviados:", formData); // Mostramos los datos en la consola
  };

  return (
    <div className="form-container">
      {/* Formulario que ejecuta handleSubmit cuando se envía */}
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}   // Asignamos el valor desde el estado formData
            onChange={handleChange}  // Llamamos a handleChange cuando el usuario escriba. Se actualiza el estado al escribir
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}   // Asignamos el valor desde el estado formData
            onChange={handleChange}   // Llamamos a handleChange cuando el usuario escriba. Se actualiza el estado al escribir
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>

      {/* Sección que muestra los datos enviados, solo si submittedData tiene un valor */}
      {submittedData && (
        <div className="submitted-data">
          <h3>Datos enviados:</h3>
          <p><strong>Nombre:</strong> {submittedData.name}</p> {/* Muestra el nombre ingresado */}
          <p><strong>Email:</strong> {submittedData.email}</p> {/* Muestra el email ingresado */}
        </div>
      )}
    </div>
  );
}

export default SimpleForm; // Exportamos el componente para usarlo en otros archivos
