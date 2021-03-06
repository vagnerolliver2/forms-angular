import { Workflow } from './model/workflow';
// tslint:disable:quotemark
export const WORKFLOW: any =  {
  "id": "asdasdadsdadsdaqw311",
  "alias": "Meu Primeiro ChatBot 1",
  "description": "Descrição do meu primeiro group",
  "hint": "Hint para o agrupamento",
  "icon": "htpp://wwww.google.com",
  "steps": [
    {
      "id": "idEndGroup",
      "type": "endComponent",
      "label": "Evento final",
      "properties": {
        "endEvent": "true"
      }
    },
    {
      "id": "step0",
      "type": "sendChatActivity",
      "label": "Envia Chat",
      "properties": {
        "from": "#{session['chatFrom']}"
      },
      "contents": [
        {
          "type": "text/plain",
          "payload": {
            "text": "#{minha_variavel}"
          }
        }
      ]
    },
    {
      "id": "step02",
      "type": "chatEvent",
      "label": "Resposta Usuario",
      "variables": {
        "minha_saida": "payload",
        "minha_saida_2": "payload"
      }
    },
    {
      "id": "idStartGroup",
      "type": "startComponent",
      "label": "Evento inicial",
      "properties": {
        "startEvent": "true"
      }
    }
  ],
  "connections": [
    {
      "from": "step0",
      "to": "step02"
    },
    {
      "from": "step02",
      "to": "idEndGroup"
    },
    {
      "from": "idStartGroup",
      "to": "step0"
    }
  ],
  "metadata": {
    "inputs": [
      {
        "name": "card_title",
        "description": "Título do cartão que vai aparecer em negrito para o usuário",
        "label": "Título do cartão",
        "hint": "Coloque o título do seu cartão",
        "type": "String",
        "required": true
      },
      {
        "name": "minha_variavel",
        "description": "minha description",
        "label": "Título Minha Váriavel",
        "required": false
      },
      {
        "name": "card_message",
        "description": "Mensagem do cartão que vai aparecer em cinza para o usuário",
        "label": "Mensagem do cartão",
        "hint": "Coloque a mensagem do seu cartão",
        "type": "String",
        "required": true
      }
    ],
    "outputs": [
      {
        "name": "minha_saida",
        "label": "Minha saida",
        "required": false
      }
    ]
  }
}

// tslint:enable:quotemark