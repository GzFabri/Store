import { createServer } from './infraestructura/modelos/adaptador/http/server'; // Adaptador HTTP
import { UserService } from './dominio/modelos/producto'; // Caso de uso del dominio
import { Database } from './infraestructura/modelos/sequelize'; // Adaptador secundario
import { LoggerService } from './infrastructure/services/logger-service'; // Servicio externo
import config from './config/config'; // Configuración

// Punto de entrada principal
async function main() {
  // 1. Cargar configuración
  const port = config.PORT || 4242;

  // 2. Configurar adaptadores secundarios (infraestructura)
  const userRepository = new Database();
  const logger = new LoggerService();

  // 3. Configurar el caso de uso principal (dominio)
  const userService = new UserService(userRepository);

  // 4. Configurar el adaptador primario (HTTP)
  const server = createServer(userService, logger);

  // 5. Iniciar la aplicación
  server.listen(port, () => {
    logger.info(`Servidor iniciado en http://localhost:${port}`);
  });
}

// Ejecutar la aplicación
main().catch((error) => {
  console.error('Error al iniciar la aplicación:', error);
});
