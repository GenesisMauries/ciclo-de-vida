## JSX

Extension de sintaxis que combina JS y HTML.

### Reglas

- Devolver un unico elemento raiz
- Cerrar todas la etiquetas
- CamelCase en atributos y eventos. (aria-*y data-* se escriben
como en HTML)

---

## Que es un componente

Bloque de codigo reutilizable que encapsula logica e interfaz visual.
(Se pueden anidar, algunos tienen estado otros son representativos)

---

## Ciclo de vida del componente

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

## Fragment

Componente o elemento para agurpar mas elementos sin añadir
nodos adicionales

---

## Hook

Fragmento de logica reutilizable que empieza con use

---

## State

Objeto/informacion en la interfaz que cambia con el paso del tiempo (es mutable)

---

## Props

Son objetos para la comunicacion entre componentes
Propiedades para pasar datos del componente padre al hijo.

> [!NOTE]
> El hijo al padre emite de dos formas:
> 1.- Pasando el setState como propo
> 2.- Funcion auxiliar en el padre que reciba la informacion desde
> el hijo y realice el el set del estado

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

> [!IMPORTANT]
> **ALGORITMO DIFFING**
> Cada que hay un cambio en la UI un nuevo Virtual DOM es creado
> Asi el nuevo y el anterior se comparan, garantizando que se
> re-renderize la o las partes que cambiaron

### Ventajas

- Mejora el rendimiento al minimizar la manipulacion directa del DOM
- Permite actualizaciones mas efcientes y rapidas de la UI

> [!NOTE]
> El **DOM real** se actualiza, manipula el HTML directamente
> y es una representacion en objeto del HTML.
>
> El **Virtual DOM** no puede actualizarse directamente, acuta como
> una copia del DOM real y puede ser actualizado sin que se refresque
> la pagina.

---

## Server Side Rendering (SSR)

Tecnica donde el contenido inicial (HTML) de la aplicacion se genera
en el servidor. En React renderiza los componentes en el servidor y
se envia el HTML resultante al navegador/cliente para despues hidratar ese HTML, añadiendo event listeners y convirtiendo el contenido estático en una aplicación React interactiva.

### Proceso

1. Servidor recibe solicitud
2. Renderiza componentes React a HTML estatico
3. Envia el HTML al cliente
4. El navegador/cliente hidrata con interactividad

### Ventajas

- Mejora el tiempo inicial de carga y el SEO
- Funciona mejor en conexiones lentasj
- Permite que el contenido sea visible antes de que el JS se cargue

---

## Prop Drilling

Es el proceso de pasar props a través de varios niveles
de componentes que no los necesitan, solo para llegar a
un componente hijo que sí los requiere.

### Evitarlo

- **Context API:** Útil para compartir datos que pueden considerarse "globales" para un árbol de componentes.

```javascript
const DatoContext = React.createContext();

function AbuloComponent() {
  return (
    <DatoContext.Provider value={dato}>
      <PadreComponent />
    </DatoContext.Provider>
  )
}

function HijoComponent() {
  const dato = React.useContext(DatoContext);
  return <p>{dato}</p>
}
```

- **Composición de componentes:** Pasar componentes como props en lugar de datos.

```javascript
function AbueloComponent({ dato }) {
  return <PadreComponent>
    <HijoComponent dato={dato} />
  </PadreComponent>
}

function PadreComponent({ children }) {
  return <div>{children}</div>
}
```

- **Hooks personalizados:** Encapsular lógica y estado en hooks reutilizables.
- **Estado global:** Usar librerías como Redux o Recoil para manejar el estado global de la aplicación.
- **Component Inversion:** Invertir el control pasando funciones de renderizado.

---

## useContext

Hook de React que permite acceder al contexto, una forma nativa de
compartir datos globales entre componentes sin necesidad de pasar
props manualmente a través de cada nivel de la jerarquía de
componentes.

---

## useEffect

Evento secundario, array de dependencias indica cuando se debe llamar

---

## Redux

Para no teneer descentralizado el estado y no estar pensando en
que componente estamos o jerarquia de componentes

### Store

**Un solo estado global**: Todo el estado de la aplicación
se guarda en un único objeto llamado "store".

- Es el objeto que contiene el estado global de la aplicación.
- Es único en toda la aplicación.
- Se crea con la función createStore de Redux.

### Actions

El estado es de solo lectura y para cambiar el estado,
se debe emitir una acción (un objeto que describe qué sucedió).

- Son objetos que describen cambios en el estado.
- Tienen una propiedad 'type' obligatoria.
- Se envían al store con store.dispatch().

### Reducers

Reducers son funciones puras que reciben el estado actual y una acción, y devuelven un nuevo estado.

Nunca modifican el estado directamente, siempre devuelven un
nuevo objeto de estado.

---
