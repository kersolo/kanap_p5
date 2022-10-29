const getItemId = () => {
  return new URL(location.href).searchParams.get('id');
};

//fonciton ajouter un produit sélectionné dans le local storage
const ajoutProduitLocalStorage = (itemProductss) => {
  if(){}else(){}
  dataLocalStorage.push(itemProductss);
  localStorage.setItem('produit', JSON.stringify(dataLocalStorage));
};

const popupConfirmation = (itemProductss) => {
  if (
    window.confirm(`${itemProductss.nomDuProduit} a bien été ajouté au panier
Souhaitez-vous rejoindre le panier ?`)
  ) {
    window.location.href = 'cart.html';
  } else {
    window.location.href = 'index.html';
  }
};

const mainFunction = async () => {
  //--------
  dataLocalStorage = JSON.parse(localStorage.getItem('produit'));
  console.log(dataLocalStorage);

  //s'il y a déja des produits d'enregistré dans le local storage
  if (!dataLocalStorage) {
    dataLocalStorage = [];
  }
  //--------
  const itemId = getItemId();
  const item = await getItem(itemId);
  showItems(item);
  //-------------------------------------------------------------------//
  const btn = document.querySelector('button');

  const couleurKanap = document.querySelector('#colors');
  const quantiteKanap = document.querySelector('#quantity');

  btn.addEventListener('click', () => {
    // e.preventDefault();

    const choixColor = couleurKanap.value;
    const choixQantite = quantiteKanap.value;

    const itemProductss = {
      imageDuProduit: item.imageUrl,
      nomDuProduit: item.name,
      couleurDuProduit: choixColor,
      prixDuProduit: item.price,
      nombreDeProduit: choixQantite,
    };
    console.log(itemProductss);

    ajoutProduitLocalStorage(itemProductss);
    popupConfirmation(itemProductss);
  });

  //-------------------------------------------------------------------//
};

const getItem = async (itemId) => {
  // const response = await fetch(`http://localhost:3000/api/products/${itemId}`);
  const response = await fetch('http://localhost:3000/api/products/' + itemId);
  const products = await response.json();
  return products;
};

const showItems = (item) => {
  let item2 = document.querySelector('.item__img');
  let title = document.querySelector('#title');

  let price = document.querySelector('#price');
  let img = document.createElement('img');
  let p = document.querySelector('#description');
  let colorsId = document.querySelector('#colors');

  item2.appendChild(img);

  title.innerHTML = item.name;
  price.innerHTML = item.price;
  img.src = item.imageUrl;
  p.innerHTML = item.description;

  for (const color of item.colors) {
    let option = document.createElement('option');
    // console.log(option);
    option.innerHTML = color;
    colorsId.appendChild(option);
  }
};

//-------------------------------------------------------------------//

//-------------------------------------------------------------------//

/****************************************/
/****************************************/
let dataLocalStorage;
mainFunction();

/****************************************/
/****************************************/

// const getId = new URL(document.location.href).searchParams.get('id');

// console.log(getId);

// let url = 'http://localhost:3000/api/products/' + getId;
// ///////////////////////////////
// let tab = fetch(url).then((res) => res.json());
// // console.log(tab);
// tab.then((productData) => console.log(productData));

// tab.then((productData) => {
//   let item = document.querySelector('.item__img');
//   let title = document.querySelector('#title');
//   let price = document.querySelector('#price');
//   let img = document.createElement('img');
//   let p = document.querySelector('#description');
//   let colorsId = document.querySelector('#colors');

//   item.appendChild(img);
//   title.innerHTML = productData.name;
//   price.innerHTML = productData.price;
//   img.src = productData.imageUrl;
//   p.innerHTML = productData.description;

//   for (const color of productData.colors) {
//     let option = document.createElement('option');
//     // console.log(option);
//     option.innerHTML = color;
//     colorsId.appendChild(option);
//   }
// });

// /****************************************/
// /****************************************/

// const btnDiv = document.querySelector('.item__content__addButton');
// const btnA = document.createElement('a');
// const btn = document.querySelector('button');
// btnDiv.appendChild(btnA);
// btnA.appendChild(btn);

// btn.addEventListener('click', () => {
//   btnA.href = './cart.html';
// });

/****************************************/
/****************************************/

// let firstTest = document.querySelector('.item__content__addButton');
// let testt = document.createElement('a');
// let button = document.querySelector('button');
// firstTest.appendChild(testt);
// testt.appendChild(button);
// console.log(testt);
// testt.href = './cart.html';

/////////////////////////////////////////////////
/////////////////////////////////////////////////:
/////////////////////////////////////////////

// for (let i = 0; i < productData.colors.length; i++) {
//   let color = document.createElement('option');
//   console.log(color);
//   color.innerText = productData.colors[i];

//   testColor.appendChild(color);
// }

///////////////////////////////
///////////////////////////////
