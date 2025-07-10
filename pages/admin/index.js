import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import Link from 'next/link';

export default function AdminDashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
    });
  }, []);

  if (!user) return <p>Cargando...</p>;

  return (
    <div>
      <h1>Panel de Admin</h1>
      <Link href="/admin/club">Gestionar Clubes</Link><br />
      <Link href="/admin/equipos">Gestionar Equipos</Link><br />
      <Link href="/admin/jugadores">Gestionar Jugadores</Link><br />
      <Link href="/admin/resultados">Gestionar Resultados</Link><br />
      <Link href="/admin/noticias">Noticias</Link>
    </div>
  );
}