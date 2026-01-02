# MedCalc Pro - Calculadora de Medicamentos e Diluições

![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

**MedCalc Pro** é uma aplicação web desenvolvida para auxiliar profissionais de saúde em cálculos críticos do dia a dia, como dosagem de medicamentos, velocidade de gotejamento e diluição de soluções. O objetivo principal é aumentar a segurança do paciente reduzindo a carga cognitiva e erros humanos em cálculos matemáticos.

## 🚀 Funcionalidades

1.  **Cálculo de Regra de Três (Dosagem):**
    *   Determina o volume a ser aspirado com base na apresentação do frasco e na prescrição médica.
    *   **Diferencial:** Conversão automática de unidades (g, mg, mcg).

2.  **Cálculo de Gotejamento:**
    *   Calcula gotas/minuto (equipo macro) e microgotas/minuto (equipo micro).
    *   Aceita tempo em horas ou minutos.

3.  **Cálculo de Diluição:**
    *   Baseado na fórmula $C1 \cdot V1 = C2 \cdot V2$.
    *   Calcula o volume de solução estoque necessária para atingir uma concentração e volume final desejados.

## 🛠️ Tecnologias Utilizadas

*   **React 18+**: Biblioteca principal para a interface do usuário.
*   **TypeScript**: Para tipagem estática e redução de erros de desenvolvimento.
*   **Tailwind CSS**: Para estilização rápida, responsiva e uma interface clínica limpa.
*   **Lucide React**: Ícones SVG leves e consistentes.

## 📦 Como Instalar e Rodar

Siga os passos abaixo para rodar o projeto em sua máquina local:

### Pré-requisitos
*   Node.js (v16 ou superior)
*   npm ou yarn

### Passos

1.  **Clone o repositório**
    ```bash
    git clone https://github.com/seu-usuario/medcalc-pro.git
    cd medcalc-pro
    ```

2.  **Instale as dependências**
    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento**
    ```bash
    npm start
    ```

4.  **Acesse a aplicação**
    Abra seu navegador em `http://localhost:3000`.

## 🧪 Estrutura do Projeto

```
/
├── components/          # Componentes React Reutilizáveis
│   ├── calculators/     # Lógica específica de cada calculadora
│   └── ui/              # Componentes visuais genéricos (Inputs, etc)
├── utils/               # Funções puras de matemática e conversão
├── types.ts             # Definições de tipos TypeScript
├── App.tsx              # Componente Principal e Layout
└── index.tsx            # Ponto de entrada
```

## ⚠️ Aviso Legal (Disclaimer)

**ATENÇÃO PROFISSIONAIS DE SAÚDE:**

Este software ("MedCalc Pro") é fornecido apenas como uma **ferramenta de apoio educacional e auxiliar**. Embora todos os esforços tenham sido feitos para garantir a precisão dos cálculos matemáticos:

1.  **Validação Humana Obrigatória:** Os resultados gerados por este aplicativo NUNCA devem substituir o julgamento clínico profissional. Sempre revise os cálculos manualmente antes da administração.
2.  **Protocolos Institucionais:** Siga sempre os protocolos de diluição e administração da sua instituição de saúde.
3.  **Responsabilidade:** Os desenvolvedores não se responsabilizam por quaisquer danos diretos, indiretos, incidentais ou consequentes resultantes do uso ou da incapacidade de usar este software.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.