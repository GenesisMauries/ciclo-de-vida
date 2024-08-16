# Ciclo de vida del componente

1. **Montaje:** Un componente es insertado al DOM

- Se llama al componente y se ejecuta su cuerpo
- Se inicalizan estados
- Se define JSX a renderizar

2. **Actualizar:**

- Componente re-renderiza si cambia state o props
- Se ejecuta useEffect si cambiaron las dependencias

3. **Desmontaje:**

- Se oculta el componente

> [!NOTE]
> Cada instancia de un componente tiene su propio ciclo de vida

---

## Virtual DOM

Representacion en memoria del DOM real. En lugar de
manipular directamenteel DOM del navegador React primero
actualiza el virtual.

> [!TIP]
> Solo existe en memoria, no en el navegador

### Funcionamiento

- React crea y mantiene dos copias del virtual DOM
- Una representa el estado actual de la UI
- Otra el estado futuro despues del cambio

### Proceso

- Cuando ocurre un cambio React crea un DOM Virtual
- Compara ese nuevo DOM Virtual con el anterior (diffing)
- Identifica diferencias exactas, por mas minimas

### Actualizacion (reconciliacion)

- Los elementos que han cambiado se actualizan en el DOM real

### Ventajas

- Mejora el rendimiento al minimizar la manipulacion directa del DOM
- Permite actualizaciones mas efcientes y rapidas de la UI
