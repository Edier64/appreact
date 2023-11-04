import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import '../components/Header.css';
//import { useSupabase } from '../BD/Supabase'; // Asegúrate de importar el hook de Supabase

function UserProfile() {
 // const supabase = useSupabase(); 
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  // Función para cargar los datos del usuario desde la base de datos
  const fetchUserData = async () => {
 
    try {
      const { data, error } = await supabase
        .from('users') 
        .select('*')
        .eq('id', 1); 

      if (error) {
        console.error('Error al obtener datos del usuario:', error.message);
      } else {
        setUserData(data[0]);
      }
    } catch (error) {
      console.error('Error al obtener datos del usuario:', error.message);
    }
  };

  
  useEffect(() => {
    fetchUserData();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const { data, error } = await supabase
        .from('users')
        .upsert([userData]); // Actualiza los datos del usuario
      if (error) {
        console.error('Error al guardar los cambios:', error.message);
      } else {
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Error al guardar los cambios:', error.message);
    }
  };

  // Función para eliminar el usuario
  const handleDelete = async () => {
    try {
      const { error } = await supabase
        .from('users')
        .delete() 
        .eq('id', userData.id); // Reemplaza con el ID del usuario que deseas eliminar
      if (error) {
        console.error('Error al eliminar el usuario:', error.message);
      } else {

      }
    } catch (error) {
      console.error('Error al eliminar el usuario:', error.message);
    }
  };

  return (
    <div className="UserProfile">
      <Header />
      <section id="profile" className="section-init">
        <div className="container">
          <h2>Perfil de Usuario</h2>
          {isEditing ? (
            <div>
              <label htmlFor="username">Nombre de Usuario</label>
              <input
                type="text"
                id="username"
                name="username"
                value={userData.username}
                onChange={(e) => setUserData({ ...userData, username: e.target.value })}
              />
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              />
              <button onClick={handleSave}>Guardar</button>
            </div>
          ) : (
            <div>
              <p>Nombre de Usuario: {userData.username}</p>
              <p>Correo Electrónico: {userData.email}</p>
              <button onClick={handleEdit}>Editar</button>
              <button onClick={handleDelete}>Eliminar</button>
            </div>
          )}
        </div>
      </section>
      <footer>
        <div className="container">
          <p>&copy; 2023 Bolsa de Empleo</p>
        </div>
      </footer>
    </div>
  );
}

export default UserProfile;
