window.VIP_CONFIG = {
  // A pagina NAO carrega chave do Supabase. A gravacao passa pela Edge Function
  // "vip", que roda no servidor com a chave secreta. Se a chave anon estivesse
  // aqui, qualquer visitante teria leitura e escrita nas tabelas do PromoFlow
  // (grupos, promocoes, logs), porque a politica delas e "anon pode tudo".
  VIP_ENDPOINT: "https://cmxhotmrqaewpdmmsvac.supabase.co/functions/v1/vip",

  START_DISPLAY: 167,
  DISPLAY_MAX: 500,
  REAL_PER_DISPLAY_STEP: 3,
  EXTRA_DISPLAY_MAX: 100,

  META_PIXEL_ID: "1652987489868850"
};
