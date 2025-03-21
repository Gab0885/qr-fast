import Accordion from "react-bootstrap/Accordion";
import styles from "./FAQAccordion.module.scss";

// Definimos uma interface para cada item do FAQ.
interface FAQItem {
  question: string;
  answer: string;
}

// Nosso array de dados do FAQ, tipado como FAQItem[].
const faqData: FAQItem[] = [
  {
    question: "O que é um QR Code?",
    answer:
      "Um QR Code (Quick Response Code) é um tipo de código de barras em 2D que pode ser escaneado pela câmera de um smartphone ou tablet. Ele pode armazenar diversas informações, como links de sites, textos, contatos, localizações e muito mais.",
  },
  {
    question: "Como gerar um QR Code neste site?",
    answer: `1. Copie e cole o link ou texto que deseja converter em QR Code no campo indicado.
2. Clique em “Gerar QR Code”.
3. Pronto! O QR Code aparecerá na tela para você visualizar.

Você pode, então, personalizar (se desejar) e fazer o download para usar como preferir.`,
  },
  {
    question: "Preciso pagar algo ou me cadastrar para criar QR Codes?",
    answer:
      "Não. O serviço é gratuito e não requer cadastro. Você pode gerar quantos QR Codes quiser sem custos adicionais.",
  },
  {
    question: "Como personalizar o QR Code (cores, tamanho, ícone)?",
    answer: `Após gerar o QR Code, você verá opções para personalizar:
- Ícone Customizável: Selecione um ícone para colocar no centro do seu QR Code.
- Tamanho do QR Code: Ajuste a dimensão da imagem (por exemplo, 256px, 512px etc.).
- Tamanho do Ícone: Defina a proporção do ícone dentro do QR Code.
- Manter fundo da imagem: Escolha se deseja fundo transparente ou não.

A personalização torna o seu QR Code mais atrativo, mas sempre teste para garantir que ele ainda possa ser lido facilmente.`,
  },
  {
    question: "Como faço para salvar ou baixar o QR Code?",
    answer:
      "Depois de gerar e personalizar o seu QR Code, clique no botão “Baixar QR Code” que aparecerá abaixo ou ao lado do QR Code. O arquivo será salvo no seu dispositivo (computador ou celular) no formato PNG",
  },
  {
    question: "Qualquer celular consegue ler um QR Code?",
    answer:
      "A maioria dos smartphones modernos consegue ler QR Codes diretamente pelo aplicativo de câmera. Se o seu celular não ler automaticamente, basta instalar um aplicativo leitor de QR Codes (disponível na loja de aplicativos do seu sistema).",
  },
  {
    question: "Como faço para ter certeza de que meu QR Code está funcionando?",
    answer: `Abra a câmera do seu smartphone ou use um aplicativo leitor de QR Code. Aponte para o QR Code e verifique se o link ou conteúdo abre corretamente. Se não funcionar, tente melhorar a iluminação, aproximar mais a câmera ou verificar se o QR Code não foi redimensionado de forma que atrapalhe a leitura.`,
  },
  {
    question: "Posso criar QR Codes para qualquer tipo de conteúdo?",
    answer:
      "Na maioria dos casos, sim. Geralmente, QR Codes são usados para links de sites, redes sociais, endereços de e-mail, números de telefone, texto simples, localização em mapas, entre outros. Verifique apenas se o conteúdo não viola nenhuma lei ou regra de uso do serviço.",
  },
  {
    question: "Por que meu QR Code não está funcionando após ser impresso?",
    answer: `Algumas causas comuns:
- O QR Code foi impresso em tamanho muito pequeno, dificultando a leitura.
- A cor de fundo ou a personalização prejudicou o contraste das áreas claras e escuras.
- A impressão está borrada ou de baixa resolução.

Tente aumentar o tamanho e garantir bom contraste para uma leitura correta.`,
  },
  {
    question: "Posso editar ou alterar o QR Code depois de gerado?",
    answer:
      "Uma vez que o QR Code é gerado como uma imagem estática, você não consegue editar diretamente o arquivo. Porém, você pode criar um novo QR Code com as novas informações ou nova personalização sempre que precisar.",
  },
  {
    question: "Onde posso usar o QR Code gerado?",
    answer:
      "Você pode usá-lo em cartões de visita, panfletos, cartazes, sites, redes sociais, embalagens de produtos e muito mais. Basta baixar a imagem e inserir onde for necessário.",
  },
  {
    question: "Preciso ter algum cuidado especial ao usar QR Codes?",
    answer:
      "Sempre verifique se o link ou conteúdo do QR Code é seguro. Evite redirecionar para sites suspeitos ou que possam comprometer a segurança do usuário. Mantenha um bom contraste nas cores para que a leitura seja fácil.",
  },
  {
    question: "É possível deixar o fundo do QR Code transparente?",
    answer:
      "Sim. Em “Manter fundo da imagem”, você pode escolher a opção que gera o QR Code com fundo transparente.",
  },
  {
    question:
      "Qual a diferença entre diferentes tamanhos de QR Code (256px, 512px, etc.)?",
    answer:
      "O tamanho em pixels define a resolução da imagem. Quanto maior, mais nítido será o QR Code (especialmente útil para impressão ou exibição em telas grandes). Entretanto, para uso simples em redes sociais ou sites, tamanhos médios (256px ou 512px) costumam ser suficientes.",
  },
];

// Definimos o componente principal FAQAccordion, que exibe uma lista de perguntas e respostas em estilo acordeão.
const FAQAccordion: React.FC = () => {
  return (
    <div className={`container-fluid ${styles.faqContainer}`}>
      <h2 className={`text-center ${styles.title}`}>
        Perguntas Frequentes (FAQ)
      </h2>
      <Accordion defaultActiveKey="0">
        {faqData.map((item, index) => (
          <Accordion.Item
            eventKey={index.toString()}
            key={index}
            className={styles.accordionItemCustom}
          >
            <Accordion.Header className={styles.accordionHeaderCustom}>
              {item.question}
            </Accordion.Header>
            <Accordion.Body className={styles.accordionBodyCustom}>
              {item.answer.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;