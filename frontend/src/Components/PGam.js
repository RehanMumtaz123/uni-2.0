import React from "react";

function PGam() {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item">
            <img src="https://www.techquila.co.in/wp-content/uploads/2021/05/PlayStation-Studios-Logo-Banner-and-IP-scaled.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item active">
            <img src="https://wallpaperaccess.com/full/4648196.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxq7TSQUZuXCpfL1vuIKj2fIikaCUOMt4XSI5jhU68ohaG9AKGlvFSUgLlFXKNhSZ3gU&usqp=CAU" class="d-block w-100" alt="..." />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

export default PGam;
