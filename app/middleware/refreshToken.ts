import { v4 as uuidv4 } from 'uuid';
export function refreshToken() {
    const token = localStorage.getItem('adminToken');
  
    if (token) {
      const tokenRenewalTimer = setInterval(() => {
        // Ejemplo: Generar un nuevo token cada 15 minutos 
        const newToken = uuidv4();
        localStorage.setItem('adminToken', newToken);
      }, 15 * 60 * 1000); // 15 minutos
  
      return tokenRenewalTimer; // Devolver el temporizador para poder limpiarlo si es necesario
    }
  }