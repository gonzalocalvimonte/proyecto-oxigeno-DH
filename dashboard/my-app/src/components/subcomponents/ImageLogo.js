import './stylesSubcomponents/ImagenLogo.css'

function ImageLogo() {
  return (
    <a href='http://localhost:3000/' id="imagenOxigeno">
        <picture>
                <img src='http://localhost:3000/images/logo_blanco.png' alt='inicio'/>
        </picture>
    </a>
  );
}

export default ImageLogo;