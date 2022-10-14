import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../Services/http.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private HttpService: HttpService) { }

  itemsArray: any = []
  next: string | null = null
  prev: string | null = null
  pages: number = 1
  

  ngOnInit(): void {
    this.HttpService.obtenerResultado().subscribe(
      (res) => {
        this.itemsArray = res.results
        this.next = res.info.next
        this.prev = res.info.prev
      }
    )

   

  }


  info(next: string | null){
    this.HttpService.obtenerResultado(next).subscribe(
      (res) => {
        this.itemsArray = res.results
        this.next = res.info.next
        this.prev = res.info.prev
      }
    )

  }

  nextPages(){
    if(this.next !== null ){
      this.pages = this.pages + 1
    }
  }

  prevPages() {
    if(this.prev !== null ){
      this.pages = this.pages - 1
    }
  }
 

}
