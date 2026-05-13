**Contexto y Rol**
Actúa como un equipo senior compuesto por:

* Ingeniero Full Stack experto en apps móviles (React Native / Expo)
* Ingeniero backend (Node.js / APIs escalables)
* Diseñador UX/UI especializado en apps virales y sociales
* Experto en IA aplicada a productos de consumo

Tu objetivo es desarrollar una aplicación móvil completa, funcional y lista para escalar llamada **“Reply AI”**.

---

**Consulta / Tarea**
Construye una app móvil que permita al usuario:

1. Introducir o pegar un mensaje recibido (ej: WhatsApp)
2. Elegir el tipo de respuesta
3. Generar automáticamente una respuesta o excusa con IA
4. Enviar directamente esa respuesta a WhatsApp

---

**Propuesta de Valor (CLAVE)**
El usuario no quiere pensar qué responder.

La app debe ofrecer:

* Respuestas rápidas
* Respuestas inteligentes
* Excusas creíbles

👉 Todo en menos de 5 segundos y listo para enviar

---

**Modos de generación (OBLIGATORIOS)**

Implementar estos modos:

* 😂 Gracioso
* 🎩 Elegante
* 🧊 Frío / corto
* 🚪 Excusa creíble

Cada modo debe modificar el comportamiento de la IA.

---

**Especificaciones Técnicas (100% Open Source)**

**Frontend:**

* React Native con Expo
* Código modular (componentes, hooks, services)
* UI minimalista y rápida

**Backend:**

* Node.js con Express
* API REST
* Separación clara: routes / controllers / services

**IA:**

* Preferible: modelos open source (ej: Llama vía Ollama)
* Alternativa: API externa si es necesario

---

**Arquitectura requerida**

Separar en:

* frontend (mobile)
* backend (API)

Con estructura profesional:

* components
* hooks
* services
* controllers
* routes

---

**Funcionalidades principales**

1. **Input principal**

   * Campo para pegar mensaje
   * Lectura opcional del clipboard

2. **Selector de modo**

   * Botones visuales (gracioso, elegante, frío, excusa)

3. **Generación IA**

   * Botón: “Generar respuesta”
   * Tiempo de respuesta < 3 segundos

4. **Resultado**

   * Mostrar respuesta en tarjeta
   * Posibilidad de regenerar

5. **Compartir**

   * Botón:
     👉 “Enviar a WhatsApp”
   * Usar deep link:
     whatsapp://send?text=...

---

**UX/UI (muy importante)**

* Diseño limpio y moderno
* Colores suaves (verde, beige, blanco)
* Interfaz rápida, sin fricción
* Flujo en una sola pantalla

---

**Extras recomendados**

* Botón “hazlo más gracioso”
* Historial de respuestas
* Animaciones suaves (fade / scale)

---

**Monetización (implementar base)**

Modelo freemium:

Gratis:

* 3 respuestas/día

Premium:

* respuestas ilimitadas

---

**Criterios de Calidad**

* Código limpio, modular y mantenible
* Buen manejo de estados (loading, error)
* UX fluida
* Sin dependencias propietarias obligatorias
* Preparado para escalar

---

**Cómo debe ser la respuesta**

La IA debe entregar:

1. Estructura completa del proyecto
2. Código funcional (frontend + backend)
3. Componentes detallados
4. Integración IA
5. Implementación de envío a WhatsApp
6. Instrucciones para ejecutar el proyecto

Evitar explicaciones largas. Priorizar implementación directa.

---

**Objetivo final**

Construir un MVP funcional, rápido y listo para:

* probar con usuarios
* iterar
* monetizar

No es un prototipo. Es una base real de producto.

------------------------------------------


OPCIÓN 1 — Teclado inteligente

👉 Crear un teclado personalizado (como Gboard)

Ejemplo:

escribes en WhatsApp
cambias a tu teclado
te sugiere respuestas o excusas

🧠 Cómo funciona
App tipo teclado (Android/iOS)
Botón “✨ IA”
Genera respuesta → insertada directamente
💸 Por qué es brutal
No sales de WhatsApp
UX perfecta
Muy monetizable


OPCIÓN 2 — Compartir directo (rápido de hacer)

👉 Botón:

“Responder con IA”

Flujo:

Copias mensaje
Abres tu app (auto-detecta clipboard)
Genera respuesta
Botón → abrir WhatsApp con texto listo





