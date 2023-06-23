import { defineStore } from "pinia";

export const useChamadosStore = defineStore("chamados", {
  state: () => ({
    status: [
      {id: 0, name: 'Aguardando'},
      {id: 1, name: 'Em Andamento'},
      {id: 2, name: 'Em validação'},
      {id: 3, name: 'Impedido/Pendência'},
      {id: 4, name: 'Cancelado'},
      {id: 5, name: 'Concluído'},
      {id: 6, name: 'Todos'},
    ],
    chamados:[
      {id: 1, ordem:1, nrocham: 0, textSolic: 'Malhas fiscais em produção', mod: '', 
        textObs: '', consultor: 1, priority: 1, idProject: 2, prevdate: '', status: 5},
      {id: 2, ordem:2, nrocham: 0, textSolic: 'Melhorias em tabelas do banco de dados', mod: '', 
        textObs: '', consultor: 2, priority: 1, idProject: 1, prevdate: '', status: 1},
      {id: 3, ordem:3, nrocham: 0, textSolic: 'Revisar os campos e regras da VW_RECEITA_TRIBUTOS', mod: '',
        textObs: '', consultor: 1, priority: 1, idProject: 1, prevdate: '', status: 2},
      {id: 4, ordem:4, nrocham: 0, textSolic: 'Levantar e encaminhar a Techlead os itens de composição utilizados pelos sistemas', mod: '',
        textObs: '', consultor: 1, priority: 1, idProject: 1, prevdate: '', status: 2},
      {id: 5, ordem:5, nrocham: 0, textSolic: 'Grant no banco',  mod: '',
        textObs: '', consultor: 1, priority: 1, idProject: 2, prevdate: '', status: 5},
      {id: 6, ordem:6, nrocham: 0, textSolic: 'Documentação serviço DTE',  mod: '',
        textObs: '', consultor: 1, priority: 1, idProject: 2, prevdate: '', status: 0},
      {id: 7, ordem:7, nrocham: 0, textSolic: 'Envio de registros de passagens DF-e (CTE, MDFE, NFE) ao ambiente nacional', mod: '',
        textObs: '', consultor: 2, priority: 1, idProject: 3, prevdate: '', status: 0},
      {id: 8, ordem:8, nrocham: 0, textSolic: 'Acesso negado à PCK de sincronização de documentos no ambiente de homologação (RPM)', mod: '',
        textObs: '', consultor: 2, priority: 1, idProject: 3, prevdate: '', status: 0},
      {id: 9, ordem:9, nrocham: 0, textSolic: 'Acesso ao banco de dados central de placas de veículo de carga',  mod: '',
        textObs: '', consultor: 1, priority: 1, idProject: 3, prevdate: '', status: 0},
      {id: 10, ordem:10, nrocham: 0, textSolic: 'Precisamos saber se devemos zerar a conta corrente dos TVIs que foram convertidos em Auto de Infração (TVI)', mod: '',
        textObs: '', consultor: 2, priority: 1, idProject: 3, prevdate: '', status: 0},
      {id: 11, ordem:11, nrocham: 0, textSolic: 'A PCK do DTe para envio de mensagem ao contribuinte e a PCK de conversão de TVI em Auto de Infração tem como parâmetro um campo id_usuario.', mod: '',
        textObs: '', consultor: 2, priority: 1, idProject: 3, prevdate: '', status: 2},
      {id: 12, ordem:12, nrocham: 0, textSolic: 'Erro soma das Multas', mod: '',
        textObs: '', consultor: 2, priority: 1, idProject: 3, prevdate: '', status: 0},
      {id: 13, ordem:13, nrocham: 0, textSolic: 'Especificações e documentação do registro de passagem automático implementado pela SEFAZ ', mod: '',
        textObs: '', consultor: 1, priority: 1, idProject: 3, prevdate: '', status: 0},
      {id: 14, ordem:14, nrocham: 0, textSolic: 'Tunnig do banco', mod: '',
        textObs: '', consultor: 2, priority: 1, idProject: 2, prevdate: '', status: 0},
      {id: 15, ordem:15, nrocham: 0, textSolic: 'Situação cadastral', mod: '',
        textObs: '', consultor: 1, priority: 1, idProject: 2, prevdate: '', status: 0},
      {id: 16, ordem:16, nrocham: 0, textSolic: 'Publicação de biblioteca java no servidor de Sonatype NEXUS', mod: '',
        textObs: '', consultor: 1, priority: 1, idProject: 4, prevdate: '', status: 1},
    ],
  }),
  getters: {
    readStatus(){
      return this.status
    },
    readChamados(){
      return this.chamados
    }
  },
  actions: {
    addChamados(item){
      let chamado = {
        id: item.id,
        mat: item.mat,
        name: item.casa,
        active: true
      }
      this.chamados.push(chamado)
    }
  },
});