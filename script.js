// Todos los ramos con su semestre y requisitos
const ramos = [
  // Primer año
  { nombre: "Química General I", semestre: 1, prerequisitos: [] },
  { nombre: "Matemáticas", semestre: 1, prerequisitos: [] },
  { nombre: "Biología Celular", semestre: 1, prerequisitos: [] },
  { nombre: "Introducción al Laboratorio", semestre: 1, prerequisitos: [] },
  { nombre: "Introducción a la Química y Farmacia", semestre: 1, prerequisitos: [] },
  { nombre: "Anatomía", semestre: 1, prerequisitos: [] },
  { nombre: "Taller Nivelación Lengua Materna", semestre: 1, prerequisitos: [] },

  { nombre: "Química General II", semestre: 2, prerequisitos: ["Química General I", "Introducción al Laboratorio"] },
  { nombre: "Cálculo", semestre: 2, prerequisitos: ["Matemáticas"] },
  { nombre: "Fisiología I", semestre: 2, prerequisitos: ["Biología Celular", "Anatomía"] },
  { nombre: "Química Orgánica I", semestre: 2, prerequisitos: ["Química General I", "Introducción al Laboratorio"] },
  { nombre: "Introducción a la Estadística", semestre: 2, prerequisitos: ["Matemáticas"] },
  { nombre: "Taller Nivelación Inglés", semestre: 2, prerequisitos: [] },

  // Segundo año
  { nombre: "Química Orgánica II", semestre: 3, prerequisitos: ["Química General II", "Química Orgánica I"] },
  { nombre: "Química Analítica", semestre: 3, prerequisitos: ["Química General II", "Cálculo"] },
  { nombre: "Fisiología II", semestre: 3, prerequisitos: ["Fisiología I"] },
  { nombre: "Administración de Organizaciones", semestre: 3, prerequisitos: ["Matemáticas", "Taller Nivelación Lengua Materna"] },
  { nombre: "Bioquímica", semestre: 3, prerequisitos: ["Biología Celular", "Química Orgánica I"] },
  { nombre: "Ética", semestre: 3, prerequisitos: ["Taller Nivelación Lengua Materna"] },

  { nombre: "Botánica", semestre: 4, prerequisitos: ["Biología Celular", "Química Orgánica I"] },
  { nombre: "Análisis Instrumental", semestre: 4, prerequisitos: ["Matemáticas"] },
  { nombre: "Fisiopatología", semestre: 4, prerequisitos: ["Fisiología II"] },
  { nombre: "Fisicoquímica", semestre: 4, prerequisitos: ["Química General II", "Cálculo"] },
  { nombre: "Administración de Recursos Humanos", semestre: 4, prerequisitos: ["Administración de Organizaciones", "Ética"] },
  { nombre: "Introducción a la Química Farmacéutica", semestre: 4, prerequisitos: ["Química Orgánica II"] },

  // Tercer año
  { nombre: "Farmacognosia", semestre: 5, prerequisitos: ["Química Orgánica II", "Botánica"] },
  { nombre: "Biología Molecular", semestre: 5, prerequisitos: ["Bioquímica"] },
  { nombre: "Operaciones unitarias", semestre: 5, prerequisitos: ["Fisicoquímica"] },
  { nombre: "Asignatura Electiva Profesional", semestre: 5, prerequisitos: ["Ética"] },
  { nombre: "Microbiología", semestre: 5, prerequisitos: ["Bioquímica"] },
  { nombre: "Legislación Farmacéutica", semestre: 5, prerequisitos: ["Administración de Organizaciones"] },

  { nombre: "Biofarmacia", semestre: 6, prerequisitos: ["Análisis Instrumental", "Fisiología II"] },
  { nombre: "Farmacología I", semestre: 6, prerequisitos: ["Fisiopatología", "Introducción a la Química Farmacéutica"] },
  { nombre: "Inmunología", semestre: 6, prerequisitos: ["Biología Molecular", "Fisiopatología"] },
  { nombre: "Química Farmacéutica II", semestre: 6, prerequisitos: ["Introducción a la Química Farmacéutica", "Microbiología"] },
  { nombre: "Práctica Profesional Farmacia I", semestre: 6, prerequisitos: ["Administración de Recursos Humanos", "Ética", "Legislación Farmacéutica"] },
  { nombre: "Bioestadística", semestre: 6, prerequisitos: ["Matemáticas", "Ética"] },

  // Cuarto año
  { nombre: "Tecnología Farmacéutica I", semestre: 7, prerequisitos: ["Biofarmacia", "Operaciones unitarias"] },
  { nombre: "Farmacología II", semestre: 7, prerequisitos: ["Farmacología I", "Química Farmacéutica II"] },
  { nombre: "Química Fisiológica y Patológica", semestre: 7, prerequisitos: ["Análisis Instrumental", "Inmunología"] },
  { nombre: "Salud Pública y Epidemiología", semestre: 7, prerequisitos: ["Ética", "Bioestadística"] },
  { nombre: "Química de Alimentos", semestre: 7, prerequisitos: ["Análisis Instrumental"] },
  { nombre: "Metodología de la Investigación", semestre: 7, prerequisitos: ["Ética", "Bioestadística"] },
  { nombre: "Taller Integración Perfil de Egreso I", semestre: 7, prerequisitos: ["Práctica Profesional Farmacia I"] },

  { nombre: "Tecnología Farmacéutica II", semestre: 8, prerequisitos: ["Tecnología Farmacéutica I"] },
  { nombre: "Farmacia Asistencial", semestre: 8, prerequisitos: ["Salud Pública y Epidemiología"] },
  { nombre: "Nutrición", semestre: 8, prerequisitos: ["Química Fisiológica y Patológica", "Química de Alimentos"] },
  { nombre: "Gestión de Calidad", semestre: 8, prerequisitos: ["Tecnología Farmacéutica I", "Legislación Farmacéutica"] },
  { nombre: "Bioquímica Clínica", semestre: 8, prerequisitos: ["Química Fisiológica y Patológica"] },
  { nombre: "Seminario de Licenciatura", semestre: 8, prerequisitos: ["Tecnología Farmacéutica I", "Farmacología II", "Química Fisiológica y Patológica", "Salud Pública y Epidemiología", "Química de Alimentos", "Metodología de la Investigación", "Taller Integración Perfil de Egreso I"] },
  { nombre: "Taller de Integración Perfil de Egreso II", semestre: 8, prerequisitos: ["Taller Integración Perfil de Egreso I"] },

  // Quinto año
  { nombre: "Farmacia Clínica I", semestre: 9, prerequisitos: ["Tecnología Farmacéutica II", "Farmacia Asistencial", "Nutrición", "Gestión de Calidad", "Bioquímica Clínica", "Seminario de Licenciatura", "Taller de Integración Perfil de Egreso II"] },
  { nombre: "Cosmética", semestre: 9, prerequisitos: ["Tecnología Farmacéutica II"] },
  { nombre: "Toxicología", semestre: 9, prerequisitos: ["Farmacología II"] },
  { nombre: "Gestión Comercial", semestre: 9, prerequisitos: ["Gestión de Calidad", "Administración de Recursos Humanos"] },
  { nombre: "Medicamentos Complementarios", semestre: 9, prerequisitos: ["Farmacología II", "Nutrición"] },
  { nombre: "Práctica Profesional II", semestre: 9, prerequisitos: ["Farmacología II", "Práctica Profesional Farmacia I"] },
  { nombre: "Taller Integración Perfil de Egreso III", semestre: 9, prerequisitos: ["Taller de Integración Perfil de Egreso II"] },

  { nombre: "Asignatura Electiva Profesional", semestre: 10, prerequisitos: ["Ética"] },
  { nombre: "Farmacia Clínica", semestre: 10, prerequisitos: ["Farmacia Clínica I"] },
  { nombre: "Unidad de Investigación o Internado I", semestre: 10, prerequisitos: ["Metodología de la Investigación", "Seminario de Licenciatura"] },
  { nombre: "Práctica Profesional III", semestre: 10, prerequisitos: ["Tecnología Farmacéutica II", "Análisis Instrumental", "Farmacia Asistencial", "Toxicología", "Química de Alimentos", "Bioquímica Clínica"] },

  // Sexto año
  { nombre: "Unidad de Investigación o Internado II", semestre: 11, prerequisitos: ["Unidad de Investigación o Internado I"] }
];

