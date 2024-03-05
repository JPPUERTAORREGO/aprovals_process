// import React from 'react'

// export const DataContext = () => {
//     return (
//         <div>DataContext</div>
//     )
// }


import React from 'react';

// Creamos el Context con datos iniciales vacíos
const DataContext = React.createContext({
    data: [],
    setData: () => {},
});

export default DataContext;
