const products = [
  {
    id: 1,
    name: "Overwatch",
    productType: "FPS/ACCION",
    price: 960,
    rating: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg",
    description:
    "Overwatch es un juego en línea basado en equipos que generalmente se juega como un juego de disparos en primera persona . El juego presenta varios modos de juego diferentes, principalmente diseñados en torno al combate basado en escuadrones con dos equipos opuestos de seis jugadores cada uno. Los jugadores seleccionan uno de más de dos docenas de héroes prefabricados de uno de los tres tipos de clase: héroes de daño que infligen la mayor parte del daño para atacar o defender puntos de control, héroes de tanque que pueden absorber una gran cantidad de daño y héroes de apoyo que brindan curación u otros beneficios para sus compañeros de equipo. [a] Cada héroe tiene un kit de habilidades único, que define sus atributos intrínsecos, como puntos de salud .y la velocidad de carrera, sus ataques principales, varias habilidades activas y pasivas, y una habilidad máxima que solo se puede usar después de que se haya cargado infligiendo daño a los enemigos y curando a los aliados",
  },
  {
    id: 2,
    name: "The Witcher: Wild Hunt",
    productType: "AVENTURA/ARPG/ACCION",
    price: 1150,
    rating: 5,
    image:
      "https://www.giantbomb.com/a/uploads/scale_small/0/3699/2945734-the%20witcher%203%20-%20wild%20hunt.jpg",
    description:
    "Geralt de Rivia, quien recibe una carta de su amante Yennefer de Vengerberg diciendo que necesita localizarlo lo antes posible. Geralt, después de encontrar a su amante, aprende que Ciri, nieta de Calenthe y exalumna del mismo personaje, es buscada por La Cacería Salvaje, un grupo antiguo de espectros que están liderados por el Rey de La Cacería Salvaje. Tras varios sucesos que llevan al personaje principal a buscar a Ciri en la gran ciudad de Novigrado, en las Islas Skellige y en las tierras de Velen, Geralt, aprende que La Cacería Salvaje, busca una manera de que se cumpla la Profecía de Ithlinne, la cual dice que el universo será destruido por el Frío Blanco. Ciri, debido a que es hija de la sangre vieja, es la única que puede destruir esta profecía y salvar al mundo",
  },
  {
    id: 3,
    name: "Cup Head",
    productType: "RUN AND GUN",
    price: 550,
    rating: 3,
    image:
      "https://wtfever.tv/wp-content/uploads/2020/05/cuphead.jpg",
    description:
    " Cuphead y su hermano Mugman para luchar a través de varios niveles que culminan en peleas de jefes , con el fin de pagar su deuda con el Diablo ."  
  },
  {
    id: 4,
    name: "Bioshock: The Collection",
    productType: "FPS/ACCION/AVENTURA",
    price: 830,
    rating: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/e7/BioShock-_The_Collection.jpg",
    description:
    "BioShock: The Collection contiene los tres títulos de la serie BioShock : BioShock , BioShock 2 y BioShock Infinite.Los juegos son shooters en primera persona , con un enfoque en la historia y la personalización del personaje.Los jugadores manejan armas y modificaciones genéticas que otorgan superpoderes llamadas plásmidos.También se incluye en la colección el contenido para un jugador de los juegos lanzado originalmente como paquetes de contenido exclusivos o descargables , incluidos BioShock 2: Minerva's Den y BioShock Infinite: Burial at Sea.El componente multijugador de BioShock 2 no está incluido. Incluye los modos de juego de desafío de los tres lanzamientos y el Museo de conceptos huérfanos, una característica de una colección anterior en la que el jugador explora una galería en el juego de conceptos de desarrollo abandonados"
  },
  {
    id: 5,
    name: "FIFA 22",
    productType: "DEPORTES/FUTBOL",
    price: 1000,
    rating: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/6c/FIFA_22_Cover.jpg",
    description:
    "Al igual que con las entradas anteriores de FIFA , en FIFA 22 se presenta un *Modo Carrera* para un solo jugador , donde un jugador puede controlar un equipo completo o un jugador a lo largo de una carrera de 25 años como entrenador o jugador. FIFA 22 presenta una opción para crear un club en la carrera de entrenador, lo que permite a los jugadores diseñar un nuevo club con kits personalizados, escudo y estadio local. [8] El modo de carrera del jugador también introduce puntos de experiencia y *beneficios* que se pueden usar para mejorar las estadísticas del jugador."
  },
  {
    id: 6,
    name: "The Last of Us 2",
    productType: "ACCION/AVENTURA/TERROR",
    price: 1300,
    rating: 4,
    image:
      "https://i.pinimg.com/564x/c3/cb/3c/c3cb3c5b93bb4a61b44780f8a9ae00c4.jpg",
    description:
    " Ambientado cinco años después de The Last of Us, el juego se centra en dos personajes jugables en un Estados Unidos postapocalíptico cuyas vidas se entrelazan: Ellie , que busca venganza tras sufrir una tragedia, y Abby , una soldado que se ve envuelta en un conflicto entre su milicia y un culto religioso."
  },
  {
    id: 7,
    name: "God of War",
    productType: "ACCION/AVENTURA",
    price: 750,
    rating: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
    description:
    "Muchos años después de derrotar a los dioses olímpicos ,Kratos ahora vive con su hijo Atreus en el reino de Midgard. Después de incinerar el cuerpo de su esposa, Faye, Kratos se enfrenta a un extraño con poderes y fuerza divinos. Los dos pelean y Kratos aparentemente mata al extraño, después de lo cual Kratos y Atreus comienzan su viaje para honrar el último deseo de Faye: esparcir sus cenizas en el pico más alto de los nueve reinos."  
  },
  {
    id: 8,
    name: "Forza Horizon 5",
    productType: "DEPORTES/CARRERAS",
    price: 900,
    rating: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/86/Forza_Horizon_5_cover_art.jpg",
    description:
    "Forza Horizon 5 es un videojuego de carreras ambientado en un entorno de mundo abierto basado en una representación ficticia de México.Los jugadores pueden explorar el mundo abierto libremente, aunque también pueden competir en carreras multijugador y completar el modo campaña. Tanto los autos que aparecen en el juego como el personaje del jugador se pueden personalizar ampliamente.El juego es el primero de la franquicia en admitir el trazado de rayos en los automóviles."
  },
  
];

export default products;
