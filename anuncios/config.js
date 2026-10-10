// ============================================================
//  Tênis em Promo — configuração do site
//  Este é o ÚNICO arquivo que você pode precisar editar.
//  (Bloco de Notas → salvar → GitHub Desktop → Commit → Push)
// ============================================================
window.TEP_CONFIG = {
  // Endereço público das ofertas (não é senha, pode ficar aqui).
  offersUrl: 'https://cmxhotmrqaewpdmmsvac.supabase.co/functions/v1/public-offers',

  // Link de convite do seu grupo/canal de WhatsApp.
  // Deixe '' (vazio) para esconder o botão "Entrar no grupo".
  // Exemplo: 'https://chat.whatsapp.com/AbCdEf123456'
  whatsappUrl: '',

  // De quanto em quanto tempo o site busca ofertas novas (segundos).
  refreshSeconds: 60,

  // (Fica para a G3) Meta Pixel — para medir o anúncio no Facebook/Instagram.
  // Deixe '' (vazio) para NÃO carregar NADA agora (nenhum rastreador é incluído).
  // Na G3, cole aqui só os números do ID do Pixel. Exemplo: '1234567890'.
  metaPixelId: '',
}
