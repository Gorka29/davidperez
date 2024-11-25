import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

register(); // Registrar Swiper elementos web

interface Testimonio {
  id: number;
  texto: string;
  autor: string;
  profesion: string;
}

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonios.component.html',
  styleUrl: './testimonios.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestimoniosComponent implements OnInit {
  testimonios: Testimonio[] = [
    {
      "id": 1,
      "texto": "'Es una suerte que cuenten con David como fisio en el torneo de Getxo. Es clave para nosotras tener la tranquilidad de que después de los partidos vamos a poder recuperar lo mejor posible. El trato siempre es super bueno, se preocupa por darte el mejor tratamiento posible para recuperar y mejorar los dolores que vamos teniendo y anima a tener ganas de volver cada año!'",
      "autor": "Paula Arias",
      "profesion": "Tenista profesional"
    },
    {
      "id": 2,
      "texto": "'David helped me get through a tournament that I had pain almost everywhere. He is very passionate at his job and that's why he knows to give the best recommendations. I would trust him any day of the year'",
      "autor": "Martha Matoula",
      "profesion": "Tenista profesional"
    },
    {
      "id": 3,
      "texto": "'Lo poco que traté contigo me ayudaste mucho, se nota que sabes lo que haces y te interesa tu trabajo, me gustó mucho y transmites confianza!'",
      "autor": "Laia Petretic",
      "profesion": "Tenista profesional"
    },
    {
      "id": 4,
      "texto": "'Cuando he necesitado tratarme contigo cualquier lesión/molestia, la recuperación ha sido fantástica. Destacaría tu perfeccionismo y profesionalidad, además de tu gran atención al cliente. Recomendaría a todo el mundo tu servicio'",
      "autor": "Iñigo Arrieta",
      "profesion": "Futbolista CD Gazteluzarra"
    },
    {
      "id": 5,
      "texto": "'Traté contigo la recuperación de mi lesión de rodilla (LCA, LLI y menisco) y después de muchos meses de trabajo a día de hoy puedo decir que el resultado ha sido increíble. Ponerse en tus manos es un acierto ante cualquier tipo de lesión a tratar y la atención que das es de 10'",
      "autor": "Xabi Santamaría",
      "profesion": "Futbolista Heartland Hawks"
    },
    {
      "id": 6,
      "texto": "'David es una persona que siempre ha sabido tratar todos mis problemas y sobrecargas derivadas por el entrenamiento de fuerza en el gimnasio. Fueron unas cuantas las molestias en la zona lumbar, y siempre he acabado recuperado al 200%, un autentico profesional.'",
      "autor": "David Gallego",
      "profesion": "Culturista"
    },
    {
      "id": 7,
      "texto": "'Durante los tres años que estuve tratándome contigo, recibi un trato profesional y personal inmejorable, siempre preocupándote por la recuperación y por mí. Siempre que te necesitaba estabas dispuesto a ayudarme sin importar el problema que fuese. Si tuviese que volver en un futuro a tratarme con algún fisio no dudaría a volver a acudir a tí'",
      "autor": "Aimar Castresana",
      "profesion": "Futbolista CD Santurtzi"
    },
    {
      "id": 8,
      "texto": "'Llevaba arrastrando un dolor de hombro durante algún tiempo y no se iba. Fue tratarme contigo y al día siguiente ese dolor no existía, ni mínimamente. El trato fue excepcional y el tiempo invertido fue de élite. Hiciste de todo para ayudarme y con una sonrisa. Eres muy recomendable para que te traten'",
      "autor": "Aitzol Sáiz",
      "profesion": ""
    },
    {
      "id": 9,
      "texto": "'El servicio que David ofrece es de admirar. Brilla por su profesionalidad y el trato que tiene con sus pacientes. Es muy cercano y atento, siempre preparado para lo que necesites'",
      "autor": "Lander Arenal",
      "profesion": "Futbolista Athletic Club"
    },
    {
      "id": 10,
      "texto": "'La atención que recibi cuando me he tratado contigo ha sido increíble y muy profesional. Recomiendo que acudáis a él ante cualquier tipo de lesión. Es muy top!'",
      "autor": "Iker Gonzalez",
      "profesion": "Futbolista Dinamo San Juan"
    },
    {
      "id": 11,
      "texto": "'Después de un partido intenso, siempre has sido de gran ayuda en mi recuperación, logrando que al día siguiente me sienta fresca y lista para el siguiente encuentro. También, cuando he tenido molestias o alguna lesión, tus manos y las máquinas que utilizas han sido fundamentales para mi alivio, permitiéndome sentirme mejor y continuar entrenando. Eres un excelente fisioterapeuta y una gran persona. Te recomiendo al 100%.'",
      "autor": "Marie Mettraux",
      "profesion": "Tenista profesional"
    },
    {
      "id": 12,
      "texto": "'Trabajar de la mano de David con mis lesiones ha sido un proceso en el cual me encontré muy cómodo. Trabajamos con mucha constancia y disciplina a lo largo de toda la lesión y supo llevar además muy bien la carga psicológica que significa una lesión para cualquier deportista. A pesar de tener su carrera y su puesto de trabajo, no deja de estudiar ni de trabajar para ser el día de mañana el mejor en lo suyo y por el camino que va, no dudo en que lo va a lograr'",
      "autor": "A. Gabriel Lizarraga",
      "profesion": "Futbolista CD Tudelano"
    },
    {
      "id": 13,
      "texto": "'David ha sido un gran apoyo durante mi tratamiento. Su enfoque siempre ha sido muy profesional, adaptando cada sesión a mis necesidades específicas. Gracias a su dedicación y conocimientos, he notado una mejora significativa en la recuperación de diferentes lesiones sufridas durante la temporada. Recomiendo su trabajo por la seriedad y el cuidado que pone en cada detalle'",
      "autor": "Iñigo Baqué",
      "profesion": "Futbolista SD Gernika"
    },
    {
      "id": 14,
      "texto": "'La primera vez que sentí mejoría casi instantánea tras una sesión de fisioterapia. ¡Gracias David!'",
      "autor": "Arianna Mendez",
      "profesion": "Crossfitter"
    },
    {
      "id": 15,
      "texto": "'Tenia una lesión que arrastraba desde hacía 3 meses y no la recuperaba. Hasta que fui a la clínica con David, me valoró con una ecografía y me trató dos veces con neuromodulación. Y con el tratamiento y readaptación se me fue la lesión en tres semanas'",
      "autor": "Ian Sanchez",
      "profesion": "Futbolista Be Quick 1887"
    },
    {
      "id": 16,
      "texto": "'Mi experiencia contigo ha sido súper buena, muy buen profesional, te tuve en mi equipo y he elegido seguir tratándome contigo después ya que en toda mi carrera como deportista no he encontrado otro físio igual. Además de ser un excelente fisioterapeuta también una gran persona y haces que las horas en la clínica se hagan muy amenas!!'",
      "autor": "Joaquín Hinojosa",
      "profesion": "Futbolista JD Somorrostro"
    },
    {
      "id": 17,
      "texto": "'La buena mano y las técnicas utilizadas en mi caso han dado un buen resultado, siempre acompañado de un riguroso estudio previo de la lesión. El trato siempre ha sido muy profesional y cercano, y eso se agradece'",
      "autor": "Jon Andoni Herrero",
      "profesion": "Crossfitter"
    },
    {
      "id": 18,
      "texto": "'Siempre que he tratado contigo ha sido una auténtica maravilla. Una persona que no se cansa de trabajar para hacer la cosas al mejor nivel posible. Las sensaciones inmejorables. No dudaría en volver a acudir a un profesional tan cercano como David!'",
      "autor": "Beñat Gómez",
      "profesion": "Futbolista CD Santurtzi"
    },
    {
      "id": 19,
      "texto": "'El trato que recibí nada más lesionarme fue increíble. Fue una de las más difíciles que he pasado, pero cada día había algo bueno por lo que alegrarse, porque el tratamiento iba cada día a mejor. Sin duda el físio de cualquier deportista en el cual apoyarse en caso de lesión, preparación o evitar dolor. Desde que le conocí ya tengo a la persona adecuada para tratar mi cuerpo'",
      "autor": "Peio Mendizabal",
      "profesion": "Futbolista Zalla"
    },
    {
      "id": 20,
      "texto": "'Me traté contigo estando en competición y me ayudaste a recuperar y mejorar las molestias que tenía con creces. Muy recomendable, gran profesional'",
      "autor": "Lucía Cortez",
      "profesion": "Tenista profesional"
    }
  ];

  constructor() {}

  ngOnInit() {
    register();
  }
}
