# Augusto — composições em camadas

Branch: `codex/augusto-layered-motion`. Base: `3719f37612cb646764ea0a2185d66f755df5014d`.

Cinco cartazes foram reconstruídos como secções HTML: Bom dia, Time to eat,
Matcha, Doce e Boa companhia. O texto é independente da fotografia. Os recortes
SVG reutilizam as fotografias do repositório, sem regenerar os alimentos.
Os contornos são máscaras vetoriais manuais; ajustar os paths se necessário.

`assets/story.css` define paleta, textura, escala responsiva e entradas faseadas.
`assets/story.js` revela cada composição uma vez por IntersectionObserver.
Sem JavaScript, o conteúdo destas secções permanece visível. Reduced motion
mostra o estado final sem transições. O scroll nativo é preservado.

As fontes disponíveis no site (Anton, Archivo Black, Parisienne e Jost) aproximam
as letras das referências; as imagens geradas não disponibilizam ficheiros de fonte.

## Validação e publicação

Sintaxe JavaScript, referências locais, IDs e whitespace verificados.
Recortes SVG inspecionados em renderização estática.
A verificação visual no navegador, em desktop/mobile, está pendente: o Chromium
local não iniciou neste ambiente e o navegador remoto recusou a pré-visualização
local. Rever em 390px, 768px e 1440px antes de publicar; verificar contornos,
carregamento das fontes, scroll, botões e prefers-reduced-motion.

O push não foi efetuado: GitHub exigiu autenticação indisponível nesta sessão.
Fazer merge/rebase com a versão atual do Claude antes de integrar. Não substituir
alterações posteriores com uma cópia antiga do index.html.
