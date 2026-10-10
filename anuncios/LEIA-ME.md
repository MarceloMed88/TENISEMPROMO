# Site Tênis em Promo

Site estático (GitHub Pages) que mostra as ofertas publicadas **de verdade** pelo PromoFlow no WhatsApp.

- `index.html` — o site (4 ofertas por linha no computador, 2 no celular).
- `config.js` — **único arquivo para editar**: link do seu grupo de WhatsApp e intervalo de atualização.
- `logo.png`, `favicon.png`, `apple-touch-icon.png`, `og-image.jpg` — sua logo.

Como funciona: o PromoFlow publica no WhatsApp → o banco (Supabase) copia só os dados públicos da oferta para
`site_offers` → o site lê o endereço público `public-offers` a cada 60 s. **Nenhuma chave do banco fica no site.**
DRY RUN nunca aparece aqui. Cada oferta fica até 7 dias.

Passo a passo para colocar no ar: `docs/GUIA_SITE_FOR_DUMMIES.md` (na pasta do PromoFlow).
