import "../css/aboutUs.css"

export const SobreNosotros = () => {
  return (
    <div className="about-us py-5">
      <div className="container">
        <h1 className="text-center mb-4 typing-effect">Acerca de Nosotros</h1>
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://r2.erweima.ai/imgcompressed/compressed_2820697865936c50812deeb0b46655a2.webp"
              alt="Quick Dine"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <p>
              ¡Bienvenidos a Quick Dine! Somos un equipo de cuatro estudiantes apasionados de ingeniería de sistemas de la Universidad Libre, comprometidos en simplificar la experiencia de reserva de mesas en línea. Nuestra misión es proporcionar una plataforma intuitiva y eficiente que mejore la forma en que las personas disfrutan de sus comidas en restaurantes favoritos.
            </p>
            <p>
              En Quick Dine, combinamos nuestra experiencia en desarrollo de software con nuestra pasión por la innovación para crear una solución que satisfaga las necesidades tanto de los usuarios como de los propietarios de restaurantes. Nos esforzamos por ofrecer una experiencia de usuario excepcional, facilitando la reserva de mesas con tan solo unos clics.
            </p>
            <p>
              Nos enorgullece trabajar en colaboración con restaurantes locales para ofrecer una amplia gama de opciones gastronómicas y promover la cultura culinaria de nuestra comunidad. Valoramos la transparencia, la fiabilidad y el compromiso con la excelencia en todo lo que hacemos.
            </p>
            <p>
              En Quick Dine, estamos emocionados de ser parte de tu experiencia culinaria y esperamos ayudarte a descubrir nuevos lugares para disfrutar de deliciosas comidas con tus seres queridos. ¡Gracias por confiar en nosotros para hacer tus reservas de mesa rápidas y sencillas! ¡Disfruta de tu comida con Quick Dine!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}