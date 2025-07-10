import { db } from '../../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';

export default function ClubAdmin() {
  const [nombre, setNombre] = useState('');

  const crearClub = async () => {
    await addDoc(collection(db, 'clubes'), {
      nombre,
      creado: new Date(),
    });
  };

  return (
    <div>
      <h2>Crear nuevo club</h2>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre del club" />
      <button onClick={crearClub}>Crear</button>
    </div>
  );
}