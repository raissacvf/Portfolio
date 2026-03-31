# Portfólio - Raissa Costa

Portfólio profissional desenvolvido para apresentar projetos e habilidades como Desenvolvedora Front-End.

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessibilidade
- **CSS3** - Design moderno, animações e responsividade
- **JavaScript** - Interatividade e funcionalidades avançadas
- **Font Awesome** - Ícones profissionais

## 📁 Estrutura do Projeto

```
Portfólio/
├── index.html          # Página principal com todas as seções
├── styles.css          # Estilos completos com design responsivo
├── script.js           # Funcionalidades e animações
├── README.md           # Documentação do projeto
└── assets/             # Imagens e vídeos (opcional)
```

## 🎨 Seções do Portfólio

### 1. Hero Section
- Vídeo de fundo com overlay escuro
- Nome e título profissional
- Links diretos para GitHub e LinkedIn
- Animação de digitação no título

### 2. Stack Tecnológico
- Grid visual com tecnologias dominadas
- Ícones animados e efeitos hover
- Destaque para HTML, CSS, JavaScript, Java, SQL, MySQL, Git/GitHub

### 3. Grid de Projetos
- Cards interativos com overlay roxo escuro
- Botões para ver código e acessar site
- Efeito parallax 3D no hover
- Projetos destacados: Micros BR, The Glow Studio, E-Commerce, Dashboard

### 4. Trajetória e Certificados
- Linha do tempo animada com CSS puro
- Certificados de cursos e bootcamps
- Animações de revelação no scroll

### 5. Contato
- Botões diretos para e-mail e WhatsApp
- Formulário integrável com Formspree
- Design com glassmorphism

## ⚡ Funcionalidades Especiais

- **Animações de Scroll**: Elementos aparecem suavemente ao rolar a página
- **Efeitos Hover Interativos**: Cards com transformações 3D
- **Typing Effect**: Animação de digitação no título principal
- **Ripple Effect**: Efeito de onda nos botões ao clicar
- **Responsive Design**: Adaptação perfeita para todos os dispositivos
- **Performance Optimization**: Debounce e Intersection Observer

## 🛠️ Personalização

### Links e Informações Pessoais
Atualize os seguintes campos no `index.html`:

```html
<!-- Links pessoais -->
<a href="https://github.com/SEU_USUARIO" target="_blank">
<a href="https://linkedin.com/in/SEU_PERFIL" target="_blank">
<a href="mailto:SEU_EMAIL@example.com">
<a href="https://wa.me/SEU_WHATSAPP">

<!-- Links dos projetos -->
<a href="https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO">
<a href="https://URL_DO_SEU_SITE.vercel.app">

<!-- Formspree (opcional) -->
<form action="https://formspree.io/f/SEU_FORM_ID">
```

### Cores e Estilo
As cores principais estão definidas no `styles.css`:

```css
:root {
    --primary-color: #8B5CF6;    /* Roxo principal */
    --primary-dark: #7C3AED;     /* Roxo escuro */
    --secondary-color: #10B981;  /* Verde secundário */
    /* ... outras cores */
}
```

### Vídeo de Fundo
Substitua o URL do vídeo na seção hero:

```html
<video autoplay muted loop playsinline>
    <source src="URL_DO_SEU_VIDEO.mp4" type="video/mp4">
</video>
```

## 📱 Responsividade

O portfólio é totalmente responsivo e se adapta a:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (480px - 767px)
- Small Mobile (< 480px)

## 🚀 Deploy

### GitHub Pages
1. Faça upload dos arquivos para um repositório GitHub
2. Vá para Settings > Pages
3. Selecione a branch `main` e pasta `/root`
4. Seu site estará disponível em `https://SEU_USUARIO.github.io/NOME_DO_REPO`

### Vercel
1. Conecte seu repositório GitHub ao Vercel
2. Configure as build settings (se necessário)
3. Deploy automático a cada push

### Netlify
1. Arraste os arquivos para o Netlify Drop
2. Ou conecte seu repositório GitHub
3. Deploy contínuo configurado

## 📈 SEO e Performance

- Meta tags otimizadas
- Semântica HTML5 correta
- Lazy loading para imagens
- CSS e JavaScript minificados (produção)
- Performance optimization com debounce

## 🔧 Desenvolvimento

### Para desenvolvimento local:
```bash
# Clone o repositório
git clone https://github.com/raissacvf/Portfólio.git

# Navegue para a pasta
cd Portfólio

# Abra o index.html no navegador
# Ou use um servidor local:
python -m http.server 8000
# ou
npx serve .
```

### Estrutura de Arquivos Recomendada para Produção:
```
Portfólio/
├── css/
│   └── styles.min.css
├── js/
│   └── script.min.js
├── assets/
│   ├── videos/
│   └── images/
├── index.html
└── README.md
```

## 🎯 Melhorias Futuras

- [ ] Sistema de temas (dark/light mode)
- [ ] Blog integrado
- [ ] Projetos com filtros por categoria
- [ ] Animações com GSAP
- [ ] PWA (Progressive Web App)
- [ ] Testes automatizados
- [ ] CI/CD pipeline

## 📞 Contato

- **E-mail**: raissa.costa@example.com
- **GitHub**: https://github.com/raissacvf
- **LinkedIn**: https://linkedin.com/in/raissacvf
- **WhatsApp**: https://wa.me/5511999999999

---

Desenvolvido com ❤️ por Raissa Costa
