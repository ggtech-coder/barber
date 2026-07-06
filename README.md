# Barbearia Elite — Landing Page Premium (Template Reutilizável)

Site institucional de alta conversão para barbearia, construído em **HTML5 + CSS puro + JavaScript puro**, sem backend, 100% compatível com **GitHub Pages**.

> 🔁 **Este template foi feito para ser reaproveitado em qualquer nicho.** Basta editar o arquivo `assets/config.js` com os dados do novo negócio (nome, telefone, WhatsApp, endereço, horário, redes sociais) e os textos de cada seção diretamente no `index.html` (marcados com o comentário `EDITAR PARA NOVO NICHO`).

---

## 📁 Estrutura de pastas

```
/
├── index.html                     → página principal (landing page)
├── robots.txt
├── sitemap.xml
├── manifest.json
├── README.md
├── assets/
│   ├── config.js                  → ⭐ ARQUIVO ÚNICO DE DADOS DO NEGÓCIO
│   ├── script.js                  → interações (menu, tema, FAQ, formulário)
│   ├── style.css                  → todo o visual do site
│   ├── images/
│   │   ├── hero-barbearia.svg     → imagem principal do Hero
│   │   └── sobre-barbearia.svg    → imagem da seção Sobre
│   └── favicon/
│       ├── favicon.svg / favicon.ico
│       ├── apple-touch-icon.png
│       └── icon-192.png / icon-512.png
├── sobre/index.html               → estrutura preparada para página /sobre
├── servicos/index.html            → estrutura preparada para página /servicos
├── blog/index.html                → estrutura preparada para o blog
├── contato/index.html             → estrutura preparada para página /contato
├── politica-de-privacidade/index.html
└── termos-de-uso/index.html
```

As páginas dentro de `/sobre`, `/servicos`, `/blog` e `/contato` já existem com SEO configurado (title, description, canonical) e podem ser expandidas com conteúdo completo quando quiser transformar o site em multi-página — hoje elas apontam para as respectivas seções da home (`/#sobre`, `/#servicos`, etc.), que já contêm o conteúdo completo.

---

## 🖼️ Sobre as imagens

As imagens do Hero e da seção Sobre foram entregues como **ilustrações SVG vetoriais** (leves, nítidas em qualquer tela, carregam instantaneamente e não pesam no Lighthouse). Para usar fotos reais da barbearia:

