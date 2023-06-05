<template>
    <v-card
      height="85.5vh"
      width="100%"
    >
      <v-toolbar color="cyan-lighten-1" v-if="!searchActive">
        <v-btn variant="text" icon="mdi-phone"></v-btn>
  
        <v-toolbar-title>Lista</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn variant="text" icon="mdi-magnify" @click="searchActive = !searchActive"></v-btn>
      </v-toolbar>
      <v-toolbar color="cyan-lighten-1" v-else>
        <v-text-field
            class="mx-2 mt-5"
            prepend-inner-icon="mdi-phone"
            clearable
            placeholder="Digite um nome ou uma área"
            v-model="search"
            variant="outlined"
            density="compact"
        ></v-text-field>
      </v-toolbar>
  
      <v-list
        lines="three"
        class="mx-auto overflow-auto"
        height="90%"
       
      >
        <v-list-item v-for="item, i in listComplete" :key="i">
            <template v-slot:prepend>
                <v-icon icon="mdi-phone"></v-icon>
            </template>
            <v-list-item-title>
                <span v-if="item.gestor">{{item.gestor}}</span>
                
            </v-list-item-title>
            <v-list-item-subtitle>
                {{item.area_lotacao}}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
                {{item.telefone}}
            </v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-if="!listComplete.length">
            <template v-slot:prepend>
                <v-icon class="mt-3" icon="mdi-circle-off-outline"></v-icon>
            </template>
            <v-list-item-title>
                Não há resultados para a busca...
            </v-list-item-title>
            <v-list-item-subtitle>
                tente outros termos
            </v-list-item-subtitle>
        </v-list-item>
    
      </v-list>
    </v-card>
  </template>
  <script>
  export default {
    data: () => ({
      searchActive: false,
      search: null,
      listPhones:[
        {
        gestor: "ADRIANA ",
        area_lotacao: "CEL–PROFISCO (Jheniffer - Marcelo Rubim)",
        telefone: "3219-9173"
        },
        {
        gestor: "ALAN JORGE PEREIRA PIRES",
        area_lotacao: "CEGPA -  COTAD -  INFRAESTRUTURA – JOAQUIM - 9097",
        telefone: "3219-9081  -  9 8411-9863"
        },
        {
        gestor: "ALEXANDRE BALBINO",
        area_lotacao: "SIMPLES NACIONAL - SN (Silvino)",
        telefone: "3217-4524                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          "
        },
        {
        gestor: "ALISSON EMANUEL",
        area_lotacao: "COTAF SUBST TRIB - 9 8151-3533 Leonardo-combustível - 3009 Bruno - 9051",
        telefone: "9159 -  3217-4521 "
        },
        {
        gestor: "",
        area_lotacao: "",
        telefone: "Núbia – Felipe Caldeira "
        },
        {
        gestor: "ADALZEMIR – ALFRENEWTON",
        area_lotacao: "CEGPA -  Índice Participação Munícipios",
        telefone: "3217-4504  - 9 8819-0007"
        },
        {
        gestor: "BILKIS MARIA BARBOSA LIMA",
        area_lotacao: "TARF -TRIBUNAL ADMINIST DE RECURSOS",
        telefone: "3219- 9063  -  Julie 9052 -  Victor"
        },
        {
        gestor: "BISMARQUE DE PAULA",
        area_lotacao: "COE – 9 8804-4603- Paula Fabiano ",
        telefone: "3219- 9078"
        },
        {
        gestor: "DAVID WILLIAM CALDAS DUTRA",
        area_lotacao: "CEGAT -  COTEA -  ACOMP. RECEITA - AIDF",
        telefone: "3217- 4517"
        },
        {
        gestor: "DEIA AMPARO L TRINTA PAES ",
        area_lotacao: "COTAF– GRANDES CONTRIBUINTES COM. EXT- RENATA - FELIPE CUNHA  9165-",
        telefone: "3217- 4575  -  DAMÁZIO – RODOLFO TELECOMUNICAÇÕES"
        },
        {
        gestor: "DENIS MALONE DE S. LEITE",
        area_lotacao: "CEGAT -  COTEA -  IPVA - 4561 -  4572",
        telefone: "3219-9007 – 98107-1142"
        },
        {
        gestor: "DIVA JACI DE A. CARVALHO",
        area_lotacao: "CEGAT -  COTET – TRIBUTAÇÃO ",
        telefone: "3217- 4571"
        },
        {
        gestor: "EDILBERTO DE DEUS LIMA",
        area_lotacao: "COE (86) 9 8834-4569",
        telefone: "3219- 9078  -  3219-9040         "
        },
        {
        gestor: "ELIZABETH ATAÍDE B. MENDES",
        area_lotacao: "CEGPA - COTAD - ATIVIDADE OPERACIONAL",
        telefone: "3217- 4552 -  9 8418-5582"
        },
        {
        gestor: "",
        telefone: "",
        area_lotacao: "DALVINA – 4590 – Leandro "
        },
        {
        gestor: "ELVIRA LOURDES FERREIRA",
        area_lotacao: "CEGAF -  COTAF -  Gr. Contribuintes",
        telefone: "3219-9161  -  4568"
        },
        {
        gestor: "",
        telefone: "",
        area_lotacao: "Saulo F. Longo – Energia -  Comunicação"
        },
        {
        gestor: "ELYDA SANTOS RICCI DA SILVA",
        area_lotacao: "CSL – Heloísa  - Adriana - 9 9988-5362",
        telefone: "3217-4559  -  3219-9077"
        },
        {
        gestor: "FERNANDO ANTÔNIO RESENDE DE JESUS – 9 8818-4861",
        area_lotacao: "ASDIN - ASSESSORIA DESENVOLViMENTO INSTITUCIONAL – 9 8422-8534",
        telefone: "3227-5210 -  3217-4515               9 9601-1250 – Anissa -  9094"
        },
        {
        gestor: "FRANCISCA DAS CHAGAS COSTA",
        area_lotacao: "CEGAF -  UNCRI ",
        telefone: "3217- 4562"
        },
        {
        gestor: "FRANCISCO HONÓRIO V. FILHO",
        area_lotacao: "CEGAT -  COTEA -  DIVIDA ATIVA",
        telefone: "3219- 9082 - Claudenir"
        },
        {
        gestor: "",
        telefone: "",
        area_lotacao: "Rodrigo Palhano "
        },
        {
        gestor: "GIOVANNE BRITO ",
        area_lotacao: "UFRE ",
        telefone: "3217-4523 (DELIA)  -  4514"
        },
        {
        gestor: "GORETE BRITO       9 8409-9875",
        area_lotacao: "CEGAF -  AGÊNCIAS – NFA - 9 8837-0101",
        telefone: "3219-9088  -  3217-4542       "
        },
        {
        gestor: "GRACIANE LIMA AGUIAR ",
        area_lotacao: "CEGPA - COTAD - MATERIAL E PATRIMÔNIO",
        telefone: "3219-9072 Ricardo - Frco - Marlon"
        },
        {
        gestor: "HIDEL MATOS SANTOS",
        area_lotacao: "UPCAF - Unid Planej Fiscal  - DTE - MALHA",
        telefone: "3217-4533"
        },
        {
        gestor: "IOLANDA MARIA G. MENDES DE CARVALHO BARBOSA ",
        area_lotacao: "ASRHU - ASSESSORIA DE RECURSOS HUMANOS – 9.9975-5517 - Jacilene - Beth",
        telefone: "3217-4587 -  3219-9070"
        },
        {
        gestor: "",
        area_lotacao: "",
        telefone: "Márcia - Lúcia - Helena - Marilene"
        },
        {
        gestor: "IRENE FERREIRA COSTA - 3011               9 8822-7626 Gonzaga 9 916-1651        ",
        area_lotacao: "CEGAF -  CEL GESTÃO ADM. TRIBUTÁRIA – ARRECADAÇÃO-  AIDF - David 4517 UNINF DIEF 3217-4578 - 4564 (França) ",
        telefone: "3219-9084 - 3217-4560 Gonzaga   "
        },
        {
        gestor: "",
        area_lotacao: "",
        telefone: "9 8875-2602 -  4594 (Darci)"
        },
        {
        gestor: "",
        area_lotacao: "",
        telefone: "Renata – 9165 Com Exterior"
        },
        {
        gestor: "ISABEL CRISTINA F. GRAÇA Halden Délio Fernandes Pereira",
        area_lotacao: "CEGPA -  CELULA GESTÃO PESSOAS ADM GESTOR COTAD - NUC GESTÃO CONTRATO",
        telefone: "3217-4508  -  9 9601-2050"
        },
        {
        gestor: "",
        area_lotacao: "",
        telefone: 4508
        },
        {
        gestor: "JAQUELINE  -  Zezé",
        area_lotacao: "BIBLIOTECA",
        telefone: 9060
        },
        {
        gestor: "JOAQUIM FRANKLIM DA C. NETO",
        area_lotacao: "CEGAF -  COTAF – ECF (cupom fiscal)",
        telefone: "3217-4584 -  3219-9009"
        },
        {
        gestor: "JOBELIZ DE O FURTADO ",
        area_lotacao: "UNAD - NFAvulsa – AGCEN S LUIS      98805-8569",
        telefone: "3219-9035 - UNCP – Lúcia - 4576 (9085) Idenir"
        },
        {
        gestor: "JORGE LUIS CASTRO   (Soraya)                  9 9226-1265",
        area_lotacao: "CEGAF -  Estabelecimentos (SPED) (PAF-e)",
        telefone: "4574  - 4571 -  GFIS -  Leonardo -  Combustível"
        },
        {
        gestor: "",
        telefone: "",
        area_lotacao: "Saulo Longo -  9165 - Renata"
        },
        {
        gestor: "JOSÉ JORGE CARVALHO CUBA",
        area_lotacao: "CEGAF -  AGECEN DE SÃO LUIS -  DETRAN",
        telefone: "3243-4747"
        },
        {
        gestor: "JOSÉ MANOEL DA SILVA BEZERRA",
        area_lotacao: "UNIPI – Unidade de Pesquisa e Investigação  -  Cláudia",
        telefone: "3217-4516"
        },
        {
        gestor: "Maria José Pinheiro  9 9601-2440",
        area_lotacao: "",
        telefone: "",
        },
        {
        gestor: "JOSÉ RIBAMAR VERDE LEMOS",
        area_lotacao: "CEGPA -  telefonia – 9 9974-2163",
        telefone: "3219-9080  -  3217-4500"
        },
        {
        gestor: "JOSÉ VARÃO MONTEIRO FILHO",
        area_lotacao: "CEGPA -  COTEC – GESTÃO DE NEGÓCIOS",
        telefone: "3217-4566  -  3219-9127"
        },
        {
        gestor: "KÉRCIA LANARY BRANDÃO M. DE B. BELLO  - 9 8112-9675         ",
        area_lotacao: "CEGAT -  COTET -  TRIBUTAÇÃO  (Edvirges)   ",
        telefone: "9068 -  9074 -  9067                             3217-4535 -  4540 -  4546 "
        },
        {
        gestor: "",
        area_lotacao: "Tatiana 9 8111.4794 - Lucas 9 8185.7294  Deuselinda -   Aécio – Leônidas - Susy",
        telefone: "Silvio D. Farias 92 98412-4742"
        },
        {
        gestor: "KIOLA MARIA ROCHA OLIVEIRA",
        area_lotacao: "CEGPA -  COTRH -  TREINAMENTO ",
        telefone: "3217-4506 -  4536 (9 8828-1428) "
        },
        {
        gestor: "LAUDIMAR DE JESUS S RABELO",
        area_lotacao: "UPCAF - UNID PLANEJ CONTROLE FISCAL Georgeana",
        telefone: "3219-9057 - Serpa"
        },
        {
        gestor: "LÚCIA REGINA COSTA BRANDÃO",
        area_lotacao: "CEGAF -  AGCEN DE SÃO LUÍS",
        telefone: "3217- 4576"
        },
        {
        gestor: "LUÍS NEVES DE OLIVEIRA ",
        area_lotacao: "GESTOR NOTA LEGAL – Elza ",
        telefone: "3217- 4570  -  9 8138-9340"
        },
        {
        gestor: "MARIA DA CONCEIÇÃO DA SILVA",
        area_lotacao: "CEGPA -  COTRH -  PESSOAL  (Silvinha)",
        telefone: "3217- 4549  -  Mariana - 9054"
        },
        {
        gestor: "MARIA DA GRAÇA MGONÇALVES",
        area_lotacao: "CORREG – Gilda 4593  -  Conceição 9059 ",
        telefone: "3217- 4595  -  4598 -  4509 Aline"
        },
        {
        gestor: "",
        telefone: "",
        area_lotacao: "Elizer -  Cantanhede -  Eleonora "
        },
        {
        gestor: "MARIA DA GRAÇA S. FERREIRA",
        area_lotacao: "CEGAT -  COTET",
        telefone: "3219- 9067 -  3219- 9068"
        },
        {
        gestor: "MARIA DE LOURDES M. LEITE",
        area_lotacao: "CEGPA  -  COTAD -  FINANÇAS",
        telefone: "3217-4555 -  4556"
        },
        {
        gestor: "MARIA JOSÉ ARAÚJO OLIVEIRA",
        area_lotacao: "CEGAF -  COBRANÇA (Miracelma) – 9119 Ana Maria   ",
        telefone: "3219 - 9116 -  9006"
        },
        {
        gestor: "",
        area_lotacao: "",
        telefone: "9 8418-5122  -  9 9974-9028"
        },
        {
        gestor: "MARIO MARIANO BRITO DOS PRAZERES",
        area_lotacao: "CEGPA -  COTAD -  TRANSPORTES      Motora Junior  - 9 8894-6426                 ",
        telefone: "3217-4532 -  9 9902-6583  "
        },
        {
        gestor: "",
        area_lotacao: "",
        telefone: "REJANE de Fátima"
        },
        {
        gestor: "MYRTHES BARBOSA FROTA  - Gestora da ASPRO - Coord do PROFISCO II – MA. 9 9198-1911",
        area_lotacao: "ASPRO - ASSESSORIA DE GESTÃO DE PROJETOS",
        telefone: "3219- 9028  -  3217-4538"
        },
        {
        gestor: "",
        area_lotacao: "Marylande - Patrícia - 9073 -  Alessandra - 4507 - Daiane - Kerlane",
        telefone: "Benídia - 4530 -  Thailane- 4511 Layres - 4530  -  Cláudio - 9073"
        },
        {
        gestor: "NAUDIMAR DE JESUS C. FREIRE",
        area_lotacao: "CEGAT -  UNINF – CADASTRO",
        telefone: "3217-4518 "
        },
        {
        gestor: "",
        telefone: "",
        area_lotacao: " Vera -  Luíza -  Lúcia"
        },
        {
        gestor: "NOLIA BARBALHO D. E SILVA",
        area_lotacao: "TARF -TRIBUNAL ADM DE RECURSOS",
        telefone: "3219-9061  -  9062 (Lourdes)"
        },
        {
        gestor: "OLIVIA DE C. CLEMENTINO",
        area_lotacao: "CEGAT -  COTET",
        telefone: "3219-9074"
        },
        {
        gestor: "PÉRICLES AUGUSTO N. T. MOTA",
        area_lotacao: "Grupo de Energia e Comunicação",
        telefone: 4568
        },
        {
        gestor: "RAIMUNDO AROUCHE -  Gabriel Marchesi ",
        area_lotacao: "CEGAF -  COTAF -  TRÂNSITO  (TVI)",
        telefone: "3219-9092 - 9056 - 4577 - Gabriel Franco – CVN Câmeras                "
        },
        {
        gestor: "",
        telefone: "",
        area_lotacao: "Jéssica – 9091 -  Ananda – 9 9144-5096"
        },
        {
        gestor: "RITA M MAGALHÃES CARVALHO",
        area_lotacao: "CEGPA -  CÉLULA GESTÃO PESSOAS ADMIN",
        telefone: "3217-4537  -  9 8423-1088"
        },
        {
        gestor: "ROBERVAL GOMES MARIANO",
        area_lotacao: "CEGPA -  COTEC",
        telefone: "9 9134-0203 -  3219-9001"
        },
        {
        gestor: "RUBENS GOMES OLIVEIRA",
        area_lotacao: "CEGAF -  COTAF -  PREVENTIVA",
        telefone: "3217-4591"
        },
        {
        gestor: "SÁVIO AMORIM  -  MATIAS ",
        area_lotacao: "COTEA -  CEGAT – ITCD  -  ARTUR ",
        telefone: "9065 - 3018"
        },
        {
        gestor: "WINICIUS FARAY DA SILVA ",
        area_lotacao: "ASJUR – ASSESSORIA JURIDICA",
        telefone: "3217-4579"
        },
        {
        gestor: "WINICIUS FARAY DA SILVA ",
        telefone: "",
        area_lotacao: "Rayra - Tayana - Nezinha"
        },
        {
        gestor: "WALBER ULISSES CARVALHO",
        area_lotacao: "CEGAF -  COTAF -  GC - 9 8895-3481     Saulo  -  Rodolfo - 4568",
        telefone: "3217-4575 -  4519 - 3219-9165 "
        },
        {
        gestor: "RAUL MENDONÇA",
        area_lotacao: "COTEC",
        telefone: "9 8717-2622"
        },
        {
        gestor: "PROCURADOR MARCELO ",
        area_lotacao: "PGE – CHEFE - 9150",
        telefone: "3219-9076 -  9050  Proc. Leonardo, Thaís (86) 99829-0146, contecioso - 9071"
        },
        {
        gestor: "VIDEO – CONFERÊNCIA call",
        area_lotacao: "COTEC",
        telefone: "3219-9134"
        },
        {
        gestor: "FRANCISCO LOPES",
        area_lotacao: "ARGO ",
        telefone: "9 9116-1235"
        },
        {
        gestor: "LIVIA ROBERTA SILVA FERREIRA ",
        area_lotacao: "GERENTE – CENTRAL IT",
        telefone: "9 8817-4166"
        },
        {
        gestor: "ATENDIMENTO - SEFAZ",
        area_lotacao: "UNCP – Agência: 4520",
        telefone: "3217-4542  -  UFRE SL 4514"
        },
        {
        gestor: "NECLEY  -  DÁRIA",
        area_lotacao: "ALMOXARIFADO",
        telefone: "4547 - 9075 (entrega de material)"
        },
        {
        gestor: "MARCELLUS RIBEIRO ALVES ",
        area_lotacao: "SECRETÁRIO DA SEFAZ",
        telefone: "3227-7396"
        },
        {
        gestor: "MARIA DE FÁTIMA P. DA SILVA ",
        area_lotacao: "CHEFE DO GABINETE - 3029  ",
        telefone: " 9 9975-7684 - 3212-8147"
        },
        {
        gestor: "MILKA  -  VAL  -  DANIELLE",
        area_lotacao: "SECRETÁRIAS - GABINETE                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ",
        telefone: "3217- 4501  -  4503  - 3219-9031"
        },
        {
        gestor: "ROGÉRIO  -  CLÁUDIA",
        area_lotacao: "PROTOCOLO – GABIN",
        telefone: "3219- 9197  (Cantina - Gabin 4543)     "
        },
        {
        gestor: "JOMAR FERNANDES ",
        area_lotacao: "ASSESSOR – NEEF  -  9 8145-6137",
        telefone: "3217- 4510  -  JESSÉ – 9 8447-3045"
        },
        {
        gestor: "MAGNO VASCONCELOS PEREIRA ",
        area_lotacao: "SECRETÁRIO ADJUNTO Chefe de Gabinete ",
        telefone: "3217- 4553  -  9 8111-3005"
        },
        {
        gestor: "ROSA BRENHA",
        telefone: "3219- 9086 ",
        area_lotacao: "",
        },
        {
        gestor: "DJELANE  -  SÔNIA",
        area_lotacao: "Secretárias do SECR. ADJ",
        telefone: "3217- 4569"
        },
        {
        gestor: "LUÍS HENRIQUE VIGÁRIO LOUREIRO",
        area_lotacao: "ASSESSOR",
        telefone: "3219- 9030"
        },
        {
        gestor: "EMÍLIO EDUARDO P. PIRES",
        area_lotacao: "ASSESSOR",
        telefone: "9 9227-9370"
        },
        {
        gestor: "GALVÃO ",
        area_lotacao: "PAUTA FISCAL",
        telefone: 4534
        },
        {
        gestor: "FRANCINETE",
        area_lotacao: "PROTOCOLO",
        telefone: 4582
        },
        {
        gestor: "LIA ",
        area_lotacao: "MALOTE",
        telefone: 4539
        },
        {
        gestor: "CAM ",
        area_lotacao: "",
        telefone: 4597
        },
        {
        gestor: "RECEPÇÃO - PORTARIA ",
        area_lotacao: "JAQUELINE - JACIARA - CLÉO - IZA",
        telefone: 3002
        },
        {
        gestor: "LEANDRO DA SILVA COSTA ",
        area_lotacao: "SECRETÁRIO ADJUNTO – SEATI  CNPJ 24.393.108 - 0001-50",
        telefone: "2016-4310 Socorro: 4323 -  4324 – 9 8127-6427"
        },
        {
        gestor: "MORAIS TURISMO (Natália - Luciana)",
        area_lotacao: "PRESTADOR DE SERVIÇO",
        telefone: "3227-3705  -  3235-7125"
        }
      ]
    }),
    computed:{
        listComplete(){
            let list = this.listPhones

            if(this.search && this.searchActive){
              let search = this.search.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
         
              let exp = new RegExp(search.trim().replace(/[\[\]!'.@><|//\\&*()_+=]/g, ""), "i")
          
              list = list.filter(project => 
              exp.test(project.gestor.normalize('NFD').replace(/[\u0300-\u036f]/g, "") ) 
              || exp.test( project.area_lotacao.replace('.', '') )
             )
            }
            
            return list
        }
    }
  }
</script>

