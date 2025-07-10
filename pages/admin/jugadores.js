import { db } from '../../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';

export default function JugadoresAdmin() {
  const [nombre, setNombre] = useState('');
  const [equipoId, setEquipoId] = useState('');

  const crearJugador = async () => {
    await addDoc(collection(db, 'jugadores'), {
      nombre,
      equipoId,
      creado: new Date(),
    });
  };

  return (
    <div>
      <h2>Crear nuevo jugador</h2>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre del jugador" />
      <input type="text" value={equipoId} onChange={(e) => setEquipoId(e.target.value)} placeholder="ID del equipo" />
      <button onClick={crearJugador}>Crear</button>
    </div>
  );
}