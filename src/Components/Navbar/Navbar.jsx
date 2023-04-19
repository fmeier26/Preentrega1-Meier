import CartWidget from "../CartWidget";

const Navbar =() => {
    return (
          <div style={{width: "100%", height: 200}}>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
      <a class="navbar-brand" href="#">Quienes somos</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Eventos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pasteleria Creativa</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Catalogo</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
            <CartWidget/> 
        </div>
    )     
    
}

export default Navbar; 