const arrayIndices = [
    { ano: 1994, indice: [0.65, 1.29, 1.28, 0.47, 0.05, 0.07, 0.74, 0.55, 0.39, 0.96, 0.94, 0.74] },
    { ano: 1995, indice: [1.44, 1.01, 1.62, 2.49, 2.1, 2.18, 2.46, 1.02, 1.17, 1.4, 1.51, 1.65] },
    { ano: 1996, indice: [1.46, 0.71, 0.29, 0.93, 1.28, 1.33, 1.2, 0.5, 0.02, 0.38, 0.34, 0.33] },
    { ano: 1997, indice: [0.81, 0.45, 0.68, 0.6, 0.11, 0.35, 0.18, -0.03, 0.1, 0.29, 0.15, 0.57] },
    { ano: 1998, indice: [0.85, 0.54, 0.49, 0.45, 0.72, 0.15, -0.28, -0.49, -0.31, 0.11, -0.18, 0.42] },
    { ano: 1999, indice: [0.65, 1.29, 1.28, 0.47, 0.05, 0.07, 0.74, 0.55, 0.39, 0.96, 0.94, 0.74] },
    { ano: 2000, indice: [0.61, 0.05, 0.13, 0.09, -0.05, 0.3, 1.39, 1.21, 0.43, 0.16, 0.29, 0.55] },
    { ano: 2001, indice: [0.77, 0.49, 0.48, 0.84, 0.57, 0.6, 1.11, 0.79, 0.44, 0.94, 1.29, 0.74] },
    { ano: 2002, indice: [1.07, 0.31, 0.62, 0.68, 0.09, 0.61, 1.15, 0.86, 0.83, 1.57, 3.39, 2.7] },
    { ano: 2003, indice: [2.47, 1.46, 1.37, 1.38, 0.99, -0.06, 0.04, 0.18, 0.82, 0.39, 0.37, 0.54] },
    { ano: 2004, indice: [0.83, 0.39, 0.57, 0.41, 0.4, 0.5, 0.73, 0.5, 0.17, 0.17, 0.44, 0.86] },
    { ano: 2005, indice: [0.57, 0.44, 0.73, 0.91, 0.7, -0.11, 0.03, 0.0, 0.15, 0.58, 0.54, 0.4] },
    { ano: 2006, indice: [0.38, 0.23, 0.27, 0.12, 0.13, -0.07, 0.11, -0.02, 0.16, 0.43, 0.42, 0.62] },
    { ano: 2007, indice: [0.49, 0.42, 0.44, 0.26, 0.26, 0.31, 0.32, 0.59, 0.25, 0.3, 0.43, 0.97] },
    { ano: 2008, indice: [0.69, 0.48, 0.51, 0.64, 0.96, 0.91, 0.58, 0.21, 0.15, 0.5, 0.38, 0.29] },
    { ano: 2009, indice: [0.64, 0.31, 0.2, 0.55, 0.6, 0.42, 0.23, 0.08, 0.16, 0.24, 0.37, 0.24] },
    { ano: 2010, indice: [0.88, 0.7, 0.71, 0.73, 0.43, -0.11, -0.07, -0.07, 0.54, 0.92, 1.03, 0.6] },
    { ano: 2011, indice: [0.94, 0.54, 0.66, 0.72, 0.57, 0.22, 0.0, 0.42, 0.45, 0.32, 0.57, 0.51] },
    { ano: 2012, indice: [0.51, 0.39, 0.18, 0.64, 0.55, 0.26, 0.43, 0.45, 0.63, 0.71, 0.54, 0.74] },
    { ano: 2013, indice: [0.92, 0.52, 0.6, 0.59, 0.35, 0.28, -0.13, 0.16, 0.27, 0.61, 0.54, 0.72] },
    { ano: 2014, indice: [0.63, 0.64, 0.82, 0.78, 0.6, 0.26, 0.13, 0.18, 0.49, 0.38, 0.53, 0.62] },
    { ano: 2015, indice: [1.48, 1.16, 1.51, 0.71, 0.99, 0.77, 0.58, 0.25, 0.51, 0.77, 1.11, 0.9] },
    { ano: 2016, indice: [1.51, 0.95, 0.44, 0.64, 0.98, 0.47, 0.64, 0.31, 0.08, 0.17, 0.07, 0.14] },
    { ano: 2017, indice: [0.42, 0.24, 0.32, 0.08, 0.36, -0.3, 0.17, -0.03, -0.02, 0.37, 0.18, 0.26] },
    { ano: 2018, indice: [0.23, 0.18, 0.07, 0.21, 0.43, 1.43, 0.25, 0.0, 0.3, 0.4, -0.25, 0.14] },
    { ano: 2019, indice: [0.36, 0.54, 0.77, 0.6, 0.15, 0.01, 0.1, 0.12, -0.05, 0.04, 0.54, 1.22] },
    { ano: 2020, indice: [0.19, 0.17, 0.18, -0.23, -0.25, 0.3, 0.44, 0.36, 0.87, 0.89, 0.95, 1.46] },
    { ano: 2021, indice: [0.27, 0.82, 0.86, 0.38, 0.96, 0.6, 1.02, 0.88, 1.2, 1.16, 0.84, 0.73] },
    { ano: 2022, indice: [0.67, 1.0, 1.71, 1.04, 0.45, 0.62] },
];

export { arrayIndices };
