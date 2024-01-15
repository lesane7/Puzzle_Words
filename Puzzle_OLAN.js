// Declarar de la función para encontrar palabras en el rompecabezas
function findWords(wordList, puzzle) {
// Inicializar un array para almacenar las palabras encontradas
    const foundWords = [];
// Inicializar una variable para almacenar las palabras no encontradas
    const notFoundWords = new Set(wordList);
 // Convertir la cadena del rompecabezas en una matriz de 2D  
    const puzzleMatrix = puzzle.split('\n').map(row => row.split(','));
// Definir las direcciones en las que se realizará la búsqueda de palabras    
    const directions = [[0, 1], [1, 0], [1, 1], [-1, 1]];
// Bucle anidado para recorrer cada celda del rompecabezas  
    for (let row = 0; row < puzzleMatrix.length; row++) {
      for (let col = 0; col < puzzleMatrix[row].length; col++) {
// Bucle para recorrer las direcciones        
          directions.forEach(([dx, dy]) => {
              let word = '';
// Bucle para recorrer cada celda en la dirección actual
              for (let r = row, c = col; puzzleMatrix[r] && puzzleMatrix[r][c]; r += dx, c += dy) {
                  word += puzzleMatrix[r][c];
// Si la palabra se encuentra en la lista de palabras, se agregará a la lista de palabras encontradas
                  if (notFoundWords.has(word)) {
                      foundWords.push(word);
// Eliminamos la palabra no encontrada
                      notFoundWords.delete(word);
                  }
              }
          });
      }
  }
// Retornar las palabras encontradas y las palabras no encontradas  
    return { foundWords, notFoundWords: [...notFoundWords] };
  }
  
  // Palabras de referencia
  const wordList = ['MANATI', 'PERRO', 'GATO', 'CONEJO', 'TIBURON', 'ELEFANTE', 'ALCON', 'SERPIENTE', 'JAGUAR', 'CANGURO', 'LOBO', 'MONO', 'NUTRIA', 'LEON', 'LORO', 'TORO', 'ORUGA'];
  const puzzle = `
  N,D,E,K,I,C,A,N,G,U,R,O,G,E
  S,X,R,Y,K,V,I,I,Q,G,W,Q,O,D
  J,A,G,U,A,R,Z,W,B,N,K,O,U,A
  M,L,E,L,E,F,A,N,T,E,H,O,G,W
  L,O,B,O,N,U,T,R,I,A,O,U,S,U
  W,W,O,S,O,G,A,T,O,V,R,T,M,O
  H,L,Z,N,C,T,Y,Z,E,O,X,A,U,R
  C,E,C,Y,T,I,B,U,R,O,N,S,R,O
  C,O,N,E,J,O,Y,U,S,M,R,S,H,T
  Y,N,I,F,E,F,P,T,E,Z,O,O,S,F
  O,S,S,E,R,P,I,E,N,T,E,F,L,G
  P,P,V,D,D,X,U,F,A,L,C,O,N,Y
  M,O,N,O,C,U,Q,W,M,A,N,A,T,I
  N,N,X,H,E,B,P,M,U,P,E,R,R,O
  `;

  // Llamar a la función para encontrar palabras en el rompecabezas
  const { foundWords, notFoundWords } = findWords(wordList, puzzle);

  // Mostrar las palabras encontradas y las palabras no encontradas
  console.log("Found words:", foundWords);
  console.log("Not found words:", notFoundWords);