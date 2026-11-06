# Faina Restaurante

## Lançamento e descoberta em pesquisa

O projeto gera automaticamente `robots.txt` e `sitemap.xml` através do App Router. Antes do lançamento, validar a propriedade em Google Search Console e Bing Webmaster Tools e submeter:

- `https://www.fainarestaurante.pt/sitemap.xml`
- `https://www.fainarestaurante.pt/robots.txt`

### IndexNow

IndexNow deve ser ativado apenas no lançamento, depois de o domínio definitivo estar confirmado. Criar uma chave IndexNow, publicar o ficheiro `<key>.txt` na raiz pública do domínio e notificar o endpoint IndexNow após atualizações relevantes de URLs públicas. Não incluir a chave no repositório nem no código do cliente.

As rotas, NAP, horários e dados de menu são centralizados em `src/content/` para tornar as atualizações consistentes em todo o site.
