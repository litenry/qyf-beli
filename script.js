const ramos = [
  // Semestre 1
  { nombre: "Química General I", id: "qg1", prerequisitos: [] },
  { nombre: "Matemáticas", id: "mate", prerequisitos: [] },
  { nombre: "Biología Celular", id: "bc", prerequisitos: [] },
  { nombre: "Introducción al Laboratorio", id: "lab", prerequisitos: [] },
  { nombre: "Introducción a la Química y Farmacia", id: "iqf", prerequisitos: [] },
  { nombre: "Anatomía", id: "anat", prerequisitos: [] },
  { nombre: "Taller Nivelación Lengua Materna", id: "leng", prerequisitos: [] },

  // Semestre 2
  { nombre: "Química General II", id: "qg2", prerequisitos: ["qg1", "lab"] },
  { nombre: "Cálculo", id: "cal", prerequisitos: ["mate"] },
  { nombre: "Fisiología I", id: "fisio1", prerequisitos: ["bc", "anat"] },
  { nombre: "Química Orgánica I", id: "qo1", prerequisitos: ["qg1", "lab"] },
  { nombre: "Introducción a la Estadística", id: "est", prerequisitos: ["mate"] },
  { nombre: "Taller Nivelación Inglés", id: "ing", prerequisitos: [] },

  // Semestre 3
  { nombre: "Química Orgánica II", id: "qo2", prerequisitos: ["qg2", "qo1"] },
  { nombre: "Química Analítica", id: "qa", prerequisitos: ["qg2", "cal"] },
  { nombre: "Fisiología II", id: "fisio2", prerequisitos: ["fisio1"] },
  { nombre: "Administración de Organizaciones", id: "admin", prerequisitos: ["mate", "leng"] },
  { nombre: "Bioquímica", id: "bioq", prerequisitos: ["bc", "qo1"] },
  { nombre: "Ética", id: "etica", prerequisitos: ["leng"] },

  // Semestre 4
  { nombre: "Botánica", id: "bota", prerequisitos: ["bc", "qo1"] },
  { nombre: "Análisis Instrumental", id: "ai", prerequisitos: ["mate"] },
  { nombre: "Fisiopatología", id: "fisiop", prerequisitos: ["fisio2"] },
  { nombre: "Fisicoquímica", id: "fq", prerequisitos: ["qg2", "cal"] },
  { nombre: "Administración de Recursos Humanos", id: "rrhh", prerequisitos: ["admin", "etica"] },
  { nombre: "Introducción a la Química Farmacéutica", id: "iqf2", prerequisitos: ["qo2"] },

  // Semestre 5
  { nombre: "Farmacognosia", id: "fco", prerequisitos: ["qo2", "bota"] },
  { nombre: "Biología Molecular", id: "bm", prerequisitos: ["bioq"] },
  { nombre: "Operaciones Unitarias", id: "ou", prerequisitos: ["fq"] },
  { nombre: "Asignatura Electiva Profesional", id: "electiva1", prerequisitos: ["etica"] },
  { nombre: "Microbiología", id: "micro", prerequisitos: ["bioq"] },
  { nombre: "Legislación Farmacéutica", id: "leg", prerequisitos: ["admin"] },

  // Semestre 6
  { nombre: "Biofarmacia", id: "biof", prerequisitos: ["ai", "fisio2"] },
  { nombre: "Farmacología I", id: "farma1", prerequisitos: ["fisiop", "iqf2"] },
  { nombre: "Inmunología", id: "inmu", prerequisitos: ["bm", "fisiop"] },
  { nombre: "Química Farmacéutica II", id: "qf2", prerequisitos: ["iqf2", "micro"] },
  { nombre: "Práctica Profesional Farmacia I", id: "ppf1", prerequisitos: ["rrhh", "etica", "leg"] },
  { nombre: "Bioestadística", id: "bioest", prerequisitos: ["mate", "etica"] },

  // Semestre 7
  { nombre: "Tecnología Farmacéutica I", id: "tf1", prerequisitos: ["biof", "ou"] },
  { nombre: "Farmacología II", id: "farma2", prerequisitos: ["farma1", "qf2"] },
  { nombre: "Química Fisiológica y Patológica", id: "qfp", prerequisitos: ["ai", "inmu"] },
  { nombre: "Salud Pública y Epidemiología", id: "spe", prerequisitos: ["etica", "bioest"] },
  { nombre: "Química de Alimentos", id: "qa2", prerequisitos: ["ai"] },
  { nombre: "Metodología de la Investigación", id: "met", prerequisitos: ["etica", "bioest"] },
  { nombre: "Taller Integración Perfil de Egreso I", id: "tipe1", prerequisitos: ["ppf1"] },

  // Semestre 8
  { nombre: "Tecnología Farmacéutica II", id: "tf2", prerequisitos: ["tf1"] },
  { nombre: "Farmacia Asistencial", id: "farmas", prerequisitos: ["spe"] },
  { nombre: "Nutrición", id: "nut", prerequisitos: ["qfp", "qa2"] },
  { nombre: "Gestión de Calidad", id: "gcal", prerequisitos: ["tf1", "leg"] },
  { nombre: "Bioquímica Clínica", id: "bioqc", prerequisitos: ["qfp"] },
  { nombre: "Seminario de Licenciatura", id: "sem", prerequisitos: ["tf1", "farma2", "qfp", "spe", "qa2", "met", "tipe1"] },
  { nombre: "Taller Integración Perfil de Egreso II", id: "tipe2", prerequisitos: ["tipe1"] },

  // Semestre 9
  { nombre: "Farmacia Clínica I", id: "fc1", prerequisitos: ["tf2", "farmas", "nut", "gcal", "bioqc", "sem", "tipe2"] },
  { nombre: "Cosmética", id: "cos", prerequisitos: ["tf2"] },
  { nombre: "Toxicología", id: "tox", prerequisitos: ["farma2"] },
  { nombre: "Gestión Comercial", id: "gcom", prerequisitos: ["gcal", "rrhh"] },
  { nombre: "Medicamentos Complementarios", id: "medcomp", prerequisitos: ["farma2", "nut"] },
  { nombre: "Práctica Profesional II", id: "pp2", prerequisitos: ["farma2", "ppf1"] },
  { nombre: "Taller Integración Perfil de Egreso III", id: "tipe3", prerequisitos: ["tipe2"] },

  // Semestre 10
  { nombre: "Asignatura Electiva Profesional", id: "electiva2", prerequisitos: ["etica"] },
  { nombre: "Farmacia Clínica", id: "fc2", prerequisitos: ["fc1"] },
  { nombre: "Unidad de Investigación o Internado I", id: "ui1", prerequisitos: ["met", "sem"] },
  { nombre: "Práctica Profesional III", id: "pp3", prerequisitos: ["tf2", "ai", "farmas", "tox", "qa2", "bioqc"] },

  // Semestre 11
  { nombre: "Unidad de Investigación o Internado II", id: "ui2", prerequisitos: ["ui1"] }
];

const malla = document.getElementById("malla");

ramos.forEach(ramo => {
  const div = document.createElement("div");
  div.className = "ramo";
  div.innerHTML = `
    <div class="nombre">${ramo.nombre}</div>
    <div class="prerequisitos">
      ${ramo.prerequisitos.length > 0 ? "Requiere: " + ramo.prerequisitos.join(", ") : "Sin prerequisitos"}
    </div>
  `;
  malla.appendChild(div);
});
