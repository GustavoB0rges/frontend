import { NegociacaoController } from './controllers/NegociacaoController';
//ss
const controller = new NegociacaoController();
$('.form').submit( controller.adiciona.bind(controller));