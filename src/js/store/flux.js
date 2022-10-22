const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      planets: [],
      characters: [],
      characterIndividual: [],
      planetIndividual: [],
      imgPersonas: [
        {
          url: "https://i.pinimg.com/originals/a1/93/e9/a193e9ec775e428f2ed2aabead1bed65.gif",
          /* https://i2.wp.com/www.lafosadelrancor.com/wp-content/uploads/2021/02/luke-retorno-de-jedi-lista-cortada_widelg.jpg?resize=678%2C381&ssl=1 */
        },
        {
          url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ojos-rojos-c3po-star-wars-1566913065.jpg",
        },
        {
          url: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/08/r2-d2.jpg",
        },
        {
          url: "https://i0.wp.com/hipertextual.com/wp-content/uploads/2020/01/hipertextual-star-wars-deseo-mas-grande-darth-vader-podria-hacerse-realidad-muy-pronto-2020659163.jpg?,fit=2048%2C1365&ssl=1",
        },
        { url: "https://wallpapercave.com/wp/wp3210147.jpg" },
        {
          url: "https://cdn.lanetaneta.com/wp-content/uploads/2020/07/Star-Wars-Por-que-Owen-Lars-no-reconocio-a-C-3PO-780x470.jpg",
        },
        {
          url: "https://64.media.tumblr.com/3bdf1888fce8995109dcc1ab7e5bdef2/tumblr_p239cvnYP91uvgw2oo3_250.gifv",
          /* http://1.bp.blogspot.com/_wIW55V-xC00/Sy_eNc3mGfI/AAAAAAAACts/xXvuorug67g/s280/beru+joven+2.jpg */
        },
        {
          url: "https://cdnb.artstation.com/p/assets/images/images/001/727/465/large/paul-beards-r5-d4-final-preview-01.jpg?1451853235",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C780",
        },
        {
          url: "https://i0.wp.com/hipertextual.com/wp-content/uploads/2019/08/hipertextual-se-confirma-serie-obi-wan-kenobi-con-ewan-mcgregor-disney-2019892534-scaled.jpg?fit=2560%2C1707&ssl=1",
        },
      ],
      imgPlanetas: [
        {
          url: "https://img.unocero.com/2020/01/nasa-descubre-planeta-tatooine.jpg",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/databank_alderaan_01_169_4a5264e2.jpeg?region=0%2C0%2C1560%2C878&width=960",
        },
        { url: "https://wallpapercave.com/wp/wp8343626.jpg" },
        {
          url: "https://pm1.narvii.com/6592/17fa9c214dad4ac1671fb301286aa9095e3a5dab_hq.jpg",
        },
        {
          url: "https://cdna.artstation.com/p/assets/images/images/001/600/036/large/frederic-bec-dagobah-mangrove-tree-rhyzophora-3d-star-wars-c4d-max-obj-3ds-image-3.jpg?1449247099",
        },
        {
          url: "https://static3.srcdn.com/wordpress/wp-content/uploads/2020/02/Bespin-Feature-Image-1.jpg",
        },
        {
          url: "https://media.contentapi.ea.com/content/dam/walrus/common/swbf2-grid-tile-exploring-endor-16x9.jpg.adapt.crop191x100.628p.jpg",
        },
        {
          url: "https://i.pinimg.com/originals/37/ec/a8/37eca882093f8fb17c9d03cbe28dbbdd.jpg",
        },
        {
          url: "https://i.pinimg.com/originals/5d/d7/12/5dd7125a673297c84b88fc526d5b515e.jpg",
        },
        {
          url: "https://pm1.narvii.com/6594/9a9044c1ef56788efcbe4b4015043a306b49ece6_hq.jpg",
        },
      ],
      favoritos: [{ name: "" }],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        fetch(process.env.BACKEND_URL +"/characters")
          .then((resp) => resp.json())
          .then((resp) => setStore({ characters: resp }))
          .catch((err) => console.error(err));

        fetch(process.env.BACKEND_URL +"/planets")
          .then((resp) => resp.json())
          .then((resp) => setStore({ planets: resp }))
          .catch((err) => console.error(err));
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      setFavorito: elementoNuevo => {
				setStore({ favoritos: elementoNuevo});
        console.log("Los favoritos son",elementoNuevo);
      
			},
      
      BorrarIdElement: idelement => {
				const store = getStore();
				let newArray = [];
				store.favoritos.filter(function(element, i) {
					if (i !== idelement) {
						newArray.push(element);
					}
				});
				setStore({ favoritos: newArray });
			},
      informacionIndividualPeople: (id) => {
        fetch(process.env.BACKEND_URL +"/characters/" + id)
          .then((resp) => resp.json())
          .then((resp) =>
            setStore({ characterIndividual: resp })
          )
          .catch((err) => console.error(err));
      },
      informacionIndividualPlanet: (id) => {
        fetch(process.env.BACKEND_URL +"/planets/" + id)
          .then((resp) => resp.json())
          .then((resp) =>
            setStore({ planetIndividual: resp })
          )
          .catch((err) => console.error(err));
      },
    },
  };
};

export default getState;
