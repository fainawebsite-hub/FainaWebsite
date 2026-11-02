# Guia de imagens — Faina Restaurante

Todas as imagens públicas estão organizadas em `public/images` e os respetivos caminhos são definidos apenas em `src/content/images.ts`.

| Área | Ficheiro | Formato recomendado |
| --- | --- | --- |
| Logótipo | `brand/logo/faina-logo.png` | PNG transparente, quadrado |
| Azulejo | `brand/patterns/faina-azulejo-strip.png` | faixa vertical; preparado para repetição vertical |
| Hero | `home/hero/hero-main.jpg` | fotografia vertical ou 4:5 |
| História | `home/about/owners.jpg` | fotografia horizontal do espaço/equipa |
| Categorias | `home/categories/*.jpg` | 4:5, sem texto sobreposto |
| Momentos | `home/moments/moments-main.webp` | fotografia horizontal ou 4:3 |
| Natal | `home/christmas/christmas-main.jpg` | 4:5 |
| Galeria | `gallery/gallery-01.jpg` a `gallery-06.jpg` | 4:3, seis imagens equilibradas |
| Localização | `location/exterior.jpg` | fachada ou vista exterior |

Mantenha as imagens sem texto, molduras ou efeitos aplicados. Para substituir uma imagem, conserve o nome e a proporção; para alterar os caminhos, faça-o em `src/content/images.ts`.

> Nota: a fonte original do padrão é preservada em `public/images/brand/source/`. A versão de produção está em PNG porque esta instalação não dispõe de um conversor WebP; pode ser substituída por um `.webp` com o mesmo nome quando disponível.
