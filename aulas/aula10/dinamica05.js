const { createContainer, asClass } = require('awilix');

// Serviço de exemplo
class Logger {
  log(msg) {
    console.log(`[LOG]: ${msg}`);
  }
}

// Outro serviço que depende do Logger
class UserService {
  constructor({ logger }) {
    this.logger = logger;
  }

  createUser(name) {
    this.logger.log(`Usuário ${name} criado com sucesso.`);
  }
}

// Criar o container
const container = createContainer();

// Registrar as classes no container
container.register({
  logger: asClass(Logger).singleton(),
  userService: asClass(UserService).singleton(),
});

// Resolver a dependência e usar o serviço
const userService = container.resolve('userService');
userService.createUser('Maria');