1. Tire fotos profissionais (ambiente, cadeira, barbeiro em atendimento).
2. Otimize em **WebP** (use https://squoosh.app, qualidade 75–80%).
3. Substitua o `src` das tags `<img>` no `index.html` por `/assets/images/sua-foto.webp`.
4. Mantenha os atributos `width`, `height` e `alt` para não perder pontos de performance e acessibilidade.

---

## ⚙️ Como personalizar para outro nicho (reuso do template)

1. Abra `assets/config.js` e edite o objeto `BUSINESS` com os dados do novo cliente (nome, endereço, telefone, WhatsApp, e-mail, horário, redes sociais, coordenadas).
2. Abra `index.html` e edite os blocos marcados com `EDITAR PARA NOVO NICHO`:
   - `<title>`, meta description, meta keywords, Open Graph e Twitter Cards
   - JSON-LD `LocalBusiness` (tipo `@type`, ex.: trocar `HairSalon` por `Restaurant`, `Dentist`, `BeautySalon`, etc.)
   - Textos do Hero, Sobre, Serviços, Depoimentos, Processo, FAQ e Contato
3. Ajuste a paleta de cores em `assets/style.css`, na seção `:root` (variáveis `--color-brass`, `--color-burgundy`, etc.).
4. Troque as ilustrações SVG em `assets/images/` ou substitua por fotos reais do novo negócio.

---

## 🚀 Como subir no GitHub

1. Crie uma conta em [github.com](https://github.com) (se ainda não tiver).
2. Crie um novo repositório (ex.: `barbearia-elite-site`), público.
3. No seu computador, dentro da pasta do site:
   ```bash
   git init
   git add .
   git commit -m "Primeira versão do site"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/barbearia-elite-site.git
   git push -u origin main
   ```
   > Caso prefira não usar linha de comando, você pode subir os arquivos diretamente pela interface web do GitHub, usando o botão **"Add file" → "Upload files"**.

---

## 🌐 Como ativar o GitHub Pages

1. No repositório, vá em **Settings** (Configurações).
2. No menu lateral, clique em **Pages**.
3. Em **Branch**, selecione `main` e a pasta `/root`, depois clique em **Save**.
4. Após alguns segundos, o GitHub mostrará a URL pública, algo como:
   `https://SEU-USUARIO.github.io/barbearia-elite-site/`
5. Pronto! O site já está no ar.

---

## 🌍 Como configurar um domínio personalizado

1. Ainda em **Settings → Pages**, no campo **Custom domain**, digite seu domínio (ex.: `www.barbeariaelite.com.br`) e clique em **Save**.
2. O GitHub criará automaticamente um arquivo `CNAME` na raiz do repositório — não apague esse arquivo.
3. Marque a opção **Enforce HTTPS** assim que ela ficar disponível (pode levar algumas horas após a configuração do DNS).

### Como conectar um domínio comprado no Registro.br

1. Acesse [registro.br](https://registro.br) e entre no **Painel do Registro.br** com seu login.
2. Vá até o domínio adquirido e clique em **DNS**.
3. Configure os seguintes registros:

   **Para o domínio raiz (ex.: `barbeariaelite.com.br`)** — adicione 4 registros `A` apontando para os IPs do GitHub Pages:
   ```
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   ```

   **Para o subdomínio `www`** — adicione um registro `CNAME`:
   ```
   CNAME     www     SEU-USUARIO.github.io.
   ```

4. Aguarde a propagação do DNS (pode levar de alguns minutos até 24h).
5. Volte no GitHub (**Settings → Pages**) e confirme se o domínio foi validado (aparecerá um ✅ verde).

---

## 🔒 Como configurar HTTPS

O GitHub Pages já gera um certificado SSL gratuito automaticamente via **Let's Encrypt** assim que o domínio personalizado é validado. Basta:

1. Aguardar a validação do domínio (item anterior).
2. Marcar a caixa **Enforce HTTPS** em **Settings → Pages**.
3. Testar acessando `https://www.seudominio.com.br` — o cadeado deve aparecer no navegador.

---

## 🔎 Como cadastrar no Google Search Console

1. Acesse [search.google.com/search-console](https://search.google.com/search-console).
2. Clique em **Adicionar propriedade** e escolha **Prefixo do URL**, informando `https://www.barbeariaelite.com.br`.
3. Verifique a propriedade usando uma das opções:
   - **Tag HTML**: cole a meta tag fornecida pelo Google dentro do `<head>` do `index.html`.
   - **Arquivo HTML**: baixe o arquivo de verificação e coloque-o na raiz do repositório.
4. Clique em **Verificar**.

### Como enviar o sitemap

1. No Search Console, vá em **Sitemaps** (menu lateral).
2. Digite `sitemap.xml` no campo de envio.
3. Clique em **Enviar**. O Google passará a ler `https://www.barbeariaelite.com.br/sitemap.xml` periodicamente.

### Como indexar o site no Google

1. No Search Console, use a **Inspeção de URL** (barra de busca no topo) e cole a URL da home.
2. Clique em **Solicitar indexação**.
3. Repita o processo para páginas importantes (`/sobre/`, `/servicos/`, `/contato/`).
4. A indexação completa costuma levar de alguns dias a poucas semanas — o envio do sitemap acelera esse processo.

---

## 📊 Dados de SEO Local já preparados

Estes campos estão centralizados em `assets/config.js` e no JSON-LD do `index.html`, prontos para substituição:

| Campo | Onde editar |
|---|---|
| Nome da empresa | `config.js` → `BUSINESS.name` / `index.html` → JSON-LD `name` |
| Cidade / Estado | `config.js` → `BUSINESS.address` |
| Telefone | `config.js` → `BUSINESS.phoneDisplay` / `phoneE164` |
| WhatsApp | `config.js` → `BUSINESS.whatsappNumber` |
| E-mail | `config.js` → `BUSINESS.email` |
| Endereço completo | `config.js` → `BUSINESS.address` |
| Horário de funcionamento | `config.js` → `BUSINESS.hours` e `schemaOpeningHours` |
| Latitude / Longitude | `config.js` → `BUSINESS.geo` |

> Dica: para obter a latitude/longitude exata do seu endereço, pesquise o local no Google Maps, clique com o botão direito no ponto exato e copie as coordenadas exibidas.

---

## ✅ Checklist de performance e SEO já implementados

- [x] HTML5 semântico com apenas um `<h1>` por página
- [x] Meta title, description, keywords, canonical
- [x] Open Graph e Twitter Cards
- [x] `robots.txt` e `sitemap.xml`
- [x] Favicon completo (SVG, ICO, PNG, Apple Touch Icon) + `manifest.json`
- [x] JSON-LD: `HairSalon` (LocalBusiness), `FAQPage`, `BreadcrumbList`
- [x] Imagens com `alt`, `width`/`height` (sem CLS) e `loading="lazy"` (exceto a imagem do Hero, carregada com prioridade)
- [x] Links externos com `rel="noopener noreferrer"`
- [x] Preconnect e preload de fontes do Google Fonts
- [x] Preload da imagem principal do Hero com `fetchpriority="high"`
- [x] CSS e JS enxutos, sem frameworks pesados
- [x] Navegação por teclado, `:focus-visible`, ARIA labels e `skip link`
- [x] Dark mode (padrão) com alternância para tema claro
- [x] Formulário funcional sem backend (envia direto para o WhatsApp)

---

## 🛠️ Rodando localmente

Não é necessário nenhum passo de build. Basta abrir `index.html` no navegador ou, para simular melhor o ambiente de produção (recomendado por causa de `fetch`/paths absolutos), rodar um servidor local simples:

```bash
# Python 3
python3 -m http.server 8080

# ou, com Node instalado
npx serve .
```

Depois acesse `http://localhost:8080`.
