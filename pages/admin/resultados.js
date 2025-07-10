import { db } from '../../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';

export default function ResultadosAdmin() {
  const [equipoId, setEquipoId] = useState('');
  const [rival, setRival] = useState('');
  const [marcador, setMarcador] = useState('');

  const agregarResultado = async () => {
    await addDoc(collection(db, 'resultados'), {
      equipoId,
      rival,
      marcador,
      fecha: new Date(),
    });
  };

  return (
    <div>
      <h2>Agregar resultado</h2>
      <input type="text" value={equipoId} onChange={(e) => setEquipoId(e.target.value)} placeholder="ID del equipo" />
      <input type="text" value={rival} onChange={(e) => setRival(e.target.value)} placeholder="Nombre del rival" />
      <input type="text" value={marcador} onChange={(e) => setMarcador(e.target.value)} placeholder="Marcador" />
      <button onClick={agregarResultado}>Agregar</button>
    </div>
  );
}