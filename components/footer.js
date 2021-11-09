const footer = document.createElement('template')

footer.innerHTML = `
  <link rel="stylesheet" href="/styles/footer.css">

  <footer>
    <div class="container">
      <header class="footer-header">
        <img src="/assets/Logo.svg" alt="Logotipo Dataffairs" class="footer-logo">
        <!-- <p class="footer-descricao">
          Lorem ipsum dolor amet, consectetur adipiscing elit. 
          Eget nisl nunc quam ac sed turpis volutpat. 
          Cursus sed massa non nisi, placerat.
        </p> -->
      </header>
      <nav class="footer-links acesso-rapido">
        <h3 class="footer-titulo">Acesso Rápido</h3>
        <ul>
          <li class="footer-link">
            <a href="/">A Dataffairs</a>
          </li>
          <li class="footer-link">
            <a href="equipe.html">Equipe</a>
          </li>
          <li class="footer-link">
            <a href="metodologia.html">Métodos e Processos</a>
          </li>
          <li class="footer-link">
            <a href="projetos.html">Projetos</a>
          </li>
        </ul>
      </nav>
      <nav class="footer-links servicos">
        <h3 class="footer-titulo">Serviços</h3>
        <ul>
          <li class="footer-link">
            <a href="servicos.html?servico=data-esg">Data ESG</a>
          </li>
          <li class="footer-link">
            <a href="servicos.html?servico=public-affairs">Relações Públicas & Public Affairs</a>
          </li>
          <li class="footer-link">
            <a href="servicos.html?servico=workshops">Worshops ESG</a>
          </li>
          <li class="footer-link">
            <a href="servicos.html?servico=strategies">Estratégias baseadas em ciência</a>
          </li>
          <li class="footer-link">
            <a href="servicos.html?servico=science-communication">Comunicação de ciência</a>
          </li>
        </ul>
      </nav>
      <nav class="footer-links contatos">
        <h3 class="footer-titulo">Contatos e redes sociais</h3>
        <ul>
          <li class="footer-link contato">
            <a href="mailto:email@dataffairs.com.br">
              <svg class="icone email" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9395 0C16.2805 0 17.5705 0.53 18.5195 1.481C19.4695 2.43 20.0005 3.71 20.0005 5.05V12.95C20.0005 15.74 17.7305 18 14.9395 18H5.06049C2.26949 18 0.000488281 15.74 0.000488281 12.95V5.05C0.000488281 2.26 2.25949 0 5.06049 0H14.9395ZM16.5305 6.54L16.6105 6.46C16.8495 6.17 16.8495 5.75 16.5995 5.46C16.4605 5.311 16.2695 5.22 16.0705 5.2C15.8605 5.189 15.6605 5.26 15.5095 5.4L11.0005 9C10.4205 9.481 9.58949 9.481 9.00049 9L4.50049 5.4C4.18949 5.17 3.75949 5.2 3.50049 5.47C3.23049 5.74 3.20049 6.17 3.42949 6.47L3.56049 6.6L8.11049 10.15C8.67049 10.59 9.34949 10.83 10.0605 10.83C10.7695 10.83 11.4605 10.59 12.0195 10.15L16.5305 6.54Z" fill="#D72156"/>
              </svg>
              email@dataffairs.com.br
            </a>
          </li>
          <li class="footer-link contato">
            <a href="tel:1129245573">
              <svg class="icone fone" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00845931 8.6948C0.00845931 8.07615 0.015909 7.45751 0.0233933 6.836L0.0233934 6.83599C0.0271878 6.52089 0.030991 6.20506 0.0338368 5.88813C0.0338368 2.48283 2.16556 0 5.10936 0H8.89063C11.8344 0 13.9662 2.48283 13.9662 5.88813C13.9915 7.25221 14 8.61629 14 9.99019C14 11.3641 13.9915 12.7478 13.9662 14.1119C13.9662 17.5172 11.8344 20 8.89063 20H5.10936C2.16556 20 0.0338368 17.5172 0.0338368 14.1021C0.0169184 12.8165 0 11.5015 0 10.1668L0.00845931 8.6948ZM8.28 17.6402V17.8002C8.28 18.4738 7.7168 19.0002 7 19.0002C6.30027 19.0002 5.72 18.4738 5.72 17.8002V17.6402C5.72 16.9842 6.30027 16.4402 7 16.4402C7.7168 16.4402 8.28 16.9842 8.28 17.6402ZM2.01671 6.44364C2.01136 6.84763 2.00604 7.24974 2.00604 7.65186L2 8.60868C2 9.4762 2.01208 10.331 2.02417 11.1666C2.02417 13.3864 3.54683 15.0002 5.64955 15.0002H8.35045C10.4532 15.0002 11.9758 13.3864 11.9758 11.173C11.994 10.2863 12 9.3869 12 8.49387C12 7.60083 11.994 6.71418 11.9758 5.82753C11.9758 3.61408 10.4532 2.00024 8.35045 2.00024H5.64955C3.54683 2.00024 2.02417 3.61408 2.02417 5.82753C2.02214 6.03354 2.01942 6.23883 2.01671 6.44364Z" fill="#D72156"/>
              </svg>
              (11) 2924-5573
            </a>
          </li>
          <li class="footer-link contato">
            <a href="tel:11971909290">
              <svg class="icone fone" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00845931 8.6948C0.00845931 8.07615 0.015909 7.45751 0.0233933 6.836L0.0233934 6.83599C0.0271878 6.52089 0.030991 6.20506 0.0338368 5.88813C0.0338368 2.48283 2.16556 0 5.10936 0H8.89063C11.8344 0 13.9662 2.48283 13.9662 5.88813C13.9915 7.25221 14 8.61629 14 9.99019C14 11.3641 13.9915 12.7478 13.9662 14.1119C13.9662 17.5172 11.8344 20 8.89063 20H5.10936C2.16556 20 0.0338368 17.5172 0.0338368 14.1021C0.0169184 12.8165 0 11.5015 0 10.1668L0.00845931 8.6948ZM8.28 17.6402V17.8002C8.28 18.4738 7.7168 19.0002 7 19.0002C6.30027 19.0002 5.72 18.4738 5.72 17.8002V17.6402C5.72 16.9842 6.30027 16.4402 7 16.4402C7.7168 16.4402 8.28 16.9842 8.28 17.6402ZM2.01671 6.44364C2.01136 6.84763 2.00604 7.24974 2.00604 7.65186L2 8.60868C2 9.4762 2.01208 10.331 2.02417 11.1666C2.02417 13.3864 3.54683 15.0002 5.64955 15.0002H8.35045C10.4532 15.0002 11.9758 13.3864 11.9758 11.173C11.994 10.2863 12 9.3869 12 8.49387C12 7.60083 11.994 6.71418 11.9758 5.82753C11.9758 3.61408 10.4532 2.00024 8.35045 2.00024H5.64955C3.54683 2.00024 2.02417 3.61408 2.02417 5.82753C2.02214 6.03354 2.01942 6.23883 2.01671 6.44364Z" fill="#D72156"/>
              </svg>
              (11) 97190-9290
            </a>
          </li>
          <li class="footer-link social">
            <a href="">
              <svg class="icone instagram" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.50061 0C4.7353 0 4.51376 0.00771888 3.82041 0.039271C3.12843 0.0709585 2.65609 0.18051 2.24279 0.34125C1.81528 0.507271 1.45263 0.729354 1.09133 1.09078C0.729768 1.45207 0.507682 1.81472 0.341118 2.24209C0.17997 2.65552 0.0702819 3.12799 0.0391358 3.8197C0.00812502 4.51303 0 4.73471 0 6.5C0 8.26529 0.00785437 8.48616 0.0392714 9.17949C0.0710946 9.87147 0.180648 10.3438 0.341254 10.7571C0.507412 11.1846 0.729497 11.5473 1.09093 11.9085C1.45209 12.2701 1.81474 12.4927 2.24198 12.6588C2.65555 12.8195 3.12802 12.929 3.81987 12.9607C4.51321 12.9923 4.73462 13 6.4998 13C8.26524 13 8.48611 12.9923 9.17945 12.9607C9.87144 12.929 10.3443 12.8195 10.7579 12.6588C11.1853 12.4927 11.5474 12.2701 11.9085 11.9085C12.2701 11.5473 12.4922 11.1846 12.6587 10.7572C12.8185 10.3438 12.9282 9.87133 12.9607 9.17963C12.9919 8.48629 13 8.26529 13 6.5C13 4.73471 12.9919 4.51317 12.9607 3.81983C12.9282 3.12785 12.8185 2.65552 12.6587 2.24223C12.4922 1.81472 12.2701 1.45207 11.9085 1.09078C11.547 0.729219 11.1854 0.507136 10.7575 0.34125C10.3431 0.18051 9.87049 0.0709585 9.1785 0.039271C8.48516 0.00771888 8.26443 0 6.49858 0H6.50061ZM5.9175 1.17135C6.09056 1.17108 6.28367 1.17135 6.50061 1.17135C8.23613 1.17135 8.44183 1.17758 9.12718 1.20873C9.76093 1.23771 10.1049 1.3436 10.334 1.43257C10.6374 1.55039 10.8536 1.69122 11.081 1.91872C11.3085 2.14622 11.4493 2.36289 11.5674 2.66622C11.6564 2.89507 11.7624 3.23903 11.7913 3.87278C11.8224 4.55799 11.8292 4.76382 11.8292 6.49851C11.8292 8.2332 11.8224 8.43903 11.7913 9.12424C11.7623 9.75799 11.6564 10.1019 11.5674 10.3308C11.4496 10.6341 11.3085 10.8501 11.081 11.0775C10.8535 11.305 10.6375 11.4458 10.334 11.5636C10.1052 11.653 9.76093 11.7586 9.12718 11.7876C8.44196 11.8188 8.23613 11.8255 6.50061 11.8255C4.76496 11.8255 4.55926 11.8188 3.87404 11.7876C3.24028 11.7584 2.89632 11.6525 2.66706 11.5635C2.36372 11.4457 2.14705 11.3049 1.91955 11.0774C1.69205 10.8499 1.55121 10.6337 1.43313 10.3303C1.34416 10.1014 1.23813 9.75745 1.20928 9.1237C1.17814 8.43849 1.17191 8.23266 1.17191 6.49689C1.17191 4.76111 1.17814 4.55637 1.20928 3.87116C1.23826 3.23741 1.34416 2.89345 1.43313 2.66432C1.55094 2.36099 1.69205 2.14432 1.91955 1.91682C2.14705 1.68932 2.36372 1.54849 2.66706 1.43041C2.89619 1.34103 3.24028 1.23541 3.87404 1.20629C4.47367 1.17921 4.70605 1.17108 5.9175 1.16973V1.17135ZM9.97029 2.25062C9.53966 2.25062 9.19028 2.59959 9.19028 3.03035C9.19028 3.46098 9.53966 3.81035 9.97029 3.81035C10.4009 3.81035 10.7503 3.46098 10.7503 3.03035C10.7503 2.59973 10.4009 2.25035 9.97029 2.25035V2.25062ZM6.50061 3.16198C4.65716 3.16198 3.16255 4.65657 3.16255 6.5C3.16255 8.34343 4.65716 9.83734 6.50061 9.83734C8.34406 9.83734 9.83812 8.34343 9.83812 6.5C9.83812 4.65657 8.34392 3.16198 6.50047 3.16198H6.50061ZM6.50061 4.33333C7.69716 4.33333 8.6673 5.30332 8.6673 6.5C8.6673 7.69654 7.69716 8.66667 6.50061 8.66667C5.30392 8.66667 4.33392 7.69654 4.33392 6.5C4.33392 5.30332 5.30392 4.33333 6.50061 4.33333Z" fill="#D72156"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/dataffairs/">
              <svg class="icone linkedin" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2246 10.2248H8.44655V7.44025C8.44655 6.77625 8.4347 5.92147 7.52179 5.92147C6.59574 5.92147 6.45405 6.64493 6.45405 7.39191V10.2246H4.67601V4.49845H6.38292V5.28099H6.40682C6.57764 4.98891 6.82448 4.74863 7.12105 4.58575C7.41762 4.42286 7.75282 4.34346 8.09094 4.35602C9.89305 4.35602 10.2253 5.54141 10.2253 7.08352L10.2246 10.2248ZM2.66981 3.71572C2.46574 3.71576 2.26623 3.65528 2.09653 3.54193C1.92683 3.42858 1.79456 3.26745 1.71644 3.07891C1.63831 2.89038 1.61783 2.68292 1.65761 2.48275C1.69738 2.28259 1.79562 2.09871 1.9399 1.95438C2.08418 1.81005 2.26801 1.71174 2.46815 1.67189C2.6683 1.63204 2.87576 1.65244 3.06431 1.7305C3.25287 1.80857 3.41404 1.94079 3.52744 2.11046C3.64085 2.28012 3.7014 2.47961 3.70144 2.68369C3.70146 2.81919 3.6748 2.95337 3.62296 3.07857C3.57113 3.20377 3.49516 3.31753 3.39936 3.41337C3.30357 3.5092 3.18983 3.58523 3.06465 3.6371C2.93948 3.68898 2.80531 3.71569 2.66981 3.71572ZM3.55882 10.2248H1.77895V4.49845H3.55882V10.2248ZM11.111 0.000817579H0.885495C0.653405 -0.00180164 0.429759 0.0878317 0.26372 0.250021C0.0976811 0.412211 0.00283253 0.633687 0 0.865782V11.134C0.00273558 11.3663 0.0975285 11.5879 0.263562 11.7502C0.429595 11.9126 0.65329 12.0024 0.885495 11.9999H11.111C11.3437 12.0028 11.568 11.9133 11.7347 11.7509C11.9014 11.5886 11.9968 11.3667 12 11.134V0.865041C11.9967 0.632486 11.9012 0.410758 11.7345 0.248572C11.5678 0.0863865 11.3435 -0.00299072 11.111 7.64109e-05" fill="#D72156"/>
              </svg>
            </a>
            <a href="">
              <svg class="icone facebook" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 7.00008C14 3.13408 10.866 7.72476e-05 7 7.72476e-05C3.134 7.72476e-05 0 3.13408 0 7.00008C0 10.494 2.5598 13.3899 5.90625 13.915V9.02351H4.12891V7.00008H5.90625V5.45789C5.90625 3.70352 6.9513 2.73445 8.55025 2.73445C9.31611 2.73445 10.1172 2.87117 10.1172 2.87117V4.59383H9.2345C8.36493 4.59383 8.09375 5.13342 8.09375 5.68699V7.00008H10.0352L9.7248 9.02351H8.09375V13.915C11.4402 13.3899 14 10.494 14 7.00008Z" fill="#D72156"/>
                <path d="M9.7248 9.02344L10.0352 7H8.09375V5.68691C8.09375 5.13334 8.36493 4.59375 9.2345 4.59375H10.1172V2.87109C10.1172 2.87109 9.31611 2.73438 8.55025 2.73438C6.9513 2.73438 5.90625 3.70344 5.90625 5.45781V7H4.12891V9.02344H5.90625V13.915C6.26263 13.9709 6.62791 14 7 14C7.37209 14 7.73736 13.9709 8.09375 13.915V9.02344H9.7248Z" fill="white"/>
              </svg>                  
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        <span>
          © Dataffairs 2021
        </span>
        <span>
          A Dattafairs é uma marca registrada e de propriedade da Camara 
          Quierati Tecnologia e Comunicação LTDA - CNPJ 29.180.317/0001-39 
          com sede na Av. Gióia Martins, 199 – 5º andar Bloco C – São Paulo/SP 
          – CEP 05632-020.
        </span>
      </div>
    </div>
  </footer>
`

class Footer extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(footer.content.cloneNode(true))
  }
}

window.customElements.define('nav-footer', Footer)