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
}
