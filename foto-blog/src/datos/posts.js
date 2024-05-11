const imagenes = [
    "./imagenes/Autumn leaves_LIL_134164.jpg",
    "./imagenes/Beach with a building_LIL_134146.jpg",
    "./imagenes/Cat inside_LIL_134199.jpg",
    "./imagenes/Cat_LIL_134138.jpg",
    "./imagenes/Cattails_LIL_134136.jpg",
    "./imagenes/Coit Tower_LIL_9679.jpg",
    "./imagenes/Colorful paper rolls_LIL_134137.jpg",
    "./imagenes/Colorful sunset_LIL_134216.jpg",
    "./imagenes/Conservatory_LIL_9680.jpg",
    "./imagenes/Downtown from Twin Peaks_LIL_9681.jpg",
    "./imagenes/Flowering plant _LIL_134193.jpg",
    "./imagenes/Flowering plant_LIL_134187.jpg",
    "./imagenes/Flowering plant_LIL_134188.jpg",
    "./imagenes/Flowers_LIL_134177.jpg",
    "./imagenes/Forest_LIL_134133.jpg",
    "./imagenes/Golden Gate Bridge from Presidio_LIL_9682.jpg",
    "./imagenes/Joshua Tree and California coast_LIL_9664.jpg",
    "./imagenes/Joshua Tree and California coast_LIL_9670.jpg",
    "./imagenes/Logs_LIL_134130.jpg",
    "./imagenes/Point Reyes_ California_LIL_9672.jpg",
    "./imagenes/Stack of books_LIL_134182.jpg",
    "./imagenes/Sun over mountains_LIL_134158.jpg",
    "./imagenes/Sunset over water_LIL_134196.jpg",
];

