const ramosPorSemestre = {
  "Semestre 1": [
    { nombre: "Química General I", prerequisitos: [] },
    { nombre: "Matemáticas", prerequisitos: [] },
    { nombre: "Biología Celular", prerequisitos: [] },
    { nombre: "Introducción al Laboratorio", prerequisitos: [] },
    { nombre: "Introducción a la Química y Farmacia", prerequisitos: [] },
    { nombre: "Anatomía", prerequisitos: [] },
    { nombre: "Taller Nivelación Lengua Materna", prerequisitos: [] }
  ],
  "Semestre 2": [
    { nombre: "Química General II", prerequisitos: ["Química General I", "Introducción al Laboratorio"] },
    { nombre: "Cálculo", prerequisitos: ["Matemáticas"] },
    { nombre: "Fisiología I", prerequisitos: ["Biología Celular", "Anatomía"] },
    { nombre: "Química Orgánica I", prerequisitos: ["Química General I", "Introducción al Laboratorio"] },
    { nombre: "Introducción a la Estadística", prerequisitos: ["Matemáticas"] },
    { nombre: "Taller Nivelación Inglés", prerequisitos: [] }
  ],
  "Semestre 3": [
    { nombre: "Química Orgánica II", prerequisitos: ["Química General II", "Química Orgánica I"] },
    { nombre: "Química Analítica", prerequisitos: ["Química General II", "Cálculo"] },
    { nombre: "Fisiología II", prerequisitos: ["Fisiología I"] },
    { nombre: "Administración de Organizaciones", prerequisitos: ["Matemáticas", "Taller Nivelación Lengua Materna"] },
    { nombre: "Bioquímica", prerequisitos: ["Biología Celular", "Química Orgánica I"] },
    { nombre: "Ética", prerequisitos: ["Taller Nivelación Lengua Materna"] }
  ],
  "Semestre 4": [
    { nombre: "Botánica", prerequisitos: ["Biología Celular", "Química Orgánica I"] },
    { nombre: "Análisis Instrumental", prerequisitos: ["Matemáticas"] },
    { nombre: "Fisiopatología", prerequisitos: ["Fisiología II"] },
    { nombre: "Fisicoquímica", prerequisitos: ["Química General II", "Cálculo"] },
    { nombre: "Administración de Recursos Humanos", prerequisitos: ["Administración de Organizaciones", "Ética"] },
    { nombre: "Introducción a la Química Farmacéutica", prerequisitos: ["Química Orgánica II"] }
  ],
  "Semestre 5": [
    { nombre: "Farmacognosia", prerequisitos: ["Química Orgánica II", "Botánica"] },
    { nombre: "Biología Molecular", prerequisitos: ["Bioquímica"] },
    { nombre: "Operaciones Unitarias", prerequisitos: ["Fisicoquímica"] },
    { nombre: "Asignatura Electiva Profesional", prerequisitos: ["Ética"] },
    { nombre: "Microbiología", prerequisitos: ["Bioquímica"] },
    { nombre: "Legislación Farmacéutica", prerequisitos: ["Administración de Organizaciones"] }
  ],
  "Semestre 6": [
    { nombre: "Biofarmacia", prerequisitos: ["Análisis Instrumental", "Fisiología II"] },
    { nombre: "Farmacología I", prerequisitos: ["Fisiopatología", "Introducción a la Química Farmacéutica"] },
    { nombre: "Inmunología", prerequisitos: ["Biología Molecular", "Fisiopatología"] },
    { nombre: "Química Farmacéutica II", prerequisitos: ["Introducción a la Química Farmacéutica", "Microbiología"] },
    { nombre: "Práctica Profesional Farmacia I", prerequisitos: ["Administración de Recursos Humanos", "Ética", "Legislación Farmacéutica"] },
    { nombre: "Bioestadística", prerequisitos: ["Matemáticas", "Ética"] }
  ],
  "Semestre 7": [
    { nombre: "Tecnología Farmacéutica I", prerequisitos: ["Biofarmacia", "Operaciones Unitarias"] },
    { nombre: "Farmacología II", prerequisitos: ["Farmacología I", "Química Farmacéutica II"] },
    { nombre: "Química Fisiológica y Patológica", prerequisitos: ["Análisis Instrumental", "Inmunología"] },
    { nombre: "Salud Pública y Epidemiología", prerequisitos: ["Ética", "Bioestadística"] },
    { nombre: "Química de Alimentos", prerequisitos: ["Análisis Instrumental"] },
    { nombre: "Metodología de la Investigación", prerequisitos: ["Ética", "Bioestadística"] },
    { nombre: "Taller Integración Perfil de Egreso I", prerequisitos: ["Práctica Profesional Farmacia I"] }
  ],
  "Semestre 8": [
    { nombre: "Tecnología Farmacéutica II", prerequisitos: ["Tecnología Farmacéutica I"] },
    { nombre: "Farmacia Asistencial", prerequisitos: ["Salud Pública y Epidemiología"] },
    { nombre: "Nutrición", prerequisitos: ["Química Fisiológica y Patológica", "Química de Alimentos"] },
    { nombre: "Gestión de Calidad", prerequisitos: ["Tecnología Farmacéutica I", "Legislación Farmacéutica"] },
    { nombre: "Bioquímica Clínica", prerequisitos: ["Química Fisiológica y Patológica"] },
    { nombre: "Seminario de Licenciatura", prerequisitos: ["Tecnología Farmacéutica I", "Farmacología II", "Química Fisiológica y Patológica", "Salud Pública y Epidemiología", "Química de Alimentos", "Metodología de la Investigación", "Taller Integración Perfil de Egreso I"] },
    { nombre: "Taller Integración Perfil de Egreso II", prerequisitos: ["Taller Integración Perfil de Egreso I"] }
  ],
  "Semestre 9": [
    { nombre: "Farmacia Clínica I", prerequisitos: ["Tecnología Farmacéutica II", "Farmacia Asistencial", "Nutrición", "Gestión de Calidad", "Bioquímica Clínica", "Seminario de Licenciatura", "Taller Integración Perfil de Egreso II"] },
    { nombre: "Cosmética", prerequisitos: ["Tecnología Farmacéutica II"] },
    { nombre: "Toxicología", prerequisitos: ["Farmacología II"] },
    { nombre: "Gestión Comercial", prerequisitos: ["Gestión de Calidad", "Administración de Recursos Humanos"] },
    { nombre: "Medicamentos Complementarios", prerequisitos: ["Farmacología II", "Nutrición"] },
    { nombre: "Práctica Profesional II", prerequisitos: ["Farmacología II", "Práctica Profesional Farmacia I"] },
    { nombre: "Taller Integración Perfil de Egreso III", prerequisitos: ["Taller Integración Perfil de Egreso II"] }
  ],
  "Semestre 10": [
    { nombre: "Asignatura Electiva Profesional", prerequisitos: ["Ética"] },
    { nombre: "Farmacia Clínica", prerequisitos: ["Farmacia Clínica I"] },
    { nombre: "Unidad de Investigación o Internado I", prerequisitos: ["Metodología de la Investigación", "Seminario de Licenciatura"] },
    { nombre: "Práctica Profesional III", prerequisitos: ["Tecnología Farmacéutica II", "Análisis Instrumental", "Farmacia Asistencial", "Toxicología", "Química de Alimentos", "Bioquímica Clínica"] }
  ],
  "Semestre 11": [
    { nombre: "Unidad de Investigación o Internado II", prerequisitos: ["Unidad de Investigación o Internado I"] }
  ]
};

const malla = document.getElementById("malla");

Object.entries(ramosPorSemestre).forEach(([semestre, ramos]) => {
  const titulo = document.createElement("h2");
  titulo.textContent = semestre;
  malla.appendChild(titulo);

  const contenedor = document.createElement("div");
  contenedor.className = "malla";

  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.innerHTML = `
      <div class="nombre">${ramo.nombre}</div>
      <div class="prerequisitos">
        ${ramo.prerequisitos.length > 0 ? "Requiere: " + ramo.prerequisitos.join(", ") : "Sin prerequisitos"}
      </div>
    `;
    div.addEventListener("click", () => {
      div.classList.toggle("completed");
    });
    contenedor.appendChild(div);
  });

  malla.appendChild(contenedor);
});
