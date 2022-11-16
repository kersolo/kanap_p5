//Renvoie les valeurs dans le localStorage
export let loadcart = () => {
  let dataProduct = localStorage.getItem('produits');
  if (dataProduct == null) {
    return [];
  } else {
    return JSON.parse(dataProduct);
  }
};
let dataProduct = loadcart();

//Fonction permettant affichage prix après panier dans menu nav
export let quantityAffichagePanier = () => {
  const totalQuantity = dataProduct.reduce(
    (previousValue, currentValue) =>
      previousValue + parseInt(currentValue.nombreDeProduit),
    0
  );

  let nav = document.querySelector('nav > ul > a:nth-child(2) li');
  let span = document.createElement('span');
  nav.appendChild(span);
  span.innerHTML = ' ' + '(' + totalQuantity + ')';
};