export const POSTS = [
    {
        idPost: 1,
        usuario: {
            idUnico: 2,
            nombreUsuario: "mariagarcia456",
        },
        imagenUrl: "./imagenes/Autumn leaves_LIL_134164.jpg",
        descripcion: "Descripción del post 1",
        comentarios: [
            {
                idUnico: 10,
                nombreUsuario: "natyc",
                comentario: "Comentario 12"
            },
            {
                idUnico: 2,
                nombreUsuario: "mariagarcia456",
                comentario: "Comentario 20"
            }
        ],
        totalMeGusta: 56
    },
    {
        idPost: 2,
        usuario: {
            idUnico: 9,
            nombreUsuario: "sergiogutierrez22",
        },
        imagenUrl: "./imagenes/Beach with a building_LIL_134146.jpg",
        descripcion: "Descripción del post 2",
        comentarios: [
            {
                idUnico: 8,
                nombreUsuario: "carofernandez999",
                comentario: "Comentario 19"
            },
            {
                idUnico: 1,
                nombreUsuario: "juanperez123",
                comentario: "Comentario 10"
            },
            {
                idUnico: 2,
                nombreUsuario: "mariagarcia456",
                comentario: "Comentario 20"
            }
        ],
        totalMeGusta: 27
    },
    {
        idPost: 3,
        usuario: {
            idUnico: 7,
            nombreUsuario: "diegoperez55",
        },
        imagenUrl: "./imagenes/Cat inside_LIL_134199.jpg",
        descripcion: "Descripción del post 3",
        comentarios: [
            {
                idUnico: 8,
                nombreUsuario: "carofernandez999",
                comentario: "Comentario 19"
            },
            {
                idUnico: 1,
                nombreUsuario: "juanperez123",
                comentario: "Comentario 10"
            },
            {
                idUnico: 10,
                nombreUsuario: "natyc",
                comentario: "Comentario 12"
            },
        ],
        totalMeGusta: 99
    },
    {
        idPost: 4,
        usuario: {
            idUnico: 6,
            nombreUsuario: "laurasanchez888",
        },
        imagenUrl: "./imagenes/Cat_LIL_134138.jpg",
        descripcion: "Descripción del post 4",
        comentarios: [
            {
                idUnico: 8,
                nombreUsuario: "carofernandez999",
                comentario: "Comentario 19"
            },
            {
                idUnico: 1,
                nombreUsuario: "juanperez123",
                comentario: "Comentario 10"
            },
            {
                idUnico: 2,
                nombreUsuario: "mariagarcia456",
                comentario: "Comentario 20"
            }
        ],
        totalMeGusta: 81
    },
    {
        idPost: 5,
        usuario: {
            idUnico: 6,
            nombreUsuario: "carloslopez789",
        },
        imagenUrl: "./imagenes/Cattails_LIL_134136.jpg",
        descripcion: "Descripción del post 5",
        comentarios: [
            {
                idUnico: 8,
                nombreUsuario: "carofernandez999",
                comentario: "Comentario 19"
            },
            {
                idUnico: 1,
                nombreUsuario: "juanperez123",
                comentario: "Comentario 10"
            }
        ],
        totalMeGusta: 69
    },
    {
        idPost: 6,
        usuario: {
            idUnico: 2,
            nombreUsuario: "mariagarcia456",
        },
        imagenUrl: "./imagenes/Coit Tower_LIL_9679.jpg",
        descripcion: "Descripción del post 6",
        comentarios: [
            {
                idUnico: 8,
                nombreUsuario: "carofernandez999",
                comentario: "Comentario 19"
            },
            {
                idUnico: 1,
                nombreUsuario: "juanperez123",
                comentario: "Comentario 10"
            },
            {
                idUnico: 10,
                nombreUsuario: "natyc",
                comentario: "Comentario 12"
            },
            {
                idUnico: 2,
                nombreUsuario: "mariagarcia456",
                comentario: "Comentario 20"
            }
        ],
        totalMeGusta: 45
    },
    {
        idPost: 7,
        usuario: {
            idUnico: 2,
            nombreUsuario: "juanperez123",
        },
        imagenUrl: "./imagenes/Colorful paper rolls_LIL_134137.jpg",
        descripcion: "Descripción del post 7",
        comentarios: [
            {
                idUnico: 1,
                nombreUsuario: "juanperez123",
                comentario: "Comentario 10"
            },
            {
                idUnico: 10,
                nombreUsuario: "natyc",
                comentario: "Comentario 12"
            },
            {
                idUnico: 2,
                nombreUsuario: "mariagarcia456",
                comentario: "Comentario 20"
            }
        ],
        totalMeGusta: 14
    },
    {
        idPost: 8,
        usuario: {
            idUnico: 9,
            nombreUsuario: "sergiogutierrez22",
        },
        imagenUrl: "./imagenes/Colorful sunset_LIL_134216.jpg",
        descripcion: "Descripción del post 8",
        comentarios: [
            {
                idUnico: 2,
                nombreUsuario: "mariagarcia456",
                comentario: "Comentario 20"
            }
        ],
        totalMeGusta: 72
    },
    {
        idPost: 9,
        usuario: {
            idUnico: 8,
            nombreUsuario: "carofernandez999",
        },
        imagenUrl: "./imagenes/Conservatory_LIL_9680.jpg",
        descripcion: "Descripción del post 9",
        comentarios: [
            {
                idUnico: 1,
                nombreUsuario: "juanperez123",
                comentario: "Comentario 10"
            },
            {
                idUnico: 10,
                nombreUsuario: "natyc",
                comentario: "Comentario 12"
            },
            {
                idUnico: 2,
                nombreUsuario: "mariagarcia456",
                comentario: "Comentario 20"
            }
        ],
        totalMeGusta: 3
    },
    {
        idPost: 10,
        usuario: {
            idUnico: 10,
            nombreUsuario: "natyc",
        },
        imagenUrl: "./imagenes/Downtown from Twin Peaks_LIL_9681.jpg",
        descripcion: "Descripción del post 10",
        comentarios: [
            {
                idUnico: 8,
                nombreUsuario: "carofernandez999",
                comentario: "Comentario 19"
            },
            {
                idUnico: 2,
                nombreUsuario: "mariagarcia456",
                comentario: "Comentario 20"
            }
        ],
        totalMeGusta: 58
    },
    {
        idPost: 11,
        usuario: {
            idUnico: 10,
            nombreUsuario: "natyc",
        },
        imagenUrl: "./imagenes/Flowering plant _LIL_134193.jpg",
        descripcion: "Descripción del post 11",
        comentarios: [
            {
                idUnico: 8,
                nombreUsuario: "carofernandez999",
                comentario: "Comentario 19"
            },
            {
                idUnico: 1,
                nombreUsuario: "juanperez123",
                comentario: "Comentario 10"
            },
            {
                idUnico: 2,
                nombreUsuario: "mariagarcia456",
                comentario: "Comentario 20"
            }
        ],
        totalMeGusta: 2
    },
    {
        idPost: 12,
        usuario: {
            idUnico: 10,
            nombreUsuario: "natyc",
        },
        imagenUrl: "./imagenes/Flowering plant_LIL_134187.jpg",
        descripcion: "Descripción del post 12",
        comentarios: [
            {
                idUnico: 2,
                nombreUsuario: "mariagarcia456",
                comentario: "Comentario 20"
            }
        ],
        totalMeGusta: 61
    },
    {
        idPost: 13,
        usuario: {
            idUnico: 1,
            nombreUsuario: "juanperez123",
        },
        imagenUrl: "./imagenes/Flowering plant_LIL_134188.jpg",
        descripcion: "Descripción del post 13",
        comentarios: [
            {
                idUnico: 8,
                nombreUsuario: "carofernandez999",
                comentario: "Comentario 19"
            },
            {
                idUnico: 10,
                nombreUsuario: "natyc",
                comentario: "Comentario 12"
            },
            {
                idUnico: 2,
                nombreUsuario: "mariagarcia456",
                comentario: "Comentario 20"
            }
        ],
        totalMeGusta: 70
    },
    {
        idPost: 14,
        usuario: {
            idUnico: 4,
            nombreUsuario: "anamartinez10",
        },
        imagenUrl: "./imagenes/Flowers_LIL_134177.jpg",
        descripcion: "Descripción del post 14",
        comentarios: [
            {
                idUnico: 8,
                nombreUsuario: "carofernandez999",
                comentario: "Comentario 19"
            },
            {
                idUnico: 1,
                nombreUsuario: "juanperez123",
                comentario: "Comentario 10"
            },
            {
                idUnico: 10,
                nombreUsuario: "natyc",
                comentario: "Comentario 12"
            }
        ],
        totalMeGusta: 19
    },
    {
        idPost: 15,
        usuario: {
            idUnico: 7,
            nombreUsuario: "diegoperez55",
        },
        imagenUrl: "./imagenes/Forest_LIL_134133.jpg",
        descripcion: "Descripción del post 15",
        comentarios: [
            {
                idUnico: 8,
                nombreUsuario: "carofernandez999",
                comentario: "Comentario 19"
            },
            {
                idUnico: 1,
                nombreUsuario: "juanperez123",
                comentario: "Comentario 10"
            },
            {
                idUnico: 10,
                nombreUsuario: "natyc",
                comentario: "Comentario 12"
            },
            {
                idUnico: 2,
                nombreUsuario: "mariagarcia456",
                comentario: "Comentario 20"
            }
        ],
        totalMeGusta: 75
    },
    {
        idPost: 16,
        usuario: {
            idUnico: 6,
            nombreUsuario: "laurasanchez888",
        },
        imagenUrl: "./imagenes/Golden Gate Bridge from Presidio_LIL_9682.jpg",
        descripcion: "Descripción del post 16",
        comentarios: [
            {
                idUnico: 8,
                nombreUsuario: "carofernandez999",
                comentario: "Comentario 19"
            },
            {
                idUnico: 1,
                nombreUsuario: "juanperez123",
                comentario: "Comentario 10"
            },
            {
                idUnico: 10,
                nombreUsuario: "natyc",
                comentario: "Comentario 12"
            },
            {
                idUnico: 2,
                nombreUsuario: "mariagarcia456",
                comentario: "Comentario 20"
            },
            {
                idUnico: 5,
                nombreUsuario: "pedrorodriguez77",
                comentario: "Comentario 20"
            }
        ],
        totalMeGusta: 40
    },
    {
        idPost: 17,
        usuario: {
            idUnico: 3,
            nombreUsuario: "carloslopez789",
        },
        imagenUrl: "./imagenes/Joshua Tree and California coast_LIL_9664.jpg",
        descripcion: "Descripción del post 17",
        comentarios: [
            {
                idUnico: 8,
                nombreUsuario: "carofernandez999",
                comentario: "Comentario 19"
            },
            {
                idUnico: 10,
                nombreUsuario: "natyc",
                comentario: "Comentario 12"
            },
            {
                idUnico: 2,
                nombreUsuario: "mariagarcia456",
                comentario: "Comentario 20"
            }
        ],
        totalMeGusta: 89
    },
    {
        idPost: 18,
        usuario: {
            idUnico: 4,
            nombreUsuario: "anamartinez10",
        },
        imagenUrl: "./imagenes/Joshua Tree and California coast_LIL_9670.jpg",
        descripcion: "Descripción del post 18",
        comentarios: [
            {
                idUnico: 8,
                nombreUsuario: "carofernandez999",
                comentario: "Comentario 19"
            },
            {
                idUnico: 1,
                nombreUsuario: "juanperez123",
                comentario: "Comentario 10"
            },
            {
                idUnico: 10,
                nombreUsuario: "natyc",
                comentario: "Comentario 12"
            }
        ],
        totalMeGusta: 66
    },
    {
        idPost: 19,
        usuario: {
            idUnico: 8,
            nombreUsuario: "carofernandez999",
        },
        imagenUrl: "./imagenes/Logs_LIL_134130.jpg",
        descripcion: "Descripción del post 19",
        comentarios: [
            {
                idUnico: 8,
                nombreUsuario: "carofernandez999",
                comentario: "Comentario 19"
            },
            {
                idUnico: 1,
                nombreUsuario: "juanperez123",
                comentario: "Comentario 10"
            },
            {
                idUnico: 10,
                nombreUsuario: "natyc",
                comentario: "Comentario 12"
            },
            {
                idUnico: 2,
                nombreUsuario: "mariagarcia456",
                comentario: "Comentario 20"
            }
        ],
        totalMeGusta: 95
    },
    {
        idPost: 20,
        usuario: {
            idUnico: 10,
            nombreUsuario: "natyc",
        },
        imagenUrl: "./imagenes/Point Reyes_ California_LIL_9672.jpg",
        descripcion: "Descripción del post 20",
        comentarios: [
            {
                idUnico: 8,
                nombreUsuario: "carofernandez999",
                comentario: "Comentario 19"
            },
            {
                idUnico: 1,
                nombreUsuario: "juanperez123",
                comentario: "Comentario 10"
            },
            {
                idUnico: 10,
                nombreUsuario: "natyc",
                comentario: "Comentario 12"
            },
            {
                idUnico: 2,
                nombreUsuario: "mariagarcia456",
                comentario: "Comentario 20"
            }
        ],
        totalMeGusta: 48
    },
    {
        idPost: 21,
        usuario: {
            idUnico: 7,
            nombreUsuario: "diegoperez55",
        },
        imagenUrl: "./imagenes/Stack of books_LIL_134182.jpg",
        descripcion: "Descripción del post 21",
        comentarios: [
            {
                idUnico: 8,
                nombreUsuario: "carofernandez999",
                comentario: "Comentario 19"
            },
            {
                idUnico: 1,
                nombreUsuario: "juanperez123",
                comentario: "Comentario 10"
            },
            {
                idUnico: 1,
                nombreUsuario: "juanperez123",
                comentario: "Comentario 11"
            },
            {
                idUnico: 10,
                nombreUsuario: "natyc",
                comentario: "Comentario 12"
            },
            {
                idUnico: 2,
                nombreUsuario: "mariagarcia456",
                comentario: "Comentario 20"
            }
        ],
        totalMeGusta: 30
    },
    {
        idPost: 22,
        usuario: {
            idUnico: 6,
            nombreUsuario: "laurasanchez888",
        },
        imagenUrl: "./imagenes/Sun over mountains_LIL_134158.jpg",
        descripcion: "Descripción del post 22",
        comentarios: [
            {
                idUnico: 8,
                nombreUsuario: "carofernandez999",
                comentario: "Comentario 19"
            },
            {
                idUnico: 1,
                nombreUsuario: "juanperez123",
                comentario: "Comentario 10"
            },
            {
                idUnico: 10,
                nombreUsuario: "natyc",
                comentario: "Comentario 12"
            },
            {
                idUnico: 2,
                nombreUsuario: "mariagarcia456",
                comentario: "Comentario 20"
            }
        ],
        totalMeGusta: 22
    },
    {
        idPost: 23,
        usuario: {
            idUnico: 1,
            nombreUsuario: "juanperez123",
        },
        imagenUrl: "./imagenes/Sunset over water_LIL_134196.jpg",
        descripcion: "Descripción del post 23",
        comentarios: [
            {
                idUnico: 8,
                nombreUsuario: "carofernandez999",
                comentario: "Comentario 19"
            },
            {
                idUnico: 1,
                nombreUsuario: "juanperez123",
                comentario: "Comentario 10"
            },
            {
                idUnico: 10,
                nombreUsuario: "natyc",
                comentario: "Comentario 12"
            },
            {
                idUnico: 2,
                nombreUsuario: "mariagarcia456",
                comentario: "Comentario 20"
            },
            {
                idUnico: 10,
                nombreUsuario: "mariagarcia456",
                comentario: "Comentario 22"
            },
            {
                idUnico: 2,
                nombreUsuario: "natyc",
                comentario: "Comentario 23"
            }
        ],
        totalMeGusta: 82
    }
];
