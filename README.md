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
