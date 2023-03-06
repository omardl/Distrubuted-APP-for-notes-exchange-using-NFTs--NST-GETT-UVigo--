# Proyecto de la asignatura Nuevos Servicios Telemáticos del GETT de la Universidad de Vigo

Creación de una aplicación distribuída usando Angular y NodeJS para frontend y backend, respectivamente.

Dicha aplicación tiene como objetivo la compra de una serie de documentos (libros, papers, apuntes, etc) mediante NFTs a través de la blockchain de Ethereum. Con el objetivo de la demostración dentro de la asignatura se realizaron las pruebas exclusivamente sobre apuntes de la misma.

El usuario puede, accediendo a su monedero MetaMask, visualizar una serie de NFTs disponibles subidos por otros usuarios que serán imágenes que contengan el índice o un breve resumen del contenido del documento en cuestión. Si el usuario tiene interés, podra realizar la compra y descarga de dicho documento (el NFT no puede comprarlo y es propiedad del autor/creador de dicho documento) que está almacenado en una base de datos externa (MongoDB en éste caso). 
El usuario también puede crear su propio contenido indicando el documento y la imágen a usar (habíendola subido previamente a IPFS e indicando su hash) para la cración del NFT (que se hará automáticamente a través de la aplicación) así como una descripción apropiada del mismo. Se aplicará la misma tarifa de compra para todos los documentos.

Para las pruebas de funcionamiento no se ha usado propiamente la blockchain principal de Ethereum, si no una secundaria que disponen para que los usuarios puedan realizar pruebas antes de implicar ningún proyecto en la principal. Dicha blockchain secundaria también permite al usuario disponer de forma ilimitada de criptomoneda para realizar las pruebas que considere pertinentes. 

Se ha creado a su vez un smart contract mediante Solidity para poder realizar las transacciones necesarias.

