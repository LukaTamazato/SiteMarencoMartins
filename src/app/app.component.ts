import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./componente/navbar/navbar.component";
import { PaginaPrinciapalComponent } from "./paginas/pagina-princiapal/pagina-princiapal.component";
import { FooterComponent } from "./componente/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, PaginaPrinciapalComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MarencoEMartins';
}
