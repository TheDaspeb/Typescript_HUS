import { UserStore } from '../utils/UserStore';
import { User } from '../interfaces/User';

interface DashboardProps {
  currentUser: User;
  loginMessage: string;
  store: UserStore;
  users: User[];
  onRefresh: () => void;
  onLogout: () => void;
}

function Dashboard({
  currentUser,
  loginMessage,
  store,
  users,
  onRefresh,
  onLogout,
}: DashboardProps) {
  const handleCreate = () => {
    store.create({
      fullName: 'Nuevo Usuario',
      email: `nuevo${users.length + 1}@email.com`,
      password: 'demo123',
    });
    onRefresh();
  };

  const handleFind = () => {
    const userFound = store.findByName('Vivivana');

    if (userFound) {
      alert(`Usuario encontrado: ${userFound.fullName} - ${userFound.email}`);
      return;
    }

    alert('No se encontró el usuario Vivivana');
  };

  const handleUpdate = () => {
    if (users.length === 0) {
      return;
    }

    store.update(users[0].id, { fullName: 'Vivivana Actualizada' });
    onRefresh();
  };

  const handleRemove = () => {
    if (users.length === 0) {
      return;
    }

    store.remove(users[users.length - 1].id);
    onRefresh();
  };

  return (
    <section className="card">
      <div className="dashboard-header">
        <div>
          <h1>Panel principal</h1>
          <p className="message success">{loginMessage}</p>
          <p className="helper-text">
            Sesión activa: {currentUser.fullName} ({currentUser.email})
          </p>
        </div>
        <button className="secondary-button" onClick={onLogout}>
          Cerrar sesión
        </button>
      </div>

      <div className="actions">
        <button onClick={handleCreate}>Crear usuario</button>
        <button onClick={handleFind}>Buscar Viviana</button>
        <button onClick={handleUpdate}>Actualizar primero</button>
        <button onClick={handleRemove}>Eliminar último</button>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Creado</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.role || 'Sin rol'}</td>
                <td>
                  {user.createdAt
                    ? new Date(user.createdAt).toLocaleString()
                    : 'Sin fecha'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Dashboard;