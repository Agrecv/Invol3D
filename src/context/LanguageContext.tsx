import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.portfolio': 'Portfolio',
    'nav.3d-tours': '3D Tours',
    'nav.aerial': 'Aerial Mapping',
    'nav.video': 'Video Production',
    'nav.book': 'Book Tour',
    'nav.quote': 'Get a Quote',
    
    // Portfolio Page
    'portfolio.hero.title': 'VISUAL PRECISION IN EVERY PIXEL.',
    'portfolio.hero.subtitle': 'Explore our high-fidelity aerial mapping and immersive 3D digital twins, engineered for architectural excellence and institutional transparency.',
    'portfolio.hero.cta': 'GET A QUOTE',
    'portfolio.filter.all': 'All Projects',
    'portfolio.card.client': 'Client',
    'portfolio.featured.title': 'Legacy University Campus',
    'portfolio.featured.desc': 'Complete photogrammetry and terrain modeling for a 200-acre historic campus, providing critical data for infrastructure upgrades.',
    'portfolio.cta.title': 'Ready to visualize your next dimension?',
    'portfolio.cta.button1': 'Get a Custom Quote',
    'portfolio.cta.button2': 'Our Process',

    // Matterport Page
    'matterport.hero.tag': 'High-End Real Estate',
    'matterport.hero.title': 'Matterport Virtual Tours',
    'matterport.hero.subtitle': 'Transform luxury properties into immersive digital experiences. Capture every detail with millimetric precision and provide unprecedented remote visits.',
    'matterport.hero.cta1': 'Request Quote',
    'matterport.hero.cta2': 'View 3D Examples',
    'matterport.bento.immersive.title': 'Immersive Experience',
    'matterport.bento.immersive.desc': 'Fluid navigation that simulates physical presence in the property, eliminating geographical barriers.',
    'matterport.bento.precision.title': 'Measurement Precision',
    'matterport.bento.precision.desc': 'Our laser technology guarantees an error margin of less than 1%. Perfect for renovation planning and technical area checking.',
    'matterport.bento.precision.label': 'TOLERANCE',
    'matterport.bento.floorplan.title': '2D/3D Floor Plan',
    'matterport.bento.floorplan.desc': 'Automatic generation of professional schematics integrated into the tour.',
    'matterport.bento.sales.title': 'Accelerate Sales by up to 31%',
    'matterport.bento.sales.desc': 'Properties with interactive tours receive 95% more calls from qualified buyers.',
    'matterport.features.title': 'The Gold Standard of Real Estate',
    'matterport.features.1.title': '4K HDR Capture',
    'matterport.features.1.desc': 'High-definition lenses that capture natural lighting and textures with absolute fidelity.',
    'matterport.features.2.title': 'Total Compatibility',
    'matterport.features.2.desc': 'Native integration with real estate portals, social networks, and VR/Oculus viewing.',
    'matterport.features.3.title': 'Smart Mattertags™',
    'matterport.features.3.desc': 'Insert points of interest with videos, technical descriptions, and sales links inside the tour.',
    'matterport.cta.tag': 'Ready for the Next Level',
    'matterport.cta.title': 'Bring your next project to life.',
    'matterport.cta.button': 'Schedule Capture',

    // Aerial Mapping Page
    'aerial.hero.tag': 'Technical Precision Unit',
    'aerial.hero.title': 'Sub-Centimetric Mapping',
    'aerial.hero.subtitle': 'We transform physical space into high-fidelity digital data. Engineering, agribusiness, and infrastructure with precision up to 0.5cm.',
    'aerial.hero.cta1': 'Request Quote',
    'aerial.hero.cta2': 'Explore Data',
    'aerial.stats.rtk.title': 'RTK / PPK Integration',
    'aerial.stats.rtk.desc': 'Absolute precision georeferencing using Real-Time Kinematic technology for instantaneous coordinate correction.',
    'aerial.stats.gsd.label': 'Maximum GSD',
    'aerial.stats.accuracy.label': 'Global Accuracy',
    'aerial.stats.agro.title': 'Agro Tech',
    'aerial.stats.agro.desc': 'NDVI, plant counting, and automated root health analysis.',
    'aerial.stats.cloud.title': 'Cloud Processing',
    'aerial.stats.cloud.desc': 'Our workstations process terabytes of data to generate ultra-realistic 3D models.',
    'aerial.viewport.title': 'Digital Twins for Civil Engineering',
    'aerial.viewport.desc': 'Capture the actual state of the work with aerial photogrammetry. Generate BIM models, point clouds, and georeferenced orthophotos that serve as the definitive technical basis for complex project management.',
    'aerial.viewport.list1.title': 'Volumetry Calculation',
    'aerial.viewport.list1.desc': 'Surgical precision in measurements of ore piles and earthmoving.',
    'aerial.viewport.list2.title': 'Orthophotomosaics',
    'aerial.viewport.list2.desc': 'High-resolution maps with full integration in CAD and GIS software.',
    'aerial.cta.title': 'Ready to digitize your asset?',
    'aerial.cta.subtitle': 'Our specialists are ready to plan the perfect aerial mission for your technical needs.',

    // Video Production Page
    'video.hero.tag': 'Precision Digital Media',
    'video.hero.title': 'Dominate Attention on Social Media',
    'video.hero.subtitle': 'We elevate your digital presence through high-impact audiovisual productions and data-driven strategic management.',
    'video.hero.cta1': 'REQUEST QUOTE',
    'video.hero.cta2': 'VIEW PORTFOLIO',
    'video.formats.title': 'Impact Formats',
    'video.formats.subtitle': 'Design optimized for fast consumption and maximum retention on mobile devices.',
    'video.formats.reels.title': 'Instagram Reels',
    'video.formats.reels.desc': 'Fluid transitions and dynamic storytelling to go viral in the world\'s most competitive algorithm.',
    'video.formats.tiktok.title': 'TikTok Content',
    'video.formats.tiktok.desc': 'Native content that doesn\'t look like an ad. Focus on trends and authenticity for Gen Z.',
    'video.formats.shorts.title': 'YouTube Shorts',
    'video.formats.shorts.desc': 'Leverage Google\'s search power with short videos that feed your main channel.',
    'video.metrics.title': 'Metrics that Move the Needle',
    'video.metrics.subtitle': 'We don\'t just deliver "likes". Our focus is on converting attention into authority and revenue through a consistent social media strategy.',
    'video.metrics.engagement': 'Average Engagement',
    'video.metrics.views': 'Views/Month',
    'video.management.title': 'Full-Stack Management',
    'video.management.subtitle': 'From idea conception to result monitoring, we take care of every frame.',
    'video.management.1.title': 'Planning',
    'video.management.1.desc': 'Definition of content pillars and strategic editorial calendar.',
    'video.management.2.title': 'Production',
    'video.management.2.desc': '4K capture and editing with neurobranding retention techniques.',
    'video.management.3.title': 'Distribution',
    'video.management.3.desc': 'Optimized posting with persuasive copy and strategic hashtags.',
    'video.management.4.title': 'Optimization',
    'video.management.4.desc': 'Monthly reports detailing ROI and next steps.',
    'video.cta.title': 'Transform your Social Now',
    'video.cta.subtitle': 'Stop posting for the sake of posting. Start building a brand that is a reference in your niche.',
    'video.cta.button': 'Talk to Strategist',

    // Footer
    'footer.desc': 'Setting the standard for technical visual production. We deliver precision mapping and immersive environments that bridge the gap between physical and digital.',
    'footer.solutions': 'Solutions',
    'footer.company': 'Company',
    'footer.updates': 'Updates',
    'footer.rights': 'All rights reserved.',
  },
  pt: {
    // Navbar
    'nav.portfolio': 'Portfólio',
    'nav.3d-tours': 'Tours 3D',
    'nav.aerial': 'Aerolevantamento',
    'nav.video': 'Produção de Vídeo',
    'nav.book': 'Agendar Tour',
    'nav.quote': 'Orçamento',
    
    // Portfolio Page
    'portfolio.hero.title': 'PRECISÃO VISUAL EM CADA PIXEL.',
    'portfolio.hero.subtitle': 'Explore nosso mapeamento aéreo de alta fidelidade e gêmeos digitais 3D imersivos, projetados para excelência arquitetônica e transparência institucional.',
    'portfolio.hero.cta': 'SOLICITAR ORÇAMENTO',
    'portfolio.filter.all': 'Todos os Projetos',
    'portfolio.card.client': 'Cliente',
    'portfolio.featured.title': 'Campus Universitário Legacy',
    'portfolio.featured.desc': 'Fotogrametria completa e modelagem de terreno para um campus histórico de 200 acres, fornecendo dados críticos para atualizações de infraestrutura.',
    'portfolio.cta.title': 'Pronto para visualizar sua próxima dimensão?',
    'portfolio.cta.button1': 'Orçamento Personalizado',
    'portfolio.cta.button2': 'Nosso Processo',

    // Matterport Page
    'matterport.hero.tag': 'Imobiliário de Alto Padrão',
    'matterport.hero.title': 'Tours Virtuais Matterport',
    'matterport.hero.subtitle': 'Transforme propriedades de luxo em experiências digitais imersivas. Capture cada detalhe com precisão milimétrica e proporcione visitas remotas sem precedentes.',
    'matterport.hero.cta1': 'Solicitar Orçamento',
    'matterport.hero.cta2': 'Ver Exemplos 3D',
    'matterport.bento.immersive.title': 'Experiência Imersiva',
    'matterport.bento.immersive.desc': 'Navegação fluida que simula a presença física no imóvel, eliminando barreiras geográficas.',
    'matterport.bento.precision.title': 'Precisão de Medidas',
    'matterport.bento.precision.desc': 'Nossa tecnologia laser garante margem de erro inferior a 1%. Perfeito para planejamento de reformas e conferência de áreas técnicas.',
    'matterport.bento.precision.label': 'TOLERÂNCIA',
    'matterport.bento.floorplan.title': 'Planta Baixa 2D/3D',
    'matterport.bento.floorplan.desc': 'Geração automática de esquemáticos profissionais integrados ao tour.',
    'matterport.bento.sales.title': 'Acelere Vendas em até 31%',
    'matterport.bento.sales.desc': 'Imóveis com tours interativos recebem 95% mais chamados de compradores qualificados.',
    'matterport.features.title': 'O Padrão Ouro do Real Estate',
    'matterport.features.1.title': 'Captura HDR 4K',
    'matterport.features.1.desc': 'Lentes de alta definição que capturam a iluminação natural e texturas com fidelidade absoluta.',
    'matterport.features.2.title': 'Compatibilidade Total',
    'matterport.features.2.desc': 'Integração nativa com portais imobiliários, redes sociais e visualização em VR/Oculus.',
    'matterport.features.3.title': 'Mattertags™ Inteligentes',
    'matterport.features.3.desc': 'Insira pontos de interesse com vídeos, descrições técnicas e links de venda dentro do tour.',
    'matterport.cta.tag': 'Pronto para o Próximo Nível',
    'matterport.cta.title': 'Dê vida ao seu próximo empreendimento.',
    'matterport.cta.button': 'Agendar Captura',

    // Aerial Mapping Page
    'aerial.hero.tag': 'Unidade de Precisão Técnica',
    'aerial.hero.title': 'Mapeamento Sub-Centimétrico',
    'aerial.hero.subtitle': 'Transformamos o espaço físico em dados digitais de alta fidelidade. Engenharia, agronegócio e infraestrutura com precisão de até 0.5cm.',
    'aerial.hero.cta1': 'Solicitar Orçamento',
    'aerial.hero.cta2': 'Explorar Dados',
    'aerial.stats.rtk.title': 'Integração RTK / PPK',
    'aerial.stats.rtk.desc': 'Georreferenciamento de precisão absoluta utilizando tecnologia Real-Time Kinematic para correção instantânea de coordenadas.',
    'aerial.stats.gsd.label': 'GSD Máximo',
    'aerial.stats.accuracy.label': 'Acurácia Global',
    'aerial.stats.agro.title': 'Agro Tech',
    'aerial.stats.agro.desc': 'NDVI, contagem de plantas e análise de saúde radicular automatizada.',
    'aerial.stats.cloud.title': 'Processamento em Nuvem',
    'aerial.stats.cloud.desc': 'Nossas estações de trabalho processam terabytes de dados para gerar modelos 3D ultrarrealistas.',
    'aerial.viewport.title': 'Digital Twins para Engenharia Civil',
    'aerial.viewport.desc': 'Capture o estado real da obra com fotogrametria aérea. Gere modelos BIM, nuvens de pontos e ortofotos georreferenciadas que servem como a base técnica definitiva para gestão de projetos complexos.',
    'aerial.viewport.list1.title': 'Cálculo de Volumetria',
    'aerial.viewport.list1.desc': 'Precisão cirúrgica em medições de pilhas de minério e terraplanagem.',
    'aerial.viewport.list2.title': 'Ortofotomosaicos',
    'aerial.viewport.list2.desc': 'Mapas de alta resolução com total integração em softwares CAD e GIS.',
    'aerial.cta.title': 'Pronto para digitalizar seu ativo?',
    'aerial.cta.subtitle': 'Nossos especialistas estão prontos para planejar a missão aérea perfeita para sua necessidade técnica.',

    // Video Production Page
    'video.hero.tag': 'Mídia Digital de Precisão',
    'video.hero.title': 'Domine a Atenção nas Redes',
    'video.hero.subtitle': 'Elevamos sua presença digital através de produções audiovisuais de alto impacto e gestão estratégica orientada a dados.',
    'video.hero.cta1': 'SOLICITAR ORÇAMENTO',
    'video.hero.cta2': 'VER PORTFÓLIO',
    'video.formats.title': 'Formatos de Impacto',
    'video.formats.subtitle': 'Design otimizado para o consumo rápido e retenção máxima em dispositivos móveis.',
    'video.formats.reels.title': 'Instagram Reels',
    'video.formats.reels.desc': 'Transições fluidas e storytelling dinâmico para viralizar no algoritmo mais competitivo do mundo.',
    'video.formats.tiktok.title': 'TikTok Content',
    'video.formats.tiktok.desc': 'Conteúdo nativo que não parece propaganda. Foco em tendências e autenticidade para a Geração Z.',
    'video.formats.shorts.title': 'YouTube Shorts',
    'video.formats.shorts.desc': 'Aproveite o poder de busca do Google com vídeos curtos que alimentam seu canal principal.',
    'video.metrics.title': 'Métricas que Movem o Ponteiro',
    'video.metrics.subtitle': 'Não entregamos apenas "likes". Nosso foco é converter atenção em autoridade e faturamento através de uma estratégia consistente de social media.',
    'video.metrics.engagement': 'Média de Engajamento',
    'video.metrics.views': 'Visualizações/Mês',
    'video.management.title': 'Gestão Full-Stack',
    'video.management.subtitle': 'Desde a concepção da ideia até o monitoramento dos resultados, cuidamos de cada frame.',
    'video.management.1.title': 'Planejamento',
    'video.management.1.desc': 'Definição de pilares de conteúdo e calendário editorial estratégico.',
    'video.management.2.title': 'Produção',
    'video.management.2.desc': 'Captura 4K e edição com técnicas de retenção de neurobranding.',
    'video.management.3.title': 'Distribuição',
    'video.management.3.desc': 'Postagem otimizada com copy persuasiva e hashtags estratégicas.',
    'video.management.4.title': 'Otimização',
    'video.management.4.desc': 'Relatórios mensais detalhando o ROI e próximos passos.',
    'video.cta.title': 'Transforme seu Social Agora',
    'video.cta.subtitle': 'Pare de postar por postar. Comece a construir uma marca que é referência no seu nicho.',
    'video.cta.button': 'Falar com Estrategista',

    // Footer
    'footer.desc': 'Estabelecendo o padrão para produção visual técnica. Entregamos mapeamento de precisão e ambientes imersivos que unem o físico ao digital.',
    'footer.solutions': 'Soluções',
    'footer.company': 'Empresa',
    'footer.updates': 'Atualizações',
    'footer.rights': 'Todos os direitos reservados.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
