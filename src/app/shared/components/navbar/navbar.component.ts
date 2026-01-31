import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  ngOnInit(): void {
  }

    isMenuOpen:boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

    constructor(private searchService: SearchService) {}

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchService.setSearch(value);
  }
}
