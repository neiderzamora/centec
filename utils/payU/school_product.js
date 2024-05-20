const pension = {
  pensionCLEI1: {
    price: 170000,
  },
  pensionCLEI3: {
    price: 240000,
  },
  pensionCLEI4: {
    price: 240000,
  },
  pensionCLEI5: {
    price: 300000,
  },
  pensionCLEI6: {
    price: 300000,
  },
};

export const SCHOOL_PRODUCT = {
  id: "school_products",
  type: "Colegio",
  items: [
    {
      name: "Básica primaria: grados 1, 2 y 3 (CLEI 1), grados 4 y 5 (CLEI 2)",
      reference: "COLEGIO_BASICA_PRIMARIA_CLEI1-CLEI2",
      price: 1880000,
      financing: [
        {
          name: "Matricula",
          price: 180000,
        },
        {
          name: "CLEI 1, CLEI 2 - Mes 1",
          price: pension.pensionCLEI1.price,
        },
        {
          name: "CLEI 1, CLEI 2 - Mes 2",
          price: pension.pensionCLEI1.price,
        },
        {
          name: "CLEI 1, CLEI 2 - Mes 3",
          price: pension.pensionCLEI1.price,
        },
        {
          name: "CLEI 1, CLEI 2 - Mes 4",
          price: pension.pensionCLEI1.price,
        },
        {
          name: "CLEI 1, CLEI 2 - Mes 5",
          price: pension.pensionCLEI1.price,
        },
        {
          name: "CLEI 1, CLEI 2 - Mes 6",
          price: pension.pensionCLEI1.price,
        },
        {
          name: "CLEI 1, CLEI 2 - Mes 7",
          price: pension.pensionCLEI1.price,
        },
        {
          name: "CLEI 1, CLEI 2 - Mes 8",
          price: pension.pensionCLEI1.price,
        },
        {
          name: "CLEI 1, CLEI 2 - Mes 9",
          price: pension.pensionCLEI1.price,
        },
        {
          name: "CLEI 1, CLEI 2 - Mes 10",
          price: pension.pensionCLEI1.price,
        },
      ],
    },
    {
      name: "Básica secundaria: grados 6 y 7 (CLEI 3)",
      reference: "COLEGIO_BASICA_SECUNDARIA_CLEI3",
      price: 2680000,
      financing: [
        {
          name: "Matricula",
          price: 280000,
        },
        {
          name: "CLEI 3 - Mes 1",
          price: pension.pensionCLEI3.price,
        },
        {
          name: "CLEI 3 - Mes 2",
          price: pension.pensionCLEI3.price,
        },
        {
          name: "CLEI 3 - Mes 3",
          price: pension.pensionCLEI3.price,
        },
        {
          name: "CLEI 3 - Mes 4",
          price: pension.pensionCLEI3.price,
        },
        {
          name: "CLEI 3 - Mes 5",
          price: pension.pensionCLEI3.price,
        },
        {
          name: "CLEI 3 - Mes 6",
          price: pension.pensionCLEI3.price,
        },
        {
          name: "CLEI 3 - Mes 7",
          price: pension.pensionCLEI3.price,
        },
        {
          name: "CLEI 3 - Mes 8",
          price: pension.pensionCLEI3.price,
        },
        {
          name: "CLEI 3 - Mes 9",
          price: pension.pensionCLEI3.price,
        },
        {
          name: "CLEI 3 - Mes 10",
          price: pension.pensionCLEI3.price,
        },
      ],
    },
    {
      name: "Básica secundaria: grados 8 y 9 (CLEI 4)",
      reference: "COLEGIO_BASICA_SECUNDARIA_CLEI4",
      price: 2680000,
      financing: [
        {
          name: "Matricula",
          price: 280000,
        },
        {
          name: "CLEI 4 - Mes 1",
          price: pension.pensionCLEI4.price,
        },
        {
          name: "CLEI 4 - Mes 2",
          price: pension.pensionCLEI4.price,
        },
        {
          name: "CLEI 4 - Mes 3",
          price: pension.pensionCLEI4.price,
        },
        {
          name: "CLEI 4 - Mes 4",
          price: pension.pensionCLEI4.price,
        },
        {
          name: "CLEI 4 - Mes 5",
          price: pension.pensionCLEI4.price,
        },
        {
          name: "CLEI 4 - Mes 6",
          price: pension.pensionCLEI4.price,
        },
        {
          name: "CLEI 4 - Mes 7",
          price: pension.pensionCLEI4.price,
        },
        {
          name: "CLEI 4 - Mes 8",
          price: pension.pensionCLEI4.price,
        },
        {
          name: "CLEI 4 - Mes 9",
          price: pension.pensionCLEI4.price,
        },
        {
          name: "CLEI 4 - Mes 10",
          price: pension.pensionCLEI4.price,
        },
      ],
    },
    {
      name: "Media: grado 10 (CLEI 5)",
      reference: "COLEGIO_MEDIA_CLEI5",
      price: 1880000,
      financing: [
        {
          name: "Matricula",
          price: 380000,
        },
        {
          name: "CLEI 5 - Mes 1",
          price: pension.pensionCLEI5.price,
        },
        {
          name: "CLEI 5 - Mes 2",
          price: pension.pensionCLEI5.price,
        },
        {
          name: "CLEI 5 - Mes 3",
          price: pension.pensionCLEI5.price,
        },
        {
          name: "CLEI 5 - Mes 4",
          price: pension.pensionCLEI5.price,
        },
        {
          name: "CLEI 5 - Mes 5",
          price: pension.pensionCLEI5.price,
        },
      ],
    },
    {
      name: "Media: grado 11 (CLEI 6)",
      reference: "COLEGIO_MEDIA_CLEI6",
      price: 1880000,
      financing: [
        {
          name: "Matricula",
          price: 380000,
        },
        {
          name: "CLEI 6 - Mes 1",
          price: pension.pensionCLEI6.price,
        },
        {
          name: "CLEI 6 - Mes 2",
          price: pension.pensionCLEI6.price,
        },
        {
          name: "CLEI 6 - Mes 3",
          price: pension.pensionCLEI6.price,
        },
        {
          name: "CLEI 6 - Mes 4",
          price: pension.pensionCLEI6.price,
        },
        {
          name: "CLEI 6 - Mes 5",
          price: pension.pensionCLEI6.price,
        },
      ],
    },
    {
      name: "Inscripciones",
      reference: "INSCRIPCION",
      financing: [
        {
          name: "Inscripciones",
          price: 30000,
        },
      ],
      price: 30000,
    },
    {
      name: "Seguro Estudiantil",
      reference: "SEGURO_ESTUDIANTIL",
      financing: [
        {
          name: "Seguro Estudiantil",
          price: 20000,
        },
      ],
      price: 20000,
    },
    {
      name: "Carnét",
      reference: "CARNET",
      financing: [
        {
          name: "Carnét",
          price: 10000,
        },
      ],
      price: 10000,
    },
    {
      name: "Actividades Complementarias",
      reference: "ACTIVIDADES_COMPLEMENTARIAS",
      financing: [
        {
          name: "Actividades Complementarias",
          price: 30000,
        },
      ],
      price: 30000,
    },
    {
      name: "Certificados",
      reference: "CERTIFICADOS",
      financing: [
        {
          name: "Certificados",
          price: 20000,
        },
      ],
      price: 20000,
    },
    {
      name: "Modulos",
      reference: "MODULOS",
      financing: [
        {
          name: "Modulos",
          price: 50000,
        },
      ],
      price: 50000,
    },
  ],
};