// Obtener el contenedor principal
const malla = document.getElementById("malla");

// Función para crear la malla visual
function crearMalla() {
  const semestres = [...new Set(ramos.map(r => r.semestre))].sort((a,b) => a-b);
  semestres.forEach(sem => {
    // Título semestre
    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${sem}`;
    malla.appendChild(titulo);

    // Contenedor de ramos semestre
    const container = document.createElement("div");
    container.className = "container";

    // Ramos del semestre
    ramos.filter(r => r.semestre === sem).forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo locked";
      div.textContent = ramo.nombre;
      div.dataset.nombre = ramo.nombre;
      div.dataset.requisitos = JSON.stringify(ramo.prerequisitos);
      container.appendChild(div);
    });

    malla.appendChild(container);
  });

  actualizarEstado();
}

// Actualiza qué ramos están desbloqueados según los aprobados
function actualizarEstado() {
  const aprobados = JSON.parse(localStorage.getItem("ramosAprobados") || "[]");

  document.querySelectorAll(".ramo").forEach(div => {
    const requisitos = JSON.parse(div.dataset.requisitos);
    const puedeTomar = requisitos.every(r => aprobados.includes(r));

    if (requisitos.length === 0 || puedeTomar || aprobados.includes(div.dataset.nombre)) {
      div.classList.remove("locked");
    } else {
      div.classList.add("locked");
    }

    // Marca como aprobado si está en aprobados
    if (aprobados.includes(div.dataset.nombre)) {
      div.classList.add("aprobado");
    } else {
      div.classList.remove("aprobado");
    }
  });
}

// Evento para marcar/unmarcar ramos y guardar progreso
malla.addEventListener("click", e => {
  const div = e.target.closest(".ramo");
  if (!div || div.classList.contains("locked")) return;

  div.classList.toggle("aprobado");

  const aprobados = [...document.querySelectorAll(".ramo.aprobado")].map(d => d.dataset.nombre);
  localStorage.setItem("ramosAprobados", JSON.stringify(aprobados));

  actualizarEstado();
});

// Crear la malla al cargar la página
crearMalla();
