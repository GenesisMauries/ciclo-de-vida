# Ciclo de vida del componente

1. **Montaje:** Un componente es insertado al DOM

- Se llama al componente y se ejecuta su cuerpo
- Se inicalizan estados
- Se define JSX a renderizar

1. **Actualizar:**

- Componente re-renderiza si cambia state o props
- Se ejecuta useEffect si cambiaron las dependencias

1. **Desmontaje:**

- Se oculta el componente
