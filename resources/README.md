# Ressources Projet

Ce dossier regroupe les ressources de reference pour reconstruire l'application `Lux Watches` dans son etat actuel en francais.
Il est organise pour suivre la progression du cours: frontend d'abord, backend ensuite, puis connexion frontend/backend a la fin.

## A lire d'abord

- [START-HERE.md](./START-HERE.md): point d'entree conseille pour un debutant
- [CHECKLIST.md](./CHECKLIST.md): plan de travail par phase de cours
- [COMMON-MISTAKES.md](./COMMON-MISTAKES.md): erreurs frequentes a eviter
- [ui-guide/ui-guide.html](./ui-guide/ui-guide.html): reference visuelle principale

## Contenu

- `brand-system/`: regles visuelles a appliquer quand vous arrivez a l'etape CSS/Tailwind
- `content/`: tous les textes visibles de l'application, organises par page
- `seed-data/`: donnees produits a utiliser plus tard pour MongoDB et l'API
- `ui-guide/`: guide visuel detaille, assets utilises par l'interface, captures de reference et guide HTML

## Parcours conseille

1. Refaire d'abord les pages en HTML/CSS simples
2. Ajouter les comportements en JavaScript
3. Refaire ensuite le frontend en React avec Vite
4. Appliquer Tailwind CSS pour retrouver le rendu final
5. Construire le backend avec Node.js, Express et MongoDB
6. Connecter enfin le frontend au backend

## Comment utiliser ce dossier

- Utiliser `brand-system/` pour reproduire le style visuel
- Utiliser `content/pages/` pour reconstruire les textes ecran par ecran
- Utiliser `seed-data/products.fr.json` pour initialiser MongoDB ou toute autre base de donnees
- Utiliser `ui-guide/ui-guide.html` comme reference visuelle prioritaire pour retrouver le rendu actuel
