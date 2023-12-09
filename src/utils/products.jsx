const productos = [
    //placas de video
    {
        id: 1,
        title: "Placa De Video ASUS Rog Strix 3070ti",
        description: "Los bloques de construcción para la GPU más rápida y eficiente del mundo, el nuevo Ampere SM ofrece el doble de rendimiento FP32 y una eficiencia energética mejorada. Experimenta el doble de rendimiento que los RT Cores de primera generación, además de RT y sombreado simultáneos para un nivel completamente nuevo de rendimiento de trazado de rayos.",
        stock: 7,
        type: "placa de video",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_644879-MLA48656467017_122021-O.webp",
            secondImage: "https://media.ldlc.com/r1600/ld/products/00/05/74/25/LD0005742587_1_0005869333.jpg"
        },
        price: 560000,
    },

    {
        id: 2,
        title: "Placa De Video MSI rtx 3050",
        description: "La última versión de la icónica serie GAMING de MSI ofrece una vez más el rendimiento, la eficiencia con bajo nivel de ruido y la estética que los jugadores incondicionales reconocen y confían. Ahora usted también puede disfrutar de todos sus juegos favoritos con una potente tarjeta gráfica que se mantiene fría y silenciosa. Justo como te gusta.",
        stock: 17,
        type: "placa de video",
        imageProduct: {
            firtsImage: "https://front.dev.malditohard.com.ar/img/migration/PLACA-DE-VIDEO-RTX-3050-ASUS-ROG-STRIX-OC-8GB.webp",
            secondImage: "https://front.dev.malditohard.com.ar/img/migration/PLACA-DE-VIDEO-RTX-3050-ASUS-ROG-STRIX-OC-8GB.webp"
        },
        price: 200000,
    },

    {
        id: 3,
        title: "Placa De Video Nvidia Asus TUF RTX 3080",
        description: "Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero",
        stock: 29,
        type: "placa de video",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_781239-MLA48656710911_122021-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_859399-MLA49924537069_052022-O.webp"
        },
        price: 600700,
    },
    {
        id: 4,
        title: "Placa De Video Nvidia Asus TUF RTX 3090",
        description: "Nvidia se destaca como el principal fabricante de tarjetas gráficas, garantizando una experiencia óptima en el rendimiento del motor gráfico de tu computadora. Sus productos de alta calidad incorporan tecnología de vanguardia, proporcionando procesadores veloces y duraderos para que puedas disfrutar al máximo de tus experiencias visuales",
        stock: 29,
        type: "placa de video",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_781239-MLA48656710911_122021-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_859399-MLA49924537069_052022-O.webp"
        },
        price: 360700,
    },

    //procesadores
    {
        id: 5,
        title: "Procesador AMD Ryzen™ 7 5700G",
        description: "Bienvenido a la nueva era del rendimiento. La serie AMD Ryzen 7000 saca a relucir la velocidad descomunal de “Zen 4” y su potencia pura para que los jugadores y creadores puedan procesar cualquier juego o flujo de trabajo que se cruce en su camino. Los procesadores de PC más avanzados del mundo1 para jugadores y creadores amplían el liderazgo de rendimiento de AMD para potenciar tu PC.",
        stock: 17,
        type: "procesador",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_940934-MLU47593217192_092021-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_642030-MLU47593199220_092021-O.webp"
        },
        price: 69000,      
    },

    {
        id: 6,
        title: "Procesador AMD Ryzen™ 7 5300G",
        description: "Ingresa a la era del rendimiento de vanguardia! La serie AMD Ryzen 7000 exhibe la extraordinaria velocidad de Zen 4 y su poderío puro, permitiendo a jugadores y creadores procesar sin problemas cualquier juego o flujo de trabajo que se les presente. Estos procesadores de PC, líderes en el mundo, ofrecen a jugadores y creadores la ampliación del liderazgo en rendimiento de AMD, potenciando al máximo el rendimiento de tu PC.",
        stock: 5,
        type: "procesador",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_940934-MLU47593217192_092021-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_642030-MLU47593199220_092021-O.webp"
        },
        price: 32000,      
    },

    {
        id: 7,
        title: "Procesador Intel Core i7-10700",
        description: "Productividad y entretenimiento, todo disponible en tu computadora de escritorio. La superioridad tecnológica de INTEL es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos. En este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo.",
        stock: 20,
        type: "procesador",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_729444-MLA42903822558_072020-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_970575-MLA42767646612_072020-O.webp"
        },
        price: 700000,      
    },

    //mother
    {
        id: 8,
        title: "Motherboard Asus Rog Strix B550-f",
        description: "Las tarjetas madre de la serie ROG Strix B550 Gaming ofrecen buena parte de las características que puedes encontrar en la serie de gama alta ROG Strix X570 Gaming, como por ejemplo PCIe® 4.0. Con un suministro de energía potente y una refrigeración eficaz, la serie ROG Strix B550 Gaming está optimizada para las CPU AMD Ryzen™ de 3.ª Gen. Con una estética futurista y el intuitivo software ROG, la ROG Strix B550-F Gaming (Wi-Fi) es la plataforma ideal para montar el equipo de tus sueños.",
        stock: 15,
        type: "placa madre",
        imageProduct: {
            firtsImage: "https://mexx-img-2019.s3.amazonaws.com/Motherboard-Am4-Asus-Rog-Strix-B550-F-GAMING-WIFI-II_43255_1.jpeg",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_985217-MLA43783495710_102020-W.jpg"
        },
        price: 540900,      
    },

    {
        id: 9,
        title: "Motherboard Asus Rog Strix B300-f",
        description: "Las tarjetas madre de la serie ROG Strix B300-f Gaming ofrecen buena parte de las características que puedes encontrar en la serie de gama alta ROG Strix X570 Gaming, como por ejemplo PCIe® 4.0. Con un suministro de energía potente y una refrigeración eficaz, la serie ROG Strix B550 Gaming está optimizada para las CPU AMD Ryzen™ de 3.ª Gen. Con una estética futurista y el intuitivo software ROG, la ROG Strix B300-F Gaming (Wi-Fi) es la plataforma ideal para montar el equipo de tus sueños.",
        stock: 5,
        type: "placa madre",
        imageProduct: {
            firtsImage: "https://mexx-img-2019.s3.amazonaws.com/Motherboard-Am4-Asus-Rog-Strix-B550-F-GAMING-WIFI-II_43255_1.jpeg",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_985217-MLA43783495710_102020-W.jpg"
        },
        price: 690070,      
    },

    {
        id: 10,
        title: "Motherboard Gigabyte Ga B550 Aorus Elite",
        description: "Placa base AMD B550 AORUS con diseño digital de energía doble de 12 + 2 fases, disipadores de calor de superficie agrandados, PCIe dual 4.0 / 3.0 x4 M.2 con protectores térmicos duales, Intel® WiFi 6802.11ax, LAN de 2.5GbE, USB frontal Type-C ™, RGB FUSION 2.0, Q-Flash Plus",
        stock: 11,
        type: "placa madre",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_836693-MLA45005140103_022021-O.webp"
        },
        price: 545000,      
    },

    //fuentes
    {
        id: 11,
        title: "Fuente de alimentación para PC Corsair",
        description: "Con la fuente de alimentación Corsair RM750x podrás asegurar la corriente continua y estable de tu computadora de escritorio y optimizar el funcionamiento de sus componentes. A través de su sistema de refrigeración, podrás mantener la temperatura ideal de sus componentes y evitar su sobrecalentamiento. ",
        stock: 17,
        type: "fuente",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_896876-MLA45978614530_052021-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_789796-MLA45978850170_052021-O.webp"
        },
        price: 200000,      
    },

    {
        id: 12,
        title: "Fuente de alimentación para PC Corsair RM500",
        description: "Con la fuente de alimentación Corsair RM500 podrás asegurar la corriente continua y estable de tu computadora de escritorio y optimizar el funcionamiento de sus componentes. A través de su sistema de refrigeración, podrás mantener la temperatura ideal de sus componentes y evitar su sobrecalentamiento. ",
        stock: 52,
        type: "fuente",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_896876-MLA45978614530_052021-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_789796-MLA45978850170_052021-O.webp"
        },
        price: 70000,      
    },

    {
        id: 13,
        title: "Fuente de alimentación para PC Giga-Byte",
        description: "Con la fuente de alimentación Corsair RM750x podrás asegurar la corriente continua y estable de tu computadora de escritorio y optimizar el funcionamiento de sus componentes. A través de su sistema de refrigeración, podrás mantener la temperatura ideal de sus componentes y evitar su sobrecalentamiento.",
        stock: 20,
        type: "fuente",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_839855-MLA45653444301_042021-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_980467-MLA45653376464_042021-O.webp"
        },
        price: 130200,      
    },

    {
        id: 14,
        title: "Fuente de alimentación para PC XPG",
        description:"Con la fuente de alimentación XPG 850 podrás asegurar la corriente continua y estable de tu computadora de escritorio y optimizar el funcionamiento de sus componentes. Además, con su potencia de 850 W tendrás la energía suficiente para jugar y mirar tus series y videos favoritos por horas con un alto rendimiento",
        stock: 3,
        type: "fuente",
        imageProduct: {
            firtsImage: "https://http2.mlstatic.com/D_NQ_NP_891364-MLA45686629945_042021-O.webp",
            secondImage: "https://http2.mlstatic.com/D_NQ_NP_952421-MLA45686583993_042021-O.webp"
        },
        price: 153000,      
    },
]

export default productos;
