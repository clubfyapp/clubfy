import { db } from '../../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';

export default function EquiposAdmin() {
  const [nombre, setNombre] = useState('');
  const [clubId, setClubId] = useState('');

  const crearEquipo = async () => {
    await addDoc(collection(db, 'equipos'), {
      nombre,
      clubId,
      creado: new Date(),
    });
  };

  return (
    <div>
      <h2>Crear nuevo equipo</h2>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre del equipo" />
      <input type="text" value={clubId} onChange={(e) => setClubId(e.target.value)} placeholder="ID del club" />
      <button onClick={crearEquipo}>Crear</button>
    </div>
  );
}