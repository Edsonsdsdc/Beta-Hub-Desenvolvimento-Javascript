##PROPEIDADES FUNDAMENTAIS

Todo grid é composto de 2 principais grupos:
`container: o pai` e `itens: o(s) filhos`

---
## CONTRAINER (pai)

- display: grid;
- grid-template;
  - grid-template-columns;
  - grid-template-rows;
  - grid-template-areas;
-gap
  - row-gap;
  - column-gap;


---
## ITENS (filhos)

- grid-column;
  - grid-column-strat;
  - grid-column-end;
- grid-row;
  - grid-row-start;
  - grid-row-end;

---

### PROPRIEDADES DE ALINHAMETO

Existem 9 propriedades fundamentais

**6 aplicadas em container**
`aling-content`
`justify-content`
`place-items`

`aling-self`
`justify-self`
`place-self`

**3 aplicadas em itens**
`aling-self`
`justify-self`
`place-self`

E cada um deles irá observar ou o
- conteúdo do elemento `content`
- itens do elemento `items`
- o próprio elemento `self`
---