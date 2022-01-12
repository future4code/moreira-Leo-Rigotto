import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import { CardPequeno } from './components/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQERwcHcvan6Xg/profile-displayphoto-shrink_800_800/0/1544567209427?e=1647475200&v=beta&t=ztwnLuTCClCWA1vs7jzge4FfZP6TVB4q3bli2WbxGpI" 
          nome="Léo Rigotto" 
          descricao="Profissional experiente em criação de conteúdo digital, com trajetória em veículos de mídia alternativos e tradicionais, além de uma jornada empreendedora e com foco na experiência do cliente."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQHdAaarsO-eyA/company-logo_100_100/0/1595530301220?e=1649894400&v=beta&t=pfNwi0Q8jEpQjk5I2RWmRhYcrfQ5mneVTObd6SaHrSc" 
          nome="Apple" 
          descricao="Anos de trabalho e desenvolvimento em uma das maiores empresas de tecnologia do mundo. Atuei como Specialist, ajudando clientes a encontrar as melhores soluções em hardware e software especializado, além de dar aulas de fotografia e vídeo na Apple Store." 
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQGFhfRWOMFtDg/company-logo_100_100/0/1638788248672?e=1649894400&v=beta&t=Yb6eX4hiGLAuwUSxJRt8bDBOCEOxC_xkP_SnsX_RIzk" 
          nome="TV Integração - Afiliada Rede Globo" 
          descricao="Edição de vídeo para telejornais e programas locais e nacionais.
          Criação de vinhetas em animação para quadros e programas. Criação de artes para inserção em reportagens.
          Edição e finalização de reportagens especiais para grandes programas da Rede. Alteração de processos e otimização do workflow." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>

      <CardPequeno email="larry@larry.com" endereco="Rua da Consolação, 123"/>
    </div>
  );
}

export default App;
