import { db } from '../../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';

export default function NoticiasAdmin() {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [clubId, setClubId] = useState('');

  const publicarNoticia = async () => {
    await addDoc(collection(db, 'noticias'), {
      titulo,
      contenido,
      clubId,
      fecha: new Date(),
    });
  };

  return (
    <div>
      <h2>Publicar Noticia</h2>
      <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Título" />
      <textarea value={contenido} onChange={(e) => setContenido(e.target.value)} placeholder="Contenido"></textarea>
      <input type="text" value={clubId} onChange={(e) => setClubId(e.target.value)} placeholder="ID del club" />
      <button onClick={publicarNoticia}>Publicar</button>
    </div>
  );
}