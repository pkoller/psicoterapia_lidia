# Psicoterapia Lidia Simonetta Biacchi — sito web

Sito vetrina bilingue (italiano / inglese) per la **Dott.ssa Lidia Simonetta
Biacchi**, psicologa e psicoterapeuta a orientamento sistemico-relazionale,
con studio a Monza (MB).

> **English summary:** a static, bilingual (IT/EN) landing site for a
> systemic-relational psychotherapist based in Monza, Italy. Plain HTML, CSS
> and vanilla JS — no build step, no dependencies. Open `index.html` or serve
> the folder with any static web server.

## Contenuti del sito

La homepage (`index.html`, e la sua traduzione `en/index.html`) è una pagina
unica divisa in sezioni:

| Sezione         | id              | Contenuto                                                                 |
| --------------- | --------------- | ------------------------------------------------------------------------- |
| Hero            | `#top`          | "Un luogo accogliente in cui prendersi cura di sé", foto di Lidia in studio, CTA |
| Chi sono        | `#about`        | Ritratto e presentazione della Dott.ssa Biacchi                           |
| Servizi         | `#services`     | Percorso individuale, di coppia, per la famiglia, ambito lavorativo       |
| Come funziona   | `#how-it-works` | Primo contatto → colloquio conoscitivo → percorso su misura               |
| Uno spazio sicuro | `#safe-space` | Riservatezza e segreto professionale (sezione "trust & safety")           |
| Dove sono       | `#location`     | Studio a Monza, con mappa                                                 |
| Contatti        | `#contact`      | Telefono, WhatsApp, email (link diretti, nessun modulo/backend)           |

Le pagine satellite `informazioni-legali.html` (IT) e `en/legal-notice.html`
(EN) riportano tutti i dati legali e professionali (titolare, iscrizione
all'Albo, Partita IVA, sede, contatti).

## Stack tecnico

- HTML + CSS + JavaScript vanilla
- **Nessuna build, nessuna dipendenza npm**
- Font **Fraunces** (titoli) e **Mulish** (testo), ospitati sul sito
  (`assets/fonts/`), senza richieste a Google Fonts
- Banner cookie: la mappa di Google Maps viene caricata solo dopo il
  consenso del visitatore (vedi [`CLAUDE.md`](CLAUDE.md#cookie-e-privacy-gdpr))
- Pubblicabile così com'è su qualunque hosting statico (GitHub Pages,
  Netlify, Cloudflare Pages, …). URL attuale:
  <https://pkoller.github.io/psicoterapia_lidia/>

## Avvio in locale

Apri `index.html` nel browser, oppure:

```bash
python3 -m http.server 8000
# poi visita http://localhost:8000
```

## Struttura del progetto

```
index.html                → homepage in italiano (lingua principale)
en/index.html             → homepage in inglese (stessa struttura e stessi id)
informazioni-legali.html  → dati legali/professionali (IT)
en/legal-notice.html      → dati legali/professionali (EN)
assets/css/style.css      → unico foglio di stile condiviso
assets/css/fonts.css      → @font-face dei font self-hosted
assets/fonts/             → file .woff2 di Fraunces e Mulish
assets/js/main.js         → menu mobile, animazioni "reveal", anno nel footer, banner cookie e mappa con consenso
assets/img/               → foto, icone SVG, favicon, immagine Open Graph
CLAUDE.md                 → linee guida dettagliate per chi modifica il sito
```

### Immagini

- `ritratto-lidia.jpg` — ritratto usato nella sezione "Chi sono"
- `hero-lidia-studio.jpg` — foto dell'hero, ritaglio (~600:520) di
  `foto_lidia_office.png` (file sorgente, non referenziato dalle pagine)
- `og-image.jpg` — anteprima social 1200×630 (tag `og:image` /
  `twitter:image`, con URL assoluto)
- `icon-*.svg`, `favicon.svg` — icone lineari con i colori della palette
  hardcoded

## Design system

Definito nella sezione `:root` di `assets/css/style.css`. Palette calda e
accogliente:

| Variabile                            | Uso                                 |
| ------------------------------------ | ----------------------------------- |
| `--cream`, `--cream-soft`            | sfondi                              |
| `--terracotta`, `--terracotta-dark`  | colore primario (CTA, link, accenti) |
| `--sage`, `--sage-light`             | colore secondario                   |
| `--brown`, `--brown-light`           | testo                               |
| `--gold`                             | accenti decorativi                  |

Se cambi la palette, aggiorna anche i colori `fill`/`stroke` delle icone SVG.

## Dati di contatto e legali

- Dott.ssa Lidia Simonetta Biacchi
- Telefono / WhatsApp: +39 338 119 4532
- Email: lalidiasimonetta@hotmail.com
- Studio: Via Carlo Poma, 2, 20900 Monza (MB), Italia
- Partita IVA: 04301050136
- Iscrizione Albo degli Psicologi della Lombardia: n. 5070 del 02/03/1999

La Partita IVA è indicata anche nel footer della homepage, come richiesto
dall'art. 35, comma 1 del DPR n. 633/1972.

## Regole per le modifiche

- **Due lingue, una struttura:** ogni modifica a una sezione in
  `index.html` va replicata (struttura e stile) in `en/index.html`.
- **Dati di contatto/legali:** se cambiano, aggiornali in tutti e quattro i
  file HTML (header, `#contact`, footer, link mappa/WhatsApp, pagine legali).
- **Dominio:** se il sito viene pubblicato altrove, aggiorna gli URL
  assoluti in `og:url`, `og:image` e `twitter:image` in entrambe le homepage.
- **Tono:** caldo, accogliente, rassicurante e professionale; la sezione
  "Uno spazio sicuro" non va rimossa.

Per i dettagli (es. come aggiungere foto dello studio) vedi
[`CLAUDE.md`](CLAUDE.md).
