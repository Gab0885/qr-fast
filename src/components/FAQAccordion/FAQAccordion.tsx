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
    answer: `Para personalizar seu QR Code, clique no botão 'Opções avançadas'. Você encontrará opções simples para customização, como:
- Ícone Customizável: Selecione um ícone para colocar no centro do seu QR Code.
- Tamanho do QR Code: Ajuste a dimensão da imagem (por exemplo, 256px ou 512px)
- Tamanho do Ícone: Defina o tamanho do ícone dentro do QR Code
- Manter fundo da imagem: Escolha se deseja fundo transparente ou não.
- Cor de fundo: Selecione uma nova cor para o fundo do QR COde, se desejar.
- Formato do Download: Escolha o tipo de arquivo para salvar o QR Code (PNG ou JPG).


Essas personalizações deixam o seu QR Code mais atrativo. Lembre-se de testá-lo para garantir que continue fácil de ler.`,
  },
  {
    question: "Como faço para salvar ou baixar o QR Code?",
    answer:
      "Após gerar e, se desejar, personalizar o seu QR Code, clique no botão 'Baixar QR Code', que aparece logo abaixo dele. O arquivo será salvo automaticamente no seu dispositivo no formato PNG ou JPEG, conforme sua escolha.",
  },
  {
    question: "Qualquer celular consegue ler um QR Code?",
    answer:
      "A maioria dos smartphones modernos consegue ler QR Codes diretamente pelo aplicativo de câmera. Se o seu celular não ler automaticamente, basta instalar um aplicativo leitor de QR Codes (disponível na loja de aplicativos do seu sistema).",
  },
  {
    question: "Como faço para ter certeza de que meu QR Code está funcionando?",
    answer:
      "Abra a câmera do seu smartphone ou use um aplicativo leitor de QR Code. Aponte para o código e veja se o link ou o conteúdo abre corretamente. Se não funcionar, tente melhorar a iluminação, aproximar a câmera ou verifique se o QR Code não foi alterado de forma que dificulte a leitura. Se você personalizou o QR Code (como mudar o ícone, o tamanho do ícone ou a cor de fundo), tome cuidado para não comprometer seu funcionamento.",
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
    question: "É possível deixar transparente o fundo do ícone no QR Code?",
    answer:
      "Sim. Ao desmarcar a opção 'Manter fundo do ícone', o QR Code será gerado com fundo transparente. Porém, essa opção só funciona se o ícone original já tiver fundo transparente.",
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